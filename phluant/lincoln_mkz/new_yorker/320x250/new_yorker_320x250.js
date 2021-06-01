$(document).ready(function(){
	$("<img/>").attr("src","img/bg_expanded.png").load(preload);
	$("<img/>").attr("src","img/border.png").load(preload);
	$("<img/>").attr("src","img/bg1.png").load(preload);
	$("<img/>").attr("src","img/bg2.png").load(preload);
	$("<img/>").attr("src","img/expand_button.png").load(preload);
	$("<img/>").attr("src","img/text_footer.png").load(preload);
	$("<img/>").attr("src","img/text1.png").load(preload);
	$("<img/>").attr("src","img/text2.png").load(preload);
	$("<img/>").attr("src","img/text3.png").load(preload);
	$("<img/>").attr("src","img/text4.png").load(preload);
	$("<img/>").attr("src","img/expanded_fr2.png").load(preload);
	$("<img/>").attr("src","img/expanded_video.png").load(preload);
	$("<img/>").attr("src","img/discover.png").load(preload);
	$("<img/>").attr("src","img/close.png").load(preload);
	prepare();
});


function prepare() {
	enableTransform2d('fr1',1,0,0,0,1,'linear');
	enableTransform2d('fr2',1,0,0,0,1,'linear');
	
	enableTransform2d('bg1',1,0,50,50,1,'linear');
	enableTransform2d('bg2',1,0,0,0,1,'linear');
	enableTransform2d('text1',1,0,0,0,1,'linear');
	enableTransform2d('btExpand',1,0,0,0,1,'linear');
	enableTransform2d('textFooter',1,0,0,0,1,'linear');
	
	enableTransform2d('text2',1,0,0,0,1,'linear');
	enableTransform2d('text3',1,0,0,0,1,'linear');
	enableTransform2d('text4',1,0,0,0,1,'linear');
}

loaded = 0;

function preload(){
	if(loaded == 13){
		start();
	}
	loaded ++;
}

function start() {
	
	transform2d('bg1',0.51,0,0,0,false,false,1.5,'linear');
	
	var timeOut0 = setTimeout(function() {
		clearTimeout(timeOut0);
		transform2d('text1',1,0,0,0,true,false,1,'linear');
	}, 500);
	
	var timeOut01 = setTimeout(function() {
		clearTimeout(timeOut01);
		transform2d('text2',1,0,0,0,true,false,1,'linear');
	}, 1000);
	
	var timeOut1 = setTimeout(function() {
		clearTimeout(timeOut1);
		transform2d('btExpand',1,0,0,0,true,false,1,'linear');
	}, 2000);
	
	var timeOut2 = setTimeout(function() {
		clearTimeout(timeOut2);
		transform2d('text3',1,0,0,0,true,false,1,'linear');
	}, 2500);
	
	var timeOut3 = setTimeout(function() {
		clearTimeout(timeOut3);
		transform2d('textFooter',1,0,0,0,true,false,1,'linear');
	}, 3500);
	
	var timeOutText = setTimeout(function() {
		transform2d('bg2',1,0,0,0,true,false,1,'linear');
		clearTimeout(timeOutText);
	}, 5500);
	
	var timeOutImg = setTimeout(function() {
		clearTimeout(timeOutImg);
		transform2d('text4',1,0,0,0,true,false,1,'linear');
	}, 6500);
	var timeOutImg1 = setTimeout(function() {
		clearTimeout(timeOutImg1);
		transform2d('fr4',1,0,0,0,true,false,1,'linear');
	}, 7500);
	
	$('#banner').bind('click', function() {
		$('#expanded').css('z-index', 2);
		transform2d('banner',1,0,0,0,false,true,0.5,'linear');
		
		var timeExpand = setTimeout(function() {
			clearTimeout(timeExpand);
			transform2d('expanded',1,0,0,0,true,false,0.5,'linear');
		}, 500);
		
		var timeExpand1 = setTimeout(function() {
			clearTimeout(timeExpand1);
			transform2d('expanded_fr1',1,0,0,0,true,false,1,'linear');
		}, 1500);
		
		var timeExpand2 = setTimeout(function() {
			clearTimeout(timeExpand2);
			transform2d('expanded_fr2',1,0,0,0,true,false,1,'linear');
		}, 3500);
	});
	
	$('#close_btn').bind('click', function() {
		$('#expanded').css('z-index', 0);
		transform2d('expanded',1,0,0,0,false,true,0.5,'linear');
		transform2d('banner',1,0,0,0,true,false,0.5,'linear');
	});
}

/*----------------------------------------------------------------------*/	
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
		$('#'+id).css('opacity',1);
	}
	else if(isfadeout){
		$('#'+id).css('opacity',0);
	}
}

/*--------------------------------------------------------------------------------------------------------------------------------------------*/
function enablePerspective(id,perspective,originx,originy){
	if(!perspective){
		$('#'+id).css('-webkit-perspective','800');
		$('#'+id).css('-moz-perspective','800');
	}
	else{
		$('#'+id).css('-webkit-perspective',perspective);
		$('#'+id).css('-moz-perspective',perspective);
	}
	
	if(originx == undefined || originy == undefined){
		$('#'+id).css('-webkit-perspective-origin','50% 50%');
		$('#'+id).css('-moz-perspective-origin','50% 50%');
	}
	else{
		$('#'+id).css('-webkit-perspective-origin',originx + '% ' + originy + '%');
		$('#'+id).css('-moz-perspective-origin',originx + '% ' + originy + '%');
	}
	
	$('#'+id).css('-webkit-transform-style','preserve-3d');
}

function enableTransform3d(id,scaleInit,rotateXInit,rotateYInit,rotateZInit,centerX,centerY,time,timeFunc){
	if(time && timeFunc){
		$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
		$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	}
	
	if(centerX != undefined && centerY != undefined){
		$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '% ');
		$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY+ '% ');
	}
	$('#'+id).css('-webkit-transform-style','preserve-3d');
	$('#'+id).css('-webkit-transform','rotateX('+rotateXInit+'deg) ' + 'rotateY('+rotateYInit+'deg) ' +  'rotateZ('+rotateZInit+'deg) ' + ' scale('+scaleInit+')');
}

function transform3d(id,scale,rotatex,rotatey,rotatez,translatex,translatey,translatez,isfadein,isfadeout,time,timeFunc){
	if(time && timeFunc){
		$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
		$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	}
	
	$('#'+id).css('-webkit-transform','translateX('+translatex+'px) translateY('+translatey+'px) translateZ('+translatez+'px) rotateX('+rotatex+'deg) ' + ' rotateY('+rotatey+'deg) ' + ' rotateZ('+rotatez+'deg) ' + ' scale('+scale+')');
	
	if(isfadein){
		$('#'+id).css('opacity',1);
	}
	else if(isfadeout){
		$('#'+id).css('opacity',0);
	}
}