$(document).ready(function(){
	$("<img/>").attr("src","img_banner/230x498_cr1.png").load(preload);
	$("<img/>").attr("src","img_banner/230x498_cr2.png").load(preload);
	$("<img/>").attr("src","img_banner/230x498_cr3.png").load(preload);
	$("<img/>").attr("src","img_banner/230x498_cr4.png").load(preload);
	$("<img/>").attr("src","img_banner/230x498_text1.png").load(preload);
	$("<img/>").attr("src","img_banner/230x498_text2.png").load(preload);
	$("<img/>").attr("src","img_banner/230x498_bg.png").load(preload);
	$("<img/>").attr("src","img_banner/230x498_bg2.png").load(preload);
	$("<img/>").attr("src","img_banner/230x498_button.png").load(preload);
});

var loaded = 0
function preload(){
	if(loaded == 8)
		setTimeout('start()',1000);
	loaded++;
}
function start(){
	fadeInImg('text1',0.5);
	var timeout1 = setTimeout(function(){
		clearTimeout(timeout1);
		fadeInImg('cr1',0.5);
	},500);
	var timeout2 = setTimeout(function(){
		clearTimeout(timeout2);
		fadeInImg('cr2',0.5);
	},1000);
	var timeout3 = setTimeout(function(){
		clearTimeout(timeout3);
		fadeInImg('cr3',0.5);
	},1500);
	var timeout4 = setTimeout(function(){
		clearTimeout(timeout4);
		fadeInImg('cr4',0.5);
	},2000);
	var timeout5 = setTimeout(function(){
		clearTimeout(timeout5);
		fadeInImg('bg2',0.5);
	},3500);
	var timeout6 = setTimeout(function(){
		clearTimeout(timeout6);
		fadeInImg('text2',0.5);
	},4000);
	var timeout7 = setTimeout(function(){
		clearTimeout(timeout7);
		fadeInImg('button',0.5);
	},5000);
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
