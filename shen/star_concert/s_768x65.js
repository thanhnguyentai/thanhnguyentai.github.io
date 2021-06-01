$(document).ready(function(){
	$("<img/>").attr("src","img_banner/768x65_bg.jpg").load(preload);
	$("<img/>").attr("src","img_banner/768x65_len.png").load(preload);
	$("<img/>").attr("src","img_banner/768x65_frame1.png").load(preload);
	$("<img/>").attr("src","img_banner/768x65_frame2.png").load(preload);
	$("<img/>").attr("src","img_banner/768x65_frame3.png").load(preload);
	
});

var loaded = 0;
function preload(){
	if(loaded == 4){
		setTimeout(function(){start();},1000);
		$('#frame').show();
	}
	loaded ++;
}

function start(){	
	//flash();
	continueAnimation();
}

var arrLen = new Array();
arrLen.push(1);
arrLen.push(2);
arrLen.push(3);
arrLen.push(4);
arrLen.push(5);
arrLen.push(6);
arrLen.push(7);
arrLen.push(8);
arrLen.push(9);
arrLen.push(10);
arrLen.push(11);
arrLen.push(12);
arrLen.push(13);
arrLen.push(14);
arrLen.push(15);
arrLen.push(16);
arrLen.push(17);
arrLen.push(18);

function flash(){
	if(arrLen.length == 0){
		return;
	}
	var timeout = setTimeout(function(){
		var random = Math.floor(Math.random()*arrLen.length);
		fadeInImg('len'+arrLen[random],0.2);
		arrLen.splice(random,1);
		clearTimeout(timeout);
		flash();
	},100);
}

function continueAnimation(){
	flashLight();
	fadeInImg('frame1',0.5);
	
	setTimeout(function(){
		fadeOutImg('frame1',0.5);
		fadeInImg('frame2',0.5);
	},1500);
	
	setTimeout(function(){
		fadeOutImg('frame2',0.5);
		fadeInImg('frame3',0.5);
	},3000);
}

var allLight = new Array();
allLight.push(1);
allLight.push(2);
allLight.push(3);
allLight.push(4);
allLight.push(5);
allLight.push(6);
allLight.push(7);
allLight.push(8);
allLight.push(9);
allLight.push(10);
allLight.push(11);
allLight.push(12);
allLight.push(13);
allLight.push(14);

function flashLight(){
	var timeout = setTimeout(function(){
		var number = Math.floor(Math.random()*allLight.length);
		var random = Math.floor(Math.random()*2);
		if(random == 0){
			fadeOutImg('len'+allLight[number],0.1);
		}
		else{
			fadeInImg('len'+allLight[number],0.1);
		}
		clearTimeout(timeout);
		
		flashLight();
	},100);	
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