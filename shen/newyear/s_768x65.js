$(document).ready(function(){
	$("<img/>").attr("src","img_banner/768x65_bg.jpg").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_sayall.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_tabhere.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_text1_1.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_text1_2.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_text1_3.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_text1_4.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_text1_5.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_text1_6.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_text1_7.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_text1_8.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_text2_1.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_text2_2.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_text2_3.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_text2_4.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_text2_5.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_text2_6.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_text2_7.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_text2_8.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_text3_1.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_text3_2.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_text3_3.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_text3_4.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_text3_5.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_text3_6.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_text3_7.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_text3_8.png").load(preload);	
});

loaded = 0;

function preload(){
	if(loaded == 26){
		prepare();
		setTimeout(function(){start();},1000);
	}
	loaded ++;
}

function prepare(){
	enableTranform('frame1_text1',0.5,'linear');
	enableTranform('frame1_text2',0.5,'linear');
	enableTranform('frame1_text3',0.5,'linear');
	enableTranform('frame1_text4',0.5,'linear');
	
	enableTranform('frame2_text1',0.5,'linear');
	enableTranform('frame2_text2',0.5,'linear');
	enableTranform('frame2_text3',0.5,'linear');
	enableTranform('frame2_text4',0.5,'linear');
	
	enableTranform('frame3_text1',0.5,'linear');
	enableTranform('frame3_text2',0.5,'linear');
	enableTranform('frame3_text3',0.5,'linear');
	enableTranform('frame3_text4',0.5,'linear');
}

function start(){	
	/*
	startTranslate('frame1_text1',65,0);
	startTranslate('frame1_text2',-50,-10);
	startTranslate('frame1_text3',-100,-10);
	startTranslate('frame1_text4',-115,0);
	
	setTimeout(function(){
		startTranslate('frame1_text2',-100,0);
		startTranslate('frame1_text3',-200,0);
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
		fadeOutImg('frame1',0.5)
	},3000);
	setTimeout(function(){
		fadeInImg('frame4',0.5);
	},3500);
	
	*/
	/*
	setTimeout(function(){
		fadeInImg('frame1_text5',0.5);
	},500);
	
	setTimeout(function(){
		fadeInImg('frame1_text6',0.5);
	},750);
	
	setTimeout(function(){
		fadeInImg('frame1_text7',0.5);
	},1000);
	setTimeout(function(){
		fadeInImg('frame1_text8',0.5);
	},1250);
	*/
	
	setTimeout(function(){
		fadeOutImg('frame1',0.25)
	},1000);
	setTimeout(function(){
		fadeInImg('frame4',0.25);
	},1250);
	
	setTimeout(function(){
		fadeOutImg('frame4',0.25);
	},3000);
	
	setTimeout(function(){
		fadeInImg('frame2',0.25);
	},3250);
	
	/*
	setTimeout(function(){
		startTranslate('frame2_text1',-15,-10);
		startTranslate('frame2_text2',-150,0);
		startTranslate('frame2_text3',-128,-10);
		startTranslate('frame2_text4',-60,0);
	},6000);
	
	setTimeout(function(){
		startTranslate('frame2_text1',-30,0);
		startTranslate('frame2_text3',-255,0);
	},6500);
	
	setTimeout(function(){
		fadeInImg('frame2_text5',0.5);
	},7250);
	
	setTimeout(function(){
		fadeInImg('frame2_text6',0.5);
	},7500);
	setTimeout(function(){
		fadeInImg('frame2_text7',0.5);
	},7750);
	setTimeout(function(){
		fadeInImg('frame2_text8',0.5);
	},8000);
	*/
	/*
	setTimeout(function(){
		fadeInImg('frame2_text5',0.5);
	},5500);
	
	setTimeout(function(){
		fadeInImg('frame2_text6',0.5);
	},5750);
	setTimeout(function(){
		fadeInImg('frame2_text7',0.5);
	},6000);
	setTimeout(function(){
		fadeInImg('frame2_text8',0.5);
	},6250);
	*/
	setTimeout(function(){
		fadeOutImg('frame2',0.25)
	},5000);
	
	setTimeout(function(){
		fadeInImg('frame4',0.25);
	},5250);
	
	setTimeout(function(){
		fadeOutImg('frame4',0.25);
	},7000);
	
	setTimeout(function(){
		fadeInImg('frame3',0.25);
	},7250);
	
	/*
	setTimeout(function(){
		startTranslate('frame3_text1',22,-10);
		startTranslate('frame3_text2',-70,0);
		startTranslate('frame3_text3',50,0);
		startTranslate('frame3_text4',-110,-10);
	},12500);
	
	setTimeout(function(){
		startTranslate('frame3_text1',45,0);
		startTranslate('frame3_text4',-220,0);
	},13000);
	
	setTimeout(function(){
		fadeInImg('frame3_text5',0.5);
	},14000);
	
	setTimeout(function(){
		fadeInImg('frame3_text6',0.5);
	},14250);
	setTimeout(function(){
		fadeInImg('frame3_text7',0.5);
	},14500);
	setTimeout(function(){
		fadeInImg('frame3_text8',0.5);
	},14750);
	*/
	/*
	setTimeout(function(){
		fadeInImg('frame3_text5',0.5);
	},10750);
	
	setTimeout(function(){
		fadeInImg('frame3_text6',0.5);
	},11000);
	setTimeout(function(){
		fadeInImg('frame3_text7',0.5);
	},11250);
	setTimeout(function(){
		fadeInImg('frame3_text8',0.5);
	},11500);
	*/
	setTimeout(function(){
		fadeOutImg('frame3',0.25)
	},9000);
	
	setTimeout(function(){
		fadeInImg('frame4',0.25);
	},9250);
	
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
