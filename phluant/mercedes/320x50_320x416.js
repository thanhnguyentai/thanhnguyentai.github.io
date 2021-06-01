
window.requestAnimationFrame = function(callback){return window.setTimeout(callback,1000/30);};
									
var arrImg = new Array();
var numberImg = 34;
var loadedNumber = 0;
var isLoaded = false;
var isWaiting = false;
var canPlayVideoBanner = false;

$(document).ready(function(){
	prepare();
	//$("<img/>").attr("src","img/banner_bg.png").load(preload);
	preload('img/banner_bg.png');
	//$("<img/>").attr("src","img/banner_text.png").load(preload);
	preload('img/banner_text.png');
	//$("<img/>").attr("src","img/expand_bg.png").load(preload);
	preload('img/expand_bg.png');
	//$("<img/>").attr("src","img/expand_btplay.png").load(preload);
	preload('img/expand_btplay.png');
	//$("<img/>").attr("src","img/expand_car.png").load(preload);
	preload('img/expand_car.png');
	//$("<img/>").attr("src","img/expand_menu_1.png").load(preload);
	preload('img/expand_menu_1.png');
	//$("<img/>").attr("src","img/expand_menu_2.png").load(preload);
	preload('img/expand_menu_2.png');
	//$("<img/>").attr("src","img/expand_text.png").load(preload);
	preload('img/expand_text.png');
	//$("<img/>").attr("src","img/logo.png").load(preload);
	preload('img/logo.png');
	//$("<img/>").attr("src","img/close.png").load(preload);
	preload('img/close.png');
	
	
	
	for(var i=188;i<=221;i++){
		(
			function(i){
				var img = new Image();
				img.onload = function(){
					loadedNumber++;
					if(loadedNumber == numberImg){
						isLoaded = true;
						/*
						if(isWaiting)
							playVideo();
						*/
						if(canPlayVideoBanner)	{
							if($.browser.msie){
								drawVideoBannerIE();
							}
							else{
								drawVideoBanner();
							}
						}
					}
				}
				img.src = 'video/video'+i+'.jpg';
				arrImg.push(img);
			}
		)(i);
	}
});


loaded = 0;
function preload(src){
	var img = new Image();
	img.onload = function(){
		if(loaded == 9){
			prepareEvent();
			setTimeout('start()',1000);
		}
		loaded ++;
	}
	img.src = src;
}

function drawVideoBanner(){
	fadeOutImg('banner_text',0.5);
	fadeInImg('video_banner',0.5);
	setTimeout(function(){
		var canvas  = document.getElementById('video_banner');
		var context = document.getElementById('video_banner').getContext('2d');
		var index = 0;
		_drawVideoBanner(canvas,context,index);
	},500);
}

function drawVideoBannerIE(){
	fadeOutImgIE('banner_text',0.5);
	fadeInImgIE('video_banner',0.5);
	setTimeout(function(){
		var canvas  = document.getElementById('video_banner');
		var context = document.getElementById('video_banner').getContext('2d');
		var index = 0;
		_drawVideoBannerIE(canvas,context,index);
	},500);
}

function _drawVideoBanner(canvas,context,index){
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.drawImage(arrImg[index],0,0,arrImg[index].width,arrImg[index++].height,0,0,90,68);
	if(index >= arrImg.length)
		setTimeout(function(){
			hideVideoBanner();
		},500);
	else{
		setTimeout(function(){
			_drawVideoBanner(canvas,context,index);
		},1000/30);
	}
//		window.requestAnimationFrame(drawVideo);
}
function _drawVideoBannerIE(canvas,context,index){
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.drawImage(arrImg[index],0,0,arrImg[index].width,arrImg[index++].height,0,0,90,68);
	if(index >= arrImg.length)
		setTimeout(function(){
			hideVideoBannerIE();
		},500);
	else{
		setTimeout(function(){
			_drawVideoBannerIE(canvas,context,index);
		},1000/30);
	}
//		window.requestAnimationFrame(drawVideo);
}

function hideVideoBanner(){
	fadeOutImg('video_banner',0.5);
	setTimeout(function(){
		fadeInImg('banner_text',0.5);
	});
}

function hideVideoBannerIE(){
	fadeOutImgIE('video_banner',0.5);
	setTimeout(function(){
		fadeInImgIE('banner_text',0.5);
	});
}

