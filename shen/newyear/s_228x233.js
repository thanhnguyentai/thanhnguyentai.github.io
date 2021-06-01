$(document).ready(function(){
	$("<img/>").attr("src","img_banner/228x233_bg.jpg").load(preload);	
	$("<img/>").attr("src","img_banner/228x233_logo.png").load(preload);	
	$("<img/>").attr("src","img_banner/228x233_tabhere.png").load(preload);	
	$("<img/>").attr("src","img_banner/228x233_text1.png").load(preload);	
	$("<img/>").attr("src","img_banner/228x233_text2.png").load(preload);	
	$("<img/>").attr("src","img_banner/228x233_text3.png").load(preload);	
	$("<img/>").attr("src","img_banner/228x233_text4.png").load(preload);	
	$("<img/>").attr("src","img_banner/228x233_text5.png").load(preload);	
	$("<img/>").attr("src","img_banner/228x233_text6.png").load(preload);	
	$("<img/>").attr("src","img_banner/228x233_text7.png").load(preload);	
	$("<img/>").attr("src","img_banner/228x233_text8.png").load(preload);	
	$("<img/>").attr("src","img_banner/228x233_text9.png").load(preload);	
});

loaded = 0;

function preload(){
	if(loaded == 11){
		prepare();		
		setTimeout(function(){start();},1000);
	}
	loaded ++;
}

function prepare(){
	enableTransformRotate3D('frame1_text1',1,'linear');
	enableTransformRotate3D('frame1_text2',1,'linear');
	enableTransformRotate3D('frame1_text3',1,'linear');
	enableTransformRotate3D('frame1_text4',1,'linear');
	
	enableTransformRotate3D('frame2_text1',1,'linear');
	enableTransformRotate3D('frame2_text2',1,'linear');
	enableTransformRotate3D('frame2_text3',1,'linear');
	enableTransformRotate3D('frame2_text4',1,'linear');
	
	$('#frame1').css('-webkit-perspective',300);
	$('#frame1').css('-webkit-perspective-origin', '50% 50%');
	
	$('#frame2').css('-webkit-perspective',300);
	$('#frame2').css('-webkit-perspective-origin', '50% 50%');
}

function start(){
	rotate3dAnimationOut('frame1_text1',0,360,0);
	setTimeout(function(){
		rotate3dAnimationIn('frame1_text2',0,360,0);
	},1000);
	
	setTimeout(function(){
		rotate3dAnimationOut('frame1_text2',0,720,0);
	},2500);
	setTimeout(function(){
		rotate3dAnimationIn('frame1_text3',0,360,0);
	},3500);
	
	setTimeout(function(){
		rotate3dAnimationOut('frame1_text3',0,720,0);
	},5000);
	setTimeout(function(){
		rotate3dAnimationIn('frame1_text4',0,360,0);
	},6000);
	
	setTimeout(function(){
		fadeOutImg('frame1',0.5);
	},7500);
	
	setTimeout(function(){
		fadeInImg('frame3',0.5);
	},8000);
	
	setTimeout(function(){
		fadeInImg('frame3_tabhere',0.5);
	},9000);
	
	setTimeout(function(){
		fadeOutImg('frame3',0.5);
	},10500);
	setTimeout(function(){
		fadeInImg('frame2',0.5);
	},11000);

	/*
	setTimeout(function(){
		fadeInImg('frame2_text1',0.5);
	},11500);
	*/
	setTimeout(function(){
		rotate3dAnimationOut('frame2_text1',0,360,0);
		//fadeOutImg('frame2_text1',1);
	},12000);
	
	setTimeout(function(){
		rotate3dAnimationIn('frame2_text2',0,360,0);
	},13000);
	
	setTimeout(function(){
		rotate3dAnimationOut('frame2_text2',0,720,0);
	},14500);
	setTimeout(function(){
		rotate3dAnimationIn('frame2_text3',0,360,0);
	},15500);
	
	setTimeout(function(){
		rotate3dAnimationOut('frame2_text3',0,720,0);
	},17000);
	setTimeout(function(){
		rotate3dAnimationIn('frame2_text4',0,360,0);
	},18000);
	
	setTimeout(function(){
		fadeOutImg('frame2',0.5);
	},19500);
	
	setTimeout(function(){
		fadeInImg('frame3',0.5);
	},20000);
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

function enableTranformZoom(id,time,timeFunc,initScale,centerX,centerY){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	
	$('#'+id).css('-webkit-transform','scale('+initScale+')');
	$('#'+id).css('-moz-transform', 'scale('+initScale+')');
	
	$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
	$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY+ '%');
}	

function zoomAnimation(id,scale){
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
