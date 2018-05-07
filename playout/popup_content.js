var selectedSource = null;
var selectedGroup = null;

angular.module('stv_app', []).
  controller('stv_main_ctr', function($scope, $http) {
	
	$scope.editMode = false;
	$scope.firstTime = true;
	$scope.settingsScreenState = "firstTime";
	
	// get all parameters
	chrome.storage.sync.get('dataHubUri', function(obj){
		$scope.dataHubUri = obj.dataHubUri;
		if ($scope.dataHubUri == null || $scope.dataHubUri.length <= 0) {
			$scope.editMode = true;
		} else if ($scope.dataHubUri != null && $scope.dataHubUri.length > 0) { // send refresh command when opened
			$scope.settingsScreenState = "readOnly";
			chrome.runtime.sendMessage({
				"functiontoInvoke": "refreshLists"
			});
			var strDh = $scope.dataHubUri.replace('http://', '');
			$scope.dataHubUriHost = strDh.split(':')[0];
			$scope.dataHubUriPort = strDh.split(':')[1];
		}
		chrome.storage.sync.get('dataHubAvailable', function(obj){
			$scope.dataHubAvailable = obj.dataHubAvailable;
			$scope.editMode = !$scope.dataHubAvailable;
			chrome.storage.sync.get('selectedSpace', function(obj){
				$scope.selectedSpace = obj.selectedSpace;
				chrome.storage.sync.get('selectedSource', function(obj){
					$scope.selectedSource = obj.selectedSource;
					chrome.storage.sync.get('selectedGroup', function(obj){
						$scope.selectedGroup = obj.selectedGroup;
						chrome.storage.sync.get('spacesList', function(obj){
							spacesListChanged(obj.spacesList);
							chrome.storage.sync.get('sourcesList', function(obj){
								sourcesListChanged(obj.sourcesList);
								chrome.storage.sync.get('groupsList', function(obj){
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
		chrome.storage.sync.set({'selectedSpace': $scope.selectedSpace});
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
		$scope.editMode = !$scope.editMode;
	};
	
	$scope.connectDataHub = function(){
		$scope.dataHubAvailable = false; // disconnect from DH
		chrome.storage.sync.set({'dataHubUri': ''}); // to raise change event
		chrome.storage.sync.set({'dataHubUri': $scope.dataHubUri});
		$scope.settingsScreenState = "readOnly";
	};
	
	$scope.changeSettings = function() {
		$scope.settingsScreenState = "editableSettings";
	};
	
	$scope.cancel = function() {
		$scope.editMode = false;
		$scope.settingsScreenState = "readOnly";
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
		setDataHubUri();
	});
	$scope.$watch('dataHubUriPort', function(newVal, oldVal){
		setDataHubUri();
	});
	
	$scope.$watch('selectedSource', function(newVal, oldVal){
		chrome.storage.sync.set({'selectedSource': newVal});
	});
	$scope.$watch('selectedGroup', function(newVal, oldVal){
		chrome.storage.sync.set({'selectedGroup': newVal});
	});
	
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
  })
  
  .controller('PlayoutController', ['$scope', '$http', '$log', function($scope, $http, $log) {

	  var clearFields = function() {
		$scope.profile = "";
		$scope.profiles = [];
		$scope.channel = "";
		$scope.show = "";
		$scope.shows = [];
		$scope.template = "";
		$scope.templates = [];
	  };
	  
	  var readMSEElements = function(url, callback) {
		$http.get(url)
			.then(function successCallback(response) {
					if (response.status == 200) {
						var XMLparser = new DOMParser();
						var xmlDoc = XMLparser.parseFromString(response.data, "text/xml");
						callback(xmlDoc);
					}
				}, function errorCallback(response) {
					$log.debug(url + " returned error: " + response.status);
				}
			);
	  };
	  
	  $scope.changeAddress = function() {
		clearFields();
		showsUrl = 'http://' + $scope.host + ':' + $scope.port + '/directory/shows/';
		readMSEElements(showsUrl, function(xmlDoc) {
			var entries  = xmlDoc.getElementsByTagName("entry");
			for(var i = 0; i < entries.length; i++) {
				$scope.shows.push({
					title: entries[i].getElementsByTagName('title')[0].textContent,
					link: entries[i].getElementsByTagName('link')[0].getAttribute('href')});
			}
		});
		profilesUrl = 'http://' + $scope.host + ':' + $scope.port + '/profiles';
		readMSEElements(profilesUrl, function(xmlDoc) {
			var profiles  = xmlDoc.getElementsByTagName("title");
			for(var i = 1; i < profiles.length; i++) { //skip first, feed title
				$scope.profiles.push(profiles[i].textContent);
			}
		});
	  }
	  
	  $scope.changeShow = function() {
	    $log.debug("selected show: " + $scope.show);
		$scope.template = "";
		$scope.templates = [];
		url = $scope.show.replace("/show/", "/template_collection/storage/shows/");
		readMSEElements(url, function(xmlDoc) {
			var templates  = xmlDoc.getElementsByTagName("title");
			for(var i = 1; i < templates.length; i++) { //skip first, feed title
				$scope.templates.push(templates[i].textContent);
			}
		});
	  }
	  
	  startListening = function() {
		  $scope.$watch('host', function(newVal, oldVal){
			  chrome.storage.sync.set({'trioHost': newVal});
		  });

		  $scope.$watch('port', function(newVal, oldVal){
			  chrome.storage.sync.set({'trioPort': newVal});
		  });

		  $scope.$watch('profile', function(newVal, oldVal){
			  $log.debug("profile:" + newVal);
			  chrome.storage.sync.set({'trioProfile': newVal});
		  });

		  $scope.$watch('channel', function(newVal, oldVal){
			  chrome.storage.sync.set({'trioChannel': newVal});
});

		  $scope.$watch('show', function(newVal, oldVal){
			chrome.storage.sync.set({'selectedTrioShow': newVal});
		  });
		  
		  $scope.$watchCollection('templates', function(newVal, oldVal){
			  chrome.storage.sync.set({'trioTemplates': newVal});
		  });

		  $scope.$watch('template', function(newVal, oldVal){
			  chrome.storage.sync.set({'selectedTrioTemplate': newVal});
		  });
	  }

		chrome.storage.sync.get('trioHost', function(obj){
			$scope.host = obj.trioHost;
			chrome.storage.sync.get('trioPort', function(obj){
				$scope.port = obj.trioPort;
				if (($scope.host == "") || ($scope.host == undefined) || ($scope.port == "") || ($scope.port == undefined)) {
					startListening();
					return;					
				}
				$scope.changeAddress();
				chrome.storage.sync.get('trioProfile', function(obj){
					$scope.profile = obj.trioProfile;
					$log.debug("profile1:" + obj.trioProfile);
					chrome.storage.sync.get('trioChannel', function(obj){
						$scope.channel = obj.trioChannel;
						chrome.storage.sync.get('selectedTrioShow', function(obj){
							$scope.show = obj.selectedTrioShow;
							if ($scope.show != "")
								$scope.changeShow();
							chrome.storage.sync.get('selectedTrioTemplate', function(obj){
								$scope.template = obj.selectedTrioTemplate;
								startListening();
							});
						});
					});
				});
			});
		});
	  
  }])
  
;

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

registerController("stv_app", "PlayoutController");

$('body').injector().invoke(function($compile, $rootScope) {
	$compile($('#wrapper'))($rootScope);
	$rootScope.$apply();
});
