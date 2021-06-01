
$(document).ready(function(){
    init();
});

function init(){
	preload('img/320x50.png');
    preload('img/bottom-img-1.jpg');
    preload('img/bottom-img-2.jpg');
    preload('img/camera-icon.png');
    preload('img/center-text.png');
    preload('img/icon-1.png');
    preload('img/icon-2.png');
    preload('img/icon-3.png');
    preload('img/icon-4.png');
    preload('img/icon-5.png');
    preload('img/link-icon.png');
    preload('img/text-link.png');
    preload('img/text-video.png');
    preload('img/x.png');
}

var loaded = 0;
var numberImage = 14;
function preload(src){
    var img = new Image();
    img.onload = function(){
        if(loaded == numberImage-1){
            prepareEvent();
            setTimeout('start()',1000);
        }
        loaded ++;
    }
    img.src = src;
}

function prepareAnimation(){
    enableTransform2d('ph_conBanner',1,0,0,0,1,'linear');
    enableTransform2d('disclame',1,0,0,0,0.5,'linear');
}

function prepareEvent(){
    
    $("#right-nav").click(function(){
        $("#video-detail").css("display","none");
        var video = document.getElementById('video');
        video.pause();
        $("#link-detail").css("display","block");

        $("#left-nav").addClass("none-select");
        $("#left-nav").removeClass("select");

        $("#right-nav").addClass("select");
        $("#right-nav").removeClass("none-select");
        
        $('#tab-more').css('display','none');
        $('#bottom-img-1').css('display','none');
        $('#bottom-img-2').css('display','block');
    });

    $("#left-nav").click(function(){
        $("#video-detail").css("display","block");
        $("#link-detail").css("display","none");

        $("#right-nav").addClass("none-select");
        $("#right-nav").removeClass("select");

        $("#left-nav").addClass("select");
        $("#left-nav").removeClass("none-select");
        
        $('#tab-more').css('display','block');
        $('#bottom-img-1').css('display','block');
        $('#bottom-img-2').css('display','none');
    });
    
    $('#tab-more').click(function(){
		transform2d('disclame',1,0,0,0,true,false,0.5,'linear');
	});
	$('#bt_close_disclame').click(function(){
		transform2d('disclame',1,0,0,0,false,true,0.5,'linear');
	});


    $("#mini-bg").click(function(){
        $("#ph_conBanner").css("display","none");
        $("#expand").css("opacity",1);
        var video = document.getElementById('video');
        video.play();
    });

    $("#close").click(function(){

       $("#ph_conBanner").css("display","block");
       $("#expand").css("opacity",0);
       var video = document.getElementById('video');
       video.pause();
    });

    var _self = this;
    $("#icon-5").click(function(){
        _self.reClass();
       $("#parent-5").addClass("active");
       $('#applink_detail_title').html('iHeartAuto&reg; for SYNC AppLink');
		$('#applink_detail_content').html('Tune in to iHeartAuto, featuring more than 800 live radio stations in 150 U.S. cities. Use simple voice commands to find "saved stations," create new Custom Stations, fine-tune them using the discovery settings or "like" a song by saying "thumbs-up." You can say, "skip song" to bypass a song and more.');
   });

   $("#icon-3").click(function(){
       _self.reClass();
       $("#parent-3").addClass("active");
       $('#applink_detail_title').html('USA TODAY for SYNC AppLink');
		$('#applink_detail_content').html('Get 24/7 access to the latest USA TODAY content. Hear headlines from News, Money, Sports, Life, Tech and Travel categories. And you can play, pause, skip and go back within and between stories, for an easily customized listening experience.');
   });

   $("#icon-2").click(function(){
       _self.reClass();
       $("#parent-2").addClass("active");
       $('#applink_detail_title').html('MLB.com At Bat for SYNC AppLink');
	   $('#applink_detail_content').html('With available SYNC&reg; AppLink<span style="display:inline-block;font-size:10px;position:relative;top:-2px;">TM</span>, you can use your voice to control a variety of mobile apps in your vehicle. MLB.com At Bat, the official Major League Baseball app for iPhone&reg;, gives you access to listen to live baseball games.');
   });

   $("#icon-4").click(function(){
       _self.reClass();
       $("#parent-4").addClass("active");
       $('#applink_detail_title').html('Pandora&reg; for SYNC AppLink');
		$('#applink_detail_content').html('Pandora lets you create up to 100 stations, so you can easily switch between favorites. If you like a song, simply say "thumbs-up". You can get to your saved stations, skip a song, or play a different track using simple voice commands.');
   });

   $("#icon-1").click(function(){
       _self.reClass();
       $("#parent-1").addClass("active");
       $('#applink_detail_title').html('WSJ Live for SYNC AppLink');
		$('#applink_detail_content').html('WSJ Live, available for iPhone&reg; devices, is an interactive radio and video news app from The Wall Street Journal that gives you live news on demand, with the latest in markets, technology and lifestyle.');
   });



    $("#learn-more").click(function(){

    });

    
    var carID = Math.floor(Math.random() * 3) + 1;
	$('#car_'+carID).css('display','block');
}


