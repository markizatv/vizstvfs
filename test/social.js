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
		var ver = 'old';
		try {
			obj = window._sharedData.entry_data.PostPage[0].media;
			if (obj == null) { // probably new version (graphql)
				obj = window._sharedData.entry_data.PostPage[0].graphql.shortcode_media;
				ver = "graphql";
			}
		} catch(e){
			return obj;
		}
		return checkReturnValue(callback, parseInstagramObject(obj, ver));
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
			var ver = "old";
			try {
				data = $('#social_tv_frame')[0].contentWindow._sharedData.entry_data.PostPage[0].media;
				if (data == null) { // probably new version (graphql)
					data = $('#social_tv_frame')[0].contentWindow._sharedData.entry_data.PostPage[0].graphql.shortcode_media;
					ver = "graphql";
				}
			} catch(e) {
				console.log('Error: some problem happen with iframe...');
			}
			$('#social_tv_frame').remove();
			return checkReturnValue(callback, parseInstagramObject(data, ver));
		});
		$(document.body).append(ifr);
	}
	function parseInstagramObject(postObj, ver) {
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
			
			if (ver === 'graphql') {
				post.title = getInstagramTitle(postObj);
			} else {
				post.title = postObj.caption;
			}
			post.summary = '';
			
			post.thumbnail = ((postObj.owner.profile_pic_url == null) ? "" : postObj.owner.profile_pic_url);
			
			var images = [];
			var videos = [];
			
			if (postObj.is_video) {
				if (ver === 'graphql') {
					images.push({'src': postObj.display_url});
					videos.push({'src': postObj.video_url});
				} else {
					images.push({'src': postObj.display_src});
					videos.push({'src': postObj.video_url});
				}
			} else {
				if (ver === 'graphql') {
					images.push({'src': postObj.display_url});
				} else {
					images.push({'src': postObj.display_src});
				}
			}
			
			post.preview = {
				images: images,
				videos: videos
			}
			var date = new Date( ((ver === 'graphql')?(postObj.taken_at_timestamp):(postObj.date)) * 1000);
			post.published = date.toISOString();
		}
		return post;
	}
	function getInstagramTitle(postObj) {
		var title = '';
		if (postObj.edge_media_to_caption != null && postObj.edge_media_to_caption.edges.length > 0) {
			postObj.edge_media_to_caption.edges.forEach(function(el, index, list) {
				title += el.node.text;
			});
		}
		return title;
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
		post.title = getTwitterTitle(postUI.find('.tweet-text'));
		post.summary = '';
		post.author = {
			name: postUI.find('.fullname').text()+' '+postUI.find('.account-group .username').text(),
			fullname: postUI.find('.fullname').text(),
			username: postUI.find('.account-group .username').text()
		};
		post.contributor = {
			name: 'Twitter'
		};
		post.thumbnail = postUI.find('.avatar').attr('src').replace("_bigger.jpg",".jpg");
		
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
	
	function getTwitterTitle(titleEl) {
		var title = $(titleEl).clone(); // to not destroy the dom (of origin)
		$(title).find('img').each(function() { // replace with alt (to solve Emoji problem)
			$(this).after($(this).attr('alt')).remove();
		});
		$(title).find('a.u-hidden, .invisible').remove(); // remove hidden elements from post
		return $(title).text();
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
	

	function isFacebookComment(lastEventClicked) {
		var post = $(lastEventClicked.target).closest('[role="article"]');

		if (!(post.length > 0))
			return false;
		if (post.find('[role="article"]').length > 1)
			return false; // if another article is contained within this one, then we are not in a comment.
        if (!( $(lastEventClicked.target).closest('.commentable_item').length > 0 ))
            return false; //Recently the role="article" might be missing on the post, so we have to double check that we have clicked inside a comment
		
		// if we find a comment inside this 'article', then it must be because this article is a comment,
		// since we know this article must be the first aricle parent of the comment actor.
		return (post.find('.UFICommentActorName').length > 0); 

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
		if(postUI.length == 0)
            postUI = $(lastEventClicked.target).closest('.userContentWrapper');
		
		var postId = null, authorId = null;
		var ariaLabelledBy = $(postUI).attr('aria-labelledby');
		var ariaDescribedBy = $(postUI).attr('aria-describedby');
		postId = getFacebookPostId(postUI);
        
		if (postId == null) {
			console.log("Post id not found");
			return checkReturnValue(callback, null);
		}
		
		// check if this comment
		if (isFacebookComment(lastEventClicked)) {
			post = parseFacebookComment(postId, $(lastEventClicked.target).closest('[role="article"]'));
			return checkReturnValue(callback, post);
		}
		
		post.contributor = {
			name: 'Facebook'
		};
		
		if ( (ariaLabelledBy != null && ariaLabelledBy.length > 0) || (ariaDescribedBy != null && ariaDescribedBy.length > 0) ) {
			ariaLabelledBy = ariaLabelledBy.split(" "); // 0 - Empty, 1 - Author, 2 - Time, 3 - Text(title)
			// added after changes on 2017.05.24
			ariaDescribedBy = ariaDescribedBy.split(" ") // 0 - Time, 1 - Text (title)
			var authorTag = $('#'+ariaLabelledBy[1]);
			
			if (authorTag == null || authorTag.length <= 0) { // new version (no details except author)
				authorTag = $('#'+ariaLabelledBy[0]);
			}
			
			var authorName = $(authorTag.find('.fwb a')).text();
			var authorLink = $(authorTag.find('a')[0]).data();
			
			authorId = getParameterByName(authorLink.hovercard, "id");
			
			post.author = {
				name: authorName,
				uri: authorId
			};
			
			var title = $('#'+ariaLabelledBy[3]);
			if (title == null || title.length <= 0) { // new version take from describe by
				title = $('#'+ariaDescribedBy[1]);
			}
			
			title = title.clone();
			title.find('[role="button"]').remove(); // remove see translation button
			if (title.find('.text_exposed_link').length > 0) {
				console.log('Post has long text, so title may not be fully taken!!!');
                title.find('.text_exposed_link').remove();
			}
			post.title = title.text(); //postUI.find('.userContent p').text();
			
		} else {
            console.log('aria-labelledby attribute not found, trying alternate method to get author and title');
            
			//Try to find using class names
            var authorDiv = postUI.find('.fwb a');
            var authorName = null;
            if(authorDiv != null && authorDiv.length > 0) {
                authorName = $(authorDiv).text();
                var authorLink = $(authorDiv[0]).data();
                authorId = getParameterByName(authorLink.hovercard, "id");
            }
            
            var titleDiv = postUI.find('._5pbx');
            var title = null;
            if(titleDiv != null && titleDiv.length > 0) {
                title = $(titleDiv).clone();
                title.find('[role="button"]').remove();
                if(title.find('.text_exposed_link').length > 0) {
                    console.log('Post has long text, so title may not be fully taken!!!');
                    title.find('.text_exposed_link').remove();
                }
            }
            
            //There should always be an author, if not we assume the parsing failed
            if(authorId == null || authorId === "") {
                console.log('Post not found: ' + authorName);
                return checkReturnValue(callback, null);
            }
            
            post.author = {
				name: authorName,
				uri: authorId
			};
            
            if(title != null)
                post.title = title.text();
		}
		
		post.id = authorId + '_' + postId;
		postIdMd5 = md5(post.id);
		
		var strDate = $(postUI.find('[data-utime]')).attr('data-utime');
		var d = new Date(parseInt(strDate+'000'));
		post.published = d.toISOString();
		
		post.summary = postUI.find('.mtm').text(); // takes also the author? TODO: Need to find better way to do it...
		post.thumbnail = 'https://graph.facebook.com/'+ post.author.uri +'/picture?type=large';
		
		var videos = [];
		if (postUI.find('embed').length > 0) {
			videos = getFacebookVideo(postUI.find('embed').parent().html());
		}
        //Check for the new blob videos
        if(postUI.find('video').length > 0) {
            //If this is a video post, the summary will just be a lot of video controls text
            post.summary = "";
            //We have no way currently to get the video URL for blob videos(They use obfuscated javascript to create the video url and download into blob)
        }
		
		var links = [];
		if (postUI.find('.mtm div').first().data() != null) { // check if video post ???
			var d = postUI.find('.mtm div').first().data();
			if (d.ft != null && d.ft.tn != null && d.ft.tn == 'H') {
				var e = null;
				if (postUI.find('.mtm a').length == 1 && $(postUI.find('.mtm a')[0]).attr('href') != null) { // video one link
					e = $(postUI.find('.mtm a')[0]).attr('href');
				} else if (postUI.find('.mtm a').length > 1 && $(postUI.find('.mtm a')[1]).attr('href') != null) { // video with 2 links (img + text)
					e = $(postUI.find('.mtm a')[1]).attr('href'); // link is there
				}
				if (e != null && e.startsWith('http')) {
					links.push({'src': e});
				}
			}
		}
		
		var images = [];
		if (videos != null && videos.length > 0) { // check for preview images
			var img = postUI.find('video').parent().find('img');
			if (img.length > 0) {
				var imgUrl = getFacebookVideoPreviewImg(img);
				if (imgUrl.length > 0) {
					images.push({'src':imgUrl});
				}
			}
		}
		
		if (images.length <= 0) { // preview not found check regular
			var imgList = postUI.find('.mtm img[class^="scaledImage"]');
			if (imgList.length <= 0) {
				imgList = postUI.find('.mtm img');
			}
			imgList.each(function(i, obj){
				images.push({'src':$(obj).attr('src')});
			});
		}
		
		post.preview = {
			images: images,
			videos: videos,
			links: links
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
		var authorLink = commentRoot.find('.UFIActorImage').parent();
		
		if (authorLink != null && authorLink.data() != null && authorLink.data().hovercard != null) { // try to get large image
			authorLink = authorLink.data().hovercard;
			authorId = getParameterByName(authorLink, 'id');
		}
		
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
		post.thumbnail = null;
		
		if (authorId.length > 0) {
			post.thumbnail = 'https://graph.facebook.com/'+ authorId +'/picture?type=large';
		} else {
			post.thumbnail = commentRoot.find('.UFIActorImage').attr('src');
		}
		
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
			if (obj.video_data.progressive != null) {
				var videoObj;
				if (obj.video_data.progressive.length > 0) { // array
					videoObj = obj.video_data.progressive[0];
				} else { // object
					videoObj = obj.video_data.progressive;
				}
				if (videoObj.hd_src != null && videoObj.hd_src.length > 0) { // check hd
					return [{ 'src' : videoObj.hd_src }];
				} else if (videoObj.sd_src != null && videoObj.sd_src.length > 0){ // check sd
					return [{ 'src' : videoObj.sd_src }];
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
						'<rights type="text">delete:users,modify:users</rights>'+
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

var closeIcon = 	'<svg x="0px" y="0px" viewBox="0 0 6 6" style="enable-background:new 0 0 6 6;" xml:space="preserve">' +
						'<g>' +
							'<path class="st0" d="M4,3l1.9-1.9C6,0.9,6,0.7,5.9,0.5L5.5,0.1C5.3,0,5.1,0,4.9,0.1L3,2L1.1,0.1C0.9,0,0.7,0,0.5,0.1L0.1,0.5 ' +
								'C0,0.7,0,0.9,0.1,1.1L2,3L0.1,4.9C0,5.1,0,5.3,0.1,5.5l0.4,0.4C0.7,6,0.9,6,1.1,5.9L3,4l1.9,1.9C5.1,6,5.3,6,5.5,5.9l0.4-0.4 ' +
								'C6,5.3,6,5.1,5.9,4.9L4,3z" fill="#919191"></path>' +
						'</g>' +
					'</svg>';

var errorIcon = 	'<svg x="0px" y="0px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">' +
						'<g>' +
							'<path class="st0" d="M12.5,0C5.6,0,0,5.6,0,12.5S5.6,25,12.5,25S25,19.4,25,12.5S19.4,0,12.5,0z M13.8,18.8h-2.5v-2.5h2.5V18.8z M13.8,13.8h-2.5V6.3h2.5V13.8z" fill="#ef5b3f"></path>' +
						'</g>' +
					'</svg>';
					
var successIcon = 	'<svg x="0px" y="0px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">' +
						'<g>' +
							'<path class="st0" d="M12.5,25c-1.2,0-2.3-0.1-3.3-0.4c-1.1-0.3-2.1-0.7-3-1.3c-0.9-0.5-1.8-1.2-2.5-2c-0.8-0.8-1.4-1.6-1.9-2.5 ' +
								'c-0.5-0.9-1-1.9-1.3-3C0.1,14.8,0,13.7,0,12.5s0.1-2.3,0.4-3.3s0.7-2.1,1.3-3s1.2-1.8,2-2.5s1.6-1.4,2.5-1.9s1.9-1,3-1.3 ' +
								'S11.3,0,12.5,0c1.7,0,3.3,0.3,4.9,1c1.5,0.7,2.9,1.5,4,2.7c1.1,1.1,2,2.5,2.7,4s1,3.1,1,4.9c0,1.2-0.1,2.3-0.4,3.3 ' +
								'c-0.3,1.1-0.7,2.1-1.3,3c-0.5,0.9-1.2,1.8-2,2.5c-0.8,0.8-1.6,1.4-2.5,2c-0.9,0.5-1.9,1-3,1.3C14.8,24.9,13.7,25,12.5,25z M20.2,9 ' +
								'l-2-2c-0.1-0.1-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.3,0.1l-7.9,7.8l-2.4-2.4c-0.2-0.1-0.4-0.1-0.6,0l-2,2c-0.1,0.1-0.1,0.2-0.1,0.3 ' +
								'c0,0.1,0,0.2,0.1,0.3l4.7,4.7c0.1,0.1,0.2,0.1,0.3,0.1h0c0.1,0,0.2,0,0.3-0.1L20.2,9.5c0.1-0.1,0.1-0.2,0.1-0.3 ' +
								'C20.3,9.1,20.3,9,20.2,9z" fill="#65cb00"></path>'+
						'</g>' +
					'</svg>';

function getMessageHtml(type, message) {
	var messageHtml = "";
	var messageIcon, messageBody;
	
	if (type == 'error') {
		messageIcon =   errorIcon;
		messageBody = 	'<h1 style="margin: 0; width: 90%; font-size: 20px; font-weight: bold; -overflow: auto; -overflow:scroll; font-family: Tahoma,Arial,Verdana; font-weight: 200; color: #ef5b3f;">Error!</h1>' +
						'<span style="font-family: Tahoma,Arial,Verdana; font-size: 12px; overflow: auto; color: #757575;">'+ message +'</span>';
						//<p style="margin: 7px 0px 5px 0px;"><b><a style="color: rgb(61, 165, 204); font-size: 13px; font-weight: 200;" href="#">Details</a></b></p>
	} else {
		messageIcon =   successIcon;
		messageBody = 	'<h1 style="margin: 0; width: 90%; font-size: 20px; font-weight: bold; -overflow: auto; -overflow:scroll; font-family: Tahoma,Arial,Verdana; font-weight: 200; color: #8dc643; display: inline-block; margin-top: 0px;">Done!</h1>' +
						'<span style="font-family: Tahoma,Arial,Verdana; font-size: 12px; overflow: auto; color: #757575;">'+ message +'</span>';
	}
	
	messageHtml = 	'<div style="border: 1px solid #cacaca; background-color: #fff; Max-width:260px; Min-width:80px; height:auto; margin:0; -overflow: auto; padding: 12px 0px 12px 5px; border-radius: 4px; -moz-border-radius: 4px; float: right; box-shadow: 2px 2px 2px rgba(0,0,0,0.4);">' +
						'<table style="border:0px; width:100%;">' +
							'<tbody>' +
								'<tr>' +
									'<td align="left" valign="center">' +
										'<div style="width: 25px; height: 25px; vertical-align: center; margin-left: 10px;">'+ messageIcon +'</div>' +
									'</td>' +
									'<td style="padding-left: 12px; Min-width: 135px;" align="left" valign="top">' +
										messageBody +
									'</td>' +
									'<td align="right" valign="top">' +
										'<div id="close" style="width: 6px; height: 6px; vertical-align: top; margin-right: 5px; cursor: pointer; margin-top: -3px;">' + closeIcon + '</div>' +
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
	$(document).on("scroll", function() {
		updateFrames();
	});
	$(document).ready(function(){
		updateFrames();
	});
}
