
window.requestAnimationFrame =  function(callback){return window.setTimeout(callback,1000/8);};

$(document).ready(function(){
	setTimeout(function(){
		loading();
		preloadImage();
	},1000);
	hideAddress();
	
	var heightView = $(window).height();
	if(heightView > 400){
		$('#bottom_logo').css('bottom','20px');
		$('#more_infor').css('bottom','25px');
	}
});

function hideAddress(){
	window.scrollTo(0, 1);
}


var loadingObj = null;
function loading(){
	enableTranform('loading_scene',0.5,'linear');
	enableTranform('pointer',1,'linear');
	enableTranform('top_logo',1,'linear');
	enableTranform('more_infor',1,'linear');
	enableTranform('swipe',0.5,'linear');
	
	var indexLoading = 0;
	var arrPosition = new Array();
	arrPosition.push(114);
	arrPosition.push(144);
	arrPosition.push(175);
	var loadingPoint = $('#point_loading');
	
	loadingObj = setInterval(function(){
		indexLoading++;
		if(indexLoading >= arrPosition.length)
			indexLoading = 0;
		
		startTranslate('point_loading',arrPosition[indexLoading] - arrPosition[0],0);
	},1000);
}

function stopLoading(){
	if(loadingObj != null)
		clearInterval(loadingObj);
}

var arrImage = new Array();
var loaded = 0;
function preloadImage(){
	var numberPreload = 47;
	for(var i = 1;i <= numberPreload; i++){
		var image = new Image();
		image.onload = function(){
			loaded++;
			if(loaded == numberPreload){
				start();
			}
		}
		image.src = "img/fly_" + i + ".jpg";
		arrImage.push(image);
		if(i == 39){
			arrImage.push(image);
			arrImage.push(image);
			arrImage.push(image);
		}
	}
}

var countDraw = 0;
var canvas = null;
var context = null;
function start(){
	fadeOutImg('loading_scene',0.5);
	stopLoading();
	
	var timeout = setTimeout(function(){
		$('#color_img').css('display','block');
		
		canvas = document.getElementById('gray_canvas');
		context = canvas.getContext('2d');
		(function drawFrame(){
			if(countDraw < arrImage.length - 1){
				window.requestAnimationFrame(drawFrame, canvas);
				context.drawImage(arrImage[countDraw++],0,0);
			}
			else{
				context.drawImage(arrImage[countDraw++],0,0);
				//$('#bottom_logo').css('display','none');
				swipe();
			}
		}());
	},500);
}

function swipe(){
	fadeInImg('swipe',1);
	var timeout = setTimeout(function(){
		startTranslate('pointer',-135,0);
	},1500);
	
	document.addEventListener('touchmove', function(e) {
		e.preventDefault();
		e.stopPropagation();
	});
	
	var timeout2 = setTimeout(function(){
		fadeOutImg('swipe',0.5);
		fadeOutImg('pointer',0.5);
		coloring();
		timeout2 = null;
	},5000);
	
	var swipe = document.getElementById('swipe');
	swipe.addEventListener('touchend',function(){
		if(timeout2 != null){
			clearTimeout(timeout2);
			fadeOutImg('swipe',0.5);
			fadeOutImg('pointer',0.5);
			coloring();
		}
	});
	
	canvas.addEventListener('touchmove',function(){
		if(timeout2 != null){
			clearTimeout(timeout2);
			fadeOutImg('swipe',0.5);
			fadeOutImg('pointer',0.5);
			coloring();
		}
	});
}

function coloring(){
	var timeout = setTimeout(function(){	
		autoColoring();
		clearTimeout(timeout);
		timeout = null;
	},5000);
	
	var registed = false;
	canvas.addEventListener('touchstart', function() {
		moving = true;
		if(timeout != null && !registed){
			registed = true;
			timeout = setTimeout(function(){	
				autoColoring();
				clearTimeout(timeout);
				timeout = null;
			},7000);
		}
	});
	canvas.addEventListener('touchmove', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var x = e.touches[0].pageX;
		var y = e.touches[0].pageY;
		eraserGrayImage(x, y);
	});
	canvas.addEventListener('touchend', function() {
		moving = false;
	});
}

function initAutoColoring(){
	var timeout = setTimeout(function(){	
		autoColoring();
		clearTimeout(timeout);
		timeout = null;
	},5000);
}

function autoColoring(){
	var height = 480;
	var width = 320;
	var indexX = 320;
	var indexY = 480;
	var directX = -1;
	var deltaX = 30;
	var deltaY = 50;
	
	var colorInterval = setInterval(function(){
		if(indexX <= 0 &&  indexY <= 0){
			clearInterval(colorInterval);
			finalScene();
		}
		eraserGrayImage(indexX, indexY);
		indexX += directX * deltaX;
		if(indexX < 0 || indexX > width){
			directX *= -1;
			indexY -= deltaY;
		}
	},10);
}

function eraserGrayImage(x, y){
	var w = 60;
	context.clearRect(x-w/2, y-w/2, w, w);
	w = 30;
	w1 = 35;
	context.clearRect(x-w/2, y-w1, w, w1);
	context.clearRect(x-w1, y-w/2, w1, w);
	context.clearRect(x, y-w/2, w1, w);
	context.clearRect(x-w/2, y, w, w1);
}

