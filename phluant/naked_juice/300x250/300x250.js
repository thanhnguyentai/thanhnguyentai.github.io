$(document).ready(function(){
    $("<img/>").attr("src","img_728x90/bg.jpg").load(preload);
    $("<img/>").attr("src","img_728x90/motion.png").load(preload);
    $("<img/>").attr("src","img_728x90/bottle.png").load(preload);
    $("<img/>").attr("src","img_728x90/text.png").load(preload);
    $("<img/>").attr("src","img_728x90/border.png").load(preload);
    $("<img/>").attr("src","img_728x90/end.png").load(preload);
    
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
    
    $("<img/>").attr("src","img/bg.jpg").load(preload);
    $("<img/>").attr("src","img/border.png").load(preload);
    $("<img/>").attr("src","img/bottle.png").load(preload);
    $("<img/>").attr("src","img/bottle1.png").load(preload);
    $("<img/>").attr("src","img/end.png").load(preload);
    $("<img/>").attr("src","img/right.png").load(preload);
    $("<img/>").attr("src","img/weight.png").load(preload);
    
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
    enableTranform('bottle1',0.5,'linear');
    enableTranform('end',0.5,'linear');
    enableTranform('weight',0.5,'linear');
    enableTranform('fruit_container',0.5,'linear');
    
    enableTransform2d('apple',1,0,50,50,0.5,'linear');
    enableTransform2d('apple2',1,0,50,50,0.5,'linear');
    enableTransform2d('apple3',1,0,50,50,0.5,'linear');
    enableTransform2d('apple4',1,0,50,50,0.5,'linear');
    enableTransform2d('banana',1,0,50,50,0.5,'linear');
    enableTransform2d('banana2',1,0,50,50,0.5,'linear');
    enableTransform2d('banana3',1,0,50,50,0.5,'linear');
    enableTransform2d('banana4',1,0,50,50,0.5,'linear');
    enableTransform2d('hue',1,0,50,50,0.5,'linear');
    enableTransform2d('kiwi',1,0,50,50,0.5,'linear');
    enableTransform2d('kiwi2',1,0,50,50,0.5,'linear');
    enableTransform2d('mango',1,0,50,50,0.5,'linear');
    enableTransform2d('pineapple',1,0,0,0,0.5,'linear');
    enableTransform2d('bottle',1,0,0,0,0.5,'linear');
    
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
    
    setTimeout(function(){
        fadeOutImg('bottle1',0.5);
    },1000);
    
    setTimeout(function(){
        transform2d('apple3',1,50,0,260,false,false,1.5,'linear');
    },2000);
    setTimeout(function(){
        transform2d('kiwi2',1,10,0,270,false,false,1.5,'linear');
    },2250);
    setTimeout(function(){
        transform2d('apple2',1,20,0,250,false,false,1.5,'linear');
    },2500);
    setTimeout(function(){
        fadeInImg('weight',0.5);
    },3000);
    
    
    setTimeout(function(){
        transform2d('mango',1,10,0,270,false,false,1,'linear');
    },3500);
    setTimeout(function(){
        transform2d('hue',1,20,0,260,false,false,1,'linear');
    },3750);
    setTimeout(function(){
        transform2d('banana3',1,10,0,270,false,false,1,'linear');
    },4000);
    setTimeout(function(){
        transform2d('banana2',1,20,0,240,false,false,1,'linear');
    },4250);
    setTimeout(function(){
        transform2d('kiwi',1,10,0,250,false,false,1,'linear');
    },4500);
    setTimeout(function(){
        transform2d('apple',1,20,0,250,false,false,1,'linear');
    },4750);
    setTimeout(function(){
        transform2d('pineapple',1,10,0,250,false,false,1,'linear');
    },5000);
    setTimeout(function(){
        transform2d('banana',1,20,0,250,false,false,1,'linear');
    },5250);
    setTimeout(function(){
        transform2d('apple4',1,10,0,250,false,false,1,'linear');
    },5500);
    setTimeout(function(){
        transform2d('banana4',1,20,0,250,false,false,1,'linear');
    },5750);
    setTimeout(function(){
        transform2d('bottle',1,0,0,300,false,false,0.75,'linear');
    },5000);
    
    setTimeout(function(){
        fadeOutImg('fruit_container',0.5);
        fadeInImg('end',1);
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