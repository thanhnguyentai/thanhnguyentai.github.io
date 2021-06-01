$(document).ready(function(){
	$("<img/>").attr("src","img_banner/288x233_bg.jpg").load(preload);
	$("<img/>").attr("src","img_banner/288x233_1.jpg").load(preload);
	$("<img/>").attr("src","img_banner/288x233_headtext_1.png").load(preload);
	$("<img/>").attr("src","img_banner/288x233_2.jpg").load(preload);
	$("<img/>").attr("src","img_banner/288x233_headtext_2.png").load(preload);
	$("<img/>").attr("src","img_banner/288x233_3.jpg").load(preload);
	$("<img/>").attr("src","img_banner/288x233_headtext_3.png").load(preload);
	$("<img/>").attr("src","img_banner/288x233_line.png").load(preload);
});

loaded = 0;

function preload(){
	if(loaded == 7){
		$('#img_bg').css('display','block');
		$('#img1').css('display','block');
		$('#img_line').css('display','block');
		setTimeout(function(){start();},1000);
	}
	loaded ++;
}

function start(){
	moveObject('img_line',228);
	setTimeout(function(){
		fadeInImg('img2',0.5);
	},250);
	
	setTimeout(function(){
		moveObject('img_line',290);
		moveObject('frame1',288);
		moveObject('frame2',288);
	},1000);
	setTimeout(function(){
		fadeInImg('img4',0.5);
	},1250);
	
	setTimeout(function(){
		moveObject('img_line',290);
		moveObject('frame2',288);
		moveObject('frame3',288);
	},2000);
	setTimeout(function(){
		fadeInImg('img6',0.5);
	},2250);
	
	setTimeout(function(){
		moveObject('img_line',290);
		moveObject('frame3',288);
		moveObject('frame4',288);
	},3000);
	setTimeout(function(){
		fadeInImg('img8',0.5);
	},3250);
	
	setTimeout(function(){
		moveObject('img_line',290);
		moveObject('frame4',288);
		moveObject('frame5',288);
	},4000);
	
	setTimeout(function(){
		moveObject('frame5',288);
	},5000);
	setTimeout(function(){
		fadeInImg('frame6',0.5);
	},5750);
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

