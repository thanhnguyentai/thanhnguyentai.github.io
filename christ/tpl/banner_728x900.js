$(document).ready(function(){
	$("<img/>").attr("src","img/banner_728x900_bg.jpg").load(preload);
	$("<img/>").attr("src","img/banner_728x900_logo1.png").load(preload);
	$("<img/>").attr("src","img/banner_728x900_logo2.png").load(preload);
	$("<img/>").attr("src","img/banner_728x900_text1.png").load(preload);
        $("<img/>").attr("src","img/banner_728x900_text1_blur.png").load(preload);
	$("<img/>").attr("src","img/banner_728x900_text2.png").load(preload);
        $("<img/>").attr("src","img/banner_728x900_light1.png").load(preload);
        $("<img/>").attr("src","img/banner_728x900_light2.png").load(preload);
        $("<img/>").attr("src","img/banner_728x900_ticket1.png").load(preload);
        $("<img/>").attr("src","img/banner_728x900_ticket2.png").load(preload);
        $("<img/>").attr("src","img/banner_728x900_beam1.png").load(preload);
        $("<img/>").attr("src","img/banner_728x900_beam2.png").load(preload);
        $("<img/>").attr("src","img/banner_728x900_slide.png").load(preload);
        $("<img/>").attr("src","img/banner_728x900_button.png").load(preload);

	prepare();
});

function prepare(){
	enableTranformZoom('text1',1,50,300);
	enableTranformZoom('frame_ticket',1,50,90);
	enableTranform('logo1',0.5,'linear');
	enableTranform('slide',0.5,'linear');
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
		zoomAnimation('text1',0.005,1,'linear');
		fadeOutImg('text1',1);
		clearTimeout(timeout5);
	},4250);

	var timeout6 = setTimeout(function(){
		fadeInImg('beam2',0.5);
		clearTimeout(timeout6);
	},6000);

	var timeout7 = setTimeout(function(){
		fadeInImg('light2',0.5);
		clearTimeout(timeout7);
	},6500);

	var timeout8 = setTimeout(function(){
		fadeInImg('ticket1',0.75);
		var timeout9 = setTimeout(function(){
			fadeInImg('ticket2',0.75);
			clearTimeout(timeout9);
		},750);
		
		clearTimeout(timeout8);
	},6750);

	var timeout10 = setTimeout(function(){
		zoomAnimation('frame_ticket',0.05,1,'linear');
		fadeOutImg('frame_ticket',1);
		clearTimeout(timeout10);
	},9500);

	var timeout11 = setTimeout(function(){
		fadeInImg('text2',0.5);
		clearTimeout(timeout11);
	},11000);

	var timeout12 = setTimeout(function(){
		startTranslate('logo1',0,260);
		fadeOutImg('text2',0.5);
		clearTimeout(timeout12);
	},13500);

	var timeout13 = setTimeout(function(){
		fadeInImg('logo2',1);
		fadeInImg('button',1);        
		fadeInImg('button_text',1);        
		clearTimeout(timeout13);
	},14500);

	var timeout14 = setTimeout(function(){
		$('#slide').css('display','block');
		var timeout15 = setTimeout(function(){
			startTranslate('slide',200,0);
			clearTimeout(timeout15);
		},100);
		
		clearTimeout(timeout14);
	},16000);

	var timeout16 = setTimeout(function(){
		startTranslate('slide',0,0);
		var timeout17 = setTimeout(function(){
			$('#slide').css('display','none');
			clearTimeout(timeout17);
		},500);
		
		clearTimeout(timeout16);
	},16600);
	
	
	var timeout18 = setTimeout(function(){
		replay();
		clearTimeout(timeout18);
	},18000);
}


function replay(){
	fadeInImg('frame_ticket',1);
	fadeOutImg('ticket1',0.1);
	fadeOutImg('ticket2',0.1);
	fadeOutImg('logo2',0.5);
	fadeOutImg('button',0.5);   
	fadeOutImg('button_text',0.5);   
	startTranslate('logo1',0,0);
	fadeOutImg('beam2',0.5);
	fadeOutImg('light2',0.5);
	enableTranformZoom('text1',1,50,300);
	enableTranformZoom('frame_ticket',1,50,90);
	
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