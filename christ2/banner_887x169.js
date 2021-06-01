$(document).ready(function(){
	prepare();
	$("<img/>").attr("src","img/banner_887x169_bg.jpg").load(preload);
	$("<img/>").attr("src","img/banner_887x169_facebooklight_down.png").load(preload);
	$("<img/>").attr("src","img/banner_887x169_facebook.png").load(preload);
	$("<img/>").attr("src","img/banner_887x169_facebooklight_up.png").load(preload);
	$("<img/>").attr("src","img/banner_887x169_twitterlight_down.png").load(preload);
	$("<img/>").attr("src","img/banner_887x169_twitter.png").load(preload);
	$("<img/>").attr("src","img/banner_887x169_twitterlight_up.png").load(preload);
	$("<img/>").attr("src","img/banner_887x169_text1.png").load(preload);
	$("<img/>").attr("src","img/banner_887x169_winlight.png").load(preload);
	$("<img/>").attr("src","img/banner_887x169_text3.png").load(preload);
	$("<img/>").attr("src","img/banner_887x169_text2_blur.png").load(preload);
	$("<img/>").attr("src","img/banner_887x169_text2.png").load(preload);
	$("<img/>").attr("src","img/banner_887x169_text4.png").load(preload);
	$("<img/>").attr("src","img/banner_887x169_circle_down.png").load(preload);
	$("<img/>").attr("src","img/banner_887x169_planet.png").load(preload);
	$("<img/>").attr("src","img/banner_887x169_circle_up.png").load(preload);
	$("<img/>").attr("src","img/banner_887x169_win.png").load(preload);
	$("<img/>").attr("src","img/banner_887x169_twitter.png").load(preload);
	$("<img/>").attr("src","img/banner_887x169_facebook.png").load(preload);
	$("<img/>").attr("src","img/banner_887x169_logo.png").load(preload);
	
});

loaded = 0;
function preload(){
    if(loaded == 19){
        init();
        setTimeout(function(){
            start();
        },1000);
    }
    loaded ++;
}

function prepare(){
	enableTranformZoom('facebook',1,50,50);
	enableTranformZoom('twitter',1,50,50);
	enableTranformZoom('facebook_frame',1,10,15);
	
	enableTranformZoom('facebookbig',1,50,50);
	enableTranformZoom('twitterbig',1,50,50);
	enableTranformZoom('winball',1,50,50);
	
	enableTranform('win_frame',1,'linear');
	
	enableTranformZoom('text2',1,60,50);
	
	enableTranform('winlight_frame',0.7,'linear');
}

var loaded = 0;
function preload(){
	if(loaded == 0){
		setTimeout('start()',1000);
	}
	
	loaded ++;
}