function prepareEvent(){
	$('#expand_close').click(function(){
		if(!$.browser.msie)
			fadeOutImg('ph_conExpand',0.5);
		else 
			fadeOutImgIE('ph_conExpand',0.5);
	});
	
	$('#clickTag1').click(function(){
		window.open('http://ad.doubleclick.net/clk;268908758;94680555;i',"_blank");
	});
	$('#clickTag2').click(function(){
		window.open('http://m.mbusa.com/mt/www.mbusa.com/mercedes/dealers/locator',"_blank");
	});
	
	$('#play_video').click(function(){
		if(!$.browser.msie)
			fadeInImg('videoContainer',0.5);
		else
			fadeInImgIE('videoContainer',0.5);
		$('#videoContainer').css('pointer-events','all');
		document.getElementById('html5-video-element').play();
		return;
		isWaiting = true;
		if(isLoaded)
			playVideo();
	});
	$('#html5-video-close-button').click(function(){
		if(!$.browser.msie)
			fadeOutImg('videoContainer',0.5);
		else
			fadeOutImgIE('videoContainer',0.5);
		
		$('#videoContainer').css('pointer-events','none');
		document.getElementById('html5-video-element').pause();
		return;
		isWaiting = false;
	});
}

function playVideo(){
	var canvas  = document.getElementById('video');
	var context = document.getElementById('video').getContext('2d');
	var index = 0;
	(function drawVideo(){
		if(!isWaiting)
			return;
		window.requestAnimationFrame(drawVideo);
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(arrImg[index++],0,0);
		if(index >= arrImg.length)
			index = 0;
	}());
	
}

function prepare(){
	if(!$.browser.msie){
		enableTranform('banner_logo',0.5,'linear');
		enableTranform('expand_logo',0.5,'linear');
		enableTranform('video_banner',0.5,'linear');
		enableTranform('banner_text',0.5,'linear');
		enableTranform('ph_conExpand',0.5,'linear');
		enableTranform('clickTag1',0.5,'linear');
		enableTransform2d('clickTag2',1,0,0,0,0.5,'linear');
		enableTransform2d('expand_text',1,0,0,0,0.5,'linear');
		enableTranform('play_video',0.5,'linear');
		enableTransform2d('car',1,0,0,0,0.5,'linear');
		enableTransform2d('videoContainer',1,0,50,50,0.5,'linear');
	}
}

function start(){
	if($.browser.msie){
		startIE();
		return;
	}
	
	$('#ph_conBanner').click(function(){
		fadeInImg('ph_conExpand',0.5);
		setTimeout(function(){
			animationExpand();
		},500);
	});
	
	fadeInImg('banner_logo',0.5);
	setTimeout(function(){
		fadeInImg('banner_text',0.5);
	},1000);
	setTimeout(function(){
		canPlayVideoBanner = true;
		if(isLoaded)
			drawVideoBanner();
	},2500);
}

function startIE(){
	$('#ph_conBanner').click(function(){
		fadeInImgIE('ph_conExpand',0.5);
		setTimeout(function(){
			animationExpandIE();
		},500);
	});
	fadeInImgIE('banner_logo',0.5);
	setTimeout(function(){
		fadeInImgIE('banner_text',0.5);
	},1000);
	setTimeout(function(){
		canPlayVideoBanner = true;
		if(isLoaded)
			drawVideoBannerIE();
	},2500);
}


var alreadyAnimation = false;
function animationExpand(){
	if(alreadyAnimation)
		return;
	alreadyAnimation = true;
	fadeInImg('expand_logo',0.5);
	setTimeout(function(){
		fadeInImg('car',0.5);
	},500);
	setTimeout(function(){
		fadeInImg('play_video',0.5);
	},1000);
	setTimeout(function(){
		transform2d('expand_text',1,0,0,18,true,false,0.5,'linear');
	},1500);
	setTimeout(function(){
		fadeInImg('clickTag1',0.5);
	},2000);
	setTimeout(function(){
		transform2d('clickTag2',1,0,160,0,true,false,0.5,'linear');
	},2500);
}

