$(document).ready(function(){
    prepare();
    $("<img/>").attr("src","img/125x125_bg.png").load(preload);
	$("<img/>").attr("src","img/125x125_circle_gold.png").load(preload);
	$("<img/>").attr("src","img/125x125_facebook.png").load(preload);
	$("<img/>").attr("src","img/125x125_facebook_fly.png").load(preload);
	$("<img/>").attr("src","img/125x125_gold.png").load(preload);
	$("<img/>").attr("src","img/125x125_logo.png").load(preload);
	$("<img/>").attr("src","img/125x125_planet.png").load(preload);
	$("<img/>").attr("src","img/125x125_shine_gold.png").load(preload);
	$("<img/>").attr("src","img/125x125_text_and.png").load(preload);
	$("<img/>").attr("src","img/125x125_text_make.png").load(preload);
	$("<img/>").attr("src","img/125x125_twitter_fly.png").load(preload);
	$("<img/>").attr("src","img/125x125_circlelight_up.png").load(preload);
	$("<img/>").attr("src","img/125x125_circlelight_down.png").load(preload);
              
});

loaded = 0;
function preload(){
    if(loaded == 10){
        setTimeout(function(){
            start();
        },1000);
    }
    loaded ++;
}

function prepare(){
    enableTranformZoom('facebook',1,50,50);
    enableTranformZoom('gold',1,45,100);
	enableTranformZoom('twitter',1,50,50);
	
	enableTranform('div_circle_gold',0.5,'linear');
	
	enableTranformZoom('winnerrotate',1,50,50);
	enableTranformZoom('twitterrotate',1,50,50);
	enableTranformZoom('facebookrotate',1,50,50);
}

var loaded = 0;
function preload(){
    if(loaded == 0){
        setTimeout('start()',1000);
    }
	
    loaded ++;
}

function start(){
    var running = setTimeout(function(){
        clearTimeout(running);
        /*--------------move planet-------------*/
        startTranslate("planet_frame",0,90,800,1);
        /*------------in text make facebook & twitter---*/
        var intext = setTimeout(function(){
            clearTimeout(intext);
            fadeInImg("text_make",0.5);
            var inface = setTimeout(function(){
                clearTimeout(inface);
                startTranslate("facebook",0,0,600,1);
                startTranslate("twitter",0,0,600,1);
            },100);
            /*--------out facebook & twitter */
            var outface = setTimeout(function(){
                clearTimeout(outface);
                /*-----zoom in ------------------*/
                zoomAnimation("facebook",0.4,300,"linear"); 
                zoomAnimation("twitter",0.6,300,"linear");
                /*------in fly--------------------*/
                
                var infly = setTimeout(function(){
                    clearTimeout(infly);
                    startTranslate("twitter_fly",0,0,0,1); 
                    startTranslate("facebook_fly",0,0,0,1);
                    /*--reset twitter & facebook----------*/
                    startTranslate("twitter",0,0,0,0); 
                    startTranslate("facebook",0,0,0,0);
					
                    /*-fly---------------------*/
                    var fly = setTimeout(function(){
                        clearTimeout(fly);
                        startTranslate("twitter_fly",-400,0,1200,1); 
                        startTranslate("facebook_fly",-400,0,1200,1);
                        /*--------out text make-------------------*/
                        var intextmake = setTimeout(function(){
                            clearTimeout(intextmake);
                            fadeOutImg("text_make",0.8);
                            /*------reset fly----------*/
                            var resetFly = setTimeout(function(){
                                clearTimeout(resetFly);
                                startTranslate("twitter_fly",0,0,0,0); 
                                startTranslate("facebook_fly",0,0,0,0); 
                            },800);
                        },400);
                    },100);
                },300);
            },1200);
			
            /*------------in text and ----------------*/
            var intextand = setTimeout(function(){
                clearTimeout(intextand);
                fadeInImg("text_and",0.5);
				fadeInOut('gold',0.5,1);
                /*-------------in gold----------------------*/
               var ingold  = setTimeout(function(){
					clearTimeout(ingold);
					blink('shine_gold',0.1,5);
                },700);
				
				var zoomGold = setTimeout(function(){
					zoomOutAnimation('gold',0.2,0.5,'linear');
					clearTimeout(zoomGold);
				},2000);
				
				var circleLight = setTimeout(function(){
					fadeInImg('circle_gold',0.5);
					clearTimeout(circleLight);
				},2200);
				
				var resetTextGold = setTimeout(function(){
					zoomAnimation('gold',1,0.5,'linear');
					clearTimeout(resetTextGold);
				},3000);
				
				var translateCircleLight = setTimeout(function(){
					startTranslate("div_circle_gold",0,75,500,1);
					fadeOutImg("text_and",0.5);
					clearTimeout(translateCircleLight);
				},3200);
				
				var restoreCircleLight = setTimeout(function(){
					fadeOutImg('circle_gold',0.1);
					clearTimeout(restoreCircleLight);
					startTranslate("div_circle_gold",0,0,500,1);
				},4000);
            },3000);
        },1000);
     
       /*---------------in plan-------------------------*/
       var inplan = setTimeout(function(){
           clearTimeout(inplan);
            startTranslate("planet_frame",0,0,800,1);
			
			enablePlay = true;
			
			$('#facebook_rotate').css('opacity',1);
			$('#twitter_rotate').css('opacity',1);
			$('#winner_rotate').css('opacity',1);
			
			var timeout = setTimeout(function(){
				runCircleUp('facebook_rotate',0,0,0,0,1);
				runCircleDown('twitter_rotate',0,0,3,3,-1);
				runCircleUp('winner_rotate',0,0,8,8,1);
				clearTimeout(timeout);
			},1000);
			
			var endAnimation = setTimeout(function(){
				clearTimeout(timeout);
				replay();
			},3000);
			
       },7500);
       
    },100);
}

