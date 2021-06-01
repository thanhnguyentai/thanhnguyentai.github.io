$(document).ready(function(){
	$("<img/>").attr("src","img_banner/479x630_bg.jpg").load(preload);
	$("<img/>").attr("src","img_banner/479x630_1.jpg").load(preload);
	$("<img/>").attr("src","img_banner/479x630_2.png").load(preload);
	$("<img/>").attr("src","img_banner/479x630_3.jpg").load(preload);
	$("<img/>").attr("src","img_banner/479x630_headtext_1.png").load(preload);
	$("<img/>").attr("src","img_banner/479x630_headtext_2.png").load(preload);
	$("<img/>").attr("src","img_banner/479x630_line_1.png").load(preload);
});

loaded = 0;

function preload(){
	if(loaded == 6){
		$('#img_bg').css('display','block');
		$('#frame1').css('display','block');
		setTimeout(function(){start();},1000);
	}
	loaded ++;
}

function start(){
	moveObject('img4',285);
	
	setTimeout(function(){
		fadeInImg('img3',0.5);
	},250);
	
	setTimeout(function(){
		//moveObject('img_line',479);
		moveObject('img4',478);
		moveObject('img2',479);
	},1000);
	
	
	setTimeout(function(){
		//moveObject('img_line',479);
		moveObject('frame1',479);
		moveObject('frame2',479);
	},1750);
	
	setTimeout(function(){
		fadeInImg('img5',0.5);
	},2750);
	
	
	setTimeout(function(){
		//moveObject('img_line',479);
		moveObject('frame2',479);
		moveObject('frame3',479);
	},3750);
	
	setTimeout(function(){
		moveObject('frame3',479);
		//moveObject('img_line',479);
	},4750);
	
	setTimeout(function(){
		fadeInImg('frame4',0.5);
	},5200);
}

function moveObject(id,delta,isOpacity){
	var left = parseFloat($('#'+id).css('left'));
	$('#'+id).css('left',(left - delta)+'px');
	if(isOpacity != undefined){
		$('#'+id).css('opacity',0);
	}
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

