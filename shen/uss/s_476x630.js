$(document).ready(function(){
	$("<img/>").attr("src","img_banner/476x630_bg1.png").load(preload);
	$("<img/>").attr("src","img_banner/476x630_bg2.png").load(preload);
	$("<img/>").attr("src","img_banner/476x630_cr1.png").load(preload);
	$("<img/>").attr("src","img_banner/476x630_cr2.png").load(preload);
	$("<img/>").attr("src","img_banner/476x630_cr3.png").load(preload);
	$("<img/>").attr("src","img_banner/476x630_cr4.png").load(preload);
	$("<img/>").attr("src","img_banner/476x630_button.png").load(preload);
	$("<img/>").attr("src","img_banner/476x630_text1.png").load(preload);
	$("<img/>").attr("src","img_banner/476x630_text2.png").load(preload);
});

loaded = 0;

function preload(){
	if(loaded == 8){
		setTimeout('start()',1000);
	}
	loaded ++;
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
	
	
	var timeout6 = setTimeout(function(){
		clearTimeout(timeout6);
		fadeInImg('bg2',0.5);
	},3500);
	
	var timeout7 = setTimeout(function(){
		clearTimeout(timeout7);
		fadeInImg('text2',0.5);		
	},4000);
	
	var timeout8 = setTimeout(function(){
		clearTimeout(timeout8);
		fadeInImg('button',0.5);		
	},4500);
}


/*----------------------------------------------------------------------*/	
function enableTransformRotate3D(id,time,timeFunc,centerX,centerY,centerZ){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
}

function rotate3dAnimationOut(id,rotateX,rotateY,rotateZ){
	$('#'+id).css('-webkit-transform','rotateX('+rotateX+'deg) ' + 'rotateY('+rotateY+'deg) ' + 'rotateZ('+rotateZ+'deg)');
	$('#'+id).css('opacity','0');
}

function rotate3dAnimationIn(id,rotateX,rotateY,rotateZ){
	$('#'+id).css('-webkit-transform','rotateX('+rotateX+'deg) ' + 'rotateY('+rotateY+'deg) ' + 'rotateZ('+rotateZ+'deg)');
	$('#'+id).css('opacity','1');
}

function enableTranformZoom(id,initScale,centerX,centerY){
	$('#'+id).css('-webkit-transform','scale('+initScale+')');
	$('#'+id).css('-moz-transform', 'scale('+initScale+')');
	
	$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
	$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY+ '%');
}	

function zoomAnimation(id,scale,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	
	$('#'+id).css('-webkit-transform','scale('+scale+')');
	$('#'+id).css('-moz-transform','scale('+scale+')');
}

function enableTranform(id,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
}	

function startTranslate(id,translateX,translateY){
	$('#'+id).css('-webkit-transform','translate('+translateX+'px,'+translateY+'px)');
	$('#'+id).css('-moz-transform','translate('+translateX+'px,'+translateY+'px)');
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
