$(document).ready(function(){
	$("<img/>").attr("src","img_banner/230x498_bg.jpg").load(preload);
	$("<img/>").attr("src","img_banner/230x498_len.png").load(preload);
	
	$("<img/>").attr("src","img_banner/230x498_artist5.png").load(preload);
	$("<img/>").attr("src","img_banner/230x498_artist4.png").load(preload);
	$("<img/>").attr("src","img_banner/230x498_artist3.png").load(preload);
	$("<img/>").attr("src","img_banner/230x498_artist2.png").load(preload);
	$("<img/>").attr("src","img_banner/230x498_artist1.png").load(preload);
	
	$("<img/>").attr("src","img_banner/230x498_text.png").load(preload);
	
	$("<img/>").attr("src","img_banner/230x498_sight1.png").load(preload);
	$("<img/>").attr("src","img_banner/230x498_sight2.png").load(preload);
	$("<img/>").attr("src","img_banner/230x498_sight3.png").load(preload);
	
	$("<img/>").attr("src","img_banner/230x498_text2.png").load(preload);
	$("<img/>").attr("src","img_banner/230x498_text3.png").load(preload);
	$("<img/>").attr("src","img_banner/230x498_findout.png").load(preload);
	
	prepare();
});

loaded = 0;
function prepare(){
	enableTranform('artist1',0.5,'linear');
	enableTranform('artist2',0.5,'linear');
	enableTranform('artist3',0.5,'linear');
	enableTranform('artist4',0.5,'linear');
	enableTranform('artist5',0.5,'linear');
	
	enableTranform('sight1',0.5,'linear');
	enableTranform('sight2',0.5,'linear');
	enableTranform('sight3',0.5,'linear');
}
	

function preload(){
	if(loaded == 13){
		setTimeout(function(){start();},1000);
		$('#frame1').show();
	}
	loaded ++;
}

function start(){	
	flash();
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
allLight.push(15);
allLight.push(16);
allLight.push(17);
allLight.push(18);

function flashLight(){
	var timeout = setTimeout(function(){
		var number = Math.floor(Math.random()*allLight.length);
		var random = Math.floor(Math.random()*2);
		if(random == 0){
			fadeOutImg('len'+allLight[number],0.2);
		}
		else{
			fadeInImg('len'+allLight[number],0.2);
		}
		clearTimeout(timeout);
		
		flashLight();
	},200);	
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
		dropArtist();
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

var arrArtist = new Array();
arrArtist.push(1);
arrArtist.push(2);
arrArtist.push(3);
arrArtist.push(4);
arrArtist.push(5);

function dropArtist(){
	if(arrArtist.length == 0){
		displayText();
		return;
	}
	var timeout = setTimeout(function(){
		var random = Math.floor(Math.random()*arrArtist.length);
		startTranslate('artist'+arrArtist[random],0,300);
		arrArtist.splice(random,1);
		clearTimeout(timeout);
		dropArtist();
	},250);
}

function displayText(){
	flashLight();
	setTimeout(function(){
		fadeInImg('text1',1);
	},500);
	
	setTimeout(function(){
		frame2();
	},2500);
}

function frame2(){
	fadeOutImg('frame1',1);
	fadeInImg('frame2',1);
	
	setTimeout(function(){
		dropSight();
	},1500);
}

var arraySight = new Array();
arraySight.push(1);
arraySight.push(2);
arraySight.push(3);
function dropSight(){
	if(arraySight.length == 0){
		displayText2();
		return;
	}
	var timeout = setTimeout(function(){
		var random = Math.floor(Math.random()*arraySight.length);
		startTranslate('sight'+arraySight[random],0,300);
		arraySight.splice(random,1);
		clearTimeout(timeout);
		dropSight();
	},250);
}

function displayText2(){
	setTimeout(function(){
		fadeInImg('text2',1);
	},500);
	
	setTimeout(function(){
		frame3();
	},2500);
}

function frame3(){
	fadeOutImg('frame2',1);
	fadeInImg('frame3',1);
	
	setTimeout(function(){
		fadeInImg('logo',0.5);
		setTimeout(function(){
			fadeInImg('findout',0.5);
		},1000);
	},1500);
}


	
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