function start(){
	var timeoutstart = setTimeout(function(){
		runCircleDown('winball',0,0,6);
		clearTimeout(timeoutstart);
	},1900);
	
	fadeInImg('text1',1);
	var timeout1 = setTimeout(function(){
		fadeInImg('facebook',0.5);
		var timeout2 = setTimeout(function(){
			fadeInImg('twitter',0.5);
			clearTimeout(timeout2);
		},250);
		
		clearTimeout(timeout1);
	},750);
	
	var timeout3 = setTimeout(function(){
		fadeOutImg('text1',1);
		var timeout4 = setTimeout(function(){
			zoomAnimation('facebook',0.8,0.4,'linear')
			zoomAnimation('twitter',0.8,0.4,'linear')
			fadeInImg('facebooklight_down',1);
			fadeInImg('facebooklight_up',1);
			fadeInImg('twitterlight_down',1);
			fadeInImg('twitterlight_up',1);
			clearTimeout(timeout4);
			
			var timeout5 = setTimeout(function(){
				zoomAnimation('facebook_frame',0.3,0.7,'linear')
				fadeOutImg('facebook_frame',1);
				
				var timeout6 = setTimeout(function(){
					fadeOutImg('twitter',0.1);
					fadeOutImg('twitterlight_down',0.1);
					fadeOutImg('twitterlight_up',0.1);
					
					fadeOutImg('facebooklight_up',0.1);
					fadeOutImg('facebook',0.1);
					fadeOutImg('facebooklight_down',0.1);
	
					$('#facebookbig').css('opacity',1);
					$('#twitterbig').css('opacity',1);
					clearTimeout(timeout6);
					var timeout7 = setTimeout(function(){
						runCircleDown('facebookbig',0,0,6);
						var timeout8 = setTimeout(function(){
							runCircleDown('twitterbig',0,0,6);
							clearTimeout(timeout8);
						},1800);
						clearTimeout(timeout7);
					},200);
					
					startTranslate('win_frame',0,-169);
					
					var timeout9 = setTimeout(function(){
						blink('text2_blur',0.2,4);
						clearTimeout(timeout9);
					},1200);
					
					var timeout10 = setTimeout(function(){
						zoomOutAnimation('text2',0.2,1,'linear');
						fadeOutImg('text3',0.8);
						var timeout11 = setTimeout(function(){
							fadeInImg('winlight',0.2);
							clearTimeout(timeout11);
							
							$('#winlight_frame').css('z-index',3);
						},900);
						var timeout12 = setTimeout(function(){
							startTranslate('winlight_frame',-200,0);
							
							var timeout13 = setTimeout(function(){
								fadeOutImg('winlight',0.5);
								clearTimeout(timeout13);
							},500);
							var timeout14 = setTimeout(function(){
								$('#winball').css('opacity','1');
								clearTimeout(timeout14);
								fadeInImg('text4',1);
							},1000);
							clearTimeout(timeout12);
							
							var timeout15 = setTimeout(function(){
								enablePlay = false;
								clearTimeout(timeout15);
							},2500);
							
							var timeout16 = setTimeout(function(){
								fadeOutImg('text4',1);
								zoomAndTranslate('winball',1,1,translateXWinball,translateYWinball+200,'linear');
								zoomAndTranslate('facebookbig',1,1,translateXFacebook,translateYFacebook+200,'linear');
								zoomAndTranslate('twitterbig',1,1,translateXTwitter,translateYTwitter+200,'linear');
								clearTimeout(timeout16);
								
								replay();
							},3900);
							
						},1500);
						
						clearTimeout(timeout10);
					},3000);
				},1000);
				
				clearTimeout(timeout5);
			},300);
		},500);
		
		clearTimeout(timeout3);
	},1750);
}

function blink(id,time,repeat){
	if(repeat > 0){
		for(i=0;i<repeat;i++){
			var timeout = setTimeout(function(){
				fadeInImg(id,time);
				var timeout2 = setTimeout(function(){
					fadeOutImg(id,time);
					clearTimeout(timeout2);
				},1000*time);
				clearTimeout(timeout);
			},i*time*1000*3);
		}
	}
}

var enablePlay = true;
var translateXFacebook = 0;
var translateYFacebook = 0;
var translateXTwitter  = 0;
var translateYTwitter  = 0;
var translateXWinball  = 0;
var translateYWinball  = 0;

function runCircleUp(id,currentx,currenty,count){
	if(enablePlay == false){
		switch(id){
			case 'winball':
				translateXWinball = currentx;
				translateYWinball = currenty;
				break;
			case 'facebookbig':
				translateXFacebook = currentx;
				translateYFacebook = currenty;
				break;
			case 'twitterbig':
				translateXTwitter = currentx;
				translateYTwitter = currenty;
				break;
		}
		return;
	}
	
	zoomAndTranslate(id,1,0.1,currentx,currenty,'linear');
	var timeout = setTimeout(function(){
			currentx += 25;
			switch(count){
				case 0:
					count++;
					runCircleUp(id,currentx,currenty,count);
					break;
				case 1:
					currenty -=1;
					count++;
					runCircleUp(id,currentx,currenty,count);
					break;
				case 2:
					currenty -=1;
					count++;
					runCircleUp(id,currentx,currenty,count);
					break;
				case 3:
					currenty -=1;
					count++;
					runCircleUp(id,currentx,currenty,count);
					break;
				case 4:
					currenty -=1;
					count++;
					runCircleUp(id,currentx,currenty,count);
					break;
				case 5:
					currenty -=1;
					count++;
					runCircleUp(id,currentx,currenty,count);
					break;
				case 6:
					currenty -=1;
					count++;
					runCircleUp(id,currentx,currenty,count);
					break;
				case 7:
					currenty -=1;
					count++;
					runCircleUp(id,currentx,currenty,count);
					break;
				case 8:
					currenty -=1;
					count++;
					runCircleUp(id,currentx,currenty,count);
					break;
				case 9:
					currenty -=1;
					count++;
					runCircleUp(id,currentx,currenty,count);
					break;
				case 10:
					currenty -=3;
					count++;
					runCircleUp(id,currentx,currenty,count);
					break;
				case 11:
					currenty -=5;
					currentx -=10;
					count++;
					runCircleUp(id,currentx,currenty,count);
					break;		
				case 12:
					currenty -=5;
					currentx -=30;
					count++;
					runCircleUp(id,currentx,currenty,count);
					break;		
				case 13:
					currentx -=20;
					currenty -= 2;
					runCircleDown(id,currentx,currenty,0);
					break;
			}
		clearTimeout(timeout);
	},90);
}

