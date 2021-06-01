$(document).ready(function(){
	$("<img/>").attr("src","img_banner/portrait_bg.png").load(preload);
	$("<img/>").attr("src","img_banner/logo.png").load(preload);
	$("<img/>").attr("src","img_banner/door.png").load(preload);
	$("<img/>").attr("src","img_banner/tabhere.png").load(preload);
	$("<img/>").attr("src","img_banner/ballloon.png").load(preload);
	$("<img/>").attr("src","img_banner/logo_small.png").load(preload);
	
	prepare();
});

loaded = 0;

var arr = new Array();
arr.push('about');
arr.push('benefit');
arr.push('event');
arr.push('signup');

var arrAngle = new Array();
arrAngle.push(0);
arrAngle.push(0);
arrAngle.push(0);
arrAngle.push(0);

function prepare(){
	enableTranformZoom('frame1',0.38,60,45);
	enableTranformZoom('frame2',0.2,50,50);
	enableTransformRotate3D('door',1,'linear',100,50);
	
	enableTranform('ballloon',1,'linear');
	enableTransformRotate3D('logo_small',3,'linear',50,100);
	
	enableTranform('frame3',0.25,'linear');
	
	var arrInit = new Array();
	
	var count = 0;
	while(true){
		var randomnumber=Math.floor(Math.random()*4);
		
		var isInited = false;
		for(var i=0;i<arrInit.length;i++){
			if(arrInit[i] == randomnumber){
				isInited = true;
				break;
			}
		}
		
		if(isInited == false){
			arrInit.push(randomnumber);
			switch(count){
				case 0:
					initTopLeft(arr[randomnumber]);
					arrAngle[randomnumber] = -10;
					break;
				case 1:
					initTopRight(arr[randomnumber]);
					arrAngle[randomnumber] = 8;
					break;
				case 2:
					initBottomLeft(arr[randomnumber]);
					arrAngle[randomnumber] = 3;
					break;
				case 3:
					initBottomRight(arr[randomnumber]);
					arrAngle[randomnumber] = -5;
			}
			
			count++;
		}
		
		if(count>=4)
			break;
	}
}

function initTopLeft(id){
	$('#'+id).css('top','50px');
	$('#'+id).css('left','90px');
	enableTranformZoomRotate(id,0.5,70,200,-10);
}

function initTopRight(id){
	$('#'+id).css('top','50px');
	$('#'+id).css('right','90px');
	enableTranformZoomRotate(id,0.5,20,200,8);
}

function initBottomLeft(id){
	$('#'+id).css('left','60px');
	$('#'+id).css('bottom','100px');
	enableTranformZoomRotate(id,0.5,70,-70,3);
}

function initBottomRight(id){
	$('#'+id).css('right','70px');
	$('#'+id).css('bottom','100px');
	enableTranformZoomRotate(id,0.5,20,-70,-5);
}

function preload(){
	if(loaded == 5){
		setTimeout('start()',2000);
	}
	
	loaded ++;
}

function start(){
	fadeInImg('tab',1);
	
	setTimeout(function(){
		$('#main').click(function(){
			$(this).unbind();
			fadeOutImg('tab',0.5);
			setTimeout(function(){
				zoomAnimation('frame1',2,2,'linear');
			},1000);
			
			setTimeout(function(){
				rotate3dAnimation('door',0,110,0);
			},3500);
			
			setTimeout(function(){
				fadeOutImg('door',1);
				fadeInImg('frame2',1);
			},4500);
			
			setTimeout(function(){
				zoomAnimation('frame2',1,2,'linear');
			},5500);
			
			setTimeout(function(){
				fadeOutImg('frame1',1);
			},6500);
			
			setTimeout(function(){
				startTranslate('ballloon',0,-400);
			},8000);
			
			setTimeout(function(){
				fadeInImg('shake',1);
			},9500);
			
			setTimeout(function(){
				if (typeof window.DeviceMotionEvent != 'undefined') {
					// Shake sensitivity (a lower number is more)
					var sensitivity = 13;

					// Position variables
					var x1 = 0, y1 = 0, z1 = 0, x2 = 0, y2 = 0, z2 = 0;

					// Listen to motion events and update the position
					window.addEventListener('devicemotion', function (e) {
						x1 = e.accelerationIncludingGravity.x;
						y1 = e.accelerationIncludingGravity.y;
						z1 = e.accelerationIncludingGravity.z;
					}, false);

					// Periodically check the position and fire
					// if the change is greater than the sensitivity
					var checkInterval = setInterval(function () {
						var change = Math.abs(x1-x2+y1-y2+z1-z2);

						if (change > sensitivity) {
							clearInterval(checkInterval);
							window.removeEventListener('devicemotion');
							fadeOutImg('shake',1);
							setTimeout(function(){
								startApplication();
							},1000);
						}

						// Update new position
						x2 = x1;
						y2 = y1;
						z2 = z1;
					}, 500);
				}
				else{
					//alert('not support');
					setTimeout(function(){
						fadeOutImg('shake',1);
						setTimeout(function(){
								startApplication();
						},1000);
					},1000);
				}
			},11000);
		});
	},1000);
}