function finalScene(){
	fadeInImg('top_logo',1);
	var timeout = setTimeout(function(){
		fadeInImg('more_infor',1);
		clearTimeout(timeout);
	},500);
	
	/*
	$('#more_infor').click(function(){
		fadeInImg('site',1);
	});
	*/
	
	document.removeEventListener('touchmove',false);
	canvas.removeEventListener('touchstart',false);
	canvas.removeEventListener('touchmove',false);
	canvas.removeEventListener('touchend',false);
}


/*----------------------------------------------------------------------------------------------------------------------*/

function enableTransformRotate3D(id,time,timeFunc,centerX,centerY){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
	$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY);
}

function rotate3dAnimation(id,rotateX,rotateY,rotateZ){
	$('#'+id).css('-webkit-transform','rotateX('+rotateX+'deg) ' + 'rotateY('+rotateY+'deg) ' + 'rotateZ('+rotateZ+'deg)');
}

function rotate3dAnimationFadeOut(id,rotateX,rotateY,rotateZ){
	$('#'+id).css('-webkit-transform','rotateX('+rotateX+'deg) ' + 'rotateY('+rotateY+'deg) ' + 'rotateZ('+rotateZ+'deg)');
	$('#'+id).css('opacity',0.2);
}

function rotate3dAnimationFadeIn(id,rotateX,rotateY,rotateZ){
	setTimeout(function(){
		$('#'+id).css('-webkit-transform','rotateX('+rotateX+'deg) ' + 'rotateY('+rotateY+'deg) ' + 'rotateZ('+rotateZ+'deg)');
	},1000);
	$('#'+id).css('opacity',1);
}

function rotate3dAnimationOut(id,rotateX,rotateY,rotateZ){
	$('#'+id).css('-webkit-transform','rotateX('+rotateX+'deg) ' + 'rotateY('+rotateY+'deg) ' + 'rotateZ('+rotateZ+'deg)');
	$('#'+id).css('opacity','0');
}

function rotate3dAnimationIn(id,rotateX,rotateY,rotateZ){
	$('#'+id).css('-webkit-transform','rotateX('+rotateX+'deg) ' + 'rotateY('+rotateY+'deg) ' + 'rotateZ('+rotateZ+'deg)');
	$('#'+id).css('opacity','1');
}

function enableTranformZoomRotate(id,initScale,centerX,centerY,angle){
	$('#'+id).css('-webkit-transform','scale('+initScale+') ' + 'rotateX(0deg) ' + 'rotateY(0deg) ' + 'rotateZ('+angle+'deg)');
	$('#'+id).css('-moz-transform', 'scale('+initScale+') ' + 'rotateX(0deg) ' + 'rotateY(0deg) ' + 'rotateZ('+angle+'deg)');
	
	$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
	$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY+ '%');
	
	$('#'+id).css('-webkit-backface-visibility','hidden');
}

function zoomRotate(id,scale,angle,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	
	$('#'+id).css('-webkit-transform','scale('+scale+') ' + 'rotateX(0deg) ' + 'rotateY(0deg) ' + 'rotateZ('+angle+'deg)');
	$('#'+id).css('-moz-transform','scale('+scale+') ' + 'rotateX(0deg) ' + 'rotateY(0deg) ' + 'rotateZ('+angle+'deg)');
}

function enableTranformZoom(id,initScale,centerX,centerY){
	$('#'+id).css('-webkit-transform','scale('+initScale+')');
	$('#'+id).css('-moz-transform', 'scale('+initScale+')');
	
	$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
	$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY+ '%');
	
	$('#'+id).css('-webkit-backface-visibility','hidden');
}	

function zoomAnimation(id,scale,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	
	$('#'+id).css('-webkit-transform','scale('+scale+')');
	$('#'+id).css('-moz-transform','scale('+scale+')');
}

function zoomInAnimation(id,scale,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	
	$('#'+id).css('-webkit-transform','scale('+scale+')');
	$('#'+id).css('-moz-transform','scale('+scale+')');
	$('#'+id).css('opacity','1');
	$('#'+id).css('display','block');
}

function enableTranform(id,time,timeFunc){
	$('#'+id).css('-webkit-transition', 'all '+time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition','all '+ time + 's ' + timeFunc);
}	

function startTranslate(id,translateX,translateY){
	$('#'+id).css('-webkit-transform','translate('+translateX+'px,'+translateY+'px)');
	$('#'+id).css('-moz-transform','translate('+translateX+'px,'+translateY+'px)');
}


function fadeInImg(id,time){
	$('#'+id).css('display','block');
	var timeout = setTimeout(function(){
		$('#'+id).css('opacity',1);
		clearTimeout(timeout);
	},100);
	/*
	$('#'+id).css('-moz-animation','fadein '+time+'s linear');
	$('#'+id).css('-webkit-animation','fadein '+time+'s linear');
	$('#'+id).css('-webkit-animation-fill-mode','forwards');
	$('#'+id).css('-moz-animation-fill-mode','forwards');
	*/
}

function fadeOutImg (id,time){
	/*
	$('#'+id).css('-moz-animation','fadeout '+time+'s linear');
	$('#'+id).css('-webkit-animation','fadeout '+time+'s linear');
	$('#'+id).css('-webkit-animation-fill-mode','forwards');
	$('#'+id).css('-moz-animation-fill-mode','forwards');
	*/
	$('#'+id).css('opacity',0);
	setTimeout(function(){
		$('#'+id).css('display','none');
	},time*1000);
}