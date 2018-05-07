function scrollListToSelected(n, t) {
	try {
		n.animate({
			scrollTop: t.offset().top - n.offset().top + n.scrollTop()
		})
	} catch (i) {}
}
function isValidURL(n) {
	return /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(n)
}
var selectedSource = null, selectedGroup = null, appStv = angular.module("stv_app", []);
appStv.controller("stv_main_ctr", ["$scope", "$http", function (n) {
			function t(t) {
				var i = t.replace("http://", "");
				n.dataHubUriHost = i.split(":")[0];
				n.dataHubUriPort = i.split(":")[1]
			}
			function i() {
				n.dataHubUri = n.dataHubUriPort == "" || isNaN(n.dataHubUriPort) ? "" : "http://" + n.dataHubUriHost + ":" + n.dataHubUriPort
			}
			function r(t) {
				n.spaces = t;
				n.$digest()
			}
			function u(t) {
				n.sources = t;
				n.$digest();
				var i = $(".sourcesList"),
				r = i.find(".selected");
				scrollListToSelected(i, r)
			}
			function f(t) {
				n.groups = t;
				n.$digest();
				var i = $(".groupsList"),
				r = i.find(".selected");
				scrollListToSelected(i, r)
			}
			n.editMode = !1;
			n.firstTime = !0;
			n.settingsScreenState = "firstTime";
			n.hostError = !1;
			n.portError = !1;
			chrome.storage.local.get("dataHubUri", function (i) {
				n.dataHubUri = i.dataHubUri;
				n.dataHubUri == null || n.dataHubUri.length <= 0 ? n.editMode = !0 : n.dataHubUri != null && n.dataHubUri.length > 0 && (n.settingsScreenState = "readOnly", chrome.runtime.sendMessage({
							functiontoInvoke: "refreshLists"
						}), t(n.dataHubUri));
				chrome.storage.local.get("dataHubAvailable", function (t) {
					n.dataHubAvailable = t.dataHubAvailable;
					n.editMode = !n.dataHubAvailable;
					chrome.storage.local.get("selectedSpace", function (t) {
						n.selectedSpace = t.selectedSpace;
						chrome.storage.local.get("selectedSource", function (t) {
							n.selectedSource = t.selectedSource;
							chrome.storage.local.get("selectedGroup", function (t) {
								n.selectedGroup = t.selectedGroup;
								chrome.storage.local.get("spacesList", function (n) {
									r(n.spacesList);
									chrome.storage.local.get("sourcesList", function (n) {
										u(n.sourcesList);
										chrome.storage.local.get("groupsList", function (n) {
											f(n.groupsList)
										})
									})
								})
							})
						})
					})
				})
			});
			chrome.storage.onChanged.addListener(function (t) {
				for (key in t)
					switch (key) {
					case "spacesList":
						r(t[key].newValue);
						break;
					case "sourcesList":
						u(t[key].newValue);
						break;
					case "groupsList":
						f(t[key].newValue);
						break;
					case "dataHubAvailable":
						n.dataHubAvailable = t[key].newValue;
						n.editMode = !n.dataHubAvailable
					}
			});
			n.spaceChanged = function () {
				chrome.storage.local.set({
					selectedSpace: n.selectedSpace
				})
			};
			n.selectSource = function () {
				n.selectedSource = {
					id: this.entry.id,
					name: this.entry.name
				}
			};
			n.selectGroup = function () {
				n.selectedGroup = {
					id: this.entry.id,
					name: this.entry.name
				}
			};
			n.editSettings = function () {
				(!n.editMode || n.dataHubAvailable != null && n.dataHubAvailable) && (n.editMode = !n.editMode)
			};
			n.connectDataHub = function () {
				n.dataHubAvailable = !1;
				chrome.storage.local.set({
					dataHubUri: ""
				});
				chrome.storage.local.set({
					dataHubUri: n.dataHubUri
				});
				n.settingsScreenState = "readOnly"
			};
			n.changeSettings = function () {
				n.settingsScreenState = "editableSettings"
			};
			n.cancel = function () {
				chrome.storage.local.get("dataHubUri", function (n) {
					t(n.dataHubUri)
				});
				n.settingsScreenState = "readOnly";
				n.editSettings()
			};
			n.$watch("dataHubUri", function (t) {
				if (t != null && t.length > 0 && isValidURL(t)) {
					n.dataHubUriValid = !0;
					return
				}
				n.dataHubUriValid = !1
			});
			n.$watch("dataHubUriHost", function (t) {
				n.hostError = t == null || t.length <= 0 ? !0 : !1;
				i()
			});
			n.$watch("dataHubUriPort", function (t) {
				n.portError = t == null || t.length <= 0 || isNaN(t) ? !0 : !1;
				i()
			});
			n.$watch("selectedSource", function (n) {
				chrome.storage.local.set({
					selectedSource: n
				})
			});
			n.$watch("selectedGroup", function (n) {
				chrome.storage.local.set({
					selectedGroup: n
				})
			})
		}
	]);
registerController("stv_app", "stv_main_ctr");
$("body").injector().invoke(["$compile", "$rootScope", function (n, t) {
			n($("#wrapper"))(t);
			t.$apply()
		}
	])
