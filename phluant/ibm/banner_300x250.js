$(document).ready(function(){
	$("<img/>").attr("src","img/300x250_bg.png").load(preload);
	$("<img/>").attr("src","img/300x250_bg3.png").load(preload);
	$("<img/>").attr("src","img/300x250_button.png").load(preload);
	$("<img/>").attr("src","img/300x250_gpic.png").load(preload);
	$("<img/>").attr("src","img/300x250_logo.png").load(preload);
	$("<img/>").attr("src","img/300x250_pic.png").load(preload);
	$("<img/>").attr("src","img/300x250_pic0.png").load(preload);
	$("<img/>").attr("src","img/300x250_planet.png").load(preload);
	$("<img/>").attr("src","img/300x250_replay.png").load(preload);
	$("<img/>").attr("src","img/300x250_text1.png").load(preload);
	$("<img/>").attr("src","img/300x250_text2.png").load(preload);
	$("<img/>").attr("src","img/300x250_text3.png").load(preload);
	$("<img/>").attr("src","img/300x250_text4.png").load(preload);
	$("<img/>").attr("src","img/300x250_topball.png").load(preload);
	$("<img/>").attr("src","img/tball.png").load(preload);
	$("<img/>").attr("src","img/tball_fly.png").load(preload);
	
	prepare();
});

function prepare(){
	enableTranform('frame1',0.2,'linear');
	enableTranform('text2',0.3,'linear');
	enableTranform('topball',0.3,'linear');
	enableTranform('gpic',0.05,'linear');
	enableTranform('ball1',0.3,'linear');
	enableTranform('ball2',0.3,'linear');
	enableTranform('ball3',0.3,'linear');
	enableTranform('ball4',0.3,'linear');
	
	enableTranform('ball5',1.0,'linear');
	enableTranform('ball6',1.0,'linear');
	enableTranform('ball7',1.0,'linear');
	
	enableTranform('ball8',0.5,'linear');
	enableTranform('ball9',0.5,'linear');
	enableTranform('ball10',0.3,'linear');
	
	enableTranform('text3',0.3,'linear');
	enableTranform('text4',0.4,'linear');
	
	$('#replay').click(function(){
		replay();
	});
}

var loaded = 0;
function preload(){
	if(loaded == 15){
		setTimeout('start()',1000);
	}
	
	loaded ++;
}

function start(){
	/*frame1*/
	fadeInImg('text1',0.3);
	var timeout1 = setTimeout(function(){
		clearTimeout(timeout1);
		startTranslate('text2',0,-140);
	},1500);
	$('#text2').bind('webkitTransitionEnd transitionend',function(){
		$(this).unbind('webkitTransitionEnd transitionend');
		startTranslate('frame1',0,-35);
	});
	
	var timeout2 = setTimeout(function(){
		clearTimeout(timeout2);
		fadeOutImg('frame1',0.3);
	},4000);
	
	/*frame2*/
	var timeout3 = setTimeout(function(){
		clearTimeout(timeout3);
		fadeInImg('frame2',0.3);
	},4500);
	
	var timeout4 = setTimeout(function(){
		clearTimeout(timeout4);
		fadeOutImg('pic0',0.1);
		fadeInImg('gpic',0.1);
		startDanceBall();
		startGPic();
	},4800);
}

var isUp = true;
var isStop = false;
function startDanceBall(){
	var delta = (isUp == true?-10:0);	
	isUp = (isUp == true?false:true);
	if(isStop == true)
		return;
	startTranslate('topball',0,delta);
	var timeout = setTimeout(function(){
		clearTimeout(timeout);
		startDanceBall();
	},300);
}

