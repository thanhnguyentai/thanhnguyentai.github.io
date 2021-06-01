$(document).ready(function(){
    init();
});

function init(){
	preload('img/arrow.png');
    preload('img/logo.png');
    preload('img/text.png');
    preload('img/cover_all.png');
    preload('img/scratch_new.png');
    preload('img/hand.png');
    
    prepareAnimation();
}

var loaded = 0;
var numberImage = 6;


function preload(src){
    var img = new Image();
    img.onload = function(){
        if(loaded == numberImage-1){
            setTimeout('start()',500);
        }
        loaded ++;
    }
    img.src = src;
}

function prepareAnimation(){
    enableTransform2d('minimize',1,0,0,0,0.5,'linear');
    enableTransform2d('arrow',1,0,0,0,0.5,'linear');
    
    enableTransform2d('scratch',1,0,0,0,1,'linear');
    enableTransform2d('cover',1,0,0,0,0.5,'linear');
    enableTransform2d('hand',1,0,0,0,0.5,'linear');
}

function start(){
    console.log('part 0');
    
    transform2d('minimize',1,0,0,0,true,false,0.5,'linear');
    //function transform2d(id,scale,rotate,translatex,translatey,isfadein,isfadeout,time,timeFunc,centerX,centerY)
    setTimeout(function(){
    	transform2d('hand',1,0,0,0,true,false,0.5,'linear');
    },500);
    setTimeout(function(){
    	transform2d('hand',1,0,180,-10,false,false,1,'linear');
    	$('#scratch').css('width','120px');
    },1000);
    setTimeout(function(){
        transform2d('hand',1,0,100,20,false,false,0.2,'linear');
    },2000);

    setTimeout(function(){
    	$('#scratch').css('width','0px');
        transform2d('hand',1,0,320,-20,false,false,1,'linear');
    },2200);

    setTimeout(function(){
        //console.log('part 3');
    	transform2d('cover',1,0,0,0,false,true,0.5,'linear');
    	transform2d('scratch',1,0,0,0,false,true,0.5,'linear');
    	transform2d('hand',1,0,320,0,false,true,0.1,'linear');
    },3500);

    
    setTimeout(function(){
    	transform2d('arrow',1,0,0,0,true,false,0.5,'linear');
    	setTimeout(function(){
        	transform2d('arrow',1,0,10,0,true,false,0.25,'ease-in-out');
        	setTimeout(function(){
        		transform2d('arrow',1,0,0,0,true,false,0.25,'ease-in-out');
        	},250);
        	setTimeout(function(){
        		transform2d('arrow',1,0,10,0,true,false,0.25,'ease-in-out');
        	},500);
        	setTimeout(function(){
        		transform2d('arrow',1,0,0,0,true,false,0.25,'ease-in-out');
        	},750);
        },500);
    },4500);
}

/*--------------------------------------------------------------------------------*/
function enableTransform2d(id,scaleInit,rotateInit,centerX,centerY,time,timeFunc){
    if(time != null && timeFunc){
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
}

function transform2d(id,scale,rotate,translatex,translatey,isfadein,isfadeout,time,timeFunc,centerX,centerY){
    if(time != null && timeFunc){
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
function fromLeft(id, delay, duration, width){
    $.fn.addKeyframe([{
        name: "fromLeft",
        "100%": 'width: '+ width + "px",
        "0%": 'width: 0px',
    }]);
    $('#'+id).resetKeyframe(function(){
        $('#'+id).playKeyframe({
            name: 'fromLeft', // name of the keyframe you want to bind to the selected element
            duration: duration, // how long you want it to last in milliseconds
            timingFunction: 'linear', // specifies the speed curve of the animation
            delay: delay, // how long you want to wait before the animation starts in milliseconds
            repeat: 1, // how many times you want the animation to repeat
            direction: 'normal', // which direction you want the frames to flow
            fillMode: 'forwards' // how to apply the styles outside the animation time
        });
    });
}