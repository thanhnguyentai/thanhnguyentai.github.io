$(document).ready(function(){
	$("<img/>").attr("src","img_banner/768x65_bg.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_1.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_2.png").load(preload);	
	$("<img/>").attr("src","img_banner/768x65_3.png").load(preload);	
});

loaded = 0;

function preload(){
	if(loaded == 3){
		$('#bg').css('display','block');		
		setTimeout(function(){start();},2000);
	}
	loaded ++;
}

function start(){	
	setTimeout(function(){		
		$('#item1').css('display','block');
		$('#item1').css('left','610px');		
	});
	setTimeout(function(){
		$('#item2').css('left','440px');
	});
	setTimeout(function(){
		$('#item3').css('left','240px');
	});
}
	
setTimeout(function(){
		var top = parseFloat($('#item1').css('top'));
		$('#item1').css('left',(left + 50)+'px');
	},100);

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
