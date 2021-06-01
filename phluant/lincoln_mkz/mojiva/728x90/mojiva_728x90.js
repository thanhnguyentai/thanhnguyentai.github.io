$(document).ready(function(){
	$("<img/>").attr("src","img/border.png").load(preload);
	$("<img/>").attr("src","img/bg1.png").load(preload);
	$("<img/>").attr("src","img/car_above.png").load(preload);
	$("<img/>").attr("src","img/bg2.png").load(preload);
	$("<img/>").attr("src","img/expand_button.png").load(preload);
	$("<img/>").attr("src","img/text_footer.png").load(preload);
	$("<img/>").attr("src","img/bg_expanded.png").load(preload);
	$("<img/>").attr("src","img/galery_arrow_left.png").load(preload);
	$("<img/>").attr("src","img/galery_arrow_right.png").load(preload);
	$("<img/>").attr("src","img/text1.png").load(preload);
	$("<img/>").attr("src","img/text2.png").load(preload);
	$("<img/>").attr("src","img/text3.png").load(preload);
	$("<img/>").attr("src","img/text4.png").load(preload);
	
	$("<img/>").attr("src","img/expanded_fr2.png").load(preload);
	$("<img/>").attr("src","img/expanded_text.png").load(preload);
	$("<img/>").attr("src","img/expanded_link_video.png").load(preload);
	$("<img/>").attr("src","img/expanded_link_galery.png").load(preload);
	
	$("<img/>").attr("src","img/galery_img_1.jpg").load(preload);
	$("<img/>").attr("src","img/galery_img_2.jpg").load(preload);
	$("<img/>").attr("src","img/galery_img_3.jpg").load(preload);
	$("<img/>").attr("src","img/galery_img_4.jpg").load(preload);
	$("<img/>").attr("src","img/galery_img_5.jpg").load(preload);
	$("<img/>").attr("src","img/galery_img_6.jpg").load(preload);
	$("<img/>").attr("src","img/galery_img_7.jpg").load(preload);
	$("<img/>").attr("src","img/galery_img_8.jpg").load(preload);
	
	prepare();
	
	window.myFlux = new flux.slider('#expanded_galery',{
		autoplay: false,
		transitions:'slide',
		pagination:false,
		onTransitionEnd: function(data) {
		}}
	);
});


function prepare() {
	enableTransform2d('text1',1,0,0,0,1,'linear');
	enableTransform2d('btExpand',1,0,0,0,1,'linear');
	enableTransform2d('textFooter',1,0,0,0,1,'linear');
	
	enableTransform2d('text2',1,0,0,0,1,'linear');
	enableTransform2d('text3',1,0,0,0,1,'linear');
	enableTransform2d('text4',1,0,0,0,1,'linear');
	
	enableTransform2d('bg1',1.65,0,50,50,1,'linear');
	enableTransform2d('bg1_1',1,0,50,50,1,'linear');
	enableTransform2d('bg2',1,0,0,0,1,'linear');
	
	enableTransform2d('gallery',1,0,0,0,0.75,'linear');
	//enableTransform3d('expanded_galery',1,0,0,0,0,0,0.75,'linear');
	enableTransform2d('container_button_text',1,0,0,0,0.75,'linear');
}

loaded = 0;
currGalery = 0;

function preload(){
	if(loaded == 16){
		start();
	}
	loaded ++;
}

