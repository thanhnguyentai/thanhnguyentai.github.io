$(document).ready(function(){
    $("<img/>").attr("src","img/468x60_bg.png").load(preload);
    $("<img/>").attr("src","img/468x60_facebook.png").load(preload);
    $("<img/>").attr("src","img/468x60_facebook_fly.png").load(preload);	
    $("<img/>").attr("src","img/468x60_facebook_twitter.png").load(preload);	
    $("<img/>").attr("src","img/468x60_gold.png").load(preload);	
    $("<img/>").attr("src","img/468x60_logo.png").load(preload);	
    $("<img/>").attr("src","img/468x60_shine_bg.png").load(preload);	
    $("<img/>").attr("src","img/468x60_shine_gold.png").load(preload);
    $("<img/>").attr("src","img/468x60_text_create.png").load(preload);	
    $("<img/>").attr("src","img/468x60_text_gold.png").load(preload);	
    $("<img/>").attr("src","img/468x60_text_make.png").load(preload);
    $("<img/>").attr("src","img/468x60_twitter.png").load(preload);	
    $("<img/>").attr("src","img/468x60_twitter_fly.png").load(preload);	
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
function init(){
    enableTranformZoom("facebook",1,50,-180);
    enableTranformZoom("twitter",1,50,-450);
}
function start(){
    run(); 
 setInterval(function(){
       run();
   },9400);
    
}
function run(){
    var running = setTimeout(function(){
        clearTimeout(running); 
        /*----------text make in-----------------*/
        startTranslate("text_make",0,0,1500,1);
        /*----------text make out----------------*/
       var inTextmake =  setTimeout(function(){
           clearTimeout(inTextmake); 
            startTranslate("text_make",0,0,800,0);
        },1700);
        /*----------face + twitter in------------*/
        var inFaceTwitter = setTimeout(function(){
            clearTimeout(inFaceTwitter); 
            startTranslate("facebook",0,-55,1000,1);
            startTranslate("twitter",0,-57,1000,1);
            var zoomFace = setTimeout(function(){
                clearTimeout(zoomFace); 
                zoomAnimation("facebook",0.6,300,"linear");
                zoomAnimation("twitter",0.8,300,"linear");
                var inFly = setTimeout(function(){
                    clearTimeout(inFly); 
                    /*--------------fly in----------------*/
                    startTranslate("facebook_fly",0,0,0,1);
                    startTranslate("twitter_fly",0,0,0,1);
                    /*-------------face + twitter out-----*/
                    startTranslate("twitter",0,0,0,1);
                    startTranslate("facebook",0,0,0,1);
                   var outFly =  setTimeout(function(){
                       clearTimeout(outFly); 
                        /*--------------fly out----------------*/
                        startTranslate("facebook_fly",-530,10,800,1);
                        startTranslate("twitter_fly",-430,10,800,1);
                        /*--------------reset fly---------------*/
                        var resetFly = setTimeout(function(){
                            clearTimeout(resetFly);
                            startTranslate("facebook_fly",-530,10,800,1);
                            startTranslate("twitter_fly",-430,10,800,1);
                            
                        },800);
                    },100);
                },300);
            },1300);
        },2000);
        /*------------text gold in----------------------------*/
        var inTextGold = setTimeout(function(){
            clearTimeout(inTextGold);
            startTranslate("text_gold",0,0,300,1);
        },4700);
        
        var inGold = setTimeout(function(){
            clearTimeout(inGold);
            startTranslate("gold",0,0,300,1);
            var in1sg = setTimeout(function(){
                clearTimeout(in1sg);
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
            },500);
            /*----------------------------text gold out---------------------------*/
            var outTextGold = setTimeout(function(){
                clearTimeout(outTextGold);
                startTranslate("text_gold",-340,0,800,1);
                startTranslate("gold",-340,0,800,1);
                /*-----------------------text gold reset---------------------------*/
                var resetGold = setTimeout(function(){
                    clearTimeout(resetGold);
                    startTranslate("text_gold",0,0,0,0);
                    startTranslate("gold",0,0,0,0);
                },2600);
            },1700);
        },5200);
        /*-------------------------------text create in------------------------------*/
        var inTextCreate = setTimeout(function(){
            clearTimeout(inTextCreate);
            startTranslate("text_create",0,0,400,1);
            var outTextCreate = setTimeout(function(){
                clearTimeout(outTextCreate);
                startTranslate("text_create",0,0,400,0);
            },1000);
        },7800);
       
    },200);
};
/*----------------------------------------------------------------------------------------------------------------------*/

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



