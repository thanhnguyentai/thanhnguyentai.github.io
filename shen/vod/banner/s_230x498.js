$(document).ready(function(){
	$("<img/>").attr("src","img_banner/230x498_bg.jpg").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_1.jpg").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_line.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_headtext_1.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_headtext_2.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_2.jpg").load(preload);
	$("<img/>").attr("src","img_banner/230x498_4.jpg").load(preload);
	$("<img/>").attr("src","img_banner/230x498_3.jpg").load(preload);

});

loaded = 0;

function preload(){
	if(loaded == 7){
		$('#img_bg').css('display','block');
		$('#img1').css('display','block');
		
		setTimeout(function(){start();},1000);
	}
	loaded ++;
}

function start(){
	moveObject('img_line',230);
	
	setTimeout(function(){
		fadeInImg('img2',0.5);
	},250);
	
	setTimeout(function(){
		zoomAndMove('img1',0.5);
		moveObject('img_line',250);
	},1000);
	
	setTimeout(function(){
		moveObject('img_line',250);
		moveObject('frame1',230);
		moveObject('frame2',230);
	},1700);
	
	setTimeout(function(){
		fadeInImg('img4',1);
	},2200);
	
	setTimeout(function(){
		moveObject('img_line',230);
		moveObject('frame2',230);
		moveObject('frame3',230);
	},3500);
	
	setTimeout(function(){
		moveObject('img_line',230);
		moveObject('frame3',230);
	},4500);
	
	setTimeout(function(){
		fadeInImg('frame4',1);
	},5000);
}

function moveObject(id,delta){
	var left = parseFloat($('#'+id).css('left'));
	$('#'+id).css('left',(left - delta)+'px');
}

function zoomAndMove(id, time){
	$('#'+id).css('display','block');
	$('#'+id).css('-moz-animation','zoom_move '+time+'s ease-in-out');
	$('#'+id).css('-webkit-animation','zoom_move '+time+'s ease-in-out');
	$('#'+id).css('-webkit-animation-fill-mode','forwards');
	$('#'+id).css('-moz-animation-fill-mode','forwards');
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