function start() {
	
	transform2d('bg1',1,0,0,0,false,false,1.5,'linear');
	transform2d('bg1_1',0.6,0,0,0,false,false,1.5,'linear');
	var timeOut0 = setTimeout(function() {
		clearTimeout(timeOut0);
		transform2d('text1',1,0,0,0,true,false,1,'linear');
	}, 500);
	
	var timeOut01 = setTimeout(function() {
		clearTimeout(timeOut01);
		transform2d('text2',1,0,0,0,true,false,1,'linear');
	}, 1000);
	
	var timeOut1 = setTimeout(function() {
		clearTimeout(timeOut1);
		transform2d('btExpand',1,0,0,0,true,false,1,'linear');
	}, 2000);
	
	var timeOut2 = setTimeout(function() {
		clearTimeout(timeOut2);
		transform2d('text3',1,0,0,0,true,false,1,'linear');
	}, 2500);
	
	var timeOut3 = setTimeout(function() {
		clearTimeout(timeOut3);
		transform2d('textFooter',1,0,0,0,true,false,1,'linear');
	}, 3500);
	
	var timeOutText = setTimeout(function() {
		transform2d('bg2',1,0,0,0,true,false,1,'linear');
		clearTimeout(timeOutText);
	}, 5500);
	
	var timeOutImg = setTimeout(function() {
		clearTimeout(timeOutImg);
		transform2d('text4',1,0,0,0,true,false,1,'linear');
	}, 6500);
	var timeOutImg1 = setTimeout(function() {
		clearTimeout(timeOutImg1);
		transform2d('fr4',1,0,0,0,true,false,1,'linear');
	}, 7000);
	
	$('#banner').bind('click', function() {
		$('#expanded').css('z-index', 2);
		transform2d('banner',1,0,0,0,false,true,0.5,'linear');
		
		var timeExpand = setTimeout(function() {
			clearTimeout(timeExpand);
			transform2d('expanded',1,0,0,0,true,false,0.5,'linear');
		}, 500);
	});
	
	$('#btViewVideo2').click(function(){
		$('#btViewVideo2').css('display','none');
		transform2d('container_button_text',1,0,0,0,true,false,0.5,'linear');	
		$('#galery_arrow_left').css('display','none');
		$('#imgVideoOut').css('opacity','1');
		$('#expanded_galery').css('opacity','0');
		
		if(current <= 4){
			var interval = setInterval(function(){
				if(current > 0){
					current--;
					window.myFlux.prev('slide');
				}
				else{
					$('#galery_arrow_left').css('display','none');
					clearInterval(interval);
					
					var timeout = setTimeout(function(){
						clearTimeout(timeout);
						$('#imgVideoOut').css('opacity','0');
						$('#expanded_galery').css('opacity','1');
					},750);
				}
			},50);
		}
		else{
			var interval = setInterval(function(){
				if(current <= 8){
					current++;
					window.myFlux.next('slide');
				}
				else{
					current = 0;
					$('#galery_arrow_left').css('display','none');
					clearInterval(interval);
					var timeout = setTimeout(function(){
						clearTimeout(timeout);
						$('#imgVideoOut').css('opacity','0');
						$('#expanded_galery').css('opacity','1');
					},750);
				}
			},50);
		}
	});
	
	$('#btViewVideo').click(function(){
		//transform2d('gallery',1,0,0,0,false,true,0.5,'linear');	
	});
	
	$('#btViewGallery').click(function(){
		$('#btViewVideo2').css('display','block');
		right();
	});
	
	var gallery = document.getElementById('gallery');
	new BindSwipeGesture(gallery);
	gallery.addEventListener('swipeleft',function(){
		right();
	});
	gallery.addEventListener('swiperight',function(){
		left();
	});
	
	$('#galery_arrow_left').bind('click', function() {
		left();
	});
	
	$('#galery_arrow_right').bind('click', function() {
		right();
	});
	
	$('#close_btn').bind('click', function() {
		$('#expanded').css('z-index', 0);
		transform2d('expanded',1,0,0,0,false,true,0.5,'linear');
		transform2d('banner',1,0,0,0,true,false,0.5,'linear');
	});
}

var current = 0;
var isEnable = true;

function left(){
	if(current == 0)
		return;
	current--;
	if(current < 0)
		current = 8;
	
	if(current == 0){
		$('#galery_arrow_left').css('display','none');
		transform2d('container_button_text',1,0,0,0,true,false,0.5,'linear');	
		$('#btViewVideo2').css('display','none');
	}
	else{		
		$('#galery_arrow_left').css('display','block');
		$('#btViewVideo2').css('display','true');
	}
	window.myFlux.prev('slide');
}

