$(document).ready(function(){
	$("<img/>").attr("src","img_banner/230x241_bg.jpg").load(preload);	
	$("<img/>").attr("src","img_banner/230x241_1.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x241_2.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x241_3.png").load(preload);	
});

loaded = 0;

function preload(){
	if(loaded == 3){
		$('#bg').css('display','block');		
		setTimeout(function(){start();},500);
	}
	loaded ++;
}

function start(){	
	fadeInImg('item1',0.5);
	
	setTimeout(function(){		
		$('#item1').css('display','block');		
		$('#item1').css('-moz-animation','expand '+1+'s ease-in-out');
		$('#item1').css('-webkit-animation','expand '+1+'s ease-in-out');
		$('#item1').css('-webkit-animation-fill-mode','forwards');
		$('#item1').css('-moz-animation-fill-mode','forwards');	
	},750);   
	

	setTimeout(function(){
		fadeOutImg1('item1',0.5);
	},2000);
	
	setTimeout(function(){
		fadeInImg('item2',0.5);
	},2500);
	
	setTimeout(function(){
		fadeOutImg('item2',0.5);
	},3500);
	setTimeout(function(){	
		fadeInImg('item3',0.5);
	},4500);
}


	
/*	
setTimeout(function(){
		var top = parseFloat($('#item1').css('top'));
		$('#item1').css('left',(left + 50)+'px');
	,100);	
*/

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

function fadeOutImg1(id,time){
	$('#'+id).css('-moz-animation','fadeout1 '+time+'s linear');
	$('#'+id).css('-webkit-animation','fadeout1 '+time+'s linear');
	$('#'+id).css('-webkit-animation-fill-mode','forwards');
	$('#'+id).css('-moz-animation-fill-mode','forwards');
}
