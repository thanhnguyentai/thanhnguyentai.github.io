$(document).ready(function(){
	$("<img/>").attr("src","img_banner/228x233_ballloon.png").load(preload);	
	$("<img/>").attr("src","img_banner/228x233_bg.png").load(preload);
	$("<img/>").attr("src","img_banner/228x233_button.png").load(preload);
	$("<img/>").attr("src","img_banner/228x233_firsttext.png").load(preload);
	$("<img/>").attr("src","img_banner/228x233_lasttext.png").load(preload);
	
	prepare();
});

loaded = 0;
function prepare(){
	enableTranformZoom('text2',0.9,50,100);
	enableTranformZoom('container',0.2,50,80);
	
	enableTranform('ballloon',0.5,'linear');
}
	

function preload(){
	if(loaded == 4){
		setTimeout(function(){start();},2000);
	}
	loaded ++;
}

function start(){	
	fadeOutImg('text1',2);
	
	setTimeout(function(){
		fadeInImg('container',0.5);
		zoomAnimation('container',1,3,'linear');
	},2000);
	
	setTimeout(function(){
		startTranslate('ballloon',0,-70);
	},5500);
	
	setTimeout(function(){
		zoomAnimation('text2',1,0.5,'linear');
	},5750);
	
	setTimeout(function(){
		fadeInImg('button',1);
	},6500);
}
	
function enableTransformRotate3D(id,time,timeFunc,centerX,centerY,centerZ){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
}

function rotate3dAnimationOut(id,rotateX,rotateY,rotateZ){
	$('#'+id).css('-webkit-transform','rotateX('+rotateX+'deg) ' + 'rotateY('+rotateY+'deg) ' + 'rotateZ('+rotateZ+'deg)');
	$('#'+id).css('opacity','0');
}

function rotate3dAnimationIn(id,rotateX,rotateY,rotateZ){
	$('#'+id).css('-webkit-transform','rotateX('+rotateX+'deg) ' + 'rotateY('+rotateY+'deg) ' + 'rotateZ('+rotateZ+'deg)');
	$('#'+id).css('opacity','1');
}

function enableTranformZoom(id,initScale,centerX,centerY){
	$('#'+id).css('-webkit-transform','scale('+initScale+')');
	$('#'+id).css('-moz-transform', 'scale('+initScale+')');
	
	$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
	$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY+ '%');
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

function fadeOutImg(id,time){
	$('#'+id).css('-moz-animation','fadeout '+time+'s linear');
	$('#'+id).css('-webkit-animation','fadeout '+time+'s linear');
	$('#'+id).css('-webkit-animation-fill-mode','forwards');
	$('#'+id).css('-moz-animation-fill-mode','forwards');
}