function right(){
	if(current == 0){		
		$('#galery_arrow_left').css('display','block');
		transform2d('container_button_text',1,0,0,0,false,true,0.5,'linear');
		$('#btViewVideo2').css('display','block');		
	}
	current++;
	if(current > 8)
		current = 0;
	
	if(current == 0){
		$('#galery_arrow_left').css('display','none');
		transform2d('container_button_text',1,0,0,0,true,false,0.5,'linear');	
		$('#btViewVideo2').css('display','none');
	}
	window.myFlux.next('slide');
}

/*----------------------------------------------------------------------*/	
function enableTransform2d(id,scaleInit,rotateInit,centerX,centerY,time,timeFunc){
	if(time && timeFunc){
		$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
		$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	}
	
	if(centerX != undefined && centerY != undefined){
		$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
		$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY+ '%');
	}
	
	$('#'+id).css('-webkit-transform','rotate('+rotateInit+'deg) ' + ' scale('+scaleInit+')');
}

function transform2d(id,scale,rotate,translatex,translatey,isfadein,isfadeout,time,timeFunc,centerX,centerY){
	if(time && timeFunc){
		$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
		$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	}
	if(centerX != undefined && centerY != undefined){
		$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
		$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY+ '%');
	}
	
	$('#'+id).css('-webkit-transform','translateX('+translatex+'px) translateY('+translatey+'px) rotate('+rotate+'deg) ' + ' scale('+scale+')');
	if(isfadein){
		$('#'+id).css('opacity',1);
		$('#'+id).css('display','block');
	}
	else if(isfadeout){
		$('#'+id).css('opacity',0);
		var timeout = setTimeout(function(){
			$('#'+id).css('display','none');
		},1000*time);
	}
}

/*--------------------------------------------------------------------------------------------------------------------------------------------*/
function enablePerspective(id,perspective,originx,originy){
	if(!perspective){
		$('#'+id).css('-webkit-perspective','800');
		$('#'+id).css('-moz-perspective','800');
	}
	else{
		$('#'+id).css('-webkit-perspective',perspective);
		$('#'+id).css('-moz-perspective',perspective);
	}
	
	if(originx == undefined || originy == undefined){
		$('#'+id).css('-webkit-perspective-origin','50% 50%');
		$('#'+id).css('-moz-perspective-origin','50% 50%');
	}
	else{
		$('#'+id).css('-webkit-perspective-origin',originx + '% ' + originy + '%');
		$('#'+id).css('-moz-perspective-origin',originx + '% ' + originy + '%');
	}
	
	$('#'+id).css('-webkit-transform-style','preserve-3d');
}

function enableTransform3d(id,scaleInit,rotateXInit,rotateYInit,rotateZInit,centerX,centerY,time,timeFunc){
	if(time && timeFunc){
		$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
		$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	}
	
	if(centerX != undefined && centerY != undefined){
		$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '% ');
		$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY+ '% ');
	}
	$('#'+id).css('-webkit-transform-style','preserve-3d');
	$('#'+id).css('-webkit-backface-visibility','hidden');
	$('#'+id).css('-webkit-transform','rotateX('+rotateXInit+'deg) ' + 'rotateY('+rotateYInit+'deg) ' +  'rotateZ('+rotateZInit+'deg) ' + ' scale('+scaleInit+')');
}

function transform3d(id,scale,rotatex,rotatey,rotatez,translatex,translatey,translatez,isfadein,isfadeout,time,timeFunc){
	if(time && timeFunc){
		$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
		$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	}
	
	$('#'+id).css('-webkit-transform','translateX('+translatex+'px) translateY('+translatey+'px) translateZ('+translatez+'px) rotateX('+rotatex+'deg) ' + ' rotateY('+rotatey+'deg) ' + ' rotateZ('+rotatez+'deg) ' + ' scale('+scale+')');
	
	if(isfadein){
		$('#'+id).css('opacity',1);
	}
	else if(isfadeout){
		$('#'+id).css('opacity',0);
	}
}