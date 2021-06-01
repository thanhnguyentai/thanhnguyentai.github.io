$(document).ready(function(){
	$("<img/>").attr("src","img_banner/479x233_bg.jpg").load(preload);
	$("<img/>").attr("src","img_banner/479x233_1.jpg").load(preload);
	$("<img/>").attr("src","img_banner/479x233_6.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_2.jpg").load(preload);
	$("<img/>").attr("src","img_banner/479x233_headtext_1.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_7.png").load(preload);
});

loaded = 0;

function preload(){
	if(loaded == 5){
		$('#img_bg').css('display','block');
		$('#img1').css('display','block');
		$('#img4').css('display','block');
		setTimeout(function(){start();},1000);
	}
	loaded ++;
}

function start(){
	moveObject('img3',479);
	setTimeout(function(){
		fadeInImg('img2',0.5);
	},250);
	
	setTimeout(function(){
		moveObject('frame1_1',479);
		moveObject('frame1_2',479);
	},1000);
	
	setTimeout(function(){
		remove('frame1_1');
	},1500);
	
	setTimeout(function(){
		moveObject('frame1',479);
		moveObject('frame2',479);
	},1750);
	setTimeout(function(){
		fadeInImg('img7',0.5);
	},2250);
	
	setTimeout(function(){
		remove('frame1');
	},2500);
	
	
	setTimeout(function(){
		moveObject('frame2',479);
		moveObject('frame3',479);
	},3000);
	
	setTimeout(function(){
		fadeInImg('img12',0.5);
	},3500);
	
	setTimeout(function(){
		moveObject('frame3',479);
	},4250);
	
	setTimeout(function(){
		fadeInImg('frame4',0.5);
	},4750);
}

function remove(id){
	$('#'+id).remove();
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

