$(document).ready(function(){
    prepare();
    $("<img/>").attr("src","img/120x600_bg.png").load(preload);
    $("<img/>").attr("src","img/120x600_planet.png").load(preload);
    $("<img/>").attr("src","img/120x600_logo.png").load(preload);
    $("<img/>").attr("src","img/120x600_circle.png").load(preload);
    $("<img/>").attr("src","img/120x600_facebook.png").load(preload);
    $("<img/>").attr("src","img/120x600_facebook_fly.png").load(preload);
    $("<img/>").attr("src","img/120x600_twitter.png").load(preload);
    $("<img/>").attr("src","img/120x600_twitter_fly.png").load(preload);
    $("<img/>").attr("src","img/120x600_twitter_around.png").load(preload);
    $("<img/>").attr("src","img/120x600_text_and.png").load(preload);
    $("<img/>").attr("src","img/120x600_text_make.png").load(preload);
    $("<img/>").attr("src","img/120x600_text_create.png").load(preload);
    $("<img/>").attr("src","img/120x600_gold.png").load(preload);
    $("<img/>").attr("src","img/120x600_shine_gold.png").load(preload);
    $("<img/>").attr("src","img/120x600_circle_around.png").load(preload);
});


function preload(){
    if(loaded == 14){
        prepare();
        setTimeout(function(){
            start();
        },1000);
    }
    loaded ++;
}
var loaded = 0;
function prepare(){
    enableTranformZoom('gold',1,50,50);
	enableTranform('div_circle',0.5,'linear')
	
	enableTranformZoom('winner_rotate',1,50,50);
	enableTranformZoom('twitter_rotate',1,50,50);
	enableTranformZoom('facebook_rotate',1,50,50);
}


var loaded = 0;

function start(){
    var running = setTimeout(function(){
        clearTimeout(running);
        /*------------in text make facebook & twitter---*/
        fadeInImg("text_make",0.5);
		
        startTranslate("facebook",-15,-220,500,1);
        startTranslate("twitter",35,-220,500,1);
        /*-------------move facebook & twitter-------------*/
        var moveface = setTimeout(function(){
            clearTimeout(moveface);
            startTranslate("facebook",20,-250,400,1);
            startTranslate("twitter",-30,-240,400,1);
            /*--------zoom in facebook &twitter----*/
            var zoominface = setTimeout(function(){
                clearTimeout(zoominface);
                startTranslate("facebook",20,-250,400,0);
                startTranslate("twitter",-30,-240,400,0);
                startTranslate("facebook_fly",0,0,400,1);
                startTranslate("twitter_fly",0,0,400,1);
            },600);
        },600);
        /*--------fly-----------------------------*/
        var fly = setTimeout(function(){
            clearTimeout(fly);
            startTranslate("facebook",0,0,0,0);
            startTranslate("twitter",0,0,0,0);
            startTranslate("facebook_fly",10,-190,400,1);
            startTranslate("twitter_fly",10,-210,400,1);
            fadeOutImg("text_make",0.5);
            /*---------split fly----------------*/
            var splitfly = setTimeout(function(){
                clearTimeout(splitfly);
                startTranslate("facebook_fly",-10,-230,100,0);
                startTranslate("twitter_fly",10,-250,100,0);
				
				enablePlay = true;
				$('#facebook_rotate').css('opacity',1);
				$('#twitter_rotate').css('opacity',1);
				
				runCircleUp('facebook_rotate',0,0,0,0,1);
				runCircleUp('winner_rotate',0,0,6,6,1);
				runCircleDown('twitter_rotate',0,0,3,3,-1);
            },400);
        },1600);
       
        /*---------in text and----------------------*/
        var intextAnd = setTimeout(function(){
            clearTimeout(intextAnd);
            fadeInImg("text_and",0.5);
			
			startTranslate("facebook_fly",0,0,0,0);
			startTranslate("twitter_fly",0,0,0,0);
        },2400);
        /*---------in gold-------------------------*/
        var ingold = setTimeout(function(){
            clearTimeout(ingold);
            startTranslate("gold",0,0,300,1);
            /*-------------in shine gold---------*/
            var inshinegold = setTimeout(function(){
                clearTimeout(inshinegold);
				var blinkTimeout = setTimeout(function(){
					blink('shine_gold',0.1,5);
					clearTimeout(blinkTimeout);
				},300);
                /*----------zoom in gold-------*/
                var zoomgold = setTimeout(function(){
                    clearTimeout(zoomgold);
                    zoomOutAnimation("gold",0.2,0.5,"linear");
                    /*----------reset gold-----------*/
                    var resetgold = setTimeout(function(){
                        clearTimeout(resetgold);
                        zoomOutAnimation("gold",1,0.1,"linear");
                    },1000)
                },1500);  

				var displayCircleLight = setTimeout(function(){
					clearTimeout(displayCircleLight);
					fadeInImg('circle',0.5);
				},1800);
				
				var translateDivCircle = setTimeout(function(){
					clearTimeout(translateDivCircle);
					translate('div_circle',30,-230);
					fadeOutImg('text_and',1);
					var fadeOutCircle = setTimeout(function(){
						clearTimeout(fadeOutCircle);
						fadeOutImg('circle',0.5);
						
						$('#winner_rotate').css('opacity',1);
					},300);
					
					var restoreCircle = setTimeout(function(){
						clearTimeout(restoreCircle);
						translate('div_circle',0,0);
					},1000);
					
					var displayLastText = setTimeout(function(){
						fadeInImg('text_create',0.5);
						clearTimeout(displayLastText);
					},1200);
					
					var hideLastText = setTimeout(function(){
						clearTimeout(hideLastText);
						fadeOutImg('text_create',0.5);
						
						enablePlay = false;
						$('#facebook_rotate').css('opacity',0);
						$('#twitter_rotate').css('opacity',0);
						$('#winner_rotate').css('opacity',0);
						var restoreRotate = setTimeout(function(){
							zoomAndTranslate('facebook_rotate',1,0.1,0,0,'linear');
							zoomAndTranslate('twitter_rotate',1,0.1,0,0,'linear');
							zoomAndTranslate('winner_rotate',1,0.1,0,0,'linear');
							
							$('#facebook_rotate').css('z-index',5);
							$('#twitter_rotate').css('z-index',1);
							$('#winner_rotate').css('z-index',5);
						},1000);
						replay();
					},2200);
				},2500);
            },300);
        },3300);
		
    },100);
}


/*----------------------------------------------------------------------------------------------------------------------*/
function replay(){
	var timeout = setTimeout(function(){
		start();
		clearTimeout(timeout);
	},1500);
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


function runCircleUp(id,currentx,currenty,count,startCount,type){
	if(enablePlay == false){
		return;
	}
	
	zoomAndTranslate(id,1,0.1,currentx,currenty,'linear');
	var timeout = setTimeout(function(){
			currentx += 15;
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
					$('#'+id).css('z-index',1);
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
	},90);
}

function runCircleDown(id,currentx,currenty,count,startCount,type){
	if(enablePlay == false){
		return;
	}
	
	zoomAndTranslate(id,0.6,0.1,currentx,currenty,'linear');
	
	var timeout = setTimeout(function(){
			currentx -= 15;
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
					count = 0;
					$('#'+id).css('z-index',5);
					currentx +=35;
					currenty += 6;
					
					if(count == startCount && type == 1){
						runCircleUp(id,0,0,count,startCount,type);
					}
					else{
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
