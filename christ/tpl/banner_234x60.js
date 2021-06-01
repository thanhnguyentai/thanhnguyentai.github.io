$(document).ready(function(){
	$("<img/>").attr("src","img/banner_234x60_bg.jpg").load(preload);
	$("<img/>").attr("src","img/banner_234x60_logo.png").load(preload);
        $("<img/>").attr("src","img/banner_234x60_button.png").load(preload);
	$("<img/>").attr("src","img/banner_234x60_text1.png").load(preload);
        $("<img/>").attr("src","img/banner_234x60_text1_blur.png").load(preload);
	$("<img/>").attr("src","img/banner_234x60_text2.png").load(preload);
        $("<img/>").attr("src","img/banner_234x60_light.png").load(preload);
        $("<img/>").attr("src","img/banner_234x60_slide.png").load(preload);

	prepare();
});

function prepare(){
	enableTranformZoom('text1',1,120,50);
	enableTranform('logo',0.5,'linear');
	enableTranform('frame_button',0.5,'linear');
	enableTranform('slide',0.4,'linear');
}

var loaded = 0;
function preload(){
	if(loaded == 7){
		setTimeout('start()',750);
	}

	loaded ++;
}

function start(){
	var timeout1 = setTimeout(function(){
		fadeInImg('light',0.5);
		clearTimeout(timeout1);
	},250);


	var timeout2 = setTimeout(function(){
		fadeInImg('text1',1);
		clearTimeout(timeout2);
	},500);

	var timeout3 = setTimeout(function(){
		blink('text1_blur',0.2,2);
		clearTimeout(timeout3);
	},1750);
        
	var timeout4 = setTimeout(function(){
		fadeOutImg('light',0.5);
		clearTimeout(timeout4);
	},4250);

	var timeout5 = setTimeout(function(){
		zoomAnimation('text1',0.01,0.5,'linear');
		fadeOutImg('text1',0.5);
		clearTimeout(timeout5);
	},5000);

	var timeout6 = setTimeout(function(){
		fadeInImg('text2',0.5);
		clearTimeout(timeout6);
	},5500);

	var timeout7 = setTimeout(function(){
		fadeInImg('logo',0.5);
		fadeOutImg('text2',0.5);
		clearTimeout(timeout7);
	},9000);

	var timeout8 = setTimeout(function(){
		startTranslate('logo',0,-60);
		startTranslate('frame_button',0,-60);
		clearTimeout(timeout8);
	},10500);

	var timeout9 = setTimeout(function(){
		startTranslate('slide',290,0);
		clearTimeout(timeout9);
	},11000);
	
	var timeout10 = setTimeout(function(){
		replay();
		clearTimeout(timeout10);
	},14000);
}

function replay(){
	enableTranformZoom('text1',1,120,50);
	fadeOutImg('logo',0.1);
	startTranslate('logo',0,0);
	startTranslate('frame_button',0,0);
	startTranslate('slide',0,0);
	
	var timeout = setTimeout(function(){
		start();
		clearTimeout(timeout);
	},1000);
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