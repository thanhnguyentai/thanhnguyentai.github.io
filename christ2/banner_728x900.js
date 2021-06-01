$(document).ready(function(){
    prepare();
    $("<img/>").attr("src","img/728x900_bg.jpg").load(preload);
    $("<img/>").attr("src","img/728x900_planet.png").load(preload); 
    $("<img/>").attr("src","img/728x900_logo.png").load(preload); 
	$("<img/>").attr("src","img/728x900_button.png").load(preload); 
    $("<img/>").attr("src","img/728x900_circle.png").load(preload); 
    $("<img/>").attr("src","img/728x900_facebook.png").load(preload); 
    $("<img/>").attr("src","img/728x900_facebook_fly.png").load(preload); 
    $("<img/>").attr("src","img/728x900_twitter.png").load(preload); 
    $("<img/>").attr("src","img/728x900_twitter_fly.png").load(preload); 
    $("<img/>").attr("src","img/728x900_gold.png").load(preload); 
    $("<img/>").attr("src","img/728x900_gold_shine.png").load(preload); 
    $("<img/>").attr("src","img/728x900_text_and.png").load(preload); 
    $("<img/>").attr("src","img/728x900_text_make.png").load(preload); 
    $("<img/>").attr("src","img/728x900_text_create.png").load(preload); 
    $("<img/>").attr("src","img/728x900_twitter_fly_back.png").load(preload); 
    $("<img/>").attr("src","img/728x900_facebook_fly_back.png").load(preload); 
	$("<img/>").attr("src","img/728x900_circlelight_up.png").load(preload); 
    $("<img/>").attr("src","img/728x900_circlelight_down.png").load(preload); 
});


function preload(){
    if(loaded == 17){
        prepare();
        setTimeout(function(){
            start();
        },1000);
    }
    loaded ++;
}
var loaded = 0;
function prepare(){
    enableTranformZoom('facebook',1,1540,-200);
    enableTranformZoom('twitter',1,-5000,-800);
    enableTranformZoom('gold',1,65,50);
	
	enableTranformZoom('winner_rotate',1,50,50);
	enableTranformZoom('twitter_rotate',1,50,50);
	enableTranformZoom('facebook_rotate',1,50,50);
}


var loaded = 0;

function start(){
	
    var running = setTimeout(function(){
        clearTimeout(running);
        /*------------in text make facebook & twitter---*/
        startTranslate("text_make",0,0,300,1);
        /*-------in facebook and twitter------------*/
        var facebook = setTimeout(function(){
            clearTimeout(facebook);
            startTranslate("facebook",320,-50,700,1);
            startTranslate("twitter",-320,-50,700,1);
            zoomAnimation("facebook",0.6,700,"linear");
            zoomAnimation("twitter",0.9,700,"linear");
            /*-----fly------------------------------*/
           var fly = setTimeout(function(){
               clearTimeout(fly);
                /*-------------in fly----------------*/
                startTranslate("facebook_fly",0,0,100,1);
                startTranslate("twitter_fly",0,0,100,1);
                var resetFace = setTimeout(function(){
                    clearTimeout(resetFace);
                    /*--------reset facebook - twitter---*/
                    startTranslate("facebook",0,0,0,1);
                    startTranslate("twitter",0,0,0,1);
                },100);
                /*---------fly-----------------------*/
                var moveFly = setTimeout(function(){
                    clearTimeout(moveFly);
                    startTranslate("facebook_fly",-280,-100,300,0);
                    startTranslate("twitter_fly",-300,200,300,0);
                    var flyBack = setTimeout(function(){
                        clearTimeout(flyBack);
                        /*-------------reset fly----------------*/
                        startTranslate("facebook_fly",0,0,0,0);
                        startTranslate("twitter_fly",0,0,0,0);
                        
                        startTranslate("facebook_fly_back",240,-40,200,1);
                        startTranslate("twitter_fly_back",-250,-50,200,1);
						
                        var outFlyback = setTimeout(function(){
                            clearTimeout(outFlyback);
                            startTranslate("facebook_fly_back",0,0,0,0);
                            startTranslate("twitter_fly_back",0,0,0,0);
                            
							enablePlay = true;
							
							$('#facebook_rotate').css('opacity',1);
							$('#twitter_rotate').css('opacity',1);
							
							runCircleUp('facebook_rotate',0,0,2,2,1);
							runCircleDown('twitter_rotate',0,0,5,5,-1);
							//runCircleUp('winner_rotate',0,0,8,8,1);
                        },200);
                    },300);
                },150);
            },700);
            /*-------around----------------------*/  
            var around = setTimeout(function(){
                clearTimeout(around);
                /*------------out text make-------*/
                startTranslate("text_make",0,0,500,0);
                
				var fadeInText = setTimeout(function(){
					fadeInImg('text_and',0.5);
					fadeInImg("gold",0.5);
				},500);
				
				var blinkTimeout = setTimeout(function(){
					blink('shine_gold',0.1,5);
				},1200);
				
				var lastText = setTimeout(function(){
					fadeInImg('text_create',1);
					fadeOutImg('text_and',0.5);
					fadeOutImg("gold",0.5);
				},3500);
                
				
				var stopRotate = setTimeout(function(){
					clearTimeout(stopRotate);
					enablePlay = false;
				},5500);
				
				var replayTimeout = setTimeout(function(){
					clearTimeout(replayTimeout);
					$('#facebook_rotate').css('opacity',0);
					$('#twitter_rotate').css('opacity',0);
					fadeOutImg('text_create',0.5);
					
					replay();
				},6200);
			},1500);
        },300);
    },100);
}


