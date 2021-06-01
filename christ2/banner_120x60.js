$(document).ready(function(){
    $("<img/>").attr("src","img/120x60_bg.png").load(preload);		
    $("<img/>").attr("src","img/120x60_join_now.png").load(preload);
    $("<img/>").attr("src","img/120x60_logo.png").load(preload);
    $("<img/>").attr("src","img/120x60_minigold.png").load(preload);
    $("<img/>").attr("src","img/120x60_shine_joinnow.png").load(preload);
    $("<img/>").attr("src","img/120x60_shine_logo.png").load(preload);
    $("<img/>").attr("src","img/120x60_shine_minigold.png").load(preload);
    $("<img/>").attr("src","img/120x60_text-minigold.png").load(preload);
    $("<img/>").attr("src","img/120x60_text.png").load(preload);
});


loaded = 0;
function preload(){
    if(loaded == 8){	
            setTimeout(function(){start();},1000);
    }
    loaded ++;
}

function start(){
   run(); 
   setInterval(function(){
       run();
   },8000);
}
function run(){
    var running = setTimeout(function(){
        clearTimeout(running); 
        /*------logo------------*/
       startTranslate("logo",0,30,300,1);
       startTranslate("shine_logo",0,35,300,0);
       var inShineLogo = setTimeout(function(){
           clearTimeout(inShineLogo); 
            startTranslate("shine_logo",0,35,100,1);
                var moveShineLogo = setTimeout(function(){
                    clearTimeout(moveShineLogo); 
                    startTranslate("shine_logo",0,35,100,0);
                    var outShineLogo = setTimeout(function(){
                        clearTimeout(outShineLogo); 
                        startTranslate("shine_logo",0,35,100,1);
                        var resetShineLogo = setTimeout(function(){
                            clearTimeout(resetShineLogo); 
                            startTranslate("shine_logo",0,35,100,0);
                        },100);
                    },100);
                },100);
         /*------out logo----------*/
            var outLogo = setTimeout(function(){
                clearTimeout(outLogo); 
                startTranslate("shine_logo",0,0,0,0);
                startTranslate("logo",-120,30,1200,1);
                var resetLogo = setTimeout(function(){
                    clearTimeout(resetLogo); 
                    startTranslate("logo",0,0,0,1);
                },1200);                
            },800);
       },300);
       /*----------minigold---------------*/
       var inMiniGold = setTimeout(function(){
           clearTimeout(inMiniGold); 
           startTranslate("text_minigold",-120,0,900,1);
           startTranslate("minigold",-120,0,900,1);
           startTranslate("shine_minigold",-120,0,900,0);
           var in1ShineMiniGold = setTimeout(function(){
               clearTimeout(in1ShineMiniGold); 
                startTranslate("shine_minigold",-120,0,100,1);
                var out1ShineMiniGold = setTimeout(function(){
                    clearTimeout(out1ShineMiniGold); 
                    startTranslate("shine_minigold",-120,0,100,0);
                    var in2ShineMiniGold = setTimeout(function(){
                        clearTimeout(in2ShineMiniGold); 
                        startTranslate("shine_minigold",-120,0,100,1);
                         var out2ShineMiniGold = setTimeout(function(){
                               clearTimeout(out2ShineMiniGold); 
                            startTranslate("shine_minigold",-120,0,100,0);
                        },100);
                    },100);
                },100);
           },1000);
           /*-----------------out minigold-------*/
           var outMiniGold = setTimeout(function(){
               clearTimeout(outMiniGold); 
               startTranslate("text_minigold",-120,0,900,0);
               startTranslate("minigold",-240,0,900,1);
               var resetMiniGold = setTimeout(function(){
                   clearTimeout(resetMiniGold); 
                   startTranslate("text_minigold",0,0,0,1);
                   startTranslate("minigold",0,0,0,1);
                   startTranslate("shine_minigold",0,0,0,0);  
               },2100);
           },2100);
       },1600);
       /*----------------------text------------------*/
       var inText = setTimeout(function(){
             clearTimeout(inText); 
           startTranslate("text",0,0,300,1);
           startTranslate("shine_joinnow",72,0,800,1);
               /*-------------text out -----------------*/
              var outText = setTimeout(function(){
                    clearTimeout(outText); 
                    startTranslate("shine_joinnow",0,0,0,0);
               },800);
               var resetText = setTimeout(function(){
                     clearTimeout(resetText); 
                   startTranslate("text",0,0,400,0);
               },2500);
       },5000);
    },200);
};
/*----------------------------------------------------------------------------------------------------------------------*/

function startTranslate(id,translateX,translateY,time,opacity){
        $('#'+id).css('-webkit-transition',time + 'ms linear');
        $('#'+id).css('opacity',opacity);
	$('#'+id).css('-webkit-transform','translate('+translateX+'px,'+translateY+'px)');
	$('#'+id).css('-moz-transform','translate('+translateX+'px,'+translateY+'px)');
}