var count = 0;
function startGPic(){
	if(count >= 4){
		isStop = true;
		var timeoutnext = setTimeout(function(){
			clearTimeout(timeoutnext);
			startFrame3();
		},500);
		return;
	}
		
	count++;
	if(count == 1){
		$('#ball1').css('opacity','1');
	}
	else if(count == 2){
		$('#ball2').css('opacity','1');
	}
	else if(count == 3){
		$('#ball3').css('opacity','1');
	}
	else{
		$('#ball4').css('opacity','1');
	}
	
	var timeoutStart = setTimeout(function(){
		clearTimeout(timeoutStart);
		startTranslate('gpic',-3,0);
		var timeout = setTimeout(function(){
			clearTimeout(timeout);
			startTranslate('gpic',0,0);
		},50);
		
		if(count == 1){
			translateRotate('ball1',60,-10,-20)
			var timeout2 = setTimeout(function(){
				clearTimeout(timeout2);
				translateRotate('ball1',120,-5,10)
			},300);
			
			var timeout3 = setTimeout(function(){
				clearTimeout(timeout3);
				startGPic();
			},600);
		}
		else if(count == 2){
			translateRotate('ball2',60,-10,-20)
			var timeout2 = setTimeout(function(){
				clearTimeout(timeout2);
				translateRotate('ball2',120,-5,10)
			},300);
			
			var timeout3 = setTimeout(function(){
				clearTimeout(timeout3);
				startGPic();
			},600);
		}
		else if(count == 3){
			translateRotate('ball3',60,-10,-20)
			var timeout2 = setTimeout(function(){
				clearTimeout(timeout2);
				translateRotate('ball3',120,-5,10)
			},300);
			
			var timeout3 = setTimeout(function(){
				clearTimeout(timeout3);
				startGPic();
			},600);
		}
		else{
			translateRotate('ball4',60,-10,-20)
			var timeout2 = setTimeout(function(){
				clearTimeout(timeout2);
				translateRotate('ball4',120,-5,10)
			},300);
			
			var timeout3 = setTimeout(function(){
				clearTimeout(timeout3);
				startGPic();
			},600);
		}
	},100);
}

function startFrame3(){
	fadeOutImg('frame2',0.3);
	fadeInImg('frame3',0.3);
	
	var timeout = setTimeout(function(){
		clearTimeout(timeout);
		startTranslate('ball5',250,90);
	},500);
	
	var timeout1 = setTimeout(function(){
		clearTimeout(timeout1);
		fadeOutImg('ball5',0.1);
		fadeInImg('ball8',0.1);
	},1500);
	
	var timeout2 = setTimeout(function(){
		clearTimeout(timeout2);
		startTranslate('ball8',100,0);
	},1550);
	
	var timeout3 = setTimeout(function(){
		clearTimeout(timeout3);
		startTranslate('ball6',220,95);
	},2100);
	
	var timeout4 = setTimeout(function(){
		clearTimeout(timeout4);
		fadeOutImg('ball6',0.1);
		fadeInImg('ball9',0.1);
	},3100);
	var timeout5 = setTimeout(function(){
		clearTimeout(timeout5);
		startTranslate('ball9',85,0);
	},3150);
	
	var timeout6 = setTimeout(function(){
		clearTimeout(timeout6);
		startTranslate('ball7',180,110);
	},3600);
	
	var timeout7 = setTimeout(function(){
		clearTimeout(timeout7);
		fadeOutImg('ball7',0.1);
		fadeInImg('ball10',0.1);
	},4600);
	
	var timeout8 = setTimeout(function(){
		clearTimeout(timeout8);
		startTranslate('ball10',40,0);
	},4650);
	
	var timeout9 = setTimeout(function(){
		clearTimeout(timeout9);
		startTranslate('text3',0,120);
	},3600);
	
	var timeout10 = setTimeout(function(){
		clearTimeout(timeout10);
		startTranslate('text4',0,178);
		enableTranform('text3',0.1,'linear');
		startTranslate('text3',0,110);
		var timeout11 = setTimeout(function(){
			clearTimeout(timeout11);
			startTranslate('text3',0,120);
		},100);
	},3900);
	
	var timeout12 = setTimeout(function(){
		clearTimeout(timeout12);
		enableTranform('text4',0.1,'linear');
		startTranslate('text4',0,168);
		var timeout13 = setTimeout(function(){
			clearTimeout(timeout13);
			startTranslate('text4',0,178);
		},100);
	},4300);
	
	var timeout13 = setTimeout(function(){
		clearTimeout(timeout13);
		fadeInImg('button',0.5);
	},5000);
	
	var timeout14 = setTimeout(function(){
		clearTimeout(timeout14);
		fadeInImg('logo',0.5);
	},5400);
	
	var timeout15 = setTimeout(function(){
		clearTimeout(timeout15);
		fadeInImg('planet',0.5);
	},5800);
	
	var timeout16 = setTimeout(function(){
		clearTimeout(timeout16);
		fadeInImg('replay',0.5);
	},6200);
}

