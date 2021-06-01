
var swipePanel1;
var swipePanel2;
var swipePanel3;
var swipePanel4;
var video;

$(document).ready(function(){
	window.top.scrollTo(0, 1);
	$("<img/>").attr("src","img/bg.jpg").load(preload);
	$("<img/>").attr("src","img/big_img1.jpg").load(preload);
	$("<img/>").attr("src","img/big_img2.jpg").load(preload);
	$("<img/>").attr("src","img/big_img3.jpg").load(preload);
	$("<img/>").attr("src","img/big_img4.jpg").load(preload);
	$("<img/>").attr("src","img/big_img5.jpg").load(preload);
	$("<img/>").attr("src","img/big_img6.jpg").load(preload);
	$("<img/>").attr("src","img/big_img7.jpg").load(preload);
	$("<img/>").attr("src","img/big_img8.jpg").load(preload);
	$("<img/>").attr("src","img/panel2_logo.png").load(preload);
	$("<img/>").attr("src","img/panel2_text.png").load(preload);
	$("<img/>").attr("src","img/panel3_text.png").load(preload);
	$("<img/>").attr("src","img/panel4_logo.png").load(preload);
	$("<img/>").attr("src","img/small_img1.jpg").load(preload);
	$("<img/>").attr("src","img/small_img2.jpg").load(preload);
	$("<img/>").attr("src","img/small_img3.jpg").load(preload);
	$("<img/>").attr("src","img/small_img4.jpg").load(preload);
	$("<img/>").attr("src","img/small_img5.jpg").load(preload);
	$("<img/>").attr("src","img/small_img6.jpg").load(preload);
	$("<img/>").attr("src","img/small_img7.jpg").load(preload);
	$("<img/>").attr("src","img/small_img8.jpg").load(preload);
	prepare();
});

loaded = 0;

function prepare(){
	enableTranform('banner_content',0.5,'linear');
	swipePanel1 = document.getElementById('panel1');
	new BindSwipeGesture(swipePanel1);
	swipePanel1.addEventListener('swipeleft',function(){
		startTranslate('banner_content',0,0);
	});
	
	swipePanel2 = document.getElementById('panel2');
	new BindSwipeGesture(swipePanel2);
	swipePanel2.addEventListener('swipeleft',function(){
		startTranslate('banner_content',-768,0);
		video.pause();
	});
	swipePanel2.addEventListener('swiperight',function(){
		startTranslate('banner_content',768,0);
		video.pause();
		/*
		if(isDone)
			jQuery(y.body.getElementsByTagName('div')[1]).scroller({});
		*/
	});
	
	swipePanel3 = document.getElementById('panel3');
	new BindSwipeGesture(swipePanel3);
	swipePanel3.addEventListener('swipeleft',function(){
		startTranslate('banner_content',-1536,0);
	});
	swipePanel3.addEventListener('swiperight',function(){
		startTranslate('banner_content',0,0);
	});
	
	swipePanel4 = document.getElementById('panel4');
	new BindSwipeGesture(swipePanel4);
	swipePanel4.addEventListener('swiperight',function(){
		startTranslate('banner_content',-768,0);
	});
	
	video = document.getElementById('video');
	
	$('.img_container').click(function(){
		var img = $(this).attr('id').substr(3);
		displayBigImage(img);
	});
	
	$('#blur_layer').click(function(){
		hideBigImage();
	});
	
	$('#btClose').click(function(){
		hideBigImage();
	});
	
	
	$('#panel1_content').scroller({});
	
	$('#link_outsite').css('width',$('#panel1_content').width()+'px').css('height',$('#panel1_content').height()+'px');
	//var website = document.getElementById('website');
	/*
	website.onload = function(){
	
		y = website.contentDocument || website.contentWindow;
		var temp = y.body.innerHTML;
		y.body.innerHTML = "<div style='width:868px;height:1004px; position:absolute;top:0;left:0;'><div id='content_iframe' style='zoom:80%;position:relative;'>"+temp+"<a style='position:absolute;top:0;left:0;' href='http://www.cosmopolitanlasvegas.com/stay/rooms-and-suites.aspx' target='_blank'></a></div></div>";
		
		initScroller();
		
	};
	*/
}

var isDone = false;
function initScroller(){
	/*
	isDone = true
	jQuery(y.body.getElementsByTagName('a')[y.body.getElementsByTagName('a').length-1]).css('width',jQuery(y.body.getElementsByTagName('div')[1]).width()+'px').css('height',jQuery(y.body.getElementsByTagName('div')[1]).height()+'px');
	jQuery(y.body.getElementsByTagName('div')[1]).scroller({});
	
	swipePanel1 = y.body.getElementsByTagName('div')[0];
	new BindSwipeGesture(swipePanel1);
	swipePanel1.addEventListener('swipeleft',function(){
		startTranslate('banner_content',0,0);
	});
	*/
}

var currentImg = 1;
function displayBigImage(img){
	$('.big_img').css('display','none');
	$('#bigimg'+img).css('display','block');
	fadeInImg('big_img_container',0.5);
	
	currentImg = img;
}

function hideBigImage(){
	fadeOutImg('big_img_container',0.5);
}

function preload(){
	
}

function start(){
	
}


/*----------------------------------------------------------------------------------------------------------------------*/

function enableTransformRotate3D(id,time,timeFunc,centerX,centerY,centerZ){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%' + centerZ +'%');
	$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY + centerZ +'%');
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

function enableTranformZoomRotateTranslate(id,initScale,centerX,centerY,angle,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	
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
function zoomRotateTranslate(id,scale,angle,x,y){
	//$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	//$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	
	$('#'+id).css('-webkit-transform',' translate('+x+'px,'+y+'px) scale('+scale+') ' + 'rotateX(0deg) ' + 'rotateY(0deg) ' + 'rotateZ('+angle+'deg)');
	$('#'+id).css('-moz-transform','translate('+x+'px,'+y+'px) scale('+scale+') ' + 'rotate('+angle+'deg)');
	
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

function enableTranform(id,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
}	

function startTranslate(id,translateX,translateY){
	$('#'+id).css('-webkit-transform','translate('+translateX+'px,'+translateY+'px)');
	$('#'+id).css('-moz-transform','translate('+translateX+'px,'+translateY+'px)');
}

function translateFadeIn(id,translateX,translateY){
	$('#'+id).css('-webkit-transform','translate('+translateX+'px,'+translateY+'px)');
	$('#'+id).css('-moz-transform','translate('+translateX+'px,'+translateY+'px)');
	$('#'+id).css('opacity','1');
	
}

function translateFadeOut(id,translateX,translateY){
	$('#'+id).css('-webkit-transform','translate('+translateX+'px,'+translateY+'px)');
	$('#'+id).css('-moz-transform','translate('+translateX+'px,'+translateY+'px)');
	$('#'+id).css('opacity','0');
}


function fadeInImg(id,time){
	$('#'+id).css('display','block');
	$('#'+id).css('-moz-animation','fadein '+time+'s linear');
	$('#'+id).css('-webkit-animation','fadein '+time+'s linear');
	$('#'+id).css('-webkit-animation-fill-mode','forwards');
	$('#'+id).css('-moz-animation-fill-mode','forwards');
}

function fadeOutImg (id,time){
	$('#'+id).css('-moz-animation','fadeout '+time+'s linear');
	$('#'+id).css('-webkit-animation','fadeout '+time+'s linear');
	$('#'+id).css('-webkit-animation-fill-mode','forwards');
	$('#'+id).css('-moz-animation-fill-mode','forwards');
	setTimeout(function(){
		$('#'+id).css('display','none');
	},time*1000);
}