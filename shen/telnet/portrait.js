
$(document).ready(function(){
	$("<img/>").attr("src","img/big_img.png").load(preload);
	$("<img/>").attr("src","img/bag.png").load(preload);
	$("<img/>").attr("src","img/bt1.png").load(preload);
	$("<img/>").attr("src","img/bt1_1.png").load(preload);
	$("<img/>").attr("src","img/bt2.png").load(preload);
	$("<img/>").attr("src","img/bt2_1.png").load(preload);
	$("<img/>").attr("src","img/car.png").load(preload);
	$("<img/>").attr("src","img/shorttext.png").load(preload);
	$("<img/>").attr("src","img/text.png").load(preload);
	
	$("<img/>").attr("src","img/frame2_appstore.png").load(preload);
	$("<img/>").attr("src","img/frame2_bg.png").load(preload);
	$("<img/>").attr("src","img/frame2_blown_bag.png").load(preload);
	$("<img/>").attr("src","img/frame2_car.png").load(preload);
	$("<img/>").attr("src","img/frame2_dino.png").load(preload);
	$("<img/>").attr("src","img/frame2_elephant.png").load(preload);
	$("<img/>").attr("src","img/frame2_flower_bag.png").load(preload);
	$("<img/>").attr("src","img/frame2_footer.png").load(preload);
	$("<img/>").attr("src","img/frame2_giraffe.png").load(preload);
	$("<img/>").attr("src","img/frame2_lion.png").load(preload);
	$("<img/>").attr("src","img/frame2_middle.png").load(preload);
	$("<img/>").attr("src","img/frame2_red_bag.png").load(preload);
	$("<img/>").attr("src","img/frame2_text.png").load(preload);
	
	$("<img/>").attr("src","img/frame3_bg.png").load(preload);
	$("<img/>").attr("src","img/frame3_dragon.png").load(preload);
	$("<img/>").attr("src","img/frame3_flame.png").load(preload);
	$("<img/>").attr("src","img/frame3_logo.png").load(preload);
	$("<img/>").attr("src","img/frame3_text1.png").load(preload);
	$("<img/>").attr("src","img/frame3_text2.png").load(preload);
	$("<img/>").attr("src","img/frame3_toy.png").load(preload);
	
	$("<img/>").attr("src","img/frame4_bg.png").load(preload);
	$("<img/>").attr("src","img/frame4_leg.png").load(preload);
	$("<img/>").attr("src","img/frame4_logo.png").load(preload);
	$("<img/>").attr("src","img/frame4_shark.png").load(preload);
	$("<img/>").attr("src","img/frame4_text1.png").load(preload);
	$("<img/>").attr("src","img/frame4_text2.png").load(preload);
	
	prepare();
	
	$('#btFrame').click(function(){
		$('.frame_img').css('display','none');
		fadeInImg('frame3',0.5);
		
		var timeout = setTimeout(function(){
			startAnimationFrame3();
			clearTimeout(timeout);
		},500);
	});
	
	$('#bt_back_joy').click(function(){
		backMainFromJoy();
	});
	
	$('#btPersonal').click(function(){
		fadeInImg('frame2',0.5);
		var timeout = setTimeout(function(){
			startAnimationFrame2();
			clearTimeout(timeout);
		},500);
	});
	
	$('#btHome').click(function(){
		fadeInImg('frame4',0.5);
		
		var timeout = setTimeout(function(){
			startAnimationFrame4();
			clearTimeout(timeout);
		},500);
	});
	
	$('#bt_back_home').click(function(){
		backMainFromHome();
	});
	
	$('#bt_back_personal').click(function(){
		backMainFromPersonal();
	});
});

loaded = 0;

function backMainFromJoy(){
	$('.frame_img').css('display','none');
	fadeOutImg ('frame2',0.5);
}

function backMainFromHome(){
	$('.frame3_img').css('display','none');
	fadeOutImg ('frame3',0.5);
}

function backMainFromPersonal(){
	$('.frame4_img').css('display','none');
	fadeOutImg ('frame4',0.5);
}

function preload(){
	if(loaded == 34){
		setTimeout('start()',1000);
	}
	
	loaded ++;
}

