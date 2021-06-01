$(document).ready(function(){
    prepare();
    $("<img/>").attr("src","img/250x250_bg.png").load(preload);
	$("<img/>").attr("src","img/250x250_circle.png").load(preload);
	$("<img/>").attr("src","img/250x250_facebook.png").load(preload);
	$("<img/>").attr("src","img/250x250_facebook_fly.png").load(preload);
	$("<img/>").attr("src","img/250x250_gold.png").load(preload);
	$("<img/>").attr("src","img/250x250_logo.png").load(preload);
	$("<img/>").attr("src","img/250x250_planet.png").load(preload);
	$("<img/>").attr("src","img/250x250_shine_gold.png").load(preload);
	$("<img/>").attr("src","img/250x250_text_and.png").load(preload);
	$("<img/>").attr("src","img/250x250_text_make.png").load(preload);
	$("<img/>").attr("src","img/250x250_twitter_fly.png").load(preload);
	
	$("<img/>").attr("src","img/250x250_circlelight_down.png").load(preload);
	$("<img/>").attr("src","img/250x250_circlelight_up.png").load(preload);
	          
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
        startTranslate("planet_frame",0,180,800,1);
		
        /*------------in text make facebook & twitter---*/
        var intext = setTimeout(function(){
            clearTimeout(intext);
            startTranslate("text_make",0,0,600,1);
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
					zoomAnimation("facebook",1,100,"linear"); 
					zoomAnimation("twitter",1,100,"linear");
                    /*-fly---------------------*/
                    var fly = setTimeout(function(){
                        clearTimeout(fly);
                        startTranslate("twitter_fly",-400,0,1200,1); 
                        startTranslate("facebook_fly",-400,0,1200,1);
                        /*--------out text make-------------------*/
                        var intextmake = setTimeout(function(){
                            clearTimeout(intextmake);
                            startTranslate("text_make",0,0,800,0);
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
                startTranslate("text_and",0,0,300,1);
                /*-------------in gold----------------------*/
               var ingold  = setTimeout(function(){
                   clearTimeout(ingold);
                    startTranslate("gold",0,0,300,1);
                    /*---------in shine gold--------------*/
                    var inshinegold = setTimeout(function(){
                        clearTimeout(inshinegold);
                        startTranslate("shine_gold",0,0,100,1);
                        var out1sg = setTimeout(function(){
                            clearTimeout(out1sg);
                            startTranslate("shine_gold",0,0,100,0);
                            var in2sg = setTimeout(function(){
                                clearTimeout(in2sg);
                                startTranslate("shine_gold",0,0,100,1);
                                var out2sg = setTimeout(function(){
                                    clearTimeout(out2sg);
                                    startTranslate("shine_gold",0,0,100,0);
                                    var in3sg = setTimeout(function(){
                                        clearTimeout(in3sg);
                                        startTranslate("shine_gold",0,0,100,1);
                                        var out3sg = setTimeout(function(){
                                            clearTimeout(out3sg);
                                            startTranslate("shine_gold",0,0,100,0);
                                            var in4sg = setTimeout(function(){
                                                clearTimeout(in4sg);
                                                startTranslate("shine_gold",0,0,100,1);
                                                var out4sg = setTimeout(function(){
                                                    clearTimeout(out4sg);
                                                    startTranslate("shine_gold",0,0,100,0);
                                                    var in5sg = setTimeout(function(){
                                                        clearTimeout(in5sg);
                                                        startTranslate("shine_gold",0,0,100,1);
                                                        var out5sg = setTimeout(function(){
                                                            clearTimeout(out5sg);
                                                            startTranslate("shine_gold",0,0,100,0);
                                                        },100);
                                                        var in6sg = setTimeout(function(){
                                                            clearTimeout(in6sg);
                                                            startTranslate("shine_gold",0,0,100,1);
                                                            var out6sg = setTimeout(function(){
                                                                clearTimeout(out6sg);
                                                                startTranslate("shine_gold",0,0,100,0);
                                                            },100);
                                                        },100);               
                                                    },100);
                                                },100);
                                            },100);
                                        },100);
                                    },100);
                                },100);
                            },100);
                        },100);
                         /*----------zoom in gold-------*/
                         var zoomgold = setTimeout(function(){
                             clearTimeout(zoomgold);
                             zoomAnimation("gold",0.2,300,"linear");
                             /*----------reset gold-----------*/
                             var resetgold = setTimeout(function(){
                                 clearTimeout(resetgold);
                                 startTranslate("gold",0,0,0,0);
								 var timeouttemp = setTimeout(function(){
									zoomAnimation("gold",1,300,"linear");
									clearTimeout(timeouttemp);
								 },1000);
                             },300)
                         },1200);                      
                    },300);
                },500);
            },3000);
        },1000);
       /*---------------in circle---------------*/
       var incircle = setTimeout(function(){
           clearTimeout(incircle);
           var movecircle = startTranslate("circle",0,0,500,1);
           clearTimeout(movecircle);
           /*--------------move cirlce----------*/
           var movecircle = setTimeout(function(){
               clearTimeout(movecircle);
                startTranslate("circle",0,120,600,1);
                startTranslate("text_and",0,0,600,0);
				
				var timeoutBack = setTimeout(function(){
					startTranslate("circle",0,0,0,0);
					clearTimeout(timeoutBack);
				},1500);
           },900);
       },6200);
	   
       /*---------------in plan-------------------------*/
       var inplan = setTimeout(function(){
			$('#facebookrotate').css('opacity',1);
			$('#winnerrotate').css('opacity',1);
			$('#twitterrotate').css('opacity',1);
			clearTimeout(inplan);
            startTranslate("planet_frame",0,0,800,1);
			
            var moveplan = setTimeout(function(){
				enablePlay = true;
                runCircleUp('facebookrotate',0,0,0,0,1);
				runCircleUp('winnerrotate',0,0,8,8,1);
				runCircleDown('twitterrotate',0,0,3,3,-1);
				
				clearTimeout(moveplan);
            },800);
			
			var timeoutstop = setTimeout(function(){
				clearTimeout(timeoutstop);
				enablePlay = false;
				var lastTimeout = setTimeout(function(){
					clearTimeout(lastTimeout);
					
					zoomAndTranslate('winnerrotate',1,1,translateXWinball,translateYWinball+300,'linear');
					zoomAndTranslate('facebookrotate',1,1,translateXFacebook,translateYFacebook+300,'linear');
					zoomAndTranslate('twitterrotate',1,1,translateXTwitter,translateYTwitter+300,'linear');
					
					
					var timeoutBack = setTimeout(function(){
						$('#facebookrotate').css('opacity',0);
						$('#winnerrotate').css('opacity',0);
						$('#twitterrotate').css('opacity',0);
						
						$('#facebookrotate').css('z-index',5);
						$('#twitterrotate').css('z-index',2);
						$('#winnerrotate').css('z-index',5);
					
						var timeoutRestore = setTimeout(function(){
							zoomAndTranslate('facebookrotate',1,0.1,0,0,'linear');
							zoomAndTranslate('winnerrotate',1,0.1,0,0,'linear');
							zoomAndTranslate('twitterrotate',1,0.1,0,0,'linear');
							clearTimeout(timeoutRestore);
						},1000);
						clearTimeout(timeoutBack);
						
						replay();
					},1000);
					
				},500);
			},3000);
       },7800);
       
    },100);
}

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
			case 'winnerrotate':
				translateXWinball = currentx;
				translateYWinball = currenty;
				break;
			case 'facebookrotate':
				translateXFacebook = currentx;
				translateYFacebook = currenty;
				break;
			case 'twitterrotate':
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
			case 'winnerrotate':
				translateXWinball = currentx;
				translateYWinball = currenty;
				break;
			case 'facebookrotate':
				translateXFacebook = currentx;
				translateYFacebook = currenty;
				break;
			case 'twitterrotate':
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

function startTranslate(id,translateX,translateY,time,opacity){
    $('#'+id).css('-webkit-transition',time + 'ms linear');
    $('#'+id).css('opacity',opacity);
    $('#'+id).css('-webkit-transform','translate('+translateX+'px,'+translateY+'px)');
    $('#'+id).css('-moz-transform','translate('+translateX+'px,'+translateY+'px)');
}
