
$(document).ready(function(){
    init();
});

function init(){
    preload('img/300x50.jpg');
    preload('img/300x300_text.png');
    preload('img/300x300.png');
    preload('img/close.png');
    prepareAnimation();
}

var loaded = 0;
var numberImage = 4;

var video = new Array();
function preload(src){
    var img = new Image();
    img.onload = function(){
        if(loaded == numberImage-1){
            if(!$.browser.msie){
                prepareEvent();
                setTimeout('start()',1000);
            }
            else{
                prepareEventIE();
                setTimeout('startIE()',1000);
            }
        }
        loaded ++;
    }
    img.src = src;
}

function prepareEvent(){
    $('#ph_conBanner').click(function(){
        startExpand();
    });
    $('#bt_close').click(function(){
        closeExpand();
    });
}

function prepareEventIE(){
    $('#ph_conBanner').click(function(){
        startExpandIE();
    });
    $('#bt_close').click(function(){
        closeExpandIE();
    });
}

function prepareAnimation(){
    enableTransform2d('ph_conBanner',1,0,0,0,0.5,'linear');
    enableTransform2d('ph_conExpand',1,0,0,0,0.5,'linear');
    enableTransform2d('text',1,0,0,0,0.5,'linear');
}


function start(){
    transform2d('ph_conBanner',1,0,0,0,true,false,0.5,'linear');
}

function startIE(){
    fadeInImgIE('ph_conBanner',0.5);
}

var alreadyAnimation = false;
function startExpand(){
    transform2d('ph_conBanner',1,0,0,0,false,true,0.5,'linear');
    transform2d('ph_conExpand',1,0,0,0,true,false,0.5,'linear');
    
    if(alreadyAnimation)
        return;
    
    for(var i=1;i<=93;i++){
        preloadForVideo('video/video'+i+'.jpg');
    }
    
    alreadyAnimation = true;
}

function startExpandIE(){
    fadeOutImgIE('ph_conBanner',0.5);
    fadeInImgIE('ph_conExpand',0.5);
    
    if(alreadyAnimation)
        return;
    
    for(var i=1;i<=93;i++){
        preloadForVideo('video/video'+i+'.jpg');
    }
        
    alreadyAnimation = true;
}

var numberImageVideo = 0;
function preloadForVideo(src){
    var img = new Image();
    img.onload = function(){
        if(numberImageVideo == 92){
            playVideo();
        }
        numberImageVideo ++;
    }
    img.src = src;
    video.push(img);
}
function playVideo(){
    var context = document.getElementById('canvas').getContext('2d');
    var count = 0;
    var interval = setInterval(function(){
        context.drawImage(video[count],0,0);
        count++;
        if(count == video.length){
            clearInterval(interval);
            endVideo();
        }
    },1000/31);
}

function endVideo(){
    if(!$.browser.msie){
        transform2d('text',1,0,0,0,true,false,0.5,'linear');
    }
    else{
        fadeInImgIE('text',0.5);
    }
}


function closeExpand(){
    transform2d('ph_conBanner',1,0,0,0,true,false,0.5,'linear');
    transform2d('ph_conExpand',1,0,0,0,false,true,0.5,'linear');
}

function closeExpandIE(){
    fadeInImgIE('ph_conBanner',0.5);
    fadeOutImgIE('ph_conExpand',0.5);
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