function prepare(){
	
}

function start(){
	fadeInImg('big_img',0.5);
	
	var timeout1 = setTimeout(function(){
		fadeInImg('big_button',0.5);
		fadeInImg('shorttext',0.5);
		clearTimeout(timeout1);
	},1000);
	
	var timeout2 = setTimeout(function(){
		fadeInImg('bag',0.5);
		clearTimeout(timeout2);
	},1500);
	
	var timeout3 = setTimeout(function(){
		fadeInImg('bt1_1',0.5);
		clearTimeout(timeout3);
	},2500);
	
	var timeout4 = setTimeout(function(){
		fadeInImg('bt2_1',0.5);
	},3500);
	
	var timeout5 = setTimeout(function(){
		fadeInImg('bt1',0.5);
		fadeInImg('bt2',0.5);
		clearTimeout(timeout5);
	},5000);
}

function startAnimationFrame2(){
	fadeInImg('frame2_header',0.5);
	
	var timeout1 = setTimeout(function(){
		fadeInImg('frame2_car',0.5);
		clearTimeout(timeout1);
	},500);
	
	var timeout2 = setTimeout(function(){
		fadeInImg('frame2_elephant',0.5);
		clearTimeout(timeout2);
	},1000);
	
	var timeout3 = setTimeout(function(){
		fadeInImg('frame2_dino',0.5);
		clearTimeout(timeout3);
	},1500);
	
	var timeout4 = setTimeout(function(){
		fadeInImg('frame2_giraffe',0.5);
		clearTimeout(timeout4);
	},2000);
	
	var timeout5 = setTimeout(function(){
		fadeInImg('frame2_lion',0.5);
		clearTimeout(timeout5);
	},2500);
	
	var timeout6 = setTimeout(function(){
		fadeInImg('frame2_red_bag',0.5);
		clearTimeout(timeout6);
	},3000);
	
	var timeout7 = setTimeout(function(){
		fadeInImg('frame2_flower_bag',0.5);
		clearTimeout(timeout7);
	},3500);
	
	var timeout8 = setTimeout(function(){
		fadeInImg('frame2_blown_bag',0.5);
		clearTimeout(timeout8);
	},4000);
	
	var timeout9 = setTimeout(function(){
		fadeInImg('frame2_middle',0.5);
		clearTimeout(timeout9);
	},5000);
	
	var timeout10 = setTimeout(function(){
		fadeInImg('frame2_text',0.5);
		clearTimeout(timeout10);
	},5500);
	
	var timeout11 = setTimeout(function(){
		fadeInImg('frame2_appstore',0.5);
		clearTimeout(timeout11);
	},6000);
}

function startAnimationFrame3(){
	fadeInImg('frame3_bg',0.5);
	fadeInImg('frame3_logo',0.5);
	
	var timeout1 = setTimeout(function(){
		fadeInImg('frame3_toy',0.5);
		clearTimeout(timeout1);
	},500);
	
	var timeout2 = setTimeout(function(){
		fadeInImg('frame3_dragon',0.5);
		clearTimeout(timeout2);
	},1000);
	
	var timeout3 = setTimeout(function(){
		fadeInImg('frame3_flame',0.5);
		clearTimeout(timeout3);
	},1500);
}

function startAnimationFrame4(){
	fadeInImg('frame4_bg',0.5);
	fadeInImg('frame4_logo',0.5);
	
	var timeout1 = setTimeout(function(){
		fadeInImg('frame4_shark',0.5);
		clearTimeout(timeout1);
	},500);
	
	var timeout2 = setTimeout(function(){
		fadeInImg('frame4_leg',0.5);
		clearTimeout(timeout2);
	},1000);
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

function fadeOutImg (id,time){
	$('#'+id).css('-moz-animation','fadeout '+time+'s linear');
	$('#'+id).css('-webkit-animation','fadeout '+time+'s linear');
	$('#'+id).css('-webkit-animation-fill-mode','forwards');
	$('#'+id).css('-moz-animation-fill-mode','forwards');
	setTimeout(function(){
		$('#'+id).css('display','none');
	},time*1000);
}