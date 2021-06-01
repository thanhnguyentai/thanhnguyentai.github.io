$(document).ready(function(){
	init();
});

function init(){
    preload('img/bg.png');
    preload('img/bg-yellow.jpg');
    preload('img/even-if.png');
    preload('img/text-1.png');
    preload('img/text-2.png');
    preload('img/text-yellow.png');
    preload('img/logo.png');
    preload('img/end-screen.png');
    preload('img/go-now.png');
    preload('img/logo-end.png');
    
    prepareAnimation();
}

var loaded = 0;
var numberImage = 10;

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
	enableTransform2d('text-1',1,0,0,0,0,'linear');
	enableTransform2d('text-2',1,0,0,0,0,'linear');
	enableTransform2d('end-screen',1,0,0,0,0,'linear');
	enableTransform2d('logo',1,0,0,0,0,'linear');
	enableTransform2d('logo-end',1,0,0,0,0,'linear');
	
};

function start(){
	
	transform2d('text-1',1,0,0,-68,false,false,0.3,'linear');
	
	var time1 = setTimeout(function(){
		transform2d('text-1',1,0,0,-150,false,false,0.3,'linear');
		transform2d('text-2',1,0,0,-55,false,false,0.3,'linear');
		clearTimeout(time1);
	},2000);
	
	
	
	var time2 = setTimeout(function(){
		$('#container').css('background','url(img/bg-yellow.jpg)');
		$('#text-1').attr('src','img/even-if.png');
		transform2d('text-1',1,0,22,0,false,false,0,'linear');
		$('#text-2').attr('src','img/text-yellow.png');
		
		clearTimeout(time2);
	},3000);
	
	
	var time3 = setTimeout(function(){
		$('#container').css('background','url(img/bg.png)');
		$('#text-2').attr('src','img/text-2.png')
		clearTimeout(time3);
	},3200);
	
	var time4 = setTimeout(function(){
		$('#container').css('background','url(img/bg-yellow.jpg)');
		$('#text-2').attr('src','img/text-yellow.png')
		clearTimeout(time4);
	},3400);
	
	var time5 = setTimeout(function(){
		$('#container').css('background','url(img/bg.png)');
		$('#text-2').attr('src','img/text-2.png')
		clearTimeout(time5);
	},3600);
	
	var time6 = setTimeout(function(){
		$('#container').css('background','url(img/bg-yellow.jpg)');
		$('#text-2').attr('src','img/text-yellow.png')
		clearTimeout(time6);
	},3800);
	
	var time7 = setTimeout(function(){
		$('#container').css('background','url(img/bg.png)');
		$('#text-2').attr('src','img/text-2.png')
		clearTimeout(time7);
	},4000);
	
	var time8 = setTimeout(function(){
		$('#container').css('background','url(img/bg-yellow.jpg)');
		$('#text-2').attr('src','img/text-yellow.png')
		clearTimeout(time8);
	},4200);
	
	var time9 = setTimeout(function(){
		$('#container').css('background','url(img/bg.png)');
		$('#text-2').attr('src','img/text-2.png')
		clearTimeout(time9);
	},4400);
	
	
	var time10 = setTimeout(function(){
		transform2d('text-1',1,0,22,-55,false,false,0.3,'linear');
		transform2d('text-2',1,0,0,-150,false,false,0.3,'linear');
		clearTimeout(time10);
	},5000);
	
	
	var time11 = setTimeout(function(){
		transform2d('text-1',1,0,22,-55,false,true,0.5,'linear');
		clearTimeout(time11);
	},6500);
	
	
	var time12 = setTimeout(function(){
		transform2d('end-screen',1,0,0,0,true,false,0.5,'linear');
		transform2d('logo',1,0,0,0,false,true,0.5,'linear');
		clearTimeout(time12);
	},7000);
	
	var time13 = setTimeout(function(){
		transform2d('logo-end',1,0,0,0,true,false,0.5,'linear');
		clearTimeout(time13);
	},7500);
	
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