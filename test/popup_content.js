var selectedSource = null;
var selectedGroup = null;

var appStv = angular.module('stv_app', []);

appStv.controller('stv_main_ctr', ['$scope', '$http', function($scope, $http) {
	
	$scope.editMode = false;
	$scope.firstTime = true;
	$scope.settingsScreenState = "firstTime";
	$scope.hostError = false;
	$scope.portError = false;
	
	// get all parameters
	chrome.storage.local.get('dataHubUri', function(obj){
		$scope.dataHubUri = obj.dataHubUri;
		if ($scope.dataHubUri == null || $scope.dataHubUri.length <= 0) {
			$scope.editMode = true;
		} else if ($scope.dataHubUri != null && $scope.dataHubUri.length > 0) { // send refresh command when opened
			$scope.settingsScreenState = "readOnly";
			chrome.runtime.sendMessage({
				"functiontoInvoke": "refreshLists"
			});
			setHostAndPort($scope.dataHubUri);
		}
		chrome.storage.local.get('dataHubAvailable', function(obj){
			$scope.dataHubAvailable = obj.dataHubAvailable;
			$scope.editMode = !$scope.dataHubAvailable;
			chrome.storage.local.get('selectedSpace', function(obj){
				$scope.selectedSpace = obj.selectedSpace;
				chrome.storage.local.get('selectedSource', function(obj){
					$scope.selectedSource = obj.selectedSource;
					chrome.storage.local.get('selectedGroup', function(obj){
						$scope.selectedGroup = obj.selectedGroup;
						chrome.storage.local.get('spacesList', function(obj){
							spacesListChanged(obj.spacesList);
							chrome.storage.local.get('sourcesList', function(obj){
								sourcesListChanged(obj.sourcesList);
								chrome.storage.local.get('groupsList', function(obj){
									groupsListChanged(obj.groupsList);
								});
							});
						});
					});
				});
			});
		});
	});
	
	// add change listeners
	chrome.storage.onChanged.addListener(function(changes, namespace) {
		for (key in changes) {
			switch (key) {
				case "spacesList":
					spacesListChanged(changes[key].newValue);
				break;
				case "sourcesList":
					sourcesListChanged(changes[key].newValue);
				break;
				case "groupsList":
					groupsListChanged(changes[key].newValue);
				break;
				case "dataHubAvailable":
					$scope.dataHubAvailable = changes[key].newValue;
					$scope.editMode = !$scope.dataHubAvailable;
				break;
			}
		}
	});
	
	$scope.spaceChanged = function(){
		chrome.storage.local.set({'selectedSpace': $scope.selectedSpace});
	};
	
	$scope.selectSource = function(){
		$scope.selectedSource = {
			id : this.entry.id,
			name : this.entry.name
		};
	};
	$scope.selectGroup = function(){
		$scope.selectedGroup = {
			id : this.entry.id,
			name : this.entry.name
		};
	};
	
	$scope.editSettings = function() {
		if ($scope.editMode && ($scope.dataHubAvailable == null || !$scope.dataHubAvailable)) {
			return;
		}
		$scope.editMode = !$scope.editMode;
	};
	
	$scope.connectDataHub = function(){
		$scope.dataHubAvailable = false; // disconnect from DH
		chrome.storage.local.set({'dataHubUri': ''}); // to raise change event
		chrome.storage.local.set({'dataHubUri': $scope.dataHubUri});
		$scope.settingsScreenState = "readOnly";
	};
	
	$scope.changeSettings = function() {
		$scope.settingsScreenState = "editableSettings";
	};
	
	$scope.cancel = function() {
		chrome.storage.local.get('dataHubUri', function(obj){
			setHostAndPort(obj.dataHubUri);
		});
		$scope.settingsScreenState = "readOnly";
		$scope.editSettings();
	};
	
	$scope.$watch('dataHubUri', function(newVal, oldVal){
		
		if (newVal != null && newVal.length > 0) {
			if (isValidURL(newVal)){
				$scope.dataHubUriValid = true;
				return;
			}
		}
		$scope.dataHubUriValid = false;
	});
	
	$scope.$watch('dataHubUriHost', function(newVal, oldVal){
		if (newVal == null || newVal.length <= 0) {
			$scope.hostError = true;
		} else {
			$scope.hostError = false;
		}
		setDataHubUri();
	});
	$scope.$watch('dataHubUriPort', function(newVal, oldVal){
		if (newVal == null || newVal.length <= 0 || isNaN(newVal)) {
			$scope.portError = true; 
		} else {
			$scope.portError = false;
		}
		setDataHubUri();
	});
	
	$scope.$watch('selectedSource', function(newVal, oldVal){
		chrome.storage.local.set({'selectedSource': newVal});
	});
	$scope.$watch('selectedGroup', function(newVal, oldVal){
		chrome.storage.local.set({'selectedGroup': newVal});
	});
	
	function setHostAndPort(dataHubUri) {
		var strDh = dataHubUri.replace('http://', '');
		$scope.dataHubUriHost = strDh.split(':')[0];
		$scope.dataHubUriPort = strDh.split(':')[1];
	}
	
	function setDataHubUri() {
		if ($scope.dataHubUriPort != "" && !isNaN($scope.dataHubUriPort)) {
			$scope.dataHubUri = 'http://' + $scope.dataHubUriHost + ':' + $scope.dataHubUriPort;
		} else {
			$scope.dataHubUri = "";
		}
	}
	
	function spacesListChanged(data) {
		$scope.spaces = data;
		$scope.$digest();
	}
	function sourcesListChanged(data) {
		$scope.sources = data;
		$scope.$digest();
		
		var container = $('.sourcesList'), scrollTo = container.find('.selected');
		scrollListToSelected(container, scrollTo);
	}
	function groupsListChanged(data) {
		$scope.groups = data;
		$scope.$digest();
		
		var container = $('.groupsList'), scrollTo = container.find('.selected');
		scrollListToSelected(container, scrollTo);
	}
}]);

function scrollListToSelected(container, scrollTo) {
	try {
		container.animate({
			scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
		});
	} catch(e){}
}

function isValidURL(url){
	var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
	return regexp.test(url);
}

registerController("stv_app", "stv_main_ctr");
$('body').injector().invoke(['$compile', '$rootScope', function($compile, $rootScope) {
	$compile($('#wrapper'))($rootScope);
	$rootScope.$apply();
}]);
