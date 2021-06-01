$(document).ready(function(){
	$("<img/>").attr("src","img/banner300x250_bg.jpg").load(preload);
	$("<img/>").attr("src","img/banner300x250_textleft.png").load(preload);
	$("<img/>").attr("src","img/banner300x250_lefthand.png").load(preload);
	$("<img/>").attr("src","img/banner300x250_textright.png").load(preload);
	$("<img/>").attr("src","img/banner300x250_righthand.png").load(preload);
	$("<img/>").attr("src","img/banner300x250_icon1.png").load(preload);
	$("<img/>").attr("src","img/banner300x250_icon2.png").load(preload);
	$("<img/>").attr("src","img/banner300x250_option.png").load(preload);
	$("<img/>").attr("src","img/banner300x250_button.png").load(preload);
	$("<img/>").attr("src","img/banner300x250_circle.png").load(preload);
	$("<img/>").attr("src","img/banner300x250_lasttext.png").load(preload);
	$("<img/>").attr("src","img/banner300x250_car.png").load(preload);
	$("<img/>").attr("src","img/banner300x250_textstraight.png").load(preload);
	$("<img/>").attr("src","img/banner300x250_entune.png").load(preload);
	$("<img/>").attr("src","img/banner300x250_smallhand.png").load(preload);
	$("<img/>").attr("src","img/banner300x250_logo.png").load(preload);
	
	prepare();
});

function prepare(){
	enableTransformRotate('hehand',0.5,'linear',50,50,0,0,-90);
	enableTransformRotate('shehand',0.5,'linear',50,70,0,0,90);
	enableTranform('entune',1,'linear');
	
	//enableTransformRotate('smallhand',1,'linear',-300,50,0,0,90);
	enableTransformRotate('smallhand',0.5,'linear',-50,50,0,0,90);
	enableTranformZoom('car',0.3,200,50);
	
	enableTransformRotate3D('icon1',1,'linear',50,50);
	rotate3dAnimation('icon1',0,-180,0);
	
	enableTransformRotate3D('backicon1',1,'linear',50,50);
	rotate3dAnimation('backicon1',0,-180,0);
	
	enableTransformRotate3D('icon2',1,'linear',50,50);
	rotate3dAnimation('icon2',0,-180,0);
	enableTransformRotate3D('backicon2',1,'linear',50,50);
	rotate3dAnimation('backicon2',0,-180,0);
	
	$('#containericon1').css('-webkit-perspective',1000);
	$('#containericon1').css('-webkit-perspective-origin', '50% 50%');
	
	$('#containericon1').css('-moz-perspective',1000);
	$('#containericon1').css('-moz-perspective-origin', '50% 50%');
	
	$('#containericon1').css('-o-perspective',1000);
	$('#containericon1').css('-o-perspective-origin', '50% 50%');
	
	$('#containericon1').css('perspective',1000);
	$('#containericon1').css('perspective-origin', '50% 50%');
	
	$('#containericon2').css('-webkit-perspective',1000);
	$('#containericon2').css('-webkit-perspective-origin', '50% 50%');
	
	$('#containericon2').css('-moz-perspective',1000);
	$('#containericon2').css('-moz-perspective-origin', '50% 50%');
	
	$('#containericon2').css('-o-perspective',1000);
	$('#containericon2').css('-o-perspective-origin', '50% 50%');
	
	$('#containericon2').css('perspective',1000);
	$('#containericon2').css('perspective-origin', '50% 50%');
}

var loaded = 0;
function preload(){
	if(loaded == 15){
		setTimeout('start()',1000);
	}
	
	loaded ++;
}

