$(document).ready(function(){
	$("<img/>").attr("src","img_banner/479x233_bg.jpg").load(preload);
	$("<img/>").attr("src","img_banner/479x233_logo.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_sayall.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_tabhere.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_text1_1.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_text1_2.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_text1_3.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_text1_4.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_text1_5.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_text1_6.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_text1_7.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_text1_8.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_text2_1.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_text2_2.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_text2_3.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_text2_4.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_text2_5.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_text2_6.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_text2_7.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_text2_8.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_text3_1.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_text3_2.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_text3_3.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_text3_4.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_text3_5.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_text3_6.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_text3_7.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_text3_8.png").load(preload);
});

loaded = 0;

function preload(){
	if(loaded == 27){
		setTimeout(function(){start();},1000);
		prepare();
	}
	loaded ++;
}

function prepare(){
	enableTranform('frame1_text1',0.5,'linear');
	enableTranform('frame1_text4',0.5,'linear');
	enableTranform('frame2_text1',0.5,'linear');
	enableTranform('frame2_text3',0.5,'linear');
	enableTranform('frame3_text1',0.5,'linear');
	enableTranform('frame3_text3',0.5,'linear');
	enableTranform('frame3_text4',0.5,'linear');
}

function start(){
	startTranslate('frame1_text1',147,-30);
	startTranslate('frame1_text4',-147,30);
	setTimeout(function(){
		startTranslate('frame1_text1',294,0);
		startTranslate('frame1_text4',-294,0);
	},500);
	
	setTimeout(function(){
		fadeInImg('frame1_text5',0.5);
	},1250);
	
	setTimeout(function(){
		fadeInImg('frame1_text6',0.5);
	},1500);
	setTimeout(function(){
		fadeInImg('frame1_text7',0.5);
	},1750);
	setTimeout(function(){
		fadeInImg('frame1_text8',0.5);
	},2000);
	
	setTimeout(function(){
		fadeOutImg('frame1',0.5);
	},3000);
	
	setTimeout(function(){
		fadeInImg('frame5',0.5);
	},3500);
	
	setTimeout(function(){
		fadeInImg('frame5_tabhere',0.5);
	},4500);
	
	setTimeout(function(){
		fadeOutImg('frame5',0.5);
	},5500);
	
	
	setTimeout(function(){
		fadeInImg('frame2',0.5);
	},6000);
	
	setTimeout(function(){
		startTranslate('frame2_text1',97,-30);
		startTranslate('frame2_text3',-97,30);
	},7000);
	setTimeout(function(){
		startTranslate('frame2_text1',195,0);
		startTranslate('frame2_text3',-195,0);
	},7500);
	
	setTimeout(function(){
		fadeInImg('frame2_text5',0.5);
	},8250);
	
	setTimeout(function(){
		fadeInImg('frame2_text6',0.5);
	},8500);
	setTimeout(function(){
		fadeInImg('frame2_text7',0.5);
	},8750);
	setTimeout(function(){
		fadeInImg('frame2_text8',0.5);
	},9000);
	
	
	setTimeout(function(){
		fadeOutImg('frame2',0.5);
	},10000);
	
	setTimeout(function(){
		fadeInImg('frame5',0.5);
	},10500);

	setTimeout(function(){
		fadeOutImg('frame5',0.5);
	},12500);
	
	setTimeout(function(){
		fadeInImg('frame3',0.5);
	},13000);
	
	setTimeout(function(){
		startTranslate('frame3_text1',105,-30);
		startTranslate('frame3_text3',99,0);
		startTranslate('frame3_text4',-155,30);
	},14000);
	
	setTimeout(function(){
		startTranslate('frame3_text1',211,0);
		startTranslate('frame3_text4',-310,0);
	},14500);
	
	setTimeout(function(){
		fadeInImg('frame3_text5',0.5);
	},15000);
	
	setTimeout(function(){
		fadeInImg('frame3_text6',0.5);
	},15250);
	setTimeout(function(){
		fadeInImg('frame3_text7',0.5);
	},15500);
	setTimeout(function(){
		fadeInImg('frame3_text8',0.5);
	},15750);
	
	setTimeout(function(){
		fadeOutImg('frame3',0.5);
	},17250);
	
	setTimeout(function(){
		fadeInImg('frame5',0.5);
	},17750);
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