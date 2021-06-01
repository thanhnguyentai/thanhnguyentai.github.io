
$(document).ready(function(){
    $("<img/>").attr("src","img/bg.jpg").load(preload);
    $("<img/>").attr("src","img/motion.png").load(preload);
    $("<img/>").attr("src","img/bottle.png").load(preload);
    $("<img/>").attr("src","img/text.png").load(preload);
    $("<img/>").attr("src","img/border.png").load(preload);
    $("<img/>").attr("src","img/end.png").load(preload);
    
    $("<img/>").attr("src","img/apple.png").load(preload);
    $("<img/>").attr("src","img/apple2.png").load(preload);
    $("<img/>").attr("src","img/apple3.png").load(preload);
    $("<img/>").attr("src","img/apple4.png").load(preload);
    $("<img/>").attr("src","img/banana.png").load(preload);
    $("<img/>").attr("src","img/banana2.png").load(preload);
    $("<img/>").attr("src","img/banana3.png").load(preload);
    $("<img/>").attr("src","img/banana4.png").load(preload);
    $("<img/>").attr("src","img/hue.png").load(preload);
    $("<img/>").attr("src","img/kiwi.png").load(preload);
    $("<img/>").attr("src","img/kiwi2.png").load(preload);    
    $("<img/>").attr("src","img/mango.png").load(preload);
    $("<img/>").attr("src","img/pineapple.png").load(preload);    
    
    $("<img/>").attr("src","img_300x250/bg.jpg").load(preload);
    $("<img/>").attr("src","img_300x250/border.png").load(preload);
    $("<img/>").attr("src","img_300x250/bottle.png").load(preload);
    $("<img/>").attr("src","img_300x250/bottle1.png").load(preload);
    $("<img/>").attr("src","img_300x250/end.png").load(preload);
    $("<img/>").attr("src","img_300x250/right.png").load(preload);
    $("<img/>").attr("src","img_300x250/weight.png").load(preload);
    
    prepareAnimation();
});

var loaded = 0;
var numberImage = 26;
function preload(){
    if(loaded == numberImage-1){
        setTimeout('start()',1000);
    }
    loaded ++;
}

function prepareAnimation(){
    enableTranform('text',0.5,'linear');
    enableTranform('motion',0.5,'linear');
    enableTranform('end',0.5,'linear');
    enableTransform2d('container_bottle',1,0,0,0,0.5,'linear');
    enableTransform2d('apple1',1,0,0,0,0.5,'linear');
    enableTransform2d('apple2',1,0,0,0,0.5,'linear');
    enableTransform2d('kiwi',1,0,0,0,0.5,'linear');
    enableTransform2d('bottle',1,0,55,140,0.5,'linear');
}


var alreadyStart = false;
function start(){
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
                
                startAnimation();
            }

            // Update new position
//            
//            x2 = x1;
//            y2 = y1;
//            z2 = z1;
        }, 500);
    }
    
    setTimeout(function(){
        startAnimation();
    },7000);
}

function startAnimation(){
    if(alreadyStart)
        return;
    alreadyStart = true;
    $('#apple1').css('display','block');
    $('#apple2').css('display','block');
    $('#kiwi').css('display','block'); 
    
    transform2d('bottle',1,10,0,0,false,false,0.5,'linear');
    
    setTimeout(function(){
        transform2d('apple1',1,0,70,50,false,false,0.5,'linear');
    },250);
    
    setTimeout(function(){
        transform2d('kiwi',1,0,70,50,false,false,0.5,'linear');
    },500);
    
    setTimeout(function(){
        transform2d('bottle',1,0,0,0,false,false,0.5,'linear');
    },1000);
    
    setTimeout(function(){
        transform2d('apple2',1,0,70,50,false,false,0.5,'linear');
    },1250);
    
    setTimeout(function(){
        transform2d('bottle',1,55,0,0,false,false,0.75,'linear',45,40);
        fadeOutImg('text',0.5);
    },3000);
    
    
    setTimeout(function(){
        fadeInImg('motion',0.25);
    },4000);
    
    setTimeout(function(){
        transform2d('container_bottle',1,0,200,300,false,false,1,'linear');
    },4500);
    
    setTimeout(function(){
        fadeInImg('end',0.5);
    },6000);
}

/*-------------------------------------------------------------------------------------------*/
function enableTransform2d(id,scaleInit,rotateInit,centerX,centerY,time,timeFunc){
    if(time && timeFunc){
        $('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
        $('#'+id).css('-moz-transition', time + 's ' + timeFunc);
        $('#'+id).css('transition', time + 's ' + timeFunc);
        $('#'+id).css('-ms-transition', time + 's ' + timeFunc);
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
    
    $('#'+id).css('-webkit-transform-style','preserve-3d');
    $('#'+id).css('-webkit-backface-visibility','hidden');
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