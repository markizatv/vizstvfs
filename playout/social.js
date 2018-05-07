var md5=(function(){function e(e,t){var o=e[0],u=e[1],a=e[2],f=e[3];o=n(o,u,a,f,t[0],7,-680876936);f=n(f,o,u,a,t[1],
12,-389564586);a=n(a,f,o,u,t[2],17,606105819);u=n(u,a,f,o,t[3],22,-1044525330);o=n(o,u,a,f,t[4],7,-176418897);f=n(f,o,u,a,t[5],
12,1200080426);a=n(a,f,o,u,t[6],17,-1473231341);u=n(u,a,f,o,t[7],22,-45705983);o=n(o,u,a,f,t[8],7,1770035416);f=n(f,o,u,a,t[9],
12,-1958414417);a=n(a,f,o,u,t[10],17,-42063);u=n(u,a,f,o,t[11],22,-1990404162);o=n(o,u,a,f,t[12],7,1804603682);f=n(f,o,u,a,t[13],
12,-40341101);a=n(a,f,o,u,t[14],17,-1502002290);u=n(u,a,f,o,t[15],22,1236535329);o=r(o,u,a,f,t[1],5,-165796510);f=r(f,o,u,a,t[6],
9,-1069501632);a=r(a,f,o,u,t[11],14,643717713);u=r(u,a,f,o,t[0],20,-373897302);o=r(o,u,a,f,t[5],5,-701558691);f=r(f,o,u,a,t[10],
9,38016083);a=r(a,f,o,u,t[15],14,-660478335);u=r(u,a,f,o,t[4],20,-405537848);o=r(o,u,a,f,t[9],5,568446438);f=r(f,o,u,a,t[14],
9,-1019803690);a=r(a,f,o,u,t[3],14,-187363961);u=r(u,a,f,o,t[8],20,1163531501);o=r(o,u,a,f,t[13],5,-1444681467);f=r(f,o,u,a,t[2],
9,-51403784);a=r(a,f,o,u,t[7],14,1735328473);u=r(u,a,f,o,t[12],20,-1926607734);o=i(o,u,a,f,t[5],4,-378558);f=i(f,o,u,a,t[8],
11,-2022574463);a=i(a,f,o,u,t[11],16,1839030562);u=i(u,a,f,o,t[14],23,-35309556);o=i(o,u,a,f,t[1],4,-1530992060);f=i(f,o,u,a,t[4],
11,1272893353);a=i(a,f,o,u,t[7],16,-155497632);u=i(u,a,f,o,t[10],23,-1094730640);o=i(o,u,a,f,t[13],4,681279174);f=i(f,o,u,a,t[0],
11,-358537222);a=i(a,f,o,u,t[3],16,-722521979);u=i(u,a,f,o,t[6],23,76029189);o=i(o,u,a,f,t[9],4,-640364487);f=i(f,o,u,a,t[12],
11,-421815835);a=i(a,f,o,u,t[15],16,530742520);u=i(u,a,f,o,t[2],23,-995338651);o=s(o,u,a,f,t[0],6,-198630844);f=s(f,o,u,a,t[7],
10,1126891415);a=s(a,f,o,u,t[14],15,-1416354905);u=s(u,a,f,o,t[5],21,-57434055);o=s(o,u,a,f,t[12],6,1700485571);f=s(f,o,u,a,t[3],
10,-1894986606);a=s(a,f,o,u,t[10],15,-1051523);u=s(u,a,f,o,t[1],21,-2054922799);o=s(o,u,a,f,t[8],6,1873313359);f=s(f,o,u,a,t[15],
10,-30611744);a=s(a,f,o,u,t[6],15,-1560198380);u=s(u,a,f,o,t[13],21,1309151649);o=s(o,u,a,f,t[4],6,-145523070);f=s(f,o,u,a,t[11],
10,-1120210379);a=s(a,f,o,u,t[2],15,718787259);u=s(u,a,f,o,t[9],21,-343485551);e[0]=m(o,e[0]);e[1]=m(u,e[1]);e[2]=m(a,e[2]);e[3]=m(f,e[3])}
function t(e,t,n,r,i,s){t=m(m(t,e),m(r,s));return m(t<<i|t>>>32-i,n)}function n(e,n,r,i,s,o,u){return t(n&r|~n&i,e,n,s,o,u)}
function r(e,n,r,i,s,o,u){return t(n&i|r&~i,e,n,s,o,u)}function i(e,n,r,i,s,o,u){return t(n^r^i,e,n,s,o,u)}
function s(e,n,r,i,s,o,u){return t(r^(n|~i),e,n,s,o,u)}function o(t){var n=t.length,r=[1732584193,-271733879,-1732584194,271733878],i;
for(i=64;i<=t.length;i+=64){e(r,u(t.substring(i-64,i)))}t=t.substring(i-64);var s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
for(i=0;i<t.length;i++)s[i>>2]|=t.charCodeAt(i)<<(i%4<<3);s[i>>2]|=128<<(i%4<<3);if(i>55){e(r,s);for(i=0;i<16;i++)s[i]=0}s[14]=n*8;e(r,s);return r}
function u(e){var t=[],n;for(n=0;n<64;n+=4){t[n>>2]=e.charCodeAt(n)+(e.charCodeAt(n+1)<<8)+(e.charCodeAt(n+2)<<16)+(e.charCodeAt(n+3)<<24)}return t}
function c(e){var t="",n=0;for(;n<4;n++)t+=a[e>>n*8+4&15]+a[e>>n*8&15];return t}
function h(e){for(var t=0;t<e.length;t++)e[t]=c(e[t]);return e.join("")}
function d(e){return h(o(unescape(encodeURIComponent(e))))}
function m(e,t){return e+t&4294967295}var a="0123456789abcdef".split("");return d})();