function runCircleDown(id,currentx,currenty,count){
	if(enablePlay == false){
		switch(id){
			case 'winball':
				translateXWinball = currentx;
				translateYWinball = currenty;
				break;
			case 'facebookbig':
				translateXFacebook = currentx;
				translateYFacebook = currenty;
				break;
			case 'twitterbig':
				translateXTwitter = currentx;
				translateYTwitter = currenty;
				break;
		}
		return;
	}
	
	zoomAndTranslate(id,0.6,0.1,currentx,currenty,'linear');
	var timeout = setTimeout(function(){
			currentx -= 25;
			switch(count){
				case 0:
					currenty -=3;
					count++;
					runCircleDown(id,currentx,currenty,count);
					break;
				case 1:
					$('#'+id).css('z-index',1);
					currenty +=1;
					count++;
					runCircleDown(id,currentx,currenty,count);
					break;
				case 2:
					currenty +=1;
					count++;
					runCircleDown(id,currentx,currenty,count);
					break;
				case 3:
					currenty +=1;
					count++;
					runCircleDown(id,currentx,currenty,count);
					break;
				case 4:
					currenty +=1;
					count++;
					runCircleDown(id,currentx,currenty,count);
					break;
				case 5:
					currenty +=1;
					count++;
					runCircleDown(id,currentx,currenty,count);
					break;
				case 6:
					count++;
					runCircleDown(id,0,0,count);
					break;
				case 7:
					currenty +=1;
					count++;
					runCircleDown(id,currentx,currenty,count);
					break;
				case 8:
					currenty +=1;
					count++;
					runCircleDown(id,currentx,currenty,count);
					break;
				case 9:
					currenty +=1;
					count++;
					runCircleDown(id,currentx,currenty,count);
					break;
				case 10:
					currenty +=3;
					count++;
					runCircleDown(id,currentx,currenty,count);
					break;	
				case 11:
					currenty +=5;
					count++;
					runCircleDown(id,currentx,currenty,count);
					break;	
				case 12:
					$('#'+id).css('z-index',5);
					currenty +=7;
					count++;
					runCircleDown(id,currentx,currenty,count);
					break;	
				case 13:
					runCircleUp(id,currentx,currenty+5,0);
					break;
			}
		clearTimeout(timeout);
	},90);
}

function replay(){
	enablePlay = true;
	
	$('#facebookbig').css('opacity',0);
	$('#twitterbig').css('opacity',0);
	$('#winball').css('opacity',0);
	$('#facebookbig').css('z-index',1);
	$('#twitterbig').css('z-index',1);
	$('#winball').css('z-index',1);
	
	zoomAnimation('facebook',1,0.1,'linear')
	zoomAnimation('twitter',1,0.1,'linear')
	
	zoomAnimation('facebook_frame',1,0.1,'linear')
	fadeInImg('facebook_frame',0.1);
	
	startTranslate('winlight_frame',0,0);
	
	startTranslate('win_frame',0,0);
	
	var timeout = setTimeout(function(){
		fadeInImg('text3',0.1);
		zoomInAnimation('text2',1,0.1,'linear');
		start();
	},1000);
}

/*----------------------------------------------------------------------------------------------------------------------*/

function zoomAndTranslate(id,scale,time,translateX,translateY,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	
	$('#'+id).css('-webkit-transform','translate('+translateX+'px,'+translateY+'px)' + ' scale('+scale+') ');
	$('#'+id).css('-moz-transform','translate('+translateX+'px,'+translateY+'px)'+ ' scale('+scale+') ');
}

function enableTransformRotate3D(id,time,timeFunc,centerX,centerY){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
	$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY);
}

function rotate3dAnimation(id,rotateX,rotateY,rotateZ){
	$('#'+id).css('-webkit-transform','rotateX('+rotateX+'deg) ' + 'rotateY('+rotateY+'deg) ' + 'rotateZ('+rotateZ+'deg)');
}

