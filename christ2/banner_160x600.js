$(document).ready(function(){
    prepare();
    $("<img/>").attr("src","img/160x600_bg.png").load(preload);
    $("<img/>").attr("src","img/160x600_circle.png").load(preload);
    $("<img/>").attr("src","img/160x600_facebook.png").load(preload);
    $("<img/>").attr("src","img/160x600_facebook_fly.png").load(preload);
    $("<img/>").attr("src","img/160x600_gold.png").load(preload);
    $("<img/>").attr("src","img/160x600_logo.png").load(preload);
    $("<img/>").attr("src","img/160x600_planet.png").load(preload);
    $("<img/>").attr("src","img/160x600_shine_gold.png").load(preload);
    $("<img/>").attr("src","img/160x600_text_and.png").load(preload);
    $("<img/>").attr("src","img/160x600_text_make.png").load(preload);
    $("<img/>").attr("src","img/160x600_twitter_fly.png").load(preload);         
});


function preload(){
    if(loaded == 11){
        prepare();
        setTimeout(function(){
            start();
            setInterval(function(){
                  start();
            },8000);
        },1000);
    }
    loaded ++;
}
var loaded = 0;
function prepare(){
    enableTranformZoom('facebook',1,1540,-200);
    enableTranformZoom('twitter',1,-5000,-800);
    enableTranformZoom('gold',1,50,50);
}


var loaded = 0;

function start(){
    var running = setTimeout(function(){
        clearTimeout(running);
        /*------------in text make facebook & twitter---*/
        
    },100);
}


/*----------------------------------------------------------------------------------------------------------------------*/
var enablePlay = true;
var translateXFacebook = 0;
var translateYFacebook = 0;
var translateXTwitter  = 0;
var translateYTwitter  = 0;
var translateXWinball  = 0;
var translateYWinball  = 0;
function runCircleUp(id,currentx,currenty,count){
    if(enablePlay == false){
        switch(id){
            case 'winball':
                translateXWinball = currentx;
                translateYWinball = currenty;
                break;
            case 'facebookbig':
                translateXFacebook = currentx;
                translateYFacebook = currenty;
                break;
            case 'twitterbig':
                translateXTwitter = currentx;
                translateYTwitter = currenty;
                break;
        }
        return;
    }
	
    zoomAndTranslate(id,1,0.1,currentx,currenty,'linear');
    var timeout = setTimeout(function(){
        currentx += 25;
        switch(count){
            case 0:
                count++;
                runCircleUp(id,currentx,currenty,count);
                break;
            case 1:
                currenty -=1;
                count++;
                runCircleUp(id,currentx,currenty,count);
                break;
            case 2:
                currenty -=1;
                count++;
                runCircleUp(id,currentx,currenty,count);
                break;
            case 3:
                currenty -=1;
                count++;
                runCircleUp(id,currentx,currenty,count);
                break;
            case 4:
                currenty -=1;
                count++;
                runCircleUp(id,currentx,currenty,count);
                break;
            case 5:
                currenty -=1;
                count++;
                runCircleUp(id,currentx,currenty,count);
                break;
            case 6:
                currenty -=1;
                count++;
                runCircleUp(id,currentx,currenty,count);
                break;
            case 7:
                currenty -=1;
                count++;
                runCircleUp(id,currentx,currenty,count);
                break;
            case 8:
                currenty -=1;
                count++;
                runCircleUp(id,currentx,currenty,count);
                break;
            case 9:
                currenty -=1;
                count++;
                runCircleUp(id,currentx,currenty,count);
                break;
            case 10:
                currenty -=3;
                count++;
                runCircleUp(id,currentx,currenty,count);
                break;
            case 11:
                currenty -=5;
                currentx -=10;
                count++;
                runCircleUp(id,currentx,currenty,count);
                break;		
            case 12:
                currenty -=5;
                currentx -=30;
                count++;
                runCircleUp(id,currentx,currenty,count);
                break;		
            case 13:
                $('#'+id).css('z-index',1);
                currentx -=20;
                currenty -= 2;
                runCircleDown(id,currentx,currenty,0);
                break;
        }
        clearTimeout(timeout);
    },90);
}

function runCircleDown(id,currentx,currenty,count){
    if(enablePlay == false){
        switch(id){
            case 'winball':
                translateXWinball = currentx;
                translateYWinball = currenty;
                break;
            case 'facebookbig':
                translateXFacebook = currentx;
                translateYFacebook = currenty;
                break;
            case 'twitterbig':
                translateXTwitter = currentx;
                translateYTwitter = currenty;
                break;
        }
        return;
    }
	
    zoomAndTranslate(id,0.6,0.1,currentx,currenty,'linear');
    var timeout = setTimeout(function(){
        currentx -= 25;
        switch(count){
            case 0:
                currenty -=3;
                count++;
                runCircleDown(id,currentx,currenty,count);
                break;
            case 1:
                currenty +=1;
                count++;
                runCircleDown(id,currentx,currenty,count);
                break;
            case 2:
                currenty +=1;
                count++;
                runCircleDown(id,currentx,currenty,count);
                break;
            case 3:
                currenty +=1;
                count++;
                runCircleDown(id,currentx,currenty,count);
                break;
            case 4:
                currenty +=1;
                count++;
                runCircleDown(id,currentx,currenty,count);
                break;
            case 5:
                currenty +=1;
                count++;
                runCircleDown(id,currentx,currenty,count);
                break;
            case 6:
                count++;
                runCircleDown(id,0,0,count);
                break;
            case 7:
                currenty +=1;
                count++;
                runCircleDown(id,currentx,currenty,count);
                break;
            case 8:
                currenty +=1;
                count++;
                runCircleDown(id,currentx,currenty,count);
                break;
            case 9:
                currenty +=1;
                count++;
                runCircleDown(id,currentx,currenty,count);
                break;
            case 10:
                currenty +=3;
                count++;
                runCircleDown(id,currentx,currenty,count);
                break;	
            case 11:
                currenty +=5;
                count++;
                runCircleDown(id,currentx,currenty,count);
                break;	
            case 12:
                currenty +=7;
                count++;
                runCircleDown(id,currentx,currenty,count);
                break;	
            case 13:
                runCircleUp(id,currentx,currenty+5,0);
                $('#'+id).css('z-index',5);
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