var appJQ = jQuery.noConflict(true);
var vizStvMessageId = "viz_stv_message";

function getParameterByName(str, name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(str);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var detect_button = (function ($) {
	
	var postIdMd5 = 0;
	var lastEventClicked = null;
	
	function receiveMessage(event){
		if (typeof(event.data) == 'object') { // filter messages
			if (event.data.stv != null && event.data.stv.to == 'remote') {
				var message = event.data.stv.message;
				switch(message.functiontoInvoke) {
					case "getPost":
						getPost(message.callbackFunc, message.data.dhUri);
					break;
					case "showSuccessMessage":
						showSuccessMessage(message.data.message);
					break;
					case "showErrorMessage":
						showErrorMessage(message.data.message);
					break;
				}
			}
		}
	}
	
	function sendMessage(message) {
		postMessage({
			stv:{
				to: 'local',
				message : message
			}
		}, window.location);
	}
	
	window.addEventListener("message", receiveMessage, false);
	
	function addClickToFrames() {
		$('iframe').each(function(index, obj) {
			$(obj).contents().click(function(){
				console.log('click');
			});
		});
	}
	
	addClickToFrames();
	
	function checkIsMenuAvailable() {
		var post = collectPostInfo(null);
		var state = (post != null);
		/*chrome.runtime.sendMessage({
			"functiontoInvoke": "enableMenu",
			"state": state
		});*/
		sendMessage({
			"functiontoInvoke": "enableMenu",
			"state": state
		});
	}
	
	function detect_button(e){
		e = e || window.event;
		if (e.which == null) {
			button = (e.button < 2) ? 'left' : ((e.button == 4) ? 'middle' : 'right');
		} else {
			button = (e.which < 2) ? 'left' : ((e.which == 2) ? 'middle' : 'right');
		}
		if (button == 'right') {
			lastEventClicked = e;
			checkIsMenuAvailable();
		}
	}
	
	document.onmousedown = detect_button;
	if (document.captureEvents) document.captureEvents(Event.MOUSEDOWN);

	var getPost = function (callbackFunc, dhUri){
		var post = {};
		
		if (lastEventClicked == undefined || lastEventClicked.target == undefined) {
			showErrorMessage("Sorry, there is nothing to add...");
			return;
		}
		
		collectPostInfo(function (data){
			getPostContinue(data, callbackFunc, dhUri);
		});
	}
	
	function getPostContinue(post, callbackFunc, dhUri) {
		if (post == null) {
			showErrorMessage("Cannot find the post, possible reason - unknown source.");
			return;
		}
		
		console.dir(post);
		
		var xml = convertPostToXml(post, dhUri, callbackFunc);
		sendMessage({
			"functiontoInvoke": callbackFunc,
			"post": xml,
			"id": postIdMd5
		});
		lastEventClicked = null;
	}
	
	function collectPostInfo(callback) {
		if (lastEventClicked == null) {
			return checkReturnValue(callback, null);
		}
		
		switch(location.host) {
			case 'twitter.com':
			case 'www.twitter.com':
				return parseTwitterPost(lastEventClicked, callback);
				break;
			case 'facebook.com':
			case 'www.facebook.com':
				return parseFacebookPost(lastEventClicked, callback);
				break;
			case 'instagram.com':
			case 'www.instagram.com':
				return parseInstagramPost(lastEventClicked, callback);
				break;
		}
		return checkReturnValue(callback, null);
	}
	
	function checkReturnValue(callback, retVal) {
		if (typeof(callback) == "function") {
			callback(retVal);
		} else {
			return retVal;
		}
	}
	
	function parseInstagramPost(lastEventClicked, callback) {
		var post = {};
		var postUI = $(lastEventClicked.target);
		
		// need to check which mode in use feed, mosaic and one post (preview)
		var articleCnt = $('article').length;
		if (articleCnt == 1) { //mosaic or post page
			if (window._sharedData.entry_data.PostPage != null) { // post page
				return parseInstagramPostPage(postUI, callback);
			} else { // mosaic/tag page due to no id's exists
				return parseInstagramPostMosaic(postUI, callback);
			}
		} else if (articleCnt == 2) { // mosaic + preview page
			return parseInstagramPostMosaicWithPreview(postUI, callback);
		} else if (articleCnt > 2) { // feed page
			return parseInstagramFeedPage(postUI, callback);
		} else { // something wrong...
			return null;
		}
	}
	function parseInstagramPostPage(postUI, callback) {
		var obj = null;
		try {
			obj = window._sharedData.entry_data.PostPage[0].media
		} catch(e){
			return obj;
		}
		return checkReturnValue(callback, parseInstagramObject(obj));
	}
	function parseInstagramPostMosaic(postUI, callback) {
		var link = postUI.closest('a');
		
		if (link.length <= 0 || link.attr('href').length <= 0) {
			return checkReturnValue(callback, null);
		} else {
			if (typeof(callback) != "function") { // check for right click
				return {};
			}
		}
		loadInstagramIFrame(link.attr('href'), callback);
	}
	function parseInstagramPostMosaicWithPreview(postUI, callback) {
		// data object not useful here cause not updated when scrolling
		loadInstagramIFrame(window.location.pathname, callback);
		return {}; // to show the menu
	}
	function parseInstagramFeedPage(postUI, callback) {
		var link = null;
		
		var links = postUI.closest('article').find('header a');
		if (links.length <= 0) {
			return checkReturnValue(callback, null);
		}
		
		links.each(function(index){
			var str = $(this).attr('href');
			if (str.indexOf('/p/') >= 0) {
				link = str;
			}
		});
		
		if (link == null) {
			return checkReturnValue(callback, null);
		} else {
			if (typeof(callback) != "function") {
				return {}; // to show the menu
			}
		}
		loadInstagramIFrame(link, callback);
	}
	function loadInstagramIFrame(link, callback) {
		var ifr = $('<iframe id="social_tv_frame" src="'+ link +'"/>');
		if ($('#social_tv_frame').length > 0) { // in case not deleted
			$('#social_tv_frame').remove();
		}
		ifr.on('load', function(){ // when iframe loaded - take the var
			var data = null;
			try {
				data = $('#social_tv_frame')[0].contentWindow._sharedData.entry_data.PostPage[0].media;
			} catch(e) {
				console.log('Error: some problem happen with iframe...');
			}
			$('#social_tv_frame').remove();
			return checkReturnValue(callback, parseInstagramObject(data));
		});
		$(document.body).append(ifr);
	}
	function parseInstagramObject(postObj) {
		var post = {};
		if (postObj != null) {
			post.id = postObj.id + "_" + postObj.owner.id;
			postIdMd5 = md5(post.id);
			
			post.author = {
				name: ((postObj.owner.full_name == null) ? "" : postObj.owner.full_name)
			};
			post.contributor = {
				name: 'Instagram'
			};
			
			post.title = postObj.caption;
			post.summary = '';
			
			post.thumbnail = ((postObj.owner.profile_pic_url == null) ? "" : postObj.owner.profile_pic_url);
			
			var images = [];
			var videos = [];
			
			if (postObj.is_video) {
				images.push({'src': postObj.display_src});
				videos.push({'src': postObj.video_url});
			} else {
				images.push({'src': postObj.display_src});
			}
			
			post.preview = {
				images: images,
				videos: videos
			}
			var date = new Date(postObj.date * 1000);
			post.published = date.toISOString();
		}
		return post;
	}
	
	function parseTwitterPost(lastEventClicked, callback) {
		var post = {};
		var postUI = $(lastEventClicked.target);
		postUI = postUI.closest("[data-item-id]");
		
		if (postUI.length <= 0) {
			// check if it comes from iframe (with video)
			// get tweet id
			try{
				var root = $(lastEventClicked.target).parents()[$(lastEventClicked.target).parents().length-1];
				var tweetId = $(root).find('meta[name=tweet_id]').attr('content');
				if (tweetId == null) { // video not from yt (not xdm)
					tweetId = $(root).find('#playerContainer').data().config.tweet_id;
				}
				postUI = $(document).find('[data-tweet-id="'+ tweetId +'"]');
			} catch(e) {
				postUI = null;
			}
			// find postUI by id
			// set postUI
			if (postUI == null) {
				return checkReturnValue(callback, null);
			}
		}
		
		post.id = postUI.attr('data-item-id');
		postIdMd5 = md5(post.id);
		post.title = postUI.find('.tweet-text').text();
		post.summary = '';
		post.author = {
			name: postUI.find('.fullname').text()+' '+postUI.find('.username').text(),
			fullname: postUI.find('.fullname').text(),
			username: postUI.find('.username').text()
		};
		post.contributor = {
			name: 'Twitter'
		};
		post.thumbnail = postUI.find('.avatar').attr('src');
		
		post.preview = {
			images: [],
			videos: [],
			links: []
		}
		
		var image = postUI.find('.AdaptiveMedia').find('img');
		var video = postUI.find('video');
		
		if (image.length > 0) {
			post.preview.images.push({'src': $(image).attr('src')});
		}
		
		var videoSrc = "";
		if (video.length > 0) {
			post.preview.images.push({'src': $(video).attr('poster')});
			if ($(video).attr('src') == null) {
				if ($(video).find(':not([video-src=""])').length > 0) {
					videoSrc = $(video).find(':not([video-src=""])').attr('video-src');
				} else {
					videoSrc = $(video).find(':not([src=""])').attr('src');
				}
			} else {
				videoSrc = $(video).attr('src');
			}
			post.preview.videos.push({'src': videoSrc});
		} else {
			videoSrc = getTwitterVideo(postUI);
			if (typeof(videoSrc) == "object") {
				post.preview.videos.push({'src': videoSrc[0].src});
				post.preview.images.pop();
				post.preview.images.push({'src': videoSrc[1].src});
			} else if (videoSrc == null || videoSrc.length <= 0) { // check for link
				var linkFr = postUI.find('iframe');
				post.preview.links.push({'src': linkFr.contents().find('a').attr('href')});
				post.preview.images.push({'src': linkFr.contents().find('img').attr('src')});
			} else {
				post.preview.videos.push({'src': videoSrc});
			}
		}
		
		var strDate = $(postUI.find('.js-short-timestamp')).attr('data-time-ms');
		var d = new Date(parseInt(strDate));
		post.published = d.toISOString();
		
		return checkReturnValue(callback, post);
	}
	
	function getTwitterVideo(postUI) {
		var str = "";
		var ifr = postUI.find('iframe');
		if (ifr.length > 0) {
			var ifrContent = ifr.contents();
			var divVidInfo = ifrContent.find('#playerContainer');
			if (divVidInfo.length > 0) {
				var data = divVidInfo.data();
				if (data.config != null) {
					if (data.sourceType != 'vine') {
						var vid = divVidInfo.find('video').attr('src');
						return [
							{'src' : vid},
							{'src' : data.config.image_src}
						];
					} else {
						return [
							{'src' : data.config.player_url},
							{'src' : data.config.image_src}
						];
					}
				}
			} else { // check for iframe with YT src
				var ytFrame = ifrContent.find('iframe');
				if (ytFrame.length > 0) {
					if (ytFrame.data() != null) { // not shown
						var src = ytFrame.data().src;
						if (src.indexOf('.youtube.com/') >= 0) {
							var videoUrl = src;
							var img = ifrContent.contents().find('img');
							if (src.indexOf('/embed/') < 0) {
								var videoId = getParameterByName(src, 'v');
								videoUrl = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
							}
							return [
								{'src' : videoUrl},
								{'src' : img.attr('src')}
							];
						}
						return src;
					} else { // was opened
						
					}
				} else {
					
				}
			}
		}
		return str;
	}
	
	function parseFacebookPost(lastEventClicked, callback) {
		var post = {};
		var postUI = $(lastEventClicked.target);
		
		if (postUI.length <= 0) {
			console.log('FB parser error: cannot find post root...');
			return checkReturnValue(callback, null);
		}
		
		// check if need to click on video
		/*if (postUI.find('iframe').length <= 0 && postUI.find('video').length <= 0 && postUI.find('.scaledImageFitWidth').length > 0) {
			alert("Here");
			postUI.find('.scaledImageFitWidth').click();
			// and wait for video to load
			return null;
		}*/
		
		postUI = $(postUI).closest('[aria-labelledby]');
		
		
		var postId = null, authorId = null;
		var ariaLabels = $(postUI).attr('aria-labelledby');
		
		postId = getFacebookPostId(postUI);
		
		if (postId == null) {
			console.log("Post id not found");
			return checkReturnValue(callback, null);
		}
		
		// check if this comment
		if ($(lastEventClicked.target).closest('[aria-label="Comment"]').length > 0) {
			post = parseFacebookComment(postId, $(lastEventClicked.target).closest('[aria-label="Comment"]'));
			return checkReturnValue(callback, post);
		}
		
		post.contributor = {
			name: 'Facebook'
		};
		
		if (ariaLabels != null && ariaLabels.length > 0) {
			ariaLabels = ariaLabels.split(" "); // 0 - Empty, 1 - Author, 2 - Time, 3 - Text(title)
			var authorTag = $('#'+ariaLabels[1]);
			var authorName = $(authorTag.find('.fwb a')).text();
			var authorLink = $(authorTag.find('a')[0]).data();
			
			authorId = getParameterByName(authorLink.hovercard, "id");
			
			post.author = {
				name: authorName,
				uri: authorId
			};
			
			var title = $('#'+ariaLabels[3]).clone();
			title.find('[role="button"]').remove(); // remove see translation button
			if (title.find('.text_exposed_link').length > 0) {
				console.log('Post has long text, so title may not be fully taken!!!');
			}
			post.title = title.text(); //postUI.find('.userContent p').text();
			
		} else {
			debugger;
			console.log('Post not found');
			return checkReturnValue(callback, null);
		}
		
		post.id = authorId + '_' + postId;
		postIdMd5 = md5(post.id);
		
		var strDate = $(postUI.find('[data-utime]')).attr('data-utime');
		var d = new Date(parseInt(strDate+'000'));
		post.published = d.toISOString();
		
		post.summary = postUI.find('.mtm').text(); // takes also the author? TODO: Need to find better way to do it...
		post.thumbnail = 'https://graph.facebook.com/'+ post.author.uri +'/picture?type=small';
		
		var videos = [];
		if (postUI.find('embed').length > 0) {
			videos = getFacebookVideo(postUI.find('embed').parent().html());
		}
		
		var images = [];
		if (videos.length > 0) { // check for preview images
			var img = postUI.find('video').parent().find('img');
			if (img.length > 0) {
				var imgUrl = getFacebookVideoPreviewImg(img);
				if (imgUrl.length > 0) {
					images.push({'src':imgUrl});
				}
			}
		}
		
		if (images.length <= 0) { // preview not found check regular
			postUI.find('.mtm img.img').each(function(i, obj){
				images.push({'src':$(obj).attr('src')});
			});
		}
		
		post.preview = {
			images: images,
			videos: videos
		}
		return checkReturnValue(callback, post);
	}
	function parseFacebookComment(postId, commentRoot) {
		var post = {};
		var authorId = "";
		var commentId = null;
		
		post.contributor = {
			name: 'Facebook'
		};
		
		var commentId = commentRoot.find('.uiLinkSubtle').attr('href');
		commentId = getParameterByName(commentId, "comment_id");
		
		var authorName = commentRoot.find('.UFICommentActorName').text();
		
		post.author = {
			name: authorName,
			uri: authorId
		};
		
		post.id = postId + '_' + commentId;
		postIdMd5 = md5(post.id);
		
		post.title = commentRoot.find('.UFICommentBody').text();
		
		var strDate = $(commentRoot.find('[data-utime]')).attr('data-utime');
		var d = new Date(parseInt(strDate+'000'));
		post.published = d.toISOString();
		
		post.summary = "";
		post.thumbnail = commentRoot.find('.UFIActorImage').attr('src');
		
		var images = [];
		var img = commentRoot.find('.UFICommentContent img');
		if (img.length > 0) {
			images.push({'src':img.attr('src')});
		}
		
		var videos = []; // it seems no video
		
		post.preview = {
			images: images,
			videos: videos
		}
		return post;
	}
	function getFacebookPostId(postUI) {
		// check if post .mbm is root with data (inc id)
		if ($(postUI).data() != null && $(postUI).data().ft != null) { // ft placed on post root
			if ($(postUI).data().ft.top_level_post_id != null) {
				return jsonStringParser($(postUI).attr('data-ft'), 'top_level_post_id');
			}
		}
		// check if .mbm have parent with data and id
		if ($(postUI.parent()).data() != null && $(postUI.parent()).data().bt != null) {
			if ($(postUI.parent()).data().bt.id != null) {
				postUI = postUI.parent();
				return jsonStringParser($(postUI).attr('data-bt'), 'id');
				//return $(postUI.parent()).data().bt.id; -- as JSON.parse returns wrong number for long integers (54bit limit instead 64bit numbers)
			}
		}
		if ($(postUI).find('[name="ft_ent_identifier"]').length > 0) {
			return $(postUI).find('[name="ft_ent_identifier"]').attr('value');
		}
		return null;
	}
	
	function getFacebookVideo(strVideoEmbed) {
		var strStartFrom = 'flashvars="params=';
		var cutFrom = strVideoEmbed.indexOf(strStartFrom) + strStartFrom.length;
		strVideoEmbed = strVideoEmbed.substr(cutFrom, strVideoEmbed.length);
		strVideoEmbed = strVideoEmbed.split('&amp;')[0];
		strVideoEmbed = unescape(strVideoEmbed);
		var obj = JSON.parse(strVideoEmbed);
		
		if (obj.video_data != null) {
			if (obj.video_data.progressive.length > 0) {
				if (obj.video_data.progressive[0].hd_src != null && obj.video_data.progressive[0].hd_src.length > 0) { // check hd
					return [{ 'src' : obj.video_data.progressive[0].hd_src }];
				} else if (obj.video_data.progressive[0].sd_src != null && obj.video_data.progressive[0].sd_src.length > 0){ // check sd
					return [{ 'src' : obj.video_data.progressive[0].sd_src }];
				}
			}
		}
		return null;
	}
	function getFacebookVideoPreviewImg(img) {
		var arrStyles = img.attr('style').split(';');
		for (var i=0; i <= arrStyles.length; i++) {
			if (arrStyles[i].startsWith('background-image')) {
				return arrStyles[i].replace('background-image:', '').replace('url', '').replace('(', '').replace(')', '');
			}
		}
		return '';
	}
	
	function jsonStringParser(str, attribute) {
		var text = str.split(/[{}:,"]+/);
		for (var i=0; i<str.length; i++) {
			if (text[i] == attribute) {
				return text[i+1];
			}
		}
		return null;
	}
	
	function convertPostToXml(post, dhUri, callbackFunc) {
		
		if (callbackFunc == 'copyPost') {
			postIdMd5 = 'CLP' + postIdMd5;
		}
		
		var xml = '<entry xmlns="http://www.w3.org/2005/Atom">'+
						'<id>'+ postIdMd5 +'</id>'+
						'<title type="text">'+ escapeStr(post.title) +'</title>'+
						'<summary type="text">'+ escapeStr(post.summary) +'</summary>'+
						'<published>'+ post.published +'</published>'+
						'<author>'+
							'<name>'+ escapeStr(post.author.name) +'</name>'+
							((post.author.uri != undefined) ? '<uri>'+ post.author.uri +'</uri>' : '')+
						'</author>'+
						'<contributor>'+
							'<name>'+ post.contributor.name +'</name>'+
						'</contributor>'+
						'<link rel="via" type="id" href="'+ post.id +'" />'+
						'<category term="Message" />'+
						'<thumbnail url="'+ escapeStr(post.thumbnail) + '" cache="' + md5(post.thumbnail) +'" xmlns="http://search.yahoo.com/mrss/"></thumbnail>';
		
		if (post.preview.images.length > 0 && post.preview.images[0].src != null && post.preview.images[0].src.length > 0) {
			xml += 	'<link rel="enclosure" type="image/jpeg" href="'+ escapeStr(post.preview.images[0].src) + '" cache="' + postIdMd5 + '\\'+ md5(post.preview.images[0].src) +'" />';
		}
		if (post.preview.videos.length > 0 && post.preview.videos[0].src != null && post.preview.videos[0].src.length > 0) {
			xml += 	'<link rel="enclosure" type="video/*" href="'+ escapeStr(post.preview.videos[0].src) + '" cache="' + postIdMd5 + '\\'+ md5(post.preview.videos[0].src) +'" />';
		}
		if (post.preview.links != null && post.preview.links.length > 0 && post.preview.links[0].src != null && post.preview.links[0].src.length > 0) {
			xml += 	'<link rel="enclosure" type="text/html" href="'+ escapeStr(post.preview.links[0].src) +'" />';
		}
		
		xml +=			'<link rel="up" type="application/atom+xml;type=feed" href="'+ dhUri +'/directory/id/SYS_APPROVED/feed" />'+
						'<link rel="up" type="application/atom+xml;type=feed" href="'+ dhUri +'/directory/id/MediaDownload/feed" />'+
					'</entry>';
		
		return xml;
	}
	
	function escapeStr(str) {
		if (str == null || str == undefined) {
			return '';
		} else {
			return str.replace(/&/g, '&amp;')
					   .replace(/</g, '&lt;')
					   .replace(/>/g, '&gt;')
					   .replace(/"/g, '&quot;')
					   .replace(/'/g, '&apos;');
		}
	}
	
	function showErrorMessage(message) {
		showMessage('error', message);
	}
	
	function showSuccessMessage(message) { // always when post is saved
		showMessage('success', message);
	}
	
	function showMessage(type, message) {
		var message = getMessageHtml(type, message);
		
		$('#'+vizStvMessageId).remove();
		
		$('<iframe id="'+ vizStvMessageId +'" seamless="seamless" scrolling="no" style="display:none; border: none; overflow:hidden; z-index:9999999999999; position:fixed; top:0px; right:0px; width:260px; height:110px;">').appendTo('body').contents().find('body').append(message);
		
		$(document.body).find("#"+vizStvMessageId).contents().find("#close").on('click', function(){
			closeMessage();
		});
		$('#'+vizStvMessageId).show(500);
		// in case not closed, will close
		if (type != 'error') { // error messages will be closed manually so user will be informed
			setTimeout(function(){closeMessage();}, 5000);
		}
	}

	function closeMessage() {
		$('#'+vizStvMessageId).hide(250, function(){
			$('#'+vizStvMessageId).remove();
		});
	}
	
	return detect_button;
	
})(appJQ);

var closeIcon = 	'<svg><style type="text/css">.closeIcon{fill:#8A8A8A;}</style><g><path class="closeIcon" d="M6.6,5l3.4-3.4c0.1-0.1,0.1-0.2,0-0.3L8.7,0.1C8.6,0,8.6,0,8.5,0C8.5,0,8.4,0,8.4,0.1L5,3.5L1.6,0.1 ' +
					' C1.5,0,1.4,0,1.3,0.1L0.1,1.3C0,1.4,0,1.5,0.1,1.6L3.5,5L0.1,8.4C0,8.5,0,8.6,0.1,8.7l1.3,1.3c0,0,0.1,0.1,0.1,0.1 ' +
					' c0.1,0,0.1,0,0.1-0.1L5,6.5l3.4,3.4c0,0,0.1,0.1,0.1,0.1c0.1,0,0.1,0,0.1-0.1l1.3-1.3c0.1-0.1,0.1-0.2,0-0.3L6.6,5z"/></g></svg>';

var errorIcon = 	'<svg><style type="text/css">.errorIcon{fill:#EF5B3F;}</style><g><path class="errorIcon" d="M15,0C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M15,24.6c-1.2,0-2-0.9-2-2.1 ' +
					' c0-1.2,0.8-2.1,2-2.1c1.2,0,2,0.9,2,2.1C17,23.7,16.2,24.6,15,24.6z M15.8,16.7c-0.3,1-1.2,1-1.6,0c-0.4-1.2-1.6-5.7-1.6-8.7 ' +
					' c0-3.9,4.9-3.9,4.9,0C17.4,10.9,16.1,15.6,15.8,16.7z"/></g></svg>';
					
var successIcon = 	'<svg><style type="text/css">.successIcon{fill:#91DC5A;}</style><g><path class="successIcon" d="M15,0C6.8,0,0,6.8,0,15s6.8,15,15,15s15-6.8,15-15S23.3,0,15,0z M12,22.5L4.5,15l2.1-2.1l5.4,5.4L23.4,6.9 L25.5,9L12,22.5z"/></g></svg>';
	
function getMessageHtml(type, message) {
	var messageHtml = "";
	var messageIcon, messageBody;
	
	if (type == 'error') {
		messageIcon =   errorIcon; //"https://docs.vizrt.com/vizstvfs/dev/Resources/images/error.png";
		messageBody = 	'<h1 style="display: inline-block; font-weight:200; margin:0; width:90%; color:#000000; font-size:20px; font-family:Tahoma,Arial,Verdana;">Error!</h1>' +
						'<span style="color:#757575; font-family: Tahoma,Arial,Verdana; font-size: 12px; overflow: auto;">'+ message +'</span>';
						//'<p class="Position"><b><a class="Link" href="#">Details</a></b></p>'; -- for now there is no details about error the message will show the error
	} else {
		messageIcon =   successIcon; //"https://docs.vizrt.com/vizstvfs/dev/Resources/images/circle.png";
		messageBody = 	'<h1 style="display: inline-block; font-weight:200; margin:0; width:90%; color:#000000; font-size:20px; font-family:Tahoma,Arial,Verdana;">'+ message +'</h1>' +
						'<span style="color:#757575; font-family: Tahoma,Arial,Verdana; font-size: 12px; overflow: auto;"></span>';
	}
	
	messageHtml = 	'<div style="border: 1px solid #65686b; background-color: #fff; Max-width: 260px; Min-width: 80px; height: auto; margin: 0; padding: 12px 0px 12px 5px; border-radius: 4px;float: right;box-shadow: 2px 2px 2px rgba(0,0,0,0.4);">' +
						'<table>' +
							'<tbody>' +
								'<tr>' +
									'<td align="left" valign="top">' +
										'<div style="width:25px; height:25px; vertical-align:center;">'+ messageIcon +'</div>' + //content:url('+ messageIcon +')
									'</td>' +
									'<td align="left" valign="top" style="padding-left: 5px;Min-width: 135px;">' +
										messageBody +
									'</td>' +
									'<td align="right" valign="top">' +
										'<div id="close" style="width:6px; height:6px; vertical-align:top; margin-right:5px; cursor:pointer; margin-top:-6px;">' + closeIcon + '</div>' + //content:url(https://docs.vizrt.com/vizstvfs/dev/Resources/images/delete.png)
									'</td>' +
								'</tr>' +
							'</tbody>' +
						'</table>' +
					'</div>';
	
	return messageHtml;
}

// for twitter video frames problem
if (location.host == 'twitter.com' || location.host == 'www.twitter.com') {
	function updateFrames() {
		$('[id^=xdm_], [id^=player_tweet_]').each(function(index, el){
			var frameId = $(el).attr('id');
			document.getElementById(frameId).contentDocument.removeEventListener('mousedown', detect_button);
			document.getElementById(frameId).contentDocument.addEventListener('mousedown', detect_button, false);
		});
	}
	//$(document).bind("DOMSubtreeModified", function() { -- tooo much events
	$(document).on("scroll", function() {
		updateFrames();
	});
	$(document).ready(function(){
		updateFrames();
	});
}