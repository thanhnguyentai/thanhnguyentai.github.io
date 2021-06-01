
$(document).ready(function(){
	init();
});

var butter = {
	src: null,
	start:{
		x: 615,
		y: -110
	},
	end:{
		x: 515,
		y: -10
	},
	out: {
		x: 415,
		y: 90
	},
	x: 615,
	y: -110,
	currentFrame: 0,
	numberFrame: 8,
	draw: function(ctx){
		ctx.drawImage(this.src, this.currentFrame * 108, 0, 108, 126, this.x, this.y, parseInt(108*111/126), 111);
	}
};
var loaded = 0;
var numberImage = 15;
function preload(){
    if(loaded == numberImage-1){
    	prepareEvent();
        setTimeout('start()',1000);
    }
    loaded ++;
}

function init(){
    $("<img/>").attr("src","img_300x250/bg2.jpg").load(preload);
    $("<img/>").attr("src","img_300x250/button.png").load(preload);
    $("<img/>").attr("src","img_300x250/logo.png").load(preload);
    $("<img/>").attr("src","img_300x250/text.png").load(preload);
    
    $("<img/>").attr("src","img/bg1.jpg").load(preload);
    $("<img/>").attr("src","img/bg2.jpg").load(preload);
    $("<img/>").attr("src","img/button.png").load(preload);
    $("<img/>").attr("src","img/every_inch_of_the_world.png").load(preload);
    $("<img/>").attr("src","img/legal.png").load(preload);
    $("<img/>").attr("src","img/logo.png").load(preload);
    $("<img/>").attr("src","img/remember.png").load(preload);
    $("<img/>").attr("src","img/legal_old.png").load(preload);
    $("<img/>").attr("src","img/text.png").load(preload);
    $("<img/>").attr("src","img/whenyoufelt.png").load(preload);
    
    prepareAnimation();
    
    butter.src = new Image();
    butter.src.onload = function(){
    	preload();
    }
    butter.src.src = 'img/108x126.png';
}

function prepareEvent(){
	$('#legal_old_728x90').bind('click', function(){
		transform2d('legal_old_728x90',1,0,0,0,false,true,0.5,'linear');
		transform2d('legal_728x90',1,0,0,0,true,false,0.5,'linear');
	});
}

function prepareAnimation(){
    enableTransform2d('frame1_728x90',1,0,0,0,0.5,'linear');
    enableTransform2d('remember_728x90',1,0,0,0,0.5,'linear');
    enableTransform2d('whenyoufelt_728x90',1,0,0,0,0.5,'linear');
    enableTransform2d('every_inch_of_the_world_728x90',1,0,0,0,0.5,'linear');
    enableTransform2d('frame2_728x90',1,0,0,0,0.5,'linear');
    enableTransform2d('button_728x90',1,0,0,0,0.5,'linear');
    enableTransform2d('legal_728x90',1,0,0,0,0.5,'linear');
    enableTransform2d('text_728x90',1,0,0,0,0.5,'linear');
    enableTransform2d('legal_old_728x90',1,0,0,0,0.5,'linear');
}

function start(){
	butterFly();
}

function runRemainAnimation(){
	transform2d('remember_728x90',1,0,0,0,true,false,0.5,'linear');
	setTimeout(function(){
		transform2d('remember_728x90',1,0,0,0,false,true,0.5,'linear');
		transform2d('whenyoufelt_728x90',1,0,0,0,true,false,0.5,'linear');
	},1500);
	setTimeout(function(){
		transform2d('whenyoufelt_728x90',1,0,0,0,false,true,0.5,'linear');
		transform2d('every_inch_of_the_world_728x90',1,0,0,0,true,false,0.5,'linear');
	},3500);
}

function runFinalAnimation(){
	transform2d('frame1_728x90',1,0,0,0,false,true,0.5,'linear');
	transform2d('frame2_728x90',1,0,0,0,true,false,0.5,'linear');
	
	setTimeout(function(){
		transform2d('text_728x90',1,0,0,-12,true,false,1,'linear');
	},500);
	setTimeout(function(){
		transform2d('button_728x90',1,0,0,0,true,false,0.5,'linear');
		transform2d('legal_old_728x90',1,0,0,0,true,false,0.5,'linear');
	},1000);
}

function butterFly(){
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	flyIn(ctx, canvas);
}

var direction = 1;
var alreadyRunRemainAnimation = false;
var countStop = 0;

function flyIn(context, canvas){	
	(function drawButter(){
		if(butter.x > butter.end.x)
			butter.x--;
		if(butter.y < butter.end.y)
			butter.y++;
		if(butter.x > butter.end.x || butter.y < butter.end.y){
			if(butter.x <= butter.end + 15 || butter.y >= butter.end.y -15){
				setTimeout(function(){
					drawButter();
				},1000/50);
				
				if(!alreadyRunRemainAnimation){
					alreadyRunRemainAnimation = true;
					runRemainAnimation();
				}
			}
			else if(butter.x <= butter.end + 30 || butter.y >= butter.end.y -30){
				setTimeout(function(){
					drawButter();
				},1000/55);
			}
			else{
				setTimeout(function(){
					drawButter();
				},1000/60);
			}
			
			if(direction == 1){
				butter.currentFrame++;
			}
			else{
				butter.currentFrame--;
			}
			if(butter.currentFrame >= butter.numberFrame){
				direction = -1;
				butter.currentFrame = butter.numberFrame-1;
			}
			else if(butter.currentFrame < 0){
				direction = 1;
				butter.currentFrame = 0;
			}
		}
		else{
			butter.x = butter.end.x;
			butter.y = butter.end.y;
			
			if(direction == 1){
				butter.currentFrame++;
			}
			else{
				butter.currentFrame--;
			}
			if(butter.currentFrame >= butter.numberFrame){
				direction = -1;
				butter.currentFrame = butter.numberFrame-1;
			}
			else if(butter.currentFrame < 0){
				direction = 1;
				butter.currentFrame = 0;
			}
			
			if(countStop < 20 || butter.currentFrame != 0){
				setTimeout(function(){
					drawButter();
					countStop++;
				},1000/20);
			}
			else{
				flyOut(context, canvas);
			}
		}
		context.clearRect(0, 0, canvas.width, canvas.height);
		butter.draw(context);
	}());
}

function flyOut(context, canvas){
	direction = 1;
	
	(function drawButter(){
		if(butter.x > butter.out.x)
			butter.x--;
		if(butter.y < butter.out.y)
			butter.y++;
		if(butter.x > butter.out.x || butter.y < butter.out.y){
			setTimeout(function(){
				drawButter();
			},1000/80);
			
			if(direction == 1){
				butter.currentFrame++;
			}
			else{
				butter.currentFrame--;
			}
			if(butter.currentFrame >= butter.numberFrame){
				direction = -1;
				butter.currentFrame = butter.numberFrame-1;
			}
			else if(butter.currentFrame < 0){
				direction = 1;
				butter.currentFrame = 0;
			}
		}
		else{
			setTimeout(function(){
				runFinalAnimation();
			}, 3500);
		}

		context.clearRect(0, 0, canvas.width, canvas.height);
		butter.draw(context);
	}());
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