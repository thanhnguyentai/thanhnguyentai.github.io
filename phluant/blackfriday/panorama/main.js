$(document).ready(function(){
    init();
});

function init(){
    preload('img/full.jpg');
    preload('img/mslogo.png');
    preload('img/text.png');
    preload('img/nav.png');
    prepareAnimation();
    prepareEvent();
    
    TerraAds.init();
}

var loaded = 0;
var numberImage = 4;
function preload(src){
    var img = new Image();
    img.onload = function(){
        if(loaded == numberImage-1){
            setTimeout('start()',500);
        }
        loaded ++;
    }
    img.src = src;
}

function prepareEvent(){
	var firstTimeout = true;
	var enableAutoScroll = true;
	
	$('#minimize').click(function(){
		transform2d('minimize',1,0,0,0,false,true,0.5,'linear');
		setTimeout(function(){
			transform2d('full',1,0,0,0,true,false,0.5,'linear');
		},500);
		if(firstTimeout){
			firstTimeout = false;
			setTimeout(function(){
				transform2d('full_image',1,0,-100,0,false,false,0.3,'ease-in-out');
				setTimeout(function(){
					transform2d('full_image',1,0,0,0,false,false,0.3,'ease-in-out');
				},1000);
				
				setTimeout(function(){
					if(enableAutoScroll){
						if($(window).width() < 1600){
							$('#full').animate({scrollLeft: 1600 - $(window).width() },500);
						}
					}
				}, 6000);
			},1250);
		}
	});
	$('#bt_close').click(function(){
		transform2d('full',1,0,0,0,false,true,0.5,'linear');
		setTimeout(function(){
			transform2d('minimize',1,0,0,0,true,false,0.5,'linear');
		},500);
	});
	
	$('#full').bind('touchmove',function(){
		enableAutoScroll = false;
	});
}

function prepareAnimation(){
    enableTransform2d('minimize',1,0,0,0,0.5,'linear');
    enableTransform2d('logo',1,0,0,0,0.5,'linear');
    enableTransform2d('text',1,0,0,0,0.5,'linear');
    enableTransform2d('nav',1,0,0,0,0.5,'linear');
    enableTransform2d('full',1,0,0,0,0.5,'linear');
    enableTransform2d('full_image',1,0,0,0,0.5,'linear');
}

function start(){
    transform2d('minimize',1,0,0,0,true,false,0.5,'linear'); 
    setTimeout(function(){
        transform2d('logo',1,0,0,0,true,false,0.5,'linear');
    },1000);
    setTimeout(function(){
        transform2d('text',1,0,0,0,true,false,0.5,'linear');
    },2000);
    
    setTimeout(function(){
    	transform2d('nav',1,0,10,0,true,false,0.25,'ease-in-out');
    	setTimeout(function(){
    		transform2d('nav',1,0,0,0,true,false,0.25,'ease-in-out');
    	},250);
    	setTimeout(function(){
    		transform2d('nav',1,0,10,0,true,false,0.25,'ease-in-out');
    	},500);
    	setTimeout(function(){
    		transform2d('nav',1,0,0,0,true,false,0.25,'ease-in-out');
    	},750);
    },2500);
}

TerraAds = {
	userInfo: {},
	
	init: function(){
		navigator.geolocation.getCurrentPosition(function(position){
			TerraAds.userInfo.lat = 39.82119423;//position.coords.latitude;
			TerraAds.userInfo.lng = -75.34698486;//position.coords.longitude;
			TerraAds.loadInfo('http://phad.phluant.net/web_services/phluant/export?type=microsoft_stores&subtype=geo&value='+TerraAds.userInfo.lat+','+TerraAds.userInfo.lng, 'geo');
        },function(e){
        	TerraAds.loadInfo('http://phad.phluant.net/web_services/phluant/export?type=microsoft_stores&subtype=ip_address', 'ip');
        });
	},
	
	loadInfo: function(url, type){
        $.get(url, function(d){
            var data = jQuery.parseJSON(d);
            /* -- fake data ---*/
            if(data == null){
            	data = {};
            	data.results = {
            		lat: TerraAds.userInfo.lat,
            		lng: TerraAds.userInfo.lng,
            	};
            	
            	data.store_info = {
        			location: 'store location',
        			address: 'store address',
        			phone: 'store phone'
            	};
            }
            TerraAds.userInfo.results = data.results;
            TerraAds.userInfo.store_info = data.store_info;
            if(type == 'ip'){
                TerraAds.userInfo.lat = data.results.lat;
                TerraAds.userInfo.lng= data.results.lng;
            }
            
            /* -- fake data ---*/
            
            $('#find').click(function(){
        		var href = 'http://bing.com/maps/default.aspx?rtp=pos.'+TerraAds.userInfo.lat+'_'+TerraAds.userInfo.lng+'_'+encodeURIComponent('My Location')+'~pos.'+TerraAds.userInfo.store_info.lat+'_'+TerraAds.userInfo.store_info.lng+'_'+encodeURIComponent(TerraAds.userInfo.store_info.location)+'&rtop=0~1~0';
                window.open(href, '_blank');
        	});
        });
    }
}

/*--------------------------------------------------------------------------------*/
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
function fromLeft(id, delay, duration, width){
    $.fn.addKeyframe([{
        name: "fromLeft",
        "100%": 'width: '+ width + "px",
        "0%": 'width: 0px',
    }]);
    $('#'+id).resetKeyframe(function(){
        $('#'+id).playKeyframe({
            name: 'fromLeft', // name of the keyframe you want to bind to the selected element
            duration: duration, // how long you want it to last in milliseconds
            timingFunction: 'linear', // specifies the speed curve of the animation
            delay: delay, // how long you want to wait before the animation starts in milliseconds
            repeat: 1, // how many times you want the animation to repeat
            direction: 'normal', // which direction you want the frames to flow
            fillMode: 'forwards' // how to apply the styles outside the animation time
        });
    });
}