function rotate3dAnimationFadeOut(id,rotateX,rotateY,rotateZ){
	$('#'+id).css('-webkit-transform','rotateX('+rotateX+'deg) ' + 'rotateY('+rotateY+'deg) ' + 'rotateZ('+rotateZ+'deg)');
	$('#'+id).css('opacity',0.2);
}

function rotate3dAnimationFadeIn(id,rotateX,rotateY,rotateZ){
	setTimeout(function(){
		$('#'+id).css('-webkit-transform','rotateX('+rotateX+'deg) ' + 'rotateY('+rotateY+'deg) ' + 'rotateZ('+rotateZ+'deg)');
	},1000);
	$('#'+id).css('opacity',1);
}

function rotate3dAnimationOut(id,rotateX,rotateY,rotateZ){
	$('#'+id).css('-webkit-transform','rotateX('+rotateX+'deg) ' + 'rotateY('+rotateY+'deg) ' + 'rotateZ('+rotateZ+'deg)');
	$('#'+id).css('opacity','0');
}

function rotate3dAnimationIn(id,rotateX,rotateY,rotateZ){
	$('#'+id).css('-webkit-transform','rotateX('+rotateX+'deg) ' + 'rotateY('+rotateY+'deg) ' + 'rotateZ('+rotateZ+'deg)');
	$('#'+id).css('opacity','1');
}

function enableTranformZoomRotate(id,initScale,centerX,centerY,angle){
	$('#'+id).css('-webkit-transform','scale('+initScale+') ' + 'rotateX(0deg) ' + 'rotateY(0deg) ' + 'rotateZ('+angle+'deg)');
	$('#'+id).css('-moz-transform', 'scale('+initScale+') ' + 'rotateX(0deg) ' + 'rotateY(0deg) ' + 'rotateZ('+angle+'deg)');
	
	$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
	$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY+ '%');
	
	$('#'+id).css('-webkit-backface-visibility','hidden');
}

function zoomRotate(id,scale,angle,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	
	$('#'+id).css('-webkit-transform','scale('+scale+') ' + 'rotateX(0deg) ' + 'rotateY(0deg) ' + 'rotateZ('+angle+'deg)');
	$('#'+id).css('-moz-transform','scale('+scale+') ' + 'rotateX(0deg) ' + 'rotateY(0deg) ' + 'rotateZ('+angle+'deg)');
}

function enableTranformZoom(id,initScale,centerX,centerY){
	$('#'+id).css('-webkit-transform','scale('+initScale+')');
	$('#'+id).css('-moz-transform', 'scale('+initScale+')');
	
	$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
	$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY+ '%');
	
	$('#'+id).css('-webkit-backface-visibility','hidden');
}	

function zoomAnimation(id,scale,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	
	$('#'+id).css('-webkit-transform','scale('+scale+')');
	$('#'+id).css('-moz-transform','scale('+scale+')');
}
function zoomOutAnimation(id,scale,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	
	$('#'+id).css('-webkit-transform','scale('+scale+')');
	$('#'+id).css('-moz-transform','scale('+scale+')');
	$('#'+id).css('opacity',0);
}
function zoomInAnimation(id,scale,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	
	$('#'+id).css('-webkit-transform','scale('+scale+')');
	$('#'+id).css('-moz-transform','scale('+scale+')');
	$('#'+id).css('opacity',1);
}

function enableTranform(id,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
}	

function startTranslate(id,translateX,translateY){
	$('#'+id).css('-webkit-transform','translate('+translateX+'px,'+translateY+'px)');
	$('#'+id).css('-moz-transform','translate('+translateX+'px,'+translateY+'px)');
}


function fadeInImg(id,time){
	$('#'+id).css('display','block');
	$('#'+id).css('-moz-animation','fadein '+time+'s linear');
	$('#'+id).css('-webkit-animation','fadein '+time+'s linear');
	$('#'+id).css('-webkit-animation-fill-mode','forwards');
	$('#'+id).css('-moz-animation-fill-mode','forwards');
}

function fadeOutImg (id,time){
	$('#'+id).css('-moz-animation','fadeout '+time+'s linear');
	$('#'+id).css('-webkit-animation','fadeout '+time+'s linear');
	$('#'+id).css('-webkit-animation-fill-mode','forwards');
	$('#'+id).css('-moz-animation-fill-mode','forwards');
	setTimeout(function(){
		$('#'+id).css('display','none');
	},time*1000);
}