function replay(){
	fadeOutImg('frame3',0.05);
	fadeOutImg('replay',0.2);
	fadeOutImg('logo',0.2);
	fadeOutImg('planet',0.2);
	fadeOutImg('button',0.2);
	enableTranform('text4',0.4,'linear');
	startTranslate('text4',0,0);	
	enableTranform('text3',0.3,'linear');
	startTranslate('text3',0,0);
	startTranslate('text2',0,0);
	startTranslate('frame1',0,0);
	
	resetFadeOut('ball8');
	resetFadeOut('ball9');
	resetFadeOut('ball10');
	resetFadeIn('ball5');
	resetFadeIn('ball6');
	resetFadeIn('ball7');
	
	var timeout1 = setTimeout(function(){
		startTranslate('ball5',0,0);
		startTranslate('ball6',0,0);
		startTranslate('ball7',0,0);
		startTranslate('ball8',0,0);
		startTranslate('ball9',0,0);
		startTranslate('ball10',0,0);
		clearTimeout(timeout1);
	},1000);
		
	fadeInImg('pic0',0.1);
	fadeOutImg('gpic',0.1);
	isStop = false;
	startTranslate('gpic',0,0);
	
	$('#ball1').css('opacity','0');
	$('#ball2').css('opacity','0');
	$('#ball3').css('opacity','0');
	$('#ball4').css('opacity','0');
	translateRotate('ball1',0,0,-30);
	translateRotate('ball2',0,0,-30);
	translateRotate('ball3',0,0,-30);
	translateRotate('ball4',0,0,-30);
	count = 0;
	
	var timeout = setTimeout(function(){
		fadeInImg('frame1',0.1);
		start();
		clearTimeout(timeout);
	},500);
}
/*----------------------------------------------------------------------------------------------------------------------*/
function enableTransform(id,time,timeFunc,centerX,centerY){
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

function translateRotate(id,translateX,translateY,angle){
	$('#'+id).css('-webkit-transform','translate('+translateX+'px,'+translateY+'px) rotate('+angle+'deg)');
	$('#'+id).css('-moz-transform','translate('+translateX+'px,'+translateY+'px) rotate('+angle+'deg)');
}

function translateScale(id,translateX,translateY,scale){
	$('#'+id).css('-webkit-transform','translate('+translateX+'px,'+translateY+'px) scale('+scale+')');
	$('#'+id).css('-moz-transform','translate('+translateX+'px,'+translateY+'px) scale('+scale+')');
}


function fadeInImg(id,time){
	$('#'+id).css('display','block');
	$('#'+id).css('-moz-animation','fadein '+time+'s linear');
	$('#'+id).css('-webkit-animation','fadein '+time+'s linear');
	$('#'+id).css('-webkit-animation-fill-mode','forwards');
	$('#'+id).css('-moz-animation-fill-mode','forwards');
}

function resetFadeIn(id){
	$('#'+id).css('display','block');
	$('#'+id).css('-moz-animation','none');
	$('#'+id).css('-webkit-animation','none');
}

function resetFadeOut(id){
	$('#'+id).css('display','none');
	$('#'+id).css('-moz-animation','none');
	$('#'+id).css('-webkit-animation','none');
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