function replay(){
	var restoreTimeout = setTimeout(function(){
		enablePlay = false;
		
		var timeoutBack = setTimeout(function(){
			var restore = setTimeout(function(){
				$('#twitter_rotate').css('z-index',2);
				$('#facebook_rotate').css('z-index',5);
				$('#winner_rotate').css('z-index',5);
				zoomAndTranslate('facebook_rotate',1,0.1,0,0,'linear');
				zoomAndTranslate('winner_rotate',1,0.1,0,0,'linear');
				zoomAndTranslate('winner_rotate',1,0.1,0,0,'linear');
				clearTimeout(restore);
			},1000);
			
			clearTimeout(timeoutBack);
		},600);
		clearTimeout(restoreTimeout);
	},1000);
	
	var timeout = setTimeout(function(){
		start();
		clearTimeout(timeout);
	},1000);
}

/*----------------------------------------------------------------------------------------------------------------------*/
var enablePlay = true;


function runCircleUp(id,currentx,currenty,count,startCount,type){
	if(enablePlay == false){
		return;
	}
	
	zoomAndTranslate(id,1,0.09,currentx,currenty,'linear');
	var timeout = setTimeout(function(){
			currentx += 30;
			switch(count){
				case 0:
					currenty +=10;
					count++;
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 1:					
					currenty += 25;
					currentx += 29;
					count++;
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 2:
					currenty -=1;
					count++;
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 3:
					currenty -=1;
					count++;
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 4:
					currenty -=3;
					count++;
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 5:
					currenty -=5;
					count++;
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 6:
					currenty -=5;
					count++;
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 7:
					currenty -=10;
					count++;
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 8:
					currenty -=10;
					count++;
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 9:
					currenty -=10;
					count++;
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 10:
					currenty -=10;
					count++;
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 11:
					currenty -=15;
					currentx -=13;
					count++;
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 12:
					currenty -=15;
					currentx -=13;
					count++;
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 13:
					currenty -=15;
					currentx -=13;
					count++;
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 14:
					currenty -= 15;
					currentx -= 50;
					count = 0;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					
					break;
			}
		clearTimeout(timeout);
	},80);
}

function runCircleDown(id,currentx,currenty,count,startCount,type){
	if(enablePlay == false){
		return;
	}
	
	zoomAndTranslate(id,0.6,0.09,currentx,currenty,'linear');
	
	var timeout = setTimeout(function(){
			currentx -= 30;
			switch(count){
				case 0:
					currenty -=10;
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					
					break;
				case 1:
					$('#'+id).css('z-index',1);
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 2:
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 3:
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 4:
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 5:
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 6:
					currenty +=10;
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 7:
					currenty +=10;
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 8:
					currenty +=10;
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 9:
					currenty +=10;
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;	
				case 10:
					currenty +=10;
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;	
				case 11:
					currenty +=10;
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;	
				case 12:
					$('#'+id).css('z-index',5);
					currenty +=10;
					currentx +=10;
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;	
				case 13:
					currenty +=10;
					currentx +=10;
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;	
				
				case 14:
					count = 0;
									
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						currentx +=40;
						currenty +=10;
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					
					break;
			}
		clearTimeout(timeout);
	},80);
}

function blink(id,time,repeat){
	if(repeat > 0){
		for(i=0;i<repeat;i++){
			var timeout = setTimeout(function(){
				fadeInImg(id,time);
				var timeout2 = setTimeout(function(){
					fadeOutImg(id,time);
					clearTimeout(timeout2);
				},1000*time);
				clearTimeout(timeout);
			},i*time*1000*3);
		}
	}
}
/*----------------------------------------------------------------------------------------------------------------------*/
function zoomAndTranslate(id,scale,time,translateX,translateY,timeFunc){
    $('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
    $('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	
    $('#'+id).css('-webkit-transform','translate('+translateX+'px,'+translateY+'px)' + ' scale('+scale+') ');
    $('#'+id).css('-moz-transform','translate('+translateX+'px,'+translateY+'px)'+ ' scale('+scale+') ');
}
function enableTranformZoom(id,initScale,centerX,centerY){
    $('#'+id).css('-webkit-transform','scale('+initScale+')');
    $('#'+id).css('-moz-transform', 'scale('+initScale+')');
	
    $('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
    $('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY+ '%');
	
    $('#'+id).css('-webkit-backface-visibility','hidden');
}	

function zoomAnimation(id,scale,time,timeFunc){
    $('#'+id).css('-webkit-transition',time + 'ms ' + timeFunc);
    $('#'+id).css('-moz-transition', time + 'ms ' + timeFunc);
	
    $('#'+id).css('-webkit-transform','scale('+scale+')');
    $('#'+id).css('-moz-transform','scale('+scale+')');
}	

function startTranslate(id,translateX,translateY,time,opacity){
    $('#'+id).css('-webkit-transition',time + 'ms linear');
    $('#'+id).css('opacity',opacity);
    $('#'+id).css('-webkit-transform','translate('+translateX+'px,'+translateY+'px)');
    $('#'+id).css('-moz-transform','translate('+translateX+'px,'+translateY+'px)');
}

function fadeInImg(id,time){
	$('#'+id).css('display','block');
	$('#'+id).css('-moz-animation','fadein '+time+'s linear');
	$('#'+id).css('-webkit-animation','fadein '+time+'s linear');
	$('#'+id).css('-webkit-animation-fill-mode','forwards');
	$('#'+id).css('-moz-animation-fill-mode','forwards');
}

function fadeOutImg (id,time){
	$('#'+id).css('-moz-animation','fadeout '+time+'s linear');
	$('#'+id).css('-webkit-animation','fadeout '+time+'s linear');
	$('#'+id).css('-webkit-animation-fill-mode','forwards');
	$('#'+id).css('-moz-animation-fill-mode','forwards');
	setTimeout(function(){
		$('#'+id).css('display','none');
	},time*1000);
}