function startApplication(){
	rotate3dAnimationFadeOut('logo_small',14400,0,0);
	setTimeout(function(){
		rotate3dAnimationFadeIn('logo_small',14400,0,0);
	},2000);
	
	setTimeout(function(){
		fadeInImg('sparkle',1);
	},500);
	
	setTimeout(function(){
		fadeOutImg('sparkle',1);
	},2000);
	
	setTimeout(function(){
		$('#frame3').css('opacity',0.2);
	},1500);
	
	setTimeout(function(){
		$('#frame3').css('opacity',1);
	},3000);
	
	setTimeout(function(){
		for(var i=0;i<arr.length;i++){
			zoomRotate(arr[i],1,arrAngle[i],0.25,'linear');
		}
	},3000);
	
	setTimeout(function(){
		fadeInImg('tabcard',1);
	},6500);
	
	setTimeout(function(){
		startGalleryMini();
		
		for(var i=0;i<arr.length;i++){
			(	
				function(i){
					$('#'+arr[i]).click(function(){
						tabCard(arr[i]);
					});
				}
			)(i);
		}
		
		$('#popup_close').click(function(){
			closePopup();
			stopGalleryFull();
		});
		
		$('#benefit_right_2').click(function(){
			$(this).css('display','none');
			$('#benefit_left_1').css('display','none');
			$('#benefit_left_2').css('display','block');
			$('#benefit_right_1').css('display','block');
			fadeOutImg('benefit_text1',0.5);
			fadeInImg('benefit_text2',0.5);
		});
		
		$('#benefit_left_2').click(function(){
			$(this).css('display','none');
			$('#benefit_left_1').css('display','block');
			$('#benefit_right_2').css('display','block');
			$('#benefit_right_1').css('display','none');
			
			fadeInImg('benefit_text1',0.5);
			fadeOutImg('benefit_text2',0.5);
		});
	},8000);
}

var arrGalleryMin = new Array();
arrGalleryMin.push('gallery_min_1');
arrGalleryMin.push('gallery_min_2');
arrGalleryMin.push('gallery_min_3');
arrGalleryMin.push('gallery_min_4');

var currentMin = 0;
function startGalleryMini(){
	setInterval(function(){
		fadeOutImg(arrGalleryMin[currentMin],1);
		if(currentMin < arrGalleryMin.length-1){
			currentMin++;
		}
		else{
			currentMin = 0;
		}
		
		fadeInImg(arrGalleryMin[currentMin],1);
	},3000);
}


var arrGalleryMax = new Array();
arrGalleryMax.push('gallery_max_1');
arrGalleryMax.push('gallery_max_2');
arrGalleryMax.push('gallery_max_3');
arrGalleryMax.push('gallery_max_4');

var currentMax = 0;
var galleryMax = null;
function startGalleryFull(){
	galleryMax = setInterval(function(){
		fadeOutImg(arrGalleryMax[currentMax],1);
		if(currentMax < arrGalleryMax.length-1){
			currentMax++;
		}
		else{
			currentMax = 0;
		}
		
		fadeInImg(arrGalleryMax[currentMax],1);
	},3000);
}

function stopGalleryFull(){
	if(galleryMax != null){
		clearInterval(galleryMax);
	}
}

var firstTime = true;
function tabCard(id){
	$('.content').css('display','none');
	$('#'+id+'_content').css('display','block');
	
	if(id == 'event'){
		startGalleryFull();
	}
	
	fadeInImg('popup',0.5);
	if(firstTime){
		firstTime = false;
		fadeOutImg('tabcard',1);
	}
}

function closePopup(){
	fadeOutImg('popup',0.5);
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