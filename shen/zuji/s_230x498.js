$(document).ready(function(){
	$("<img/>").attr("src","img_banner/230x498_bg.jpg").load(preload);
	$("<img/>").attr("src","img_banner/230x498_01.png").load(preload);
	$("<img/>").attr("src","img_banner/230x498_02.png").load(preload);
	$("<img/>").attr("src","img_banner/230x498_03.png").load(preload);
});

loaded = 0;

function preload(){
	if(loaded == 3){
		$('#img').css('display','block');
		$('#img1').css('display','block');
		setTimeout(function(){start();},1000);
	}
	loaded ++;
}

function start(){
	slideInImg();
	setTimeout(function(){fadeOutImg('img1');},1000);
	setTimeout(function(){fadeInImg('img2');},2000);
}

function fadeInImg(id){
	$('#'+id).css('display','block');
	$('#'+id).css('-moz-animation','fadein 1s linear');
	$('#'+id).css('-webkit-animation','fadein 1s linear');
	$('#'+id).css('-webkit-animation-fill-mode','forwards');
	$('#'+id).css('-moz-animation-fill-mode','forwards');
}

function fadeOutImg(id){
	$('#'+id).css('-moz-animation','fadeout 1s linear');
	$('#'+id).css('-webkit-animation','fadeout 1s linear');
	$('#'+id).css('-webkit-animation-fill-mode','forwards');
	$('#'+id).css('-moz-animation-fill-mode','forwards');
}

function slideInImg(){
	$('#img3').css('display','block');
	$('#img3').css('-moz-animation','slidein 0.5s linear');
	$('#img3').css('-webkit-animation','slidein 0.5s linear');
	$('#img3').css('-webkit-animation-fill-mode','forwards');
	$('#img3').css('-moz-animation-fill-mode','forwards');
}