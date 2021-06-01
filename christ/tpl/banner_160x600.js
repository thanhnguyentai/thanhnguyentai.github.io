$(document).ready(function(){
	$("<img/>").attr("src","img/banner_160x600_bg.jpg").load(preload);
	$("<img/>").attr("src","img/banner_160x600_logo1.png").load(preload);
	$("<img/>").attr("src","img/banner_160x600_text1.png").load(preload);
	$("<img/>").attr("src","img/banner_160x600_text2.png").load(preload);
        $("<img/>").attr("src","img/banner_160x600_light1.png").load(preload);
        $("<img/>").attr("src","img/banner_160x600_light2.png").load(preload);
        $("<img/>").attr("src","img/banner_160x600_ticket1.png").load(preload);
        $("<img/>").attr("src","img/banner_160x600_ticket2.png").load(preload);
        $("<img/>").attr("src","img/banner_160x600_beam1.png").load(preload);
        $("<img/>").attr("src","img/banner_160x600_beam2.png").load(preload);
        $("<img/>").attr("src","img/banner_160x600_slide.png").load(preload);

	prepare();
});

function prepare(){
	enableTranformZoom('text1',1,50,150);
	enableTranformZoom('frame_ticket',1,50,80);
	enableTranform('logo1',0.5,'linear');
	enableTranform('frame_logo',0.5,'linear');
	enableTranform('slide',0.5,'linear');
}

var loaded = 0;
function preload(){
	if(loaded == 10){
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
		zoomAnimation('text1',0.01,0.7,'linear');
		fadeOutImg('text1',0.7);
		clearTimeout(timeout4);
	},3750);

	var timeout5 = setTimeout(function(){
		fadeInImg('beam2',0.5);
		clearTimeout(timeout5);
	},4750);

	var timeout6 = setTimeout(function(){
		fadeInImg('light2',0.5);
		clearTimeout(timeout6);
	},5000);

	var timeout7 = setTimeout(function(){
		fadeInImg('ticket1',0.75);
		var timeout8 = setTimeout(function(){
			fadeInImg('ticket2',0.75);
			clearTimeout(timeout8);
		},750);
		clearTimeout(timeout7);
	},5250);


	var timeout9 = setTimeout(function(){
		fadeOutImg('beam2',0.5);
		fadeOutImg('light2',0.5);
		clearTimeout(timeout9);
	},7250);

	var timeout10 = setTimeout(function(){
		zoomAnimation('frame_ticket',0.01,0.6,'linear');
		fadeOutImg('frame_ticket',0.5);
		clearTimeout(timeout10);
	},8000);

	var timeout11 = setTimeout(function(){
		fadeInImg('text2',0.5);
		clearTimeout(timeout11);
	},8500);


	var timeout12 = setTimeout(function(){
		startTranslate('logo1',0,200);
		fadeOutImg('text2',0.5);
		clearTimeout(timeout12);
	},11250);

	var timeout13 = setTimeout(function(){
		startTranslate('frame_logo',0,400);
		clearTimeout(timeout13);
	},12000);

	var timeout14 = setTimeout(function(){
		startTranslate('slide',200,0);
		clearTimeout(timeout14);
	},12750);
	
	var timeout15 = setTimeout(function(){
		replay();
		clearTimeout(timeout15);
	},15000);
}

function replay(){
	startTranslate('logo1',0,0);
	startTranslate('frame_logo',0,0);
	startTranslate('slide',0,0);
	enableTranformZoom('text1',1,50,150);
	enableTranformZoom('frame_ticket',1,50,80);
	
	fadeInImg('frame_ticket',0.5);
	fadeOutImg('ticket1',0.1);
	fadeOutImg('ticket2',0.1);
	
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