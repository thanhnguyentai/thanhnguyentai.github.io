
$(document).ready(function(){
    init();
});


function init(){
    preload('img/AppLink1.jpg');
    preload('img/AppLink2.jpg');
    preload('img/escape.png');
    preload('img/header_text.png');
    preload('img/focus.png');
    preload('img/footer.jpg');
    preload('img/fusion.png');
    preload('img/replay.png');
    preload('img/text.png');
    
    prepareAnimation();
}

var loaded = 0;
var numberImage = 9;
var isAnimateText = false;

function preload(src){
    var img = new Image();
    img.onload = function(){
        if(loaded == numberImage-1) {
        	prepareEvent();
        	startAnimation();
        }
        loaded ++;
    }
    img.src = src;
}

function prepareEvent(){
	$('#replay').click(function(){
		transform2d('video_native',1,0,0,0,true,false,0.5,'linear');
		document.getElementById('video').play();
	});

	$('#bt_close_video').click(function(){
		transform2d('video_native',1,0,0,0,false,true,0.5,'linear');
		document.getElementById('video').pause();
	});
	
	document.getElementById('video').addEventListener('ended',function(){
		transform2d('video_native',1,0,0,0,false,true,0.5,'linear');
	});
	
	$('#tab_more').click(function(){
		transform2d('disclame',1,0,0,0,true,false,0.5,'linear');
	});
	$('#bt_close_disclame').click(function(){
		transform2d('disclame',1,0,0,0,false,true,0.5,'linear');
	});
}

function prepareAnimation(){
	enableTransform2d('ph_conBanner',1,0,0,0,1,'linear');
	enableTransform2d('preview2',1,0,0,0,1,'linear');
	enableTransform2d('replay',1,0,0,0,1,'linear');
	enableTransform2d('video_native',1,0,0,0,1,'linear');
	enableTransform2d('disclame',1,0,0,0,0.5,'linear');
}

function startAnimation(){
	transform2d('ph_conBanner',1,0,0,0,true,false,1,'linear');
	
	setTimeout(function(){
		transform2d('preview2',1,0,0,0,true,false,0.5,'linear');
	},3000);
	setTimeout(function(){
		transform2d('replay',1,0,0,0,true,false,0.5,'linear');
	},3500);
	
	var carID = Math.floor(Math.random() * 3) + 1;
	$('#car_'+carID).css('display','block');
}



/*----------------------------------------------------------------------------*/
var numberImageVideo = 0;
var allOfVideo = new Array();

var totalImageVideo = 120;
var countAllImage = 0;

function preloadForVideo(i){
	var img = new Image();
	img.onload = function(){		
		countAllImage++;
        if(countAllImage == totalImageVideo){
            playVideo();
        }
	}
	img.src = 'video/video'+i+'.jpg';
	
	allOfVideo.push(img);
	
	if(i < totalImageVideo){
		preloadForVideo(i+1);
	}
}

function prepareEventVideo(){
	$('#replay').click(function(){
    	transform2d('video_native',1,0,0,0,true,false,0,25,'linear');
        $("#replay").css("display","none");
    	var video = document.getElementById('video');
        video.play();
    });
    

    document.getElementById('video').addEventListener('ended',function(){
    	transform2d('video_native',1,0,0,0,false,true,0,25,'linear');
        $("#replay").css("display","block");
    });
    
    $('#bt_close_video').click(function(){
    	transform2d('video_native',1,0,0,0,false,true,0,25,'linear');
    	var video = document.getElementById('video');
        video.pause();
    });
}



function playVideo(){
	$("#preload").css("display",'none');
    var context = document.getElementById('canvas').getContext('2d');
    var count = 0;
    
    var interval = setInterval(function(){
    	if(count < allOfVideo.length){
            context.drawImage(allOfVideo[count],0,0,300,155);
            count++;
        }
        else{
            endVideo();
            clearInterval(interval);
        }
    },41.67);
}

function endVideo(){
	$('#replay').css('display','block');
    $('#canvas').css('display','none');
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