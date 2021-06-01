$(document).ready(function(){
	$("<img/>").attr("src","img/bg.jpg").load(preload);
	$("<img/>").attr("src","img/bigphone.png").load(preload);
	$("<img/>").attr("src","img/bottom_logo.png").load(preload);
	$("<img/>").attr("src","img/button.png").load(preload);
	$("<img/>").attr("src","img/light.png").load(preload);
	$("<img/>").attr("src","img/mediumphone.png").load(preload);
	$("<img/>").attr("src","img/phone.png").load(preload);
	$("<img/>").attr("src","img/camera.png").load(preload);
	$("<img/>").attr("src","img/phone_no_shadow.png").load(preload);
	$("<img/>").attr("src","img/phone_flower.png").load(preload);
	$("<img/>").attr("src","img/smallDevice.png").load(preload);
	$("<img/>").attr("src","img/smallphone.png").load(preload);
	$("<img/>").attr("src","img/top_logo.png").load(preload);
	$("<img/>").attr("src","img/tv.png").load(preload);
	$("<img/>").attr("src","img/txtIntro.png").load(preload);
	$("<img/>").attr("src","img/txtNewWay.png").load(preload);
	$("<img/>").attr("src","img/txtOneByMany.png").load(preload);
	$("<img/>").attr("src","img/txtOneByOne.png").load(preload);
	$("<img/>").attr("src","img/txtOneToAny.png").load(preload);
	$("<img/>").attr("src","img/txtShare.png").load(preload);
	$("<img/>").attr("src","img/txtSimulate.png").load(preload);
	$("<img/>").attr("src","img/txtTheNext.png").load(preload);
	$("<img/>").attr("src","img/txtThing.png").load(preload);
	
	$("<img/>").attr("src","img/light_small.png").load(preload);
	$("<img/>").attr("src","img/beam.png").load(preload);
	/*
	$("<img/>").attr("src","img/txt_single.png").load(preload);
	$("<img/>").attr("src","img/txt_tap.png").load(preload);
	$("<img/>").attr("src","img/txt_with.png").load(preload);
	*/
	$("<img/>").attr("src","img/phone_flip.png").load(preload);
	$("<img/>").attr("src","img/phone_flip2.png").load(preload);
	
	prepare();
});

loaded = 0;


function prepare(){
	enableTranform('phone',0.5,'easy');
	enableTranform('bigphone',0.3,'ease');
	enableTranform('frame1',0.4,'ease');
	enableTranform('tv',0.5,'ease');
	enableTranform('phone2',0.2,'ease');
	
	enableTranform('phonesmall1',0.2,'ease');
	enableTranform('phonesmall2',0.2,'ease');
	enableTranform('phonemedium1',0.2,'ease');
	enableTranform('phonemedium2',0.2,'ease');
	
	enableTranform('txtOneByOne',0.3,'ease');
	enableTranform('txtOneByMany',0.3,'ease');
	enableTranform('txtOneToAny',0.3,'ease');
	
	enableTranformZoomRotateTranslate('div_phone',1,50,50,0,0.75,'ease');
	
	enableTranform('phone-container',0.3,'ease');
	enableTranform('phone-container2',0.3,'ease');
	
	enableTranform('txtWith',0.2,'ease');
	enableTranform('txtSingle',0.2,'ease');
	enableTranform('txtTap',0.2,'ease');
	
	enableTransformRotate3D('phone_small',0.25,'ease',100,50,100);
	enableTransformRotate3D('phone_small2',0.25,'ease',0,50,100);
}
function preload(){
	if(loaded == 26){
		setTimeout('start()',1000);
	}
	
	loaded ++;
}