function animationExpandIE(){
	if(alreadyAnimation)
		return;
	alreadyAnimation = true;
	fadeInImgIE('expand_logo',0.5);
	setTimeout(function(){
		fadeInImgIE('car',0.5);
	},500);
	setTimeout(function(){
		fadeInImgIE('play_video',0.5);
	},1000);
	setTimeout(function(){
		//transform2d('expand_text',1,0,0,18,true,false,0.5,'linear');
		transform2dIE('expand_text',0,18,true,false,0.5);
	},1500);
	setTimeout(function(){
		fadeInImgIE('clickTag1',0.5);
	},2000);
	setTimeout(function(){
		//transform2d('clickTag2',1,0,160,0,true,false,0.5,'linear');
		transform2dIE('clickTag2',160,0,true,false,0.5);
	},2500);
}

/*-------------------------------------------------------------------------------*/
function enableTransform2d(id,scaleInit,rotateInit,centerX,centerY,time,timeFunc){
	if(time && timeFunc){
		$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
		$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	}
	
	if(centerX != undefined && centerY != undefined){
		$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
		$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY+ '%');
	}
	
	$('#'+id).css('-webkit-transform','rotate('+rotateInit+'deg) ' + ' scale('+scaleInit+')');
}

function transform2d(id,scale,rotate,translatex,translatey,isfadein,isfadeout,time,timeFunc,centerX,centerY){
	if(time && timeFunc){
		$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
		$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	}
	if(centerX != undefined && centerY != undefined){
		$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
		$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY+ '%');
	}
	
	$('#'+id).css('-webkit-transform','translateX('+translatex+'px) translateY('+translatey+'px) rotate('+rotate+'deg) ' + ' scale('+scale+')');
	if(isfadein){
		$('#'+id).css('display','block');
		var timeout = setTimeout(function(){
			$('#'+id).css('opacity',1);
			clearTimeout(timeout);
		},100);
	}
	else if(isfadeout){
		$('#'+id).css('opacity',0);
		var timeout = setTimeout(function(){
			$('#'+id).css('display','none');
		},1000*time);
	}
}

function enableTranform(id,time,timeFunc){
	$('#'+id).css('-webkit-transition', 'all '+time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition','all '+ time + 's ' + timeFunc);
}

function fadeInImg(id,time){
	$('#'+id).css('display','block');
	var timeout = setTimeout(function(){
		$('#'+id).css('opacity',1);
		clearTimeout(timeout);
	},100);
}

function fadeOutImg (id,time){
	$('#'+id).css('opacity',0);
	setTimeout(function(){
		$('#'+id).css('display','none');
	},time*1000);
}

function fadeInImgIE(id,time){
	$('#'+id).css('display','block');
	setTimeout(function(){
		$('#'+id).animate({
			opacity: 1
		},time*1000);
	},100);
}
function fadeOutImgIE(id,time){
	$('#'+id).animate({
		opacity: 0
	},time*1000);
	setTimeout(function(){
		$('#'+id).css('display','none');
	},time*1000);
}

function transform2dIE(id,translatex,translatey,isfadein,isfadeout,time){
	if(isfadein){
		$('#'+id).css('display','block');
		var timeout = setTimeout(function(){
			if(translatex == 0){
				$('#'+id).animate({
					opacity: 1,
					top:'+='+translatey
				},time*1000);
			}
			else if(translatey == 0){
				$('#'+id).animate({
					opacity: 1,
					left:'+='+translatex
				},time*1000);
			}
			else{
				$('#'+id).animate({
					opacity: 1,
					left:'+='+translatex,
					top:'+='+translatey
				},time*1000);
			}
			clearTimeout(timeout);
		},100);
	}
	else if(isfadeout){
		if(translatex == 0){
			$('#'+id).animate({
				opacity: 0,
				top:'+='+translatey
			},time*1000);
		}
		else if(translatey == 0){
			$('#'+id).animate({
				opacity: 0,
				left:'+='+translatex
			},time*1000);
		}
		else{
			$('#'+id).animate({
				opacity: 0,
				left:'+='+translatex,
				top:'+='+translatey
			},time*1000);
		}
		var timeout = setTimeout(function(){
			$('#'+id).css('display','none');
		},1000*time);
	}
	else{
		$('#'+id).animate({
			left:'+='+translatex,
			top:'+='+translatey
		},time*1000);
	}
}