function replay(){
	var timeout = setTimeout(function(){
		enablePlay = false;
		
		var timeoutTranslate = setTimeout(function(){
			zoomAndTranslate('winner_rotate',1,1,translateXWinball,translateYWinball+200,'linear');
			zoomAndTranslate('facebook_rotate',1,1,translateXFacebook,translateYFacebook+200,'linear');
			zoomAndTranslate('twitter_rotate',1,1,translateXTwitter,translateYTwitter+200,'linear');
		},600);
		
		var restoreTimeout = setTimeout(function(){
			$('#facebook_rotate').css('opacity',0);
			$('#twitter_rotate').css('opacity',0);
			$('#winner_rotate').css('opacity',0);
			
			$('#facebook_rotate').css('z-index',5);
			$('#twitter_rotate').css('z-index',2);
			$('#winner_rotate').css('z-index',5);
			
			zoomAndTranslate('facebook_rotate',1,0.1,0,0,'linear');
			zoomAndTranslate('twitter_rotate',1,0.1,0,0,'linear');
			zoomAndTranslate('winner_rotate',1,0.1,0,0,'linear');
			
			clearTimeout(restoreTimeout);
		},2000);
		
		clearTimeout(timeout);
		
		var restart = setTimeout(function(){
			start();
			clearTimeout(restart);
		},1500);
	},1000);
}

/*----------------------------------------------------------------------------------------------------------------------*/
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

var enablePlay = true;
var translateXFacebook = 0;
var translateYFacebook = 0;
var translateXTwitter  = 0;
var translateYTwitter  = 0;
var translateXWinball  = 0;
var translateYWinball  = 0;

