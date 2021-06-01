$(document).ready(function(){
	$("<img/>").attr("src","img/banner300x50_bg.jpg").load(preload);
	$("<img/>").attr("src","img/banner300x50_car.png").load(preload);
	$("<img/>").attr("src","img/banner300x50_text.png").load(preload);
	$("<img/>").attr("src","img/banner300x50_option.png").load(preload);
	$("<img/>").attr("src","img/banner300x50_button.png").load(preload);
	$("<img/>").attr("src","img/banner300x50_icon1.png").load(preload);
	$("<img/>").attr("src","img/banner300x50_icon2.png").load(preload);
	
	prepare();
});

function prepare(){
	enableTranformZoom('car',0.3,80,50);
	enableTranform('option',0.5,'linear');
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
	if(loaded == 6){
		setTimeout('start()',1000);
	}
	
	loaded ++;
}

function start(){
	
	zoomInAnimation('car',1,1,'linear');
	setTimeout(function(){
		fadeInImg('text',0.75);
		startTranslate('option',0,-30);
	},800);
	
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
	},1200);
	
	setTimeout(function(){
		fadeInImg('button',1);
	},2200);
}

/*----------------------------------------------------------------------------------------------------------------------*/

function enableTransformRotate3D(id,time,timeFunc,centerX,centerY){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
	$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY+'%');
}

function rotate3dAnimation(id,rotateX,rotateY,rotateZ){
	$('#'+id).css('-webkit-transform','rotateX('+rotateX+'deg) ' + 'rotateY('+rotateY+'deg) ' + 'rotateZ('+rotateZ+'deg)');
}

function rotate3dAnimationOut(id,rotateX,rotateY,rotateZ){
	$('#'+id).css('-webkit-transform','rotateX('+rotateX+'deg) ' + 'rotateY('+rotateY+'deg) ' + 'rotateZ('+rotateZ+'deg)');
	$('#'+id).css('opacity','0');
}

function rotate3dAnimationIn(id,rotateX,rotateY,rotateZ){
	$('#'+id).css('-webkit-transform','rotateX('+rotateX+'deg) ' + 'rotateY('+rotateY+'deg) ' + 'rotateZ('+rotateZ+'deg)');
	$('#'+id).css('opacity','1');
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