function reClass(){
    $("#parent-1").removeClass("active");
    $("#parent-2").removeClass("active");
    $("#parent-3").removeClass("active");
    $("#parent-4").removeClass("active");
    $("#parent-5").removeClass("active");
}

function start(){
}

/*-------------------------------------------------------------------------------------------*/
function enableTransform2d(id,scaleInit,rotateInit,centerX,centerY,time,timeFunc){
    if(time != null && timeFunc){
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
    if(time != null && timeFunc){
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

function fadeOutImg(id,time){
    $('#'+id).css('opacity',0);
    setTimeout(function(){
        $('#'+id).css('display','none');
    },time*1000);
}

function fadeInImgIE(id,time){
    $('#'+id).css('display','block');
    setTimeout(function(){
        $('#'+id).animate({
            opacity: 1
        },time*1000);
    },100);
}
function fadeOutImgIE(id,time){
    $('#'+id).animate({
        opacity: 0
    },time*1000);
    setTimeout(function(){
        $('#'+id).css('display','none');
    },time*1000);
}

function enableZoomIE(id,width,height,top,left){
    $('#'+id).css({
        width: width+'px',
        height: height +'px',
        top: top+'px',
        left: left+'px'
    });
}



function zoomIE(id,width,height,top,left,time,isfadein,isfadeout){
    if(isfadein){
        $('#'+id).animate({
            width: width+'px',
            height: height+'px',
            top:top+'px',
            left:left+'px',
            opacity: 1
        },time*1000);
    }
    else if(isfadeout){
        $('#'+id).animate({
            width: width+'px',
            height: height+'px',
            top:top+'px',
            left:left+'px',
            opacity: 0
        },time*1000);
    }
    else{
        $('#'+id).animate({
            width: width+'px',
            height: height+'px',
            top:top+'px',
            left:left+'px'
        },time*1000);
    }
}

function transform2dIE(id,translatex,translatey,isfadein,isfadeout,time){
    if(isfadein){
        $('#'+id).css('display','block');
        var timeout = setTimeout(function(){
            if(translatex == 0){
                $('#'+id).animate({
                    opacity: 1,
                    top:'+='+translatey
                },time*1000);
            }
            else if(translatey == 0){
                $('#'+id).animate({
                    opacity: 1,
                    left:'+='+translatex
                },time*1000);
            }
            else{
                $('#'+id).animate({
                    opacity: 1,
                    left:'+='+translatex,
                    top:'+='+translatey
                },time*1000);
            }
            clearTimeout(timeout);
        },100);
    }
    else if(isfadeout){
        if(translatex == 0){
            $('#'+id).animate({
                opacity: 0,
                top:'+='+translatey
            },time*1000);
        }
        else if(translatey == 0){
            $('#'+id).animate({
                opacity: 0,
                left:'+='+translatex
            },time*1000);
        }
        else{
            $('#'+id).animate({
                opacity: 0,
                left:'+='+translatex,
                top:'+='+translatey
            },time*1000);
        }
        var timeout = setTimeout(function(){
            $('#'+id).css('display','none');
        },1000*time);
    }
    else{
        $('#'+id).animate({
            left:'+='+translatex,
            top:'+='+translatey
        },time*1000);
    }
}