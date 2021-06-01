$(document).ready(function(){
    prepare();
    $("<img/>").attr("src","img/320x250_bg.png").load(preload);
     $("<img/>").attr("src","img/320x250_circle.png").load(preload);
      $("<img/>").attr("src","img/320x250_facebook.png").load(preload);
       $("<img/>").attr("src","img/320x250_facebook_fly.png").load(preload);
        $("<img/>").attr("src","img/320x250_gold.png").load(preload);
         $("<img/>").attr("src","img/320x250_logo.png").load(preload);
          $("<img/>").attr("src","img/320x250_planet.png").load(preload);
           $("<img/>").attr("src","img/320x250_shine_gold.png").load(preload);
            $("<img/>").attr("src","img/320x250_text_and.png").load(preload);
             $("<img/>").attr("src","img/320x250_text_make.png").load(preload);
              $("<img/>").attr("src","img/320x250_twitter_fly.png").load(preload);
			  $("<img/>").attr("src","img/300x250_circlelight_down.png").load(preload);
			  $("<img/>").attr("src","img/300x250_circlelight_up.png").load(preload);
              
});

loaded = 0;
function preload(){
    if(loaded == 12){
        init();
        setTimeout(function(){
            start();
        },1000);
    }
    loaded ++;
}

function prepare(){
    enableTranformZoom('facebook',1,50,50);
    enableTranformZoom('gold',1,50,100);
	enableTranformZoom('twitter',1,50,50);
	
	enableTranform('div_circle',0.7,'linear');
	
	enableTranformZoom('winner_rotate',1,50,50);
	enableTranformZoom('twitter_rotate',1,50,50);
	enableTranformZoom('facebook_rotate',1,50,50);
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
        startTranslate("planet_frame",0,180,800,1);
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
                            fadeOutImg("text_make",1);
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
                /*-------------in gold----------------------*/
               var ingold  = setTimeout(function(){
                    clearTimeout(ingold);
                    startTranslate("gold",0,0,500,1);
					var blinkTimeout = setTimeout(function(){
						blink('shine_gold',0.1,5);
						clearTimeout(blinkTimeout);
					},750);	
					
					var timeoutZoom = setTimeout(function(){
						zoomOutAnimation("gold",0.2,0.5,"linear");
						clearTimeout(timeoutZoom);
						
						var displayCircleLight = setTimeout(function(){
							clearTimeout(displayCircleLight);
							fadeInImg('circle',0.5);
							
							var restoreGold = setTimeout(function(){
								zoomAnimation("gold",1,0.1,"linear");
								clearTimeout(restoreGold);
							},1000);
						},300);
						
						var moveDivCircle = setTimeout(function(){
							clearTimeout(moveDivCircle);
							translate('div_circle',0,160);
							fadeOutImg('text_and',1);
						},1000);
						
						var moveBackPlanet = setTimeout(function(){
							fadeOutImg('circle',0.1);
							translate('div_circle',0,0);
							
							clearTimeout(moveBackPlanet);
							enablePlay = true;
							$('#facebook_rotate').css('opacity',1);
							$('#winner_rotate').css('opacity',1);
							$('#twitter_rotate').css('opacity',1);
							
							var startRotate = setTimeout(function(){
								runCircleUp('facebook_rotate',0,0,0,0,1);
								runCircleUp('winner_rotate',0,0,8,8,1);
								runCircleDown('twitter_rotate',0,0,3,3,-1);
								clearTimeout(startRotate);
							},1000);
							startTranslate("planet_frame",0,0,800,1);
							
							var replayTimeout = setTimeout(function(){
								clearTimeout(replayTimeout);
								enablePlay = false;
								
								var restart = setTimeout(function(){
									replay();
									clearTimeout(restart);
								},1500);
								
								var translatePlanet = setTimeout(function(){
									clearTimeout(translatePlanet);
									zoomAndTranslate('winner_rotate',1,1,translateXWinball,translateYWinball+300,'linear');
									zoomAndTranslate('facebook_rotate',1,1,translateXFacebook,translateYFacebook+300,'linear');
									zoomAndTranslate('twitter_rotate',1,1,translateXTwitter,translateYTwitter+300,'linear');
								},600);
								
								var restoreTimeout = setTimeout(function(){
									$('#facebook_rotate').css('opacity',0);
									$('#twitter_rotate').css('opacity',0);
									$('#winner_rotate').css('opacity',0);
									
									$('#facebook_rotate').css('z-index',5);
									$('#twitter_rotate').css('z-index',2);
									$('#winner_rotate').css('z-index',5);
									
									var timeoutRestorePlanet = setTimeout(function(){
										zoomAndTranslate('facebook_rotate',1,0.1,0,0,'linear');
										zoomAndTranslate('twitter_rotate',1,0.1,0,0,'linear');
										zoomAndTranslate('winner_rotate',1,0.1,0,0,'linear');
										clearTimeout(timeoutRestorePlanet);
									},1000);
									
									clearTimeout(restoreTimeout);
								},2000);
								
							},4000);
						},2000);
					},2000);
                },500);
            },3000);
        },1000);   
    },100);
}


/*----------------------------------------------------------------------------------------------------------------------*/
function replay(){
	var timeout = setTimeout(function(){
		start();
		clearTimeout(timeout);
	});
}
/*------------------------code around------------------------------------*/
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
	
	zoomAndTranslate(id,1,0.11,currentx,currenty,'linear');
	var timeout = setTimeout(function(){
			currentx += 25;
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
					currenty -=3;
					count++;
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 7:
					currenty -=4;
					count++;
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 8:
					currenty -=5;
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
					currentx -=20;
					count++;
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 10:
					currentx -=20;
					currenty -= 15;
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
	},100);
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
	
	zoomAndTranslate(id,0.6,0.11,currentx,currenty,'linear');
	
	var timeout = setTimeout(function(){
			currentx -= 25;
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
					$('#'+id).css('z-index',1);
					currenty -=10;
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
					currenty +=4;
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 7:
					currenty +=8;
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 8:
					currenty +=12;
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;
				case 9:
					$('#'+id).css('z-index',5);
					currenty +=16;
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;	
				case 10:
					currenty +=16;
					count++;
					if(count == startCount && type == -1){
						runCircleDown(id,0,0,count,startCount,type);
					}
					else{
						runCircleDown(id,currentx,currenty,count,startCount,type);
					}
					break;	
				case 11:
					
					count = 0;
									
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
						currentx +=55;
						runCircleUp(id,currentx,currenty,count,startCount,type);
					}
					
					break;
			}
		clearTimeout(timeout);
	},100);
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

function zoomOutAnimation(id,scale,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	
	$('#'+id).css('-webkit-transform','scale('+scale+')');
	$('#'+id).css('-moz-transform','scale('+scale+')');
	$('#'+id).css('opacity',0);
}
function zoomInAnimation(id,scale,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	
	$('#'+id).css('-webkit-transform','scale('+scale+')');
	$('#'+id).css('-moz-transform','scale('+scale+')');
	$('#'+id).css('opacity',1);
}

function startTranslate(id,translateX,translateY,time,opacity){
    $('#'+id).css('-webkit-transition',time + 'ms linear');
    $('#'+id).css('opacity',opacity);
    $('#'+id).css('-webkit-transform','translate('+translateX+'px,'+translateY+'px)');
    $('#'+id).css('-moz-transform','translate('+translateX+'px,'+translateY+'px)');
}

function enableTranform(id,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
}	

function translate(id,translateX,translateY){
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