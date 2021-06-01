$(document).ready(function(){
	$("<img/>").attr("src","img/banner_468x60_bg.jpg").load(preload);
	$("<img/>").attr("src","img/banner_468x60_logo1.png").load(preload);
        $("<img/>").attr("src","img/banner_468x60_logo2.png").load(preload);
	$("<img/>").attr("src","img/banner_468x60_text1.png").load(preload);
        $("<img/>").attr("src","img/banner_468x60_text1_blur.png").load(preload);
	$("<img/>").attr("src","img/banner_468x60_text2.png").load(preload);
        $("<img/>").attr("src","img/banner_468x60_beam1.png").load(preload);
        $("<img/>").attr("src","img/banner_468x60_beam2.png").load(preload);
        $("<img/>").attr("src","img/banner_468x60_beam3.png").load(preload);
        $("<img/>").attr("src","img/banner_468x60_light1.png").load(preload);
        $("<img/>").attr("src","img/banner_468x60_light2.png").load(preload);
        $("<img/>").attr("src","img/banner_468x60_light3.png").load(preload);
        $("<img/>").attr("src","img/banner_468x60_ticket1.png").load(preload);
        $("<img/>").attr("src","img/banner_468x60_ticket2.png").load(preload);

	prepare();
});

function prepare(){
    enableTranform('logo1',0.5,'linear');
    enableTranform('logo2',0.5,'linear');
    enableTranformZoom('text1',1,120,50);
    enableTranformZoom('frame_ticket',1,80,50);
}

var loaded = 0;
function preload(){
	if(loaded == 13){
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
            blink('text1_blur',0.2,2);
			clearTimeout(timeout3);
    },2000);

    var timeout4 = setTimeout(function(){
            fadeOutImg('beam1',0.5);
            fadeOutImg('light1',0.5);
			clearTimeout(timeout4);
    },3500);

    var timeout5 = setTimeout(function(){
            zoomAnimation('text1',0.01,0.6,'linear');
            fadeOutImg('text1',0.5);
			clearTimeout(timeout5);
    },4000);

    var timeout6 = setTimeout(function(){
        fadeInImg('beam2',0.5);
		clearTimeout(timeout6);
    },5000);
    var timeout7 = setTimeout(function(){
        fadeInImg('light2',0.5);
		clearTimeout(timeout7);
    },5500);
    var timeout8 = setTimeout(function(){
        fadeInImg('ticket1',0.5);
		clearTimeout(timeout8);
    },5750);

    var timeout9 = setTimeout(function(){
        fadeInImg('beam3',0.5);
		clearTimeout(timeout9);
    },6500);
    var timeout10 = setTimeout(function(){
        fadeInImg('light3',0.5);
		clearTimeout(timeout10);
    },7000);
    var timeout11 = setTimeout(function(){
        fadeInImg('ticket2',0.5);
		clearTimeout(timeout11);
    },7250);

    var timeout12 = setTimeout(function(){
        fadeOutImg('beam2',0.5);
        fadeOutImg('beam3',0.5);
        fadeOutImg('light2',0.5);
        fadeOutImg('light3',0.5);
		clearTimeout(timeout12);
    },8500);

    var timeout13 = setTimeout(function(){
        zoomAnimation('frame_ticket',0.01,0.6,'linear');
        fadeOutImg('frame_ticket',0.5);
		clearTimeout(timeout13);
    },9000);

	var timeout14 = setTimeout(function(){
        fadeInImg('text2',0.5);
		clearTimeout(timeout14);
    },10000)

    var timeout15 = setTimeout(function(){
        fadeOutImg('text2',0.5);
        startTranslate('logo1',200,0);
		clearTimeout(timeout15);
    },12500);

    var timeout16 = setTimeout(function(){
        startTranslate('logo2',0,-60);
		clearTimeout(timeout16);
    },13000);
	
	var timeout17 = setTimeout(function(){
		replay();
		clearTimeout(timeout17);
	},16000);
}

function replay(){
	fadeInImg('frame_ticket',0.5);
	fadeOutImg('ticket1',0.1);
	fadeOutImg('ticket2',0.1);
	enableTranformZoom('text1',1,120,50);
    enableTranformZoom('frame_ticket',1,80,50);
	startTranslate('logo1',0,0);
	startTranslate('logo2',0,0);
	
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