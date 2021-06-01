$(document).ready(function(){
	init();
});

function init(){
    preload('img/bg.png');
    preload('img/logo.png');
    preload('img/text-1.png');
    preload('img/text-2.png');
    preload('img/text-3.png');
    preload('img/text-4.png');
    preload('img/text-5.png');
    preload('img/text-6.png');
    preload('img/text-7.png');
    preload('img/text-8.png');
    preload('img/text-9.png');
    preload('img/blinking.png');
    preload('img/end-logo.png');
    preload('img/end-text.png');
    preload('img/other-text.png');
    preload('img/text-51.png');
    prepareAnimation();
}

var loaded = 0;
var numberImage = 16;

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
	enableTransform2d('wrapper',1,0,0,0,0,'linear');
	enableTransform2d('other-text',1,0,0,0,0,'linear');
	enableTransform2d('other-text-parent',1,0,0,0,0,'linear');
	
};

function start(){
	
	
	temp =1;
	var inter = setInterval(function(){
		$('#text-'+temp).css('opacity','1');
		temp = temp +1;
		if(temp==10){
			clearInterval(inter);
		}
	},100);
	
	
	var time = setTimeout(function(){
		var t=1 ;
		var newint = setInterval(function(){
			if(t%2){
				$('#blink').css('opacity','1');
			}
			else{
				$('#blink').css('opacity','0');
			}
			
			if(t==5){
				clearInterval(newint);
				clearTimeout(time);
			}
			t = t+1;
		},200);
	},1000);
	
	
	
	var time2 = setTimeout(function(){
		var t =1;
		var newInt = setInterval(function(){
			
		var wid = $('#text-parent').width();
		var left1= $('#blink').position().left;
		wid = wid - 17;
		left1 = left1 -17;
		$('#text-parent').css('width',wid+'px');
		$('#blink').css('left',left1+'px');
			
			if(t==4){
				clearInterval(newInt);
			}
			t = t+1;
		},100);
		
		clearTimeout(time2);
	},2000);
	
	
	var time3 = setTimeout(function(){
		var t=1 ;
		var newint = setInterval(function(){
			if(t%2){
				$('#blink').css('opacity','1');
			}
			else{
				$('#blink').css('opacity','0');
			}
			
			if(t==5){
				$('#text-5').attr('src','img/text-51.png');
				$('#text-parent').css('width','0px');
				clearInterval(newint);
				clearTimeout(time3);
				
			}
			t = t+1;
		},200);
	},2200);
	
	
	
	var time4 = setTimeout(function(){
		var t =1;
		var newInt = setInterval(function(){
			
		var wid = $('#text-parent').width();
		var left1= $('#blink').position().left;
		if(t==1){
			wid = wid + 15;
			left1 = left1 +15;
		}
		if(t==2){
			wid = wid + 25;
			left1 = left1 +25;
		}
		if(t==3){
			wid = wid + 5;
			left1 = left1 +5;
		}
		if(t==4){
			wid = wid + 17;
			left1 = left1 +17;
		}
		if(t==5){
			wid = wid + 17;
			left1 = left1 +17;
		}
		
		
		$('#text-parent').css('width',wid+'px');
		$('#blink').css('left',left1+'px');
			if(t==5){
				clearInterval(newInt);
			}
			t = t+1;
		},200);
		
		clearTimeout(time4);
	},3200);
	
	
	var time5 = setTimeout(function(){
		var t=1 ;
		var newint = setInterval(function(){
			if(t%2){
				$('#blink').css('opacity','1');
			}
			else{
				$('#blink').css('opacity','0');
			}
			if(t==5){
				clearInterval(newint);
				clearTimeout(time5);
			}
			t = t+1;
		},200);
	},4000);
	
	
	
	var time6 = setTimeout(function(){
		transform2d('wrapper',1,0,0,0,false,true,0.5,'linear');
		clearTimeout(time6);
	},5000);
	
	
	var time7 = setTimeout(function(){
		transform2d('other-text',1,0,-45,0,true,false,0.5,'linear');
		clearTimeout(time7);
	},5500);
	
	var time8 = setTimeout(function(){
		transform2d('other-text-parent',1,0,0,0,false,true,0.5,'linear');
		clearTimeout(time8);
	},7000);


	
	var time9 = setTimeout(function(){
		transform2d('end-text',1,0,0,0,true,false,0.5,'linear');
		clearTimeout(time9);
	},7500);

	
	var time10 = setTimeout(function(){
		transform2d('logo',1,0,0,0,false,true,0.5,'linear');
		clearTimeout(time10);
	},8000);
	
	var time11 = setTimeout(function(){
		transform2d('end-logo',1,0,0,0,true,false,0.5,'linear');
		$('#go-now').css('opacity','1');
		clearTimeout(time11);
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