function runCircleUp(id,currentx,currenty,count,startCount,type){
	if(enablePlay == false){
		switch(id){
			case 'winner_rotate':
				translateXWinball = currentx;
				translateYWinball = currenty;
				break;
			case 'facebook_rotate':
				translateXFacebook = currentx;
				translateYFacebook = currenty;
				break;
			case 'twitter_rotate':
				translateXTwitter = currentx;
				translateYTwitter = currenty;
				break;
		}
		return;
	}
	
	zoomAndTranslate(id,1,0.1,currentx,currenty,'linear');
	var timeout = setTimeout(function(){
			currentx += 10;
			switch(count){
				case 0:
					count++;
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 1:
					currenty -=1;
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
					currenty -=1;
					count++;
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 5:
					currenty -=2;
					count++;
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 6:
					currenty -=2;
					count++;
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 7:
					currenty -=2;
					//currentx -= 10;
					count++;
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 7:
					currenty -=2;
					//currentx -= 10;
					count++;
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 8:
					
					currenty -=2;
					//currentx -= 10;
					count++;
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 9:
					currenty -=2;
					//currentx -= 10;
					count++;
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 10:
					currenty -=2;
					//currentx -= 10;
					count++;
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 11:
					$('#'+id).css('z-index',1);
					currentx -=10;
					currenty -= 2;
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
	},90);
}

function runCircleDown(id,currentx,currenty,count,startCount,type){
	if(enablePlay == false){
		switch(id){
			case 'winner_rotate':
				translateXWinball = currentx;
				translateYWinball = currenty;
				break;
			case 'facebook_rotate':
				translateXFacebook = currentx;
				translateYFacebook = currenty;
				break;
			case 'twitter_rotate':
				translateXTwitter = currentx;
				translateYTwitter = currenty;
				break;
		}
		return;
	}
	
	zoomAndTranslate(id,0.6,0.1,currentx,currenty,'linear');
	
	var timeout = setTimeout(function(){
			currentx -= 10;
			switch(count){
				case 0:
					currenty -=3;
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					
					break;
				case 1:
					currenty -=1;
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 2:
					currenty +=2;
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 3:
					currenty +=1;
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 4:
					currenty +=1;
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 5:
					currenty +=2;
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 6:
					currenty +=1;
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 7:
					currenty +=1;
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 8:
					currenty +=1;
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 9:
					currenty +=1;
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 10:
					currenty +=1;
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 11:
					currenty +=1;
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 12:
					count = 0;
					$('#'+id).css('z-index',5);
									
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						currentx +=20;
						currenty +=10;
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					
					break;
			}
		clearTimeout(timeout);
	},90);
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

function zoomOutAnimation(id,scale,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	
	$('#'+id).css('-webkit-transform','scale('+scale+')');
	$('#'+id).css('-moz-transform','scale('+scale+')');
	$('#'+id).css('opacity',0);
}

function zoomAnimation(id,scale,time,timeFunc){
    $('#'+id).css('-webkit-transition',time + 'ms ' + timeFunc);
    $('#'+id).css('-moz-transition', time + 'ms ' + timeFunc);
	
    $('#'+id).css('-webkit-transform','scale('+scale+')');
    $('#'+id).css('-moz-transform','scale('+scale+')');
}	

function startTranslate(id,translateX,translateY,time,opacity){
    $('#'+id).css('-webkit-transition',time + 'ms linear');
	var timeout = setTimeout(function(){
		$('#'+id).css('opacity',opacity);
		$('#'+id).css('-webkit-transform','translate('+translateX+'px,'+translateY+'px)');
		$('#'+id).css('-moz-transform','translate('+translateX+'px,'+translateY+'px)');
		clearTimeout(timeout);
	},20);
}

function translate(id,translateX,translateY){
	$('#'+id).css('-webkit-transform','translate('+translateX+'px,'+translateY+'px)');
	$('#'+id).css('-moz-transform','translate('+translateX+'px,'+translateY+'px)');
}

function enableTranform(id,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
}	

function fadeInOut(id,time,opacity){
	$('#'+id).css('-webkit-transition',time + 's linear');
    $('#'+id).css('opacity',opacity);
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
