
$(document).ready(function(){
    init();
});


function init(){
    preload('img/300x250_border.png');
    preload('img/300x250_circle.png');
    preload('img/300x250_close.png');
    preload('img/300x250_footer.jpg');
    preload('img/300x250_play.png');
    preload('img/300x250_text.png');
    preload('img/AppLink1.jpg');
    preload('img/AppLink2.jpg');
    
    prepareAnimation();
}

var loaded = 0;
var numberImage = 8;
var isAnimateText = false;

function preload(src){
    var img = new Image();
    img.onload = function(){
        if(loaded == numberImage-1) {
        	prepareEvent();
        	prepareEventVideo();
        	startAnimation();
        }
        loaded ++;
    }
    img.src = src;
}

function prepareEvent(){
	$('#more_infor').click(function(){
		transform2d('disclame',1,0,0,0,true,false,1,'linear');
	});
	$('#bt_close').click(function(){
		transform2d('disclame',1,0,0,0,false,true,1,'linear');
	});
}

function prepareAnimation(){
	enableTransform2d('ph_conBanner',1,0,0,0,1,'linear');
	enableTransform2d('video_container',1,0,0,0,1,'linear');
	enableTransform2d('text_container',1,0,0,0,1,'linear');
	enableTransform2d('circle',1,0,0,0,0.5,'linear');
	enableTransform2d('text',1,0,0,0,0.5,'linear');
	enableTransform2d('disclame',1,0,0,0,1,'linear');
	enableTransform2d('video',1,0,0,0,0.1,'linear');
	enableTransform2d('replay',1,0,0,0,0.1,'linear');
	enableTransform2d('preview',1,0,0,0,0.1,'linear');
    enableTransform2d('video_native',1,0,0,0,0.25,'linear');
	enableTransform2d('preview2',1,0,0,0,0.25,'linear');
	enableTransform2d('replay',1,0,0,0,0.25,'linear');
}

function startAnimation(){
	transform2d('ph_conBanner',1,0,0,0,true,false,1,'linear');
	
	setTimeout(function(){
		animateText();
	},2000);
	
	setTimeout(function(){
		transform2d('preview2',1,0,0,0,true,false,1,'linear');
	},4000);
	
	setTimeout(function(){
		fadeInImg('replay',0.5);
	},5000);
}

function animateText(){
	transform2d('circle',1,0,0,0,true,false,0.5,'linear');
	transform2d('preview',1,0,75,0,false,false,0.1,'linear');
	transform2d('replay',1,0,75,0,false,false,0.1,'linear');
	
	transform2d('text_container',1,0,-154,0,false,false,1,'linear');
	transform2d('video_container',1,0,-154,0,false,false,1,'linear');
	setTimeout(function(){
		transform2d('text',1,0,0,0,true,false,0.5,'linear');
	},1000);
}


/*----------------------------------------------------------------------------*/

function prepareEventVideo(){
	$('#replay').click(function(){
    	transform2d('video_native',1,0,0,0,true,false,0,25,'linear');
    	var video = document.getElementById('video');
        video.play();
    });
    
    document.getElementById('video').addEventListener('ended',function(){
    	transform2d('video_native',1,0,0,0,false,true,0,25,'linear');
    });
    
    $('#bt_close_video').click(function(){
    	transform2d('video_native',1,0,0,0,false,true,0,25,'linear');
    	var video = document.getElementById('video');
        video.pause();
    });
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