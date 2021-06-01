$(document).ready(function(){
	$("<img/>").attr("src","img/logo.png").load(preload);
	$("<img/>").attr("src","img/slogon.png").load(preload);
	$("<img/>").attr("src","img/shopnow.png").load(preload);
	$("<img/>").attr("src","img/fisher.png").load(preload);
	$("<img/>").attr("src","img/disney.png").load(preload);
	$("<img/>").attr("src","img/hot.png").load(preload);
	$("<img/>").attr("src","img/barbie.png").load(preload);
	$("<img/>").attr("src","img/none.png").load(preload);
	$("<img/>").attr("src","img/lego.png").load(preload);
	prepare();
});


function prepare() {
	enableTransform2d('slogon',1,0,70,43);
	enablePerspective('none_container');
	enableTransform2d('none_container',1,0,50,67);
	enableTransform3d('none',0.5,0,0,1,50,82);
	enableTransform3d('barbie',1,0,-180,-1,50,82);
}

loaded = 0;

function preload(){
	if(loaded == 8){
		var timeout = setTimeout(function(){
			start();
		},1000);
	}
	loaded ++;
}

function start(){
	transform3d('none',0.4,0,0,0,0,40,1,false,false,1,'ease-in-out');
	var timeout = setTimeout(function(){
		clearTimeout(timeout);
		transform2d('none_container',1,5,0,0,false,false,0.5,'ease-in-out');
		
		var timeout2 = setTimeout(function(){
			clearTimeout(timeout2);
			transform2d('none_container',1,-5,0,0,false,false,0.5,'ease-in-out');
		},500);
		
		var timeout3 = setTimeout(function(){
			clearTimeout(timeout3);
			transform2d('none_container',1,0,0,0,false,false,0.25,'ease-in-out');
		},1000);
	},1200);
	
	
	var timeout4 = setTimeout(function(){
		clearTimeout(timeout4);
		transform2d('slogon',40,0,0,0,false,false,2,'linear');
		transform3d('none',1,0,0,0,0,40,1,false,false,1.5,'linear');
	},3000);
	
	var timeout5 = setTimeout(function(){
		clearTimeout(timeout5);
		transform3d('barbie',1,0,-180,0,0,0,-1,true,false,0.1,'linear');
	},4500);
	
	var timeout6 = setTimeout(function(){
		transform3d('none',1,0,180,0,0,40,-1,false,false,0.5,'linear');
		transform3d('barbie',1,0,0,0,0,0,1,false,false,0.5,'linear');
	},4700);
	
	var timeout7 = setTimeout(function(){
		clearTimeout(timeout7);
		transform2d('lego',1,0,0,60,false,false,0.5,'ease-in-out');
		var timeout8 = setTimeout(function(){
			clearTimeout(timeout8);
			transform2d('lego',1,0,0,50,false,false,0.25,'ease-in-out');
		},500);
		
		transform2d('hot',1,0,0,60,false,false,0.7,'ease-in-out');
		var timeout9 = setTimeout(function(){
			clearTimeout(timeout9);
			transform2d('hot',1,0,0,50,false,false,0.25,'ease-in-out');
		},700);
		
		transform2d('disney',1,0,0,60,false,false,0.9,'ease-in-out');
		var timeout10 = setTimeout(function(){
			clearTimeout(timeout10);
			transform2d('disney',1,0,0,50,false,false,0.25,'ease-in-out');
		},900);
		
		transform2d('fisher',1,0,0,60,false,false,1.1,'ease-in-out');
		var timeout11 = setTimeout(function(){
			clearTimeout(timeout11);
			transform2d('fisher',1,0,0,50,false,false,0.25,'ease-in-out');
		},1100);
	},5500);
	
	var timeout12 = setTimeout(function(){
		clearTimeout(timeout12);
		transform2d('disney',1,0,0,0,false,false,0.5,'ease-in-out');
		transform2d('hot',1,0,0,0,false,false,0.7,'ease-in-out');
		transform2d('fisher',1,0,0,0,false,false,0.9,'ease-in-out');
		transform2d('lego',1,0,0,0,false,false,1.1,'ease-in-out');
	},7500);
	
	var timeout13 = setTimeout(function(){
		clearTimeout(timeout13);
		transform3d('none',1,0,0,0,0,40,1,false,false,0.5,'linear');
		transform3d('barbie',1,0,-180,0,0,0,-1,false,true,0.5,'linear');
	},8500);
	
	var timeout14 = setTimeout(function(){
		clearTimeout(timeout14);
		transform2d('slogon',1,0,0,0,false,false,2,'linear');
		transform3d('none',0.4,0,0,0,0,40,1,false,false,1.5,'ease-in-out');
	},9000);
	
	var timeout15 = setTimeout(function(){
		clearTimeout(timeout15);
		transform3d('none',0.4,0,0,0,0,0,1,false,false,0.5,'ease-in-out');
	},11500);
	
	var timeout16 = setTimeout(function(){
		clearTimeout(timeout16);
		transform2d('slogon',0.9,0,0,0,false,false,0.5,'linear',0,50);
		transform2d('text',1,0,-40,0,false,false,0.5,'linear');
	},12000);
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