function start(){
	fadeInImg('hesay',0.5);
	setTimeout(function(){
		rotateAndTranslate('hehand',0,0,0,-214,0);
	},200);
	
	setTimeout(function(){
		swingHand1();
	},1000);
	
	setTimeout(function(){
		fadeOutImg('hesay',0.5);
		fadeInImg('shesay',1);
		setTimeout(function(){
			rotateAndTranslate('shehand',0,0,0,300,0);
		},200);
		setTimeout(function(){
		swingHand2();
		},1000);
	},1000);
	
	setTimeout(function(){
		enableSwing = false;
		setTimeout(function(){
			enableTransformRotate('hehand',2,'linear',300,120,0,0,0);
			enableTransformRotate('shehand',2,'linear',-300,100,0,0,0);
		},500);
		
		setTimeout(function(){
			rotateAndTranslate('hehand',0,0,-90,-20,30);	
			rotateAndTranslate('shehand',0,0,90,-20,10);	
			
			fadeOutImg('shesay',0.5);
			startTranslate('entune',0,185);
			
			$('#smallhand').css('opacity',1);
			setTimeout(function(){
				fadeInImg('allsay',1);
				setTimeout(function(){
					rotate3dAnimation('smallhand',0,0,0);
				},1000);
				
				setTimeout(function(){
					zoomInAnimation('car',1,1,'linear');
					rotate3dAnimation('smallhand',0,0,90);
					startTranslate('entune',0,370);
					fadeOutImg('allsay',0.5);
					setTimeout(function(){
						fadeInImg('lasttext',1);
						setTimeout(function(){
							fadeInImg('circle',1);
						},1000);
						
						setTimeout(function(){
							fadeInImg('containericon1',0.2);
							fadeInImg('containericon2',0.2);
							setTimeout(function(){
								$('#icon1').css('z-index',1);
								$('#icon2').css('z-index',1);
							},100);
							rotate3dAnimation('icon1',0,0,0);
							rotate3dAnimation('backicon1',0,0,0);
							rotate3dAnimation('icon2',0,0,0);
							rotate3dAnimation('backicon2',0,0,0);
						},2000);
						
						setTimeout(function(){
							fadeInImg('button',0.5);
							setTimeout(function(){
								fadeInImg('option',0.5);
							},1000);
						},3000);
					},500);
				},2500);
			},500);
		},520);
	},2200);
	
}

var enableSwing = true;
var deltaXHand1 = -214;
var deltaYHand1 = 0;
function swingHand1(){
	if(enableSwing == true){
		if(deltaXHand1 == -214){
			deltaXHand1 = -212;
		}
		else{
			deltaXHand1 = -214;
		}
		
		if(deltaYHand1 == 0){
			deltaYHand1 = 2;
		}
		else{
			deltaYHand1 = 0;
		}
		rotateAndTranslate('hehand',0,0,0,deltaXHand1,deltaYHand1);
		
		var timeout = setTimeout(function(){
			swingHand1();
			clearTimeout(timeout);
		},500);
	}
	else{
		deltaXHand1 = -214;
		deltaYHand1 = 0;
		rotateAndTranslate('hehand',0,0,0,deltaXHand1,deltaYHand1);
	}
}

var deltaXHand2 = 300;
var deltaYHand2 = 0;
function swingHand2(){
	if(enableSwing == true){
		if(deltaXHand2 == 300){
			deltaXHand2 = 295;
		}
		else{
			deltaXHand2 = 300;
		}
		
		if(deltaYHand1 == 0){
			deltaYHand2 = 2;
		}
		else{
			deltaYHand2 = 0;
		}
		rotateAndTranslate('shehand',0,0,0,deltaXHand2,deltaYHand2);
		
		var timeout = setTimeout(function(){
			swingHand2();
			clearTimeout(timeout);
		},500);
	}
	else{
		deltaXHand2 = 300;
		deltaYHand2 = 0;
		rotateAndTranslate('shehand',0,0,0,deltaXHand2,deltaYHand2);
	}
}

/*----------------------------------------------------------------------------------------------------------------------*/

function blink(id,time,repeat){
	if(repeat > 0){
		for(i=0;i<repeat;i++){
			setTimeout(function(){
				fadeInImg(id,time);
				setTimeout(function(){
					fadeOutImg(id,time);
				},1000*time);
			},i*time*1000*3);
		}
	}
}

function enableTransformRotate3D(id,time,timeFunc,centerX,centerY){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
	$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY+'%');
}

function enableTransformRotate(id,time,timeFunc,centerX,centerY,initRotateX,initRotateY,initRotateZ){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
	$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY +'%');
	
	if(initRotateX != undefined && initRotateY != undefined && initRotateZ != undefined){
		$('#'+id).css('-webkit-transform','rotateX('+initRotateX+'deg) ' + 'rotateY('+initRotateY+'deg) ' + 'rotateZ('+initRotateZ+'deg)');
		$('#'+id).css('-moz-transform','rotateX('+initRotateX+'deg) ' + 'rotateY('+initRotateY+'deg) ' + 'rotateZ('+initRotateZ+'deg)');
	}
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

function rotateAndTranslate(id,rotateX,rotateY,rotateZ,translateX,translateY){
	$('#'+id).css('-webkit-transform','translate('+translateX+'px,'+translateY+'px) rotateX('+rotateX+'deg) ' + 'rotateY('+rotateY+'deg) ' + 'rotateZ('+rotateZ+'deg)');
	$('#'+id).css('-moz-transform','translate('+translateX+'px,'+translateY+'px) rotateX('+rotateX+'deg) ' + 'rotateY('+rotateY+'deg) ' + 'rotateZ('+rotateZ+'deg)');
	$('#'+id).css('-webkit-backface-visibility','hidden');
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