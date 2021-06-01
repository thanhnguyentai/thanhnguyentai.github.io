
$(document).ready(function(){
    init();
});


function init(){
	prepareAnimation();
    preload('img/bg.jpg');
    preload('img/bt_close_disclame.png');
    preload('img/focus.png');
    preload('img/fusion.png');
    preload('img/mute.png');
    preload('img/unmute.png');
    preload('img/play.png');
    preload('img/escape.png');
    preload('img/SyncNSay1.jpg');
    preload('img/SyncNSay2.jpg');
    preload('img/SyncNSay3.jpg');
}
var carSrc = new Array('img/fusion.png','img/focus.png','img/escape.png');
var loaded = 0;
var numberImage = 8+3;
var isAnimateText = false;

function preload(src){
    var img = new Image();
    img.onload = function(){
        if(loaded == numberImage-1) {
            setTimeout(function(){
                startAnimation();
            },1000);
        }
        loaded ++;
    }
    img.src = src;
}

function prepareAnimation(){
	enableTransform2d('ph_conBanner',1,0,0,0,0.5,'linear');
	enableTransform2d('play_btn',1,0,0,0,0.5,'linear');
	enableTransform2d('video_container',1,0,0,0,0.5,'linear');
}

function startAnimation(){
	// Change car picture each time banner is called
	var carID = Math.floor(Math.random() * 3) + 1;
	$('#car-'+carID).css('display','block');
	transform2d('ph_conBanner',1,0,0,0,true,false,1,'linear');
	startFadeInImg();
}
function startFadeInImg () {
	setTimeout(function(){
		transform2d('preview2',1,0,0,0,true,false,0.5,'linear');
	},2500);
	setTimeout(function(){
		transform2d('preview3',1,0,0,0,true,false,0.5,'linear');
	},5500);
	setTimeout(function(){
		transform2d('play_btn',1,0,0,0,true,false,0.5,'linear');
		$('#play_btn').click(function(){
			//transform2d('ph_conBanner',1,0,0,0,false,true,0.5,'linear');
			transform2d('video_container',1,0,0,0,true,false,1,'linear');
			document.getElementById('video').play();
		});
		$('#close_video').click(function(){
			transform2d('video_container',1,0,0,0,false,true,0.5,'linear');
			//transform2d('ph_conBanner',1,0,0,0,true,false,1,'linear');
			stopPlay();
		});
		
		document.getElementById('video').addEventListener('ended',function(){
			transform2d('video_container',1,0,0,0,false,true,0.5,'linear');
		});
	},5700);
}

function stopPlay(){
	document.getElementById('video').pause();
}

function playAudio(){
    isPlaying = false;
    var timeout = setTimeout(function(){
        isPlaying = true;
        try{
            if(canPlayAudio){
                document.getElementById('audio').currentTime = 0;
            }
            document.getElementById('audio').play();
        }
        catch(ex){
        }
        
        clearTimeout(timeout);
    },200);
}

function stopPlayAudio(){
    document.getElementById('audio').pause();
    if(!isPlaying){
        isPlaying = true;
        playAll();
    }
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