function start(){
	startTranslate('phone-container',-500,0);
	var timeout1 = setTimeout(function(){
		enableTranform('phone',0.2,'linear');
		
		fadeInImg('light',0.3);
		clearTimeout(timeout1);
		fadeInImg('txtIntro',0.3);
	},500);
	
	var timeout2 = setTimeout(function(){
		clearTimeout(timeout2);
		fadeInImg('txtNewWay',0.3);
		fadeInImg('txtShare',0.3);
		$('#phone-container2').css('display','block');
	},800);
	
	var timeout3 = setTimeout(function(){
		clearTimeout(timeout3);
	},1100);
	
	var timeout4 = setTimeout(function(){
		clearTimeout(timeout4);
		translateFadeIn('txtOneByOne',-50,0);
		startTranslate('phone-container',-635,0);
		startTranslate('phone-container2',135,0);
	},2000);
	
	
	var timeout18 = setTimeout(function(){
		rotate3dAnimation('phone_small',0,-90,0);
		rotate3dAnimation('phone_small2',0,90,0);
		clearTimeout(timeout18);
	},3500);
	
	var timeout19 = setTimeout(function(){
		$('#phone_small2').attr('src',$('#phone_small').attr('src'));
		fadeInImg('phone_flip',0.2);
		fadeInImg('phone_flip2',0.2);
		clearTimeout(timeout19);
	},3700);
	
	var timeout32 = setTimeout(function(){
		startTranslate('phone-container',-610,0);
		startTranslate('phone-container2',116,0);
		clearTimeout(timeout32);
	},3900);
	
	var timeout33 = setTimeout(function(){
		fadeInImg('beam',0.3);
		clearTimeout(timeout33);
	},4200);
	
	var timeout23 = setTimeout(function(){
		fadeOutImg('beam',0.3);
		clearTimeout(timeout23);
	},4600);
	
	
	var timeout34 = setTimeout(function(){
		clearTimeout(timeout34);
		startTranslate('phone-container',-635,0);
		startTranslate('phone-container2',135,0);
	},5000);
	
	var timeout31 = setTimeout(function(){
		fadeOutImg('phone_flip',0.2);
		fadeOutImg('phone_flip2',0.2);
		
		rotate3dAnimation('phone_small',0,0,0);
		rotate3dAnimation('phone_small2',0,0,0);
		clearTimeout(timeout23);
	},5500);
	
	var timeout5 = setTimeout(function(){
		clearTimeout(timeout5);
		fadeOutImg('txtOneByOne',0.3);
		startTranslate('phone-container',-500,0);
		startTranslate('phone-container2',0,0);
	},6500);
	
	var timeout6 = setTimeout(function(){
		clearTimeout(timeout6);
		fadeOutImg('phone-container2',0.2);
		
		$('#phonemedium1').css('display','block');
		$('#phonemedium2').css('display','block');
		$('#phonesmall1').css('display','block');
		$('#phonesmall2').css('display','block');
	},7000);
	
	var timeout7 = setTimeout(function(){
		clearTimeout(timeout7);
		
		translateFadeIn('txtOneByMany',-50,0);
		fadeOutImg('light',0.3);
		startTranslate('phonemedium1',-78,0);
		startTranslate('phonemedium2',95,0);
		
		fadeInImg('camera',0.3);
	},7400);
	
	var timeout8 = setTimeout(function(){
		clearTimeout(timeout8);
		fadeInImg('txtSimulate',0.3);
		startTranslate('phonesmall1',-128,0);
		startTranslate('phonesmall2',166,0);
	},7500);
	
	var timeout9 = setTimeout(function(){
		clearTimeout(timeout9);
		fadeOutImg('camera',0.2);
		startTranslate('phonemedium1',0,0);
		startTranslate('phonemedium2',0,0);
		startTranslate('phonesmall1',0,0);
		startTranslate('phonesmall2',0,0);
		fadeOutImg('txtSimulate',0.3);
		fadeOutImg('txtOneByMany',0.5);
	},9000);
	
	
	var timeout10 = setTimeout(function(){
		clearTimeout(timeout10);
		$('#phonemedium1').css('display','none');
		$('#phonemedium2').css('display','none');
		$('#phonesmall1').css('display','none');
		$('#phonesmall2').css('display','none');
		//fadeInImg('txtOneToAny',0.3);
		translateFadeIn('txtOneToAny',-50,0);
		
		//zoomRotate('div_phone',0.4,-90,1,'linear')
		startTranslate('tv',-637,0);
		//zoomRotateTranslate('div_phone',0.4,-90,540,120,0.75,'linear');
		zoomRotateTranslate('div_phone',0.4,-90,-148,120);
		$('#phone_small').attr('src','img/phone_no_shadow.png');
	},9700);
	
	var timeout11 = setTimeout(function(){
		clearTimeout(timeout11);
		fadeInImg('miniImg',0.3);
	},10500);
	
	var timeout12 = setTimeout(function(){
		clearTimeout(timeout12);
		startTranslate('frame1',-768,0);
		
		fadeOutImg('txtOneToAny',0.3);
		fadeOutImg('txtIntro',0.3);
		fadeOutImg('txtNewWay',0.3);
		fadeOutImg('txtShare',0.3);
	},12000);
	
	
	var timeout28 = setTimeout(function(){
		clearTimeout(timeout28);
		startTranslate('bigphone',-517,0);
	},13000);
	var timeout29 = setTimeout(function(){
		clearTimeout(timeout29);
		fadeInImg('light2',0.3);
		fadeInImg('txtTheNext',0.3);
		fadeInImg('button',0.3);
	},13600);
	
	var timeout30 = setTimeout(function(){
		clearTimeout(timeout30);
		fadeInImg('txtThing',0.3);
	},14000);
}


/*----------------------------------------------------------------------------------------------------------------------*/

function enableTransformRotate3D(id,time,timeFunc,centerX,centerY,centerZ){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%' + centerZ +'%');
	$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY + centerZ +'%');
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

function enableTranformZoomRotateTranslate(id,initScale,centerX,centerY,angle,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	
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
function zoomRotateTranslate(id,scale,angle,x,y){
	//$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	//$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	
	$('#'+id).css('-webkit-transform',' translate('+x+'px,'+y+'px) scale('+scale+') ' + 'rotateX(0deg) ' + 'rotateY(0deg) ' + 'rotateZ('+angle+'deg)');
	$('#'+id).css('-moz-transform','translate('+x+'px,'+y+'px) scale('+scale+') ' + 'rotate('+angle+'deg)');
	
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

function translateFadeIn(id,translateX,translateY){
	$('#'+id).css('-webkit-transform','translate('+translateX+'px,'+translateY+'px)');
	$('#'+id).css('-moz-transform','translate('+translateX+'px,'+translateY+'px)');
	$('#'+id).css('opacity','1');
	
}

function translateFadeOut(id,translateX,translateY){
	$('#'+id).css('-webkit-transform','translate('+translateX+'px,'+translateY+'px)');
	$('#'+id).css('-moz-transform','translate('+translateX+'px,'+translateY+'px)');
	$('#'+id).css('opacity','0');
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