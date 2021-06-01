$(document).ready(function(){
	$("<img/>").attr("src","img_banner/768x65_bg.jpg").load(preload);
	$("<img/>").attr("src","img_banner/768x65_1.jpg").load(preload);
	$("<img/>").attr("src","img_banner/768x65_headtext_1.png").load(preload);
	$("<img/>").attr("src","img_banner/768x65_2.jpg").load(preload);
	$("<img/>").attr("src","img_banner/768x65_headtext_2.png").load(preload);
	$("<img/>").attr("src","img_banner/768x65_3.png").load(preload);
});

loaded = 0;

function preload(){
	if(loaded == 5){
		$('#img_bg').css('display','block');
		$('.frame').css('display','block');
		$('#frame4').css('display','none');
		setTimeout(function(){start();},1000);
	}
	loaded ++;
}

function start(){
	fadeInImg('img1',0.5);
	
	setTimeout(function(){
		moveObject('frame1',768);
		moveObject('frame2',768);
	},750);
	setTimeout(function(){
		moveObject('img2',-280);
	},1000);
	setTimeout(function(){
		fadeInImg('img3',0.5);
	},1250);
	
	setTimeout(function(){
		moveObject('frame2',768);
		moveObject('frame3',768);
	},2000);
	setTimeout(function(){
		fadeInImg('img4',0.5);
	},2500);
	
	setTimeout(function(){
		moveObject('frame3',768);
	},3250);
	setTimeout(function(){
		fadeInImg('frame4',0.5);
	},3750);
}

function moveObject(id,delta){
	var left = parseFloat($('#'+id).css('left'));
	$('#'+id).css('left',(left - delta)+'px');
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