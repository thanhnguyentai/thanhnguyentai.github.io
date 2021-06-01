$(document).ready(function(){
	$("<img/>").attr("src","img/banner_125x125_bg.jpg").load(preload);
	$("<img/>").attr("src","img/banner_125x125_beam1.png").load(preload);
	$("<img/>").attr("src","img/banner_125x125_beam2.png").load(preload);
	$("<img/>").attr("src","img/banner_125x125_light1.png").load(preload);
	$("<img/>").attr("src","img/banner_125x125_light2.png").load(preload);
	$("<img/>").attr("src","img/banner_125x125_logo1.png").load(preload);
	$("<img/>").attr("src","img/banner_125x125_logo2.png").load(preload);
	$("<img/>").attr("src","img/banner_125x125_slide.png").load(preload);
	$("<img/>").attr("src","img/banner_125x125_text1.png").load(preload);
	$("<img/>").attr("src","img/banner_125x125_text2.png").load(preload);
	$("<img/>").attr("src","img/banner_125x125_ticket1.png").load(preload);
	$("<img/>").attr("src","img/banner_125x125_ticket2.png").load(preload);
	
	prepare();
});

function prepare(){
	enableTranformZoom('text1',1,70,200);
	enableTranformZoom('frame_ticket',1,70,100);
	enableTranform('slide',0.5,'linear');
	enableTranform('logo1',0.5,'linear');
	enableTranform('logo2',0.5,'linear');
}

var loaded = 0;
function preload(){
	if(loaded == 11){
		setTimeout('start()',1000);
	}
	
	loaded ++;
}

function start(){
	fadeInImg('beam1',0.5);	
	var timeout1 = setTimeout(function(){
		fadeInImg('light1',0.5);
		clearTimeout(timeout1);
	},250);
	
	
	var timeout2 = setTimeout(function(){
		fadeInImg('text1',1);
		clearTimeout(timeout2);
	},500);
	
	var timeout3 = setTimeout(function(){
		fadeOutImg('beam1',0.5);	
		fadeOutImg('light1',0.5);
		clearTimeout(timeout3);
	},3000);
	
	var timeout4 = setTimeout(function(){
		zoomAnimation('text1',0.05,0.6,'linear');
		fadeOutImg('text1',0.5);
		clearTimeout(timeout4);
	},3750);
	
	
	var timeout5 = setTimeout(function(){
		fadeInImg('beam2',0.5);
		clearTimeout(timeout5);
	},4500);
	
	var timeout6 = setTimeout(function(){
		fadeInImg('light2',0.5);		
		clearTimeout(timeout6);
	},4750);
	
	var timeout7 = setTimeout(function(){
		fadeInImg('ticket1',0.75);
		clearTimeout(timeout7);
		var timeout8 = setTimeout(function(){
			fadeInImg('ticket2',0.75);
			clearTimeout(timeout8);
		},750);
	},5000);
	
	
	var timeout9 = setTimeout(function(){
		fadeOutImg('beam2',0.5);	
		fadeOutImg('light2',0.5);
		clearTimeout(timeout9);
	},7250);
	
	var timeout10 = setTimeout(function(){
		zoomAnimation('frame_ticket',0.01,0.6,'linear');
		fadeOutImg('frame_ticket',0.5);
		clearTimeout(timeout10);
	},7750);
	
	var timeout11 = setTimeout(function(){
		fadeInImg('text2',0.5);
		clearTimeout(timeout11);
	},8500);
	
	
	var timeout12 = setTimeout(function(){
		startTranslate('logo1',0,50);
		fadeOutImg('text2',0.5);
		clearTimeout(timeout12);
	},11000);
	
	var timeout13 = setTimeout(function(){
		startTranslate('logo2',0,130);
		clearTimeout(timeout13);
	},11500);
	
	var timeout14 = setTimeout(function(){
		startTranslate('slide',100,0);
		clearTimeout(timeout14);
	},12500);
	
	var timeout15 = setTimeout(function(){
		replay();
		clearTimeout(timeout15);
	},15000);
}

function replay(){
	enableTranformZoom('text1',1,70,200);
	enableTranformZoom('frame_ticket',1,70,100);
	startTranslate('logo1',0,0);
	startTranslate('logo2',0,0);
	$('#container_slide').css('display','none');
	startTranslate('slide',0,0);
	fadeInImg('frame_ticket',0.5);
	fadeOutImg('ticket1',0.01);	
	fadeOutImg('ticket2',0.01);
	
	var timeout = setTimeout(function(){
		$('#container_slide').css('display','block');
		start();
		clearTimeout(timeout);
	},1000);
}

/*----------------------------------------------------------------------------------------------------------------------*/

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