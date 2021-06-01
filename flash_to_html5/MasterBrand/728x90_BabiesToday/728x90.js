$(document).ready(function(){
	init();
});

function init(){
    preload('img/babies.png');
    preload('img/bg.png');
    preload('img/likely.png');
    preload('img/logo.png');
    preload('img/to100.png');
    preload('img/today.png');
    preload('img/be-left-handed.png');
    preload('img/belly-button.png');
    preload('img/end-screen.png');
    preload('img/go-now.png');
    preload('img/have-a-peanut-gallery.png');
    preload('img/have-attached-earlobes.png');
    preload('img/have-blue eyes.png');
    preload('img/logo-end.png');
    
    prepareAnimation();
}

var loaded = 0;
var numberImage = 14;

function preload(src){
    var img = new Image();
    img.onload = function(){
        if(loaded == numberImage-1) {
            setTimeout(function(){
                start();
            },1000);
        }
        loaded ++;
    }
    img.src = src;
}


function prepareAnimation(){
	enableTransform2d('babies',1,0,0,0,0,'linear');
	enableTransform2d('today',1,0,0,0,0,'linear');
	enableTransform2d('likely',1,0,0,0,0,'linear');
	enableTransform2d('to100',1,0,0,0,0,'linear');
	enableTransform2d('text-yellow-1',1,0,0,0,0,'linear');
	enableTransform2d('text-yellow-2',1,0,0,0,0,'linear');
	enableTransform2d('end-screen',1,0,0,0,0,'linear');
	enableTransform2d('logo-end',1,0,0,0,0,'linear');
	enableTransform2d('wapper',1,0,0,0,0,'linear');
};

function start(){
	
	var timeDelay = 0.3;
	
	transform2d('babies',1,0,0,-30,false,false,timeDelay,'linear');
	
	var time1 = setTimeout(function(){
		transform2d('today',1,0,0,-30,false,false,timeDelay,'linear');
		clearTimeout(time1);
	},300);
	
	var time2 = setTimeout(function(){
		transform2d('likely',1,0,0,-30,false,false,timeDelay,'linear');
		clearTimeout(time2);
	},600);
	
	var time3 = setTimeout(function(){
		transform2d('to100',1,0,0,-30,false,false,timeDelay,'linear');
		clearTimeout(time3);
	},900);
	
	
	var time4 = setTimeout(function(){
		transform2d('text-yellow-1',1,0,0,27,false,false,0.1,'linear');
		clearTimeout(time4);
	},2500);
	
	var time5 = setTimeout(function(){
		transform2d('text-yellow-1',1,0,0,20,false,false,0.1,'linear');
		clearTimeout(time5);
	},2600);
	
	
	
	var time6 = setTimeout(function(){
		transform2d('text-yellow-2',1,0,0,27,false,false,0.1,'linear');
		transform2d('text-yellow-1',1,0,0,50,false,false,0.1,'linear');
		clearTimeout(time6);
	},3600);
	
	var time7 = setTimeout(function(){
		transform2d('text-yellow-2',1,0,0,20,false,false,0.1,'linear');
		transform2d('text-yellow-1',1,0,0,0,false,false,0,'linear');
		$('#text-yellow-1').attr('src','img/belly-button.png');
		clearTimeout(time7);
	},3700);
	
	
	
	var time8 = setTimeout(function(){
		transform2d('text-yellow-1',1,0,0,27,false,false,0.1,'linear');
		transform2d('text-yellow-2',1,0,0,50,false,false,0.1,'linear');
		clearTimeout(time8);
	},4700);
	
	var time9 = setTimeout(function(){
		transform2d('text-yellow-1',1,0,0,20,false,false,0.1,'linear');
		transform2d('text-yellow-2',1,0,0,0,false,false,0,'linear');
		$('#text-yellow-2').attr('src','img/have-attached-earlobes.png');
		clearTimeout(time9);
	},4800);
	
	var time10 = setTimeout(function(){
		transform2d('text-yellow-2',1,0,0,27,false,false,0.1,'linear');
		transform2d('text-yellow-1',1,0,0,50,false,false,0.1,'linear');
		clearTimeout(time10);
	},5800);
	
	var time11 = setTimeout(function(){
		transform2d('text-yellow-2',1,0,0,20,false,false,0.1,'linear');
		transform2d('text-yellow-1',1,0,0,0,false,false,0,'linear');
		$('#text-yellow-1').attr('src','img/have-a-peanut-gallery.png');
		clearTimeout(time11);
	},5900);
	
	var time12 = setTimeout(function(){
		transform2d('text-yellow-1',1,0,0,27,false,false,0.1,'linear');
		transform2d('text-yellow-2',1,0,0,50,false,false,0.1,'linear');
		clearTimeout(time12);
	},6900);
	
	var time13 = setTimeout(function(){
		transform2d('text-yellow-1',1,0,0,20,false,false,0.1,'linear');
		clearTimeout(time13);
	},7000);
	
	
	var time14 = setTimeout(function(){
		transform2d('wapper',1,0,0,0,false,true,0.5,'linear');
		clearTimeout(time14);
	},7500);
	
	var time15 = setTimeout(function(){
		transform2d('end-screen',1,0,0,0,true,false,0.5,'linear');
		transform2d('logo',1,0,0,0,false,true,0.5,'linear');
		clearTimeout(time15);
	},8000);
	
	var time16 = setTimeout(function(){
		transform2d('logo-end',1,0,0,0,true,false,0.5,'linear');
		clearTimeout(time16);
	},8500);
	
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