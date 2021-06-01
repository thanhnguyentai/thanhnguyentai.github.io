$(document).ready(function(){
	$("<img/>").attr("src","img_banner/479x233_bg.jpg").load(preload);
	$("<img/>").attr("src","img_banner/479x233_1.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_2.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_3.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_2_1.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_4.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_5.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_6.png").load(preload);
});

loaded = 0;

function preload(){
	if(loaded == 7){
		prepare();
		setTimeout(function(){start();},1000);
	}
	loaded ++;
}

function prepare(){
	enableTranform('img2',1,'linear');
	enableTranform('img3',1,'linear');
}

function start(){
	startTranslate('img2',210,0);
	startTranslate('img3',-250,0);
	
	setTimeout(function(){
		enableTranform('img2',0.2,'linear');	
		fadeInImg('img2_2',0.2);
		startTranslate('img2',245,-40);
		fadeInImg('img4',0.2);
	},1500);
	
	setTimeout(function(){
		fadeOutImg('frame1',1);
		fadeInImg('frame2',1);
	},2500);
	
	setTimeout(function(){
		fadeOutImg('frame2',1);
		fadeInImg('frame3',1);
	},4000);
}

function enableTranform(id,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
}	

function startTranslate(id,translateX,translateY){
	$('#'+id).css('-webkit-transform','translate('+translateX+'px,'+translateY+'px)');
	$('#'+id).css('-moz-transform','translate('+translateX+'px,'+translateY+'px)');
}

function startZoom(id,degree){
}

function startScale(id,scale){
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