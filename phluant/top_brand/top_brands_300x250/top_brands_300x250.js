$(document).ready(function(){
	$("<img/>").attr("src","img/text.png").load(preload);
	$("<img/>").attr("src","img/disney.png").load(preload);
	$("<img/>").attr("src","img/lego.png").load(preload);
	$("<img/>").attr("src","img/fisher.png").load(preload);
	$("<img/>").attr("src","img/hot.png").load(preload);
	$("<img/>").attr("src","img/barbie.png").load(preload);
	$("<img/>").attr("src","img/none.png").load(preload);
	$("<img/>").attr("src","img/toy.png").load(preload);
	$("<img/>").attr("src","img/logo.png").load(preload);
	
	prepare();
});


function prepare() {
	enablePerspective('none_container');
	enableTransform2d('none_container',1,0,50,50);
	enableTransform3d('none',0.25,0,0,0,50,91);
	
	enableTransform2d('toy',1,0,39,45);
	enableTransform2d('text',1,0,38,232);
	
	enableTransform3d('barbie',1,0,-90,0);
	enableTransform3d('hot',1,0,-90,0);
	enableTransform3d('fisher',1,0,-90,0);
	enableTransform3d('lego',1,0,-90,0);
	enableTransform3d('disney',1,0,-90,0);
}

loaded = 0;

function preload(){
	if(loaded == 7){
		var timeout = setTimeout(function(){
			start();
		},1000);
	}
	loaded ++;
}

function start(){
	transform3d('none',0.25,0,0,0,0,200,1,false,false,1,'ease-in-out');
	
	var timeout = setTimeout(function(){
		clearTimeout(timeout);
		transform2d('none_container',1,1.5,0,0,false,false,0.5,'ease-in-out');
		
		var timeout2 = setTimeout(function(){
			clearTimeout(timeout2);
			transform2d('none_container',1,-1.5,0,0,false,false,0.5,'ease-in-out');
		},500);
		
		var timeout3 = setTimeout(function(){
			clearTimeout(timeout3);
			transform2d('none_container',1,0,0,0,false,false,0.25,'ease-in-out');
		},1000);
	},1200);
	
	var timeout4 = setTimeout(function(){
		clearTimeout(timeout4);
		transform2d('toy',20,0,200,-100,false,false,1,'linear');
		transform2d('text',20,0,200,-100,false,false,1,'linear');
		transform3d('none',1,0,0,0,30,180,1,false,false,1.5,'linear');
	},3000);
	
	var timeout5 = setTimeout(function(){
		clearTimeout(timeout5);
		transform3d('none',1,0,90,0,30,180,1,false,false,0.25,'linear');
		var timeout6 = setTimeout(function(){
			clearTimeout(timeout6);
			transform3d('barbie',1,0,-90,0,0,0,-1,true,false,0.001,'linear');
		},240);
		
		var timeout7 = setTimeout(function(){
			clearTimeout(timeout7);
			transform3d('barbie',1,0,0,0,0,0,1,false,false,0.25,'linear');
			transform3d('none',1,0,180,0,30,180,-1,false,true,0.25,'linear');
		},250);
	},4500);
	
	var timeout8 = setTimeout(function(){
		clearTimeout(timeout8);
		transform3d('barbie',1,0,90,0,0,0,1,false,false,0.25,'linear');
		var timeout9 = setTimeout(function(){
			clearTimeout(timeout9);
			transform3d('hot',1,0,-90,0,0,0,-1,true,false,0.001,'linear');
		},240);
		
		var timeout10 = setTimeout(function(){
			clearTimeout(timeout10);
			transform3d('hot',1,0,0,0,0,0,1,false,false,0.25,'linear');
			transform3d('barbie',1,0,180,0,0,0,-1,false,true,0.25,'linear');
		},250);
	},5500);
	
	var timeout11 = setTimeout(function(){
		clearTimeout(timeout11);
		transform3d('hot',1,0,90,0,0,0,1,false,false,0.25,'linear');
		var timeout12 = setTimeout(function(){
			clearTimeout(timeout12);
			transform3d('fisher',1,0,-90,0,0,0,-1,true,false,0.001,'linear');
		},240);
		
		var timeout13 = setTimeout(function(){
			clearTimeout(timeout13);
			transform3d('fisher',1,0,0,0,0,0,1,false,false,0.25,'linear');
			transform3d('hot',1,0,180,0,0,0,-1,false,true,0.25,'linear');
		},250);
	},6500);
	
	var timeout14 = setTimeout(function(){
		clearTimeout(timeout14);
		transform3d('fisher',1,0,90,0,0,0,1,false,false,0.25,'linear');
		var timeout15 = setTimeout(function(){
			clearTimeout(timeout15);
			transform3d('lego',1,0,-90,0,0,0,-1,true,false,0.001,'linear');
		},240);
		
		var timeout16 = setTimeout(function(){
			clearTimeout(timeout16);
			transform3d('lego',1,0,0,0,0,0,1,false,false,0.25,'linear');
			transform3d('fisher',1,0,180,0,0,0,-1,false,true,0.25,'linear');
		},250);
	},7500);
	
	var timeout17 = setTimeout(function(){
		clearTimeout(timeout17);
		transform3d('lego',1,0,90,0,0,0,1,false,false,0.25,'linear');
		var timeout18 = setTimeout(function(){
			clearTimeout(timeout18);
			transform3d('disney',1,0,-90,0,0,0,-1,true,false,0.001,'linear');
		},240);
		
		var timeout19 = setTimeout(function(){
			clearTimeout(timeout19);
			transform3d('disney',1,0,0,0,0,0,1,false,false,0.25,'linear');
			transform3d('lego',1,0,180,0,0,0,-1,false,true,0.25,'linear');
		},250);
		
		
		transform3d('none',1,0,-90,0,30,180,-1,false,false,0.1,'linear');
	},8500);
	
	var timeout20 = setTimeout(function(){
		clearTimeout(timeout20);
		transform3d('disney',1,0,90,0,0,0,1,false,false,0.25,'linear');
		var timeout21 = setTimeout(function(){
			clearTimeout(timeout21);
			transform3d('none',1,0,-90,0,30,180,-1,true,false,0.001,'linear');
		},240);
		
		var timeout22 = setTimeout(function(){
			clearTimeout(timeout22);
			transform3d('none',1,0,0,0,30,180,1,false,false,0.25,'linear');
			transform3d('disney',1,0,180,0,0,0,-1,false,true,0.25,'linear');
		},250);
	},9500);
	
	var timeout23 = setTimeout(function(){
		clearTimeout(timeout23);
		transform2d('toy',1,0,0,0,false,false,1.5,'linear');
		transform2d('text',1,0,0,0,false,false,1.5,'linear');
		transform3d('none',0.25,0,0,0,0,200,0,false,false,1.5,'linear');
	},10500);
	
	var timeout24 = setTimeout(function(){
		clearTimeout(timeout24);
		transform3d('none',0.25,0,0,0,0,0,0,false,false,0.5,'linear');
	},12500);
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
	
	$('#'+id).css('-webkit-backface-visibility','hidden');
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
	
	$('#'+id).css('-webkit-backface-visibility','hidden');
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