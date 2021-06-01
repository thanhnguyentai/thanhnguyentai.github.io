
$(document).ready(function(){
    init();
    console.log("afasd");
    
});

function init(){
    preload('./images/bkg.png');
    preload('./images/blue.png');
    preload('./images/green.png');
    preload('./images/red_base1.png');
    preload('./images/red_base2.png');
    preload('./images/red_base3.png');
    preload('./images/shop-now.png');
    preload('./images/staples.png');
    preload('./images/symbol2.png');
    preload('./images/symbol3.png');
    preload('./images/text-logo1.png');
    preload('./images/text-logo2.png');
    preload('./images/yellow.png');
    prepareAnimation();
}

var loaded = 0;
var numberImage = 13;


function preload(src){
    var img = new Image();
    img.onload = function(){
        if(loaded == numberImage-1) {
            prepareEvent();
            setTimeout(function(){
                start();
            },1000);
        }
        loaded ++;
    }
    img.src = src;
}

function prepareAnimation(){
    enableTransform2d('blue1',1,-90,0,100,0,'linear');
    enableTransform2d('yellow1',1,-90,0,100,0,'linear');
    enableTransform2d('green1',1,-90,0,100,0,'linear');
    enableTransform2d('red1',1,-90,0,100,0,'linear');
    
    enableTransform2d('blue2',1,90,100,100,0,'linear'); 
    enableTransform2d('yellow2',1,90,100,100,0,'linear');
    enableTransform2d('green2',1,90,100,100,0,'linear');
    enableTransform2d('red2',1,90,100,100,0,'linear');
    
    enableTransform2d('blue3',1,90,0,0,0,'linear');
    enableTransform2d('yellow3',1,90,0,0,0,'linear');
    enableTransform2d('green3',1,90,0,0,0,'linear');
    enableTransform2d('red3',1,90,0,0,0,'linear');
    
    enableTransform2d('blue4',1,-90,100,0,0,'linear');
    enableTransform2d('yellow4',1,-90,100,0,0,'linear');
    enableTransform2d('green4',1,-90,100,0,0,'linear');
    enableTransform2d('red4',1,-90,100,0,0,'linear');
    
    
    enableTransform2d('red1_parent',1,0,0,0,0,'linear');
    enableTransform2d('red2_parent',1,0,100,0,0,'linear');
    enableTransform2d('red3_parent',1,0,0,100,0,'linear');
    enableTransform2d('red4_parent',1,0,100,100,0,'linear');
    
    enableTransform2d('blue1_parent',1,0,0,0,0,'linear');
    enableTransform2d('blue2_parent',1,0,100,0,0,'linear');
    enableTransform2d('blue3_parent',1,0,0,100,0,'linear');
    enableTransform2d('blue4_parent',1,0,100,100,0,'linear');
    
    enableTransform2d('yellow1_parent',1,0,0,0,0,'linear');
    enableTransform2d('yellow2_parent',1,0,100,0,0,'linear');
    enableTransform2d('yellow3_parent',1,0,0,100,0,'linear');
    enableTransform2d('yellow4_parent',1,0,100,100,0,'linear');
    
    enableTransform2d('green1_parent',1,0,0,0,0,'linear');
    enableTransform2d('green2_parent',1,0,100,0,0,'linear');
    enableTransform2d('green3_parent',1,0,0,100,0,'linear');
    enableTransform2d('green4_parent',1,0,100,100,0,'linear');
}

function prepareEvent(){
    $('#banner_arrow_left').click(function(){
        var product = $(this).parent().children('.banner-item');
        var state = 0;
        for(var i=0;i<product.length;i++){
            state = parseInt(product.eq(i).attr('data-state'));
            if(state != 1){
                product.eq(i).attr('data-state',state-1);
                product.eq(i).removeClass('banner-item-state'+state).addClass('banner-item-state'+(state-1));
            }
            else{
                product.eq(i).attr('data-state',10);
                product.eq(i).removeClass('banner-item-state'+state).addClass('banner-item-state10');
            }
        }
    });
    
    $('#banner_arrow_right').click(function(){
        var product = $(this).parent().children('.banner-item');
        var state = 0;
        for(var i=0;i<product.length;i++){
            state = parseInt(product.eq(i).attr('data-state'));
            if(state != 10){
                product.eq(i).attr('data-state',state+1);
                product.eq(i).removeClass('banner-item-state'+state).addClass('banner-item-state'+(state+1));
            }
            else{
                product.eq(i).attr('data-state',1);
                product.eq(i).removeClass('banner-item-state'+state).addClass('banner-item-state1');
            }
        }
    });
    
    (function rotateBanner(){
        $('#banner_arrow_left').trigger('click');
        setTimeout(function(){
            rotateBanner();
        },3000);
    }());
}

var count = 0;
function start(){
	var time = setTimeout(function(){
		$('#text-logo').attr('src','./images/text-logo2.png');
		clearTimeout(time);
	},500);
	
	rotateImg();
	
	var time1 = setTimeout(function(){
		count = 1;
		$("#red_base").css('z-index','0');
		rotateImg();
		clearTimeout(time1);
	},2000);
	
	var time2 = setTimeout(function(){
		count = 2;
		$("#red_base").css('z-index','0');
		rotateImg();
		clearTimeout(time2);
	},4000);
	
	var time3 = setTimeout(function(){
		otherRotate();		
		clearTimeout(time3);
	},6000);
	
	var time4 = setTimeout(function(){
		$('#text-logo').attr('src','./images/text-logo1.png');
		transform2d('symbol2',1,0,0,0,true,false,1,'linear');
		transform2d('symbol3',1,0,0,0,true,false,1,'linear');
		transform2d('shop-now',1,0,0,0,true,false,1,'linear');
		transform2d('slide_show',1,0,0,0,true,false,1,'linear');
		clearTimeout(time4);
	},6500);
	
}


function rotateImg(){
	var timeRotate = 0.4;
	var timeDelay = 150;
	var timeTotal = 0;
	 var time1 = setTimeout(function(){
		 	transform2d('blue1',1,0,0,0,false,false,timeRotate,'linear',0,100);
			transform2d('blue2',1,0,0,0,false,false,timeRotate,'linear',100,100);
			transform2d('blue3',1,0,0,0,false,false,timeRotate,'linear',0,0);
			transform2d('blue4',1,0,0,0,false,false,timeRotate,'linear',100,0);
	        clearTimeout(time1);
	    },timeTotal);
	 
	 var time2 = setTimeout(function(){
		 	transform2d('yellow1',1,0,0,0,false,false,timeRotate,'linear',0,100);
			transform2d('yellow2',1,0,0,0,false,false,timeRotate,'linear',100,100);
			transform2d('yellow3',1,0,0,0,false,false,timeRotate,'linear',0,0);
			transform2d('yellow4',1,0,0,0,false,false,timeRotate,'linear',100,0);
	        clearTimeout(time2);
	 },timeTotal+timeDelay);
	 timeTotal += timeDelay;
	 var time3 = setTimeout(function(){
		 	transform2d('green1',1,0,0,0,false,false,timeRotate,'linear',0,100);
			transform2d('green2',1,0,0,0,false,false,timeRotate,'linear',100,100);
			transform2d('green3',1,0,0,0,false,false,timeRotate,'linear',0,0);
			transform2d('green4',1,0,0,0,false,false,timeRotate,'linear',100,0);
	        clearTimeout(time3);
	 },timeTotal+timeDelay);
	 timeTotal += timeDelay;
	 
	 var time4 = setTimeout(function(){
		 	transform2d('red1',1,0,0,0,false,false,1.2*timeRotate,'linear',0,100);
			transform2d('red2',1,0,0,0,false,false,1.2*timeRotate,'linear',100,100);
			transform2d('red3',1,0,0,0,false,false,1.2*timeRotate,'linear',0,0);
			transform2d('red4',1,0,0,0,false,false,1.2*timeRotate,'linear',100,0);
	        clearTimeout(time4);
	 },timeTotal+timeDelay);
	 timeTotal += timeDelay;
	 
	 var time5 = setTimeout(function(){
		 	$('#red_base').css('opacity','1');
		 	if(count==0){
		 		$('#red_base').css("background",'url(./images/red_base1.png)');
		 		$('#red1 img').attr("src","./images/red_base2.png");
			 	$('#red2 img').attr("src","./images/red_base2.png");
			 	$('#red3 img').attr("src","./images/red_base2.png");
			 	$('#red4 img').attr("src","./images/red_base2.png");
			 	prepareAnimation();
		 	}
		 	if(count == 1){
		 		$('#red_base').css("background",'url(./images/red_base2.png)');
		 		$('#red1 img').attr("src","./images/red_base3.png");
			 	$('#red2 img').attr("src","./images/red_base3.png");
			 	$('#red3 img').attr("src","./images/red_base3.png");
			 	$('#red4 img').attr("src","./images/red_base3.png");
			 	prepareAnimation();
		 	}
		 	if(count ==2){
		 		$('#red_base').css("opacity",'0');
		 		$('#black-bottom').css("opacity",'1');
		 	}
		 	
	        clearTimeout(time5);
	 },timeTotal+10*timeDelay);
}


function otherRotate(){
	var timeRotate = 0.5;
	var timeDelay = 200;
	var timeTotal = 0;
	
	 var time1 = setTimeout(function(){
		 	transform2d('red1_parent',1,90,0,0,false,false,timeRotate,'linear',0,0);
			transform2d('red2_parent',1,-90,0,0,false,false,timeRotate,'linear',100,0);
			transform2d('red3_parent',1,-90,0,0,false,false,timeRotate,'linear',0,100);
			transform2d('red4_parent',1,90,0,0,false,false,timeRotate,'linear',100,100);
		 	
	        clearTimeout(time1);
	    },timeTotal);
	 
	 var time2 = setTimeout(function(){
		 	transform2d('green1_parent',1,90,0,0,false,false,timeRotate,'linear',0,0);
			transform2d('green2_parent',1,-90,0,0,false,false,timeRotate,'linear',100,0);
			transform2d('green3_parent',1,-90,0,0,false,false,timeRotate,'linear',0,100);
			transform2d('green4_parent',1,90,0,0,false,false,timeRotate,'linear',100,100);
	        clearTimeout(time2);
	 },timeTotal+timeDelay);
	 
	 timeTotal += timeDelay;
	 var time3 = setTimeout(function(){
		 	transform2d('yellow1_parent',1,90,0,0,false,false,timeRotate,'linear',0,0);
			transform2d('yellow2_parent',1,-90,0,0,false,false,timeRotate,'linear',100,0);
			transform2d('yellow3_parent',1,-90,0,0,false,false,timeRotate,'linear',0,100);
			transform2d('yellow4_parent',1,90,0,0,false,false,timeRotate,'linear',100,100);
	        clearTimeout(time3);
	 },timeTotal+timeDelay);
	 timeTotal += timeDelay;
	 
	 var time4 = setTimeout(function(){
		 	transform2d('blue1_parent',1,90,0,0,false,false,timeRotate,'linear',0,0);
			transform2d('blue2_parent',1,-90,0,0,false,false,timeRotate,'linear',100,0);
			transform2d('blue3_parent',1,-90,0,0,false,false,timeRotate,'linear',0,100);
			transform2d('blue4_parent',1,90,0,0,false,false,timeRotate,'linear',100,100);
	        clearTimeout(time4);
	 },timeTotal+timeDelay);
}









/*--------------------------------------------------------------------------------*/

function enableTransform2d(id,scaleInit,rotateInit,centerX,centerY,time,timeFunc){
    if(time != null && timeFunc){
        $('#'+id).css('-webkit-transition','all '+time + 's ' + timeFunc);
        $('#'+id).css('-moz-transition','all '+ time + 's ' + timeFunc);
        $('#'+id).css('transition','all '+ time + 's ' + timeFunc);
        $('#'+id).css('-ms-transition','all '+ time + 's ' + timeFunc);
    }
    
    if(centerX != undefined && centerY != undefined){
        $('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
        $('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY+ '%');
        $('#'+id).css('transform-origin',centerX+'% ' + centerY+ '%');
        $('#'+id).css('-ms-transform-origin',centerX+'% ' + centerY+ '%');
    }
    
    $('#'+id).css('-webkit-transform','rotate('+rotateInit+'deg) ' + ' scale('+scaleInit+')');
    $('#'+id).css('-moz-transform','rotate('+rotateInit+'deg) ' + ' scale('+scaleInit+')');
    $('#'+id).css('transform','rotate('+rotateInit+'deg) ' + ' scale('+scaleInit+')');
    $('#'+id).css('-ms-transform','rotate('+rotateInit+'deg) ' + ' scale('+scaleInit+')');
}

function transform2d(id,scale,rotate,translatex,translatey,isfadein,isfadeout,time,timeFunc,centerX,centerY){
    if(time != null && timeFunc){
        $('#'+id).css('-webkit-transition','all '+time + 's ' + timeFunc);
        $('#'+id).css('-moz-transition','all '+time + 's ' + timeFunc);
        $('#'+id).css('transition','all '+ time + 's ' + timeFunc);
        $('#'+id).css('-ms-transition','all '+ time + 's ' + timeFunc);
    }
    if(centerX != undefined && centerY != undefined){
        $('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
        $('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY+ '%');
    }
    
    $('#'+id).css('-webkit-transform','translateX('+translatex+'px) translateY('+translatey+'px) rotate('+rotate+'deg) ' + ' scale('+scale+')');
    $('#'+id).css('-moz-transform','translateX('+translatex+'px) translateY('+translatey+'px) rotate('+rotate+'deg) ' + ' scale('+scale+')');
    if(isfadein){
        $('#'+id).css('display','block');
        var timeout = setTimeout(function(){
            $('#'+id).css('opacity',1);
            clearTimeout(timeout);
        },100);
    }
    else if(isfadeout){
        $('#'+id).css('opacity',0);
        var timeout = setTimeout(function(){
            $('#'+id).css('display','none');
        },1000*time);
    }
}

function enableTranform(id,time,timeFunc){
    $('#'+id).css('-webkit-transition', 'all '+time + 's ' + timeFunc);
    $('#'+id).css('-moz-transition','all '+ time + 's ' + timeFunc);
}

function fadeInImg(id,time){
    $('#'+id).css('display','block');
    var timeout = setTimeout(function(){
        $('#'+id).css('opacity',1);
        clearTimeout(timeout);
    },100);
}

function fadeOutImg (id,time){
    $('#'+id).css('opacity',0);
    setTimeout(function(){
        $('#'+id).css('display','none');
    },time*1000);
}

function fadeInImgIE(id,time){
    $('#'+id).css('display','block');
    setTimeout(function(){
        $('#'+id).animate({
            opacity: 1
        },time*1000);
    },100);
}
function fadeOutImgIE(id,time){
    $('#'+id).animate({
        opacity: 0
    },time*1000);
    setTimeout(function(){
        $('#'+id).css('display','none');
    },time*1000);
}

function enableZoomIE(id,width,height,top,left){
    $('#'+id).css({
        width: width+'px',
        height: height +'px',
        top: top+'px',
        left: left+'px'
    });
}

function zoomIE(id,width,height,top,left,time, isfadein, isfadeout){
    if(isfadein){
        $('#'+id).animate({
            width: width+'px',
            height: height+'px',
            top:top+'px',
            left:left+'px',
            opacity: 1
        },time*1000);
    }
    else if(isfadeout){
        $('#'+id).animate({
            width: width+'px',
            height: height+'px',
            top:top+'px',
            left:left+'px',
            opacity: 0
        },time*1000);
    }
    else{
        $('#'+id).animate({
            width: width+'px',
            height: height+'px',
            top:top+'px',
            left:left+'px'
        },time*1000);
    }
}

function transform2dIE(id,translatex,translatey,isfadein,isfadeout,time){
    if(isfadein){
        $('#'+id).css('display','block');
        var timeout = setTimeout(function(){
            if(translatex == 0){
                $('#'+id).animate({
                    opacity: 1,
                    top:'+='+translatey
                },time*1000);
            }
            else if(translatey == 0){
                $('#'+id).animate({
                    opacity: 1,
                    left:'+='+translatex
                },time*1000);
            }
            else{
                $('#'+id).animate({
                    opacity: 1,
                    left:'+='+translatex,
                    top:'+='+translatey
                },time*1000);
            }
            clearTimeout(timeout);
        },100);
    }
    else if(isfadeout){
        if(translatex == 0){
            $('#'+id).animate({
                opacity: 0,
                top:'+='+translatey
            },time*1000);
        }
        else if(translatey == 0){
            $('#'+id).animate({
                opacity: 0,
                left:'+='+translatex
            },time*1000);
        }
        else{
            $('#'+id).animate({
                opacity: 0,
                left:'+='+translatex,
                top:'+='+translatey
            },time*1000);
        }
        var timeout = setTimeout(function(){
            $('#'+id).css('display','none');
        },1000*time);
    }
    else{
        $('#'+id).animate({
            left:'+='+translatex,
            top:'+='+translatey
        },time*1000);
    }
}