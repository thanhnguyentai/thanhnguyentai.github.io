$(document).ready(function(){
        $("<img/>").attr("src","img/234x60_bg.png").load(preload);
	$("<img/>").attr("src","img/234x60_text_make.png").load(preload);
	$("<img/>").attr("src","img/234x60_facebook.png").load(preload);
	$("<img/>").attr("src","img/234x60_twitter.png").load(preload);
	$("<img/>").attr("src","img/234x60_twitter_fly.png").load(preload);
	$("<img/>").attr("src","img/234x60_facebook_fly.png").load(preload);
	$("<img/>").attr("src","img/234x60_gold.png").load(preload);
	$("<img/>").attr("src","img/234x60_join_now.png").load(preload);
	$("<img/>").attr("src","img/234x60_shine_join_now.png").load(preload);
	$("<img/>").attr("src","img/234x60_shine_gold.png").load(preload);
	$("<img/>").attr("src","img/234x60_text_and.png").load(preload);
	$("<img/>").attr("src","img/234x60_circle_gold.png").load(preload);
});


loaded = 0;
function preload(){
    if(loaded == 11){
        init();
        setTimeout(function(){
            start();
        },2000);
    }
    loaded ++;
}
function init(){
    enableTranformZoom("twitter",1,50,-240);
    enableTranformZoom("gold",1,50,50);
}
function start(){
    run(); 

  setInterval(function(){
       run();
   },10750);
  
}
function run(){
    var running = setTimeout(function(){
        clearTimeout(running); 
        /*----------bg move-----------------*/
        startTranslate("bg",133,0,1000,1);
        /*----------text  make in-----------*/
        var intextMake = setTimeout(function(){
             clearTimeout(intextMake); 
            startTranslate("text_make",0,0,800,1);
            /*-------text make out--------------*/
            var outtextMake = setTimeout(function(){
                 clearTimeout(outtextMake); 
                startTranslate("text_make",0,0,500,0);
            },1300);
        },600);
        /*---------------facebook and twitter in--------------*/
        var inface = setTimeout(function(){
             clearTimeout(inface); 
            startTranslate("facebook",0,-45,500,1);
            startTranslate("twitter",0,-55,500,1);
            /*---------zoomin facebook and twitter------------*/
           var zoominFace = setTimeout(function(){
                clearTimeout(zoominFace); 
                zoomAnimation("twitter",0.65,300,"linear");
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
                        startTranslate("facebook_fly",234,0,800,1);
                        startTranslate("twitter_fly",234,0,800,1);
                        /*--------------reset fly---------------*/
                        var resetFly = setTimeout(function(){
                             clearTimeout(resetFly); 
                            startTranslate("facebook_fly",0,0,0,0);
                            startTranslate("twitter_fly",0,0,0,0);
                        },800);
                    },100);
                },300);
            },500);
        },2000);
        /*------------------in text and you win-------------------*/
       var intextAnd = setTimeout(function(){
            clearTimeout(intextAnd); 
            startTranslate("text_and ",0,0,500,1);
            /*--------------out text and you win-----------------*/
            var outtextAnd = setTimeout(function(){
                 clearTimeout(outtextAnd); 
                startTranslate("text_and",0,0,500,0);
            },1000);
        },4000);
        /*------------------in gold-----------*/
          var inGold = setTimeout(function(){
            clearTimeout(inGold); 
            startTranslate("gold",0,0,300,1);
            /*--------------in shine gold-----*/
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
                /*--------------zoom in gold-----------*/
                var moveGold = setTimeout(function(){
                     clearTimeout(moveGold); 
                     startTranslate("gold",250,0,1000,1);
                     setTimeout(function(){
                        startTranslate("frame-final",0,0,800,1);
                        startTranslate("joinnow",0,0,800,1);
                        /*-----------------inshine-join-now--------------------*/
                        setTimeout(function(){
                             startTranslate("shine_joinnow",0,0,0,1);
                              /*-------------move--shine-joinnow----*/
                             setTimeout(function(){
                                 startTranslate("shine_joinnow",70,0,200,1);
                                 /*---------reset-shine-joinnow----------------*/
                                 setTimeout(function(){
                                     startTranslate("shine_joinnow",0,0,0,0);
                                     /*--------reset-final---frame-------------*/
                                     setTimeout(function(){
                                       startTranslate("frame-final",0,0,800,0);
                                       startTranslate("joinnow",0,0,800,0);
                                       setTimeout(function(){
                                           startTranslate("bg",0,0,500,1);
                                       },400);
                                     },800);
                                 },200);
                             },20);
                        },900);
                     },500);
                    /*-----------gold out-------------*/
                    var outGold = setTimeout(function(){
                         clearTimeout(outGold); 
                         startTranslate("gold",0,0,0,0);
                    },1000);
                },1100);
        },5500);
        /*------------------button jon in----------------*/
        /*
        var inbutton = setTimeout(function(){
             clearTimeout(inbutton); 
            startTranslate("joinnow",0,-53,300,1);
            var shineButton = setTimeout(function(){
                clearTimeout(shineButton); 
                startTranslate("shine_joinnow",110,0,200,1);
                var resetShineButton = setTimeout(function(){
                     clearTimeout(resetShineButton); 
                    startTranslate("shine_joinnow",0,0,0,0);
                    startTranslate("joinnow",0,-53,500,0);
                   var resetButton = setTimeout(function(){
                        clearTimeout(resetButton); 
                        startTranslate("joinnow",0,0,0,0);
                    },500);
                },200);
            },600);
        },8600);
        */
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



