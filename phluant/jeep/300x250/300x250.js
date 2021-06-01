$(document).ready(function(){
    init();
});

var butter = {
		src: null,
		start:{
			x: 270,
			y: -50
		},
		end:{
			x: 150,
			y: 70
		},
		
		out: {
			x: -50,
			y: 90
		},
		x: 270,
		y: -50,
		currentFrame: 0,
		numberFrame: 8,
		draw: function(ctx){
			ctx.drawImage(this.src, this.currentFrame * 108, 0, 108, 126, this.x, this.y, parseInt(108*111/126), 111);
		}
	};
var loaded = 0;
var numberImage = 15;

function init(){
	$("<img/>").attr("src","img_728x90/bg1.jpg").load(preload);
    $("<img/>").attr("src","img_728x90/bg2.jpg").load(preload);
    $("<img/>").attr("src","img_728x90/button.png").load(preload);
    $("<img/>").attr("src","img_728x90/every_inch_of_the_world.png").load(preload);
    $("<img/>").attr("src","img_728x90/legal.png").load(preload);
    $("<img/>").attr("src","img_728x90/legal_old.png").load(preload);
    $("<img/>").attr("src","img_728x90/logo.png").load(preload);
    $("<img/>").attr("src","img_728x90/remember.png").load(preload);
    $("<img/>").attr("src","img_728x90/text.png").load(preload);
    $("<img/>").attr("src","img_728x90/whenyoufelt.png").load(preload);
    
    $("<img/>").attr("src","img/bg2.jpg").load(preload);
    $("<img/>").attr("src","img/button.png").load(preload);
    $("<img/>").attr("src","img/logo.png").load(preload);
    $("<img/>").attr("src","img/text.png").load(preload);
    
    prepareAnimation();
    
    butter.src = new Image();
    butter.src.onload = function(){
    	preload();
    }
    butter.src.src = 'img/108x126.png';
    
    var canvasMask = document.getElementById('canvas_mask');
    var context = canvasMask.getContext('2d');
    context.fillStyle = "#000000";
    context.fillRect(0,0,300,250);
    $('#mask').css('display','none');
}

function preload(){
    if(loaded == numberImage-1){
        setTimeout('start()',1000);
    }
    loaded ++;
}


function prepareAnimation(){
    enableTransform2d('frame2_300x250',1,0,0,0,0.5,'linear');
    enableTransform2d('button_300x250',1,0,0,0,0.5,'linear');
    enableTransform2d('text_300x250',1,0,0,0,0.5,'linear');
}

function start(){
	setTimeout(function(){
		butterFly();
	},5000);
}

function runFinalAnimation(){
	//transform2d('frame1_300x250',1,0,0,0,false,true,0.5,'linear');
	//transform2d('frame2_300x250',1,0,0,0,true,false,0.5,'linear');
	
	//setTimeout(function(){
		transform2d('text_300x250',1,0,0,-18,true,false,1,'linear');
	//},500);
	setTimeout(function(){
		transform2d('button_300x250',1,0,0,0,true,false,0.5,'linear');
//		transform2d('legal_300x250',1,0,0,0,true,false,0.5,'linear');
	},500);
}

function butterFly(){
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	
	var canvas_mask = document.getElementById('canvas_mask');
    var ctx_mask = canvas_mask.getContext('2d');
    
	flyIn(ctx,canvas,ctx_mask,canvas_mask);
}

var direction = 1;
var countStop = 0;

function flyIn(context, canvas, context_mask, canvas_mask){
	var date = new Date();
	
	(function drawButter(){
		if(butter.x > butter.end.x)
			butter.x--;
		if(butter.y < butter.end.y)
			butter.y++;
		if(butter.x > butter.end.x || butter.y < butter.end.y){
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
			flyout(context, canvas,context_mask, canvas_mask);
		}
		context.clearRect(0, 0, canvas.width, canvas.height);
		butter.draw(context);
		drawMask(context_mask, canvas_mask,butter.x);
	}());
}

function drawMask(ctx, canvas, x){
	var y = canvas.height*(1 - x/canvas.width);
	//var r = Math.sqrt(x*x + (canvas.height - y)*(canvas.height - y));
	var r  = Math.sqrt(canvas.height*canvas.height + canvas.width*canvas.width);
	ctx.clearRect(0,0,canvas.width, canvas.height);
	ctx.beginPath();
	ctx.fillStyle = '#000000';
	/*
	var x1 = 0;
	var y1 = 0;
	var x2 = canvas.width;
	var y2 = canvas.height;
	
	if(x > canvas.width/2){
		x1 = 2*x - canvas.width;
		y2 = 2*y;
		
		ctx.moveTo(x1, y1);
		ctx.lineTo(0,0);
		ctx.lineTo(0,canvas.height);
		ctx.lineTo(canvas.width,canvas.height);
		ctx.lineTo(x2,y2);
		ctx.lineTo(x1,y1);
		
	}
	else{
		y1 = 2*y - canvas_mask.height;
		x2 = 2*x;
		
		
		ctx.moveTo(x1, y1);
		ctx.lineTo(0,canvas.height);
		ctx.lineTo(x2,y2);
		ctx.lineTo(x1,y1);
		
	}
	*/
	ctx.arc(x-canvas.width, canvas.height+y, r, 0, 2 * Math.PI, false);
	ctx.fill();
}

var alpha = 1;
var alreadyEnd = false;

function flyout(context, canvas,context_mask, canvas_mask){
	(function drawButter(){
		if(butter.x > butter.out.x){
			butter.x--;
			alpha -= 1/150;
		}
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
		
		if(alpha > 0){
			context.globalAlpha = alpha;
			context.clearRect(0, 0, canvas.width, canvas.height);
			butter.draw(context);
			
			drawMask(context_mask, canvas_mask,butter.x);
		}
		else{
			if(!alreadyEnd){
				alreadyEnd = true;
				
				context_mask.clearRect(0,0,canvas_mask.width, canvas_mask.height);
				runFinalAnimation();
			}
		}
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