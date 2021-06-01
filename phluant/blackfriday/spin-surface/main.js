$(document).ready(function(){
    init();
});

function init(){
    preload('img/mslogo.png');
    preload('img/expand.png');
    preload('img/close.png');
    preload('img/text3.png');
    preload('img/text1.png');
    preload('img/head-phone.png');
    preload('img/head-phone2.png');
    preload('img/xbox.png');
    preload('img/xbox2.png');
    preload('img/surface.png');
    preload('img/inspiron.png');
    preload('img/phone1.png');
    preload('img/phone2.png');
    preload('img/pinkbox.png');
    preload('img/spinbt.png');
    preload('img/mslogo.png');
    preload('img/findmap.png');
    preload('img/direction.png');
    
    prepareAnimation();
    prepareEvent();
    
    TerraAds.init('frame2');
}

var loaded = 0;
var numberImage = 18;

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

function prepareAnimation(){
    enableTransform2d('minimize',1,0,0,0,0.5,'linear');
    enableTransform2d('minilogo',1,0,0,0,0.5,'linear');
    enableTransform2d('expand',1,0,0,0,0.5,'linear');
    enableTransform2d('full',1,0,0,0,2,'linear');
    enableTransform2d('ohfun',1,0,0,0,0.5,'linear');
    enableTransform2d('text1',1,0,0,0,0.5,'linear');
    enableTransform2d('text2',1,0,0,0,0.5,'linear');
    enableTransform2d('slide',1,0,0,0,0.5,'linear');
    enableTransform2d('replay',1,0,0,0,0.5,'linear');
    enableTransform2d('fulllogo',1,0,0,0,0.5,'linear');
    enableTransform2d('findmap',1,0,0,0,0.5,'linear');
    enableTransform2d('direction',1,0,0,0,0.5,'linear');
    
    enableTransform2d('column1',1,0,0,0,0.4,'ease-in-out');
    enableTransform2d('column2',1,0,0,0,0.6,'ease-in-out');
    enableTransform2d('column3',1,0,0,0,0.8,'ease-in-out');
    
    enableTransform2d('direct_arrow',1,0,0,0,0.25,'ease-in-out');
    enableTransform2d('banner_arrow',1,0,0,0,0.2,'ease-in-out');
}

function start(){
    transform2d('minimize',1,0,0,0,true,false,0.5,'linear'); 
    setTimeout(function(){
        transform2d('minilogo',1,0,0,0,true,false,0.5,'linear'); 
    },500);
    setTimeout(function(){
        transform2d('expand',1,0,0,0,true,false,0.5,'linear'); 
    },1000);
    
    setTimeout(function(){
    	transform2d('banner_arrow',1,0,10,0,true,false,0.25,'ease-in-out');
    	setTimeout(function(){
    		transform2d('banner_arrow',1,0,0,0,true,false,0.25,'ease-in-out');
    	},250);
    	setTimeout(function(){
    		transform2d('banner_arrow',1,0,10,0,true,false,0.25,'ease-in-out');
    	},500);
    	setTimeout(function(){
    		transform2d('banner_arrow',1,0,0,0,true,false,0.25,'ease-in-out');
    	},750);
    },1500);
}

function start(){
    transform2d('minimize',1,0,0,0,true,false,0.5,'linear'); 
    setTimeout(function(){
        transform2d('minilogo',1,0,0,0,true,false,0.5,'linear'); 
    },500);
    setTimeout(function(){
        transform2d('expand',1,0,0,0,true,false,0.5,'linear'); 
    },1000);
    
    setTimeout(function(){
    	transform2d('banner_arrow',1,0,10,0,true,false,0.25,'ease-in-out');
    	setTimeout(function(){
    		transform2d('banner_arrow',1,0,0,0,true,false,0.25,'ease-in-out');
    	},250);
    	setTimeout(function(){
    		transform2d('banner_arrow',1,0,10,0,true,false,0.25,'ease-in-out');
    	},500);
    	setTimeout(function(){
    		transform2d('banner_arrow',1,0,0,0,true,false,0.25,'ease-in-out');
    	},750);
    },1500);
}

/*--------- expand animation ---------------------------------------------------*/

function prepareEvent(){
	$("#minimize").click(function(){
        transform2d('minimize',1,0,0,0,false,true,0.5,'linear');
        
        setTimeout(function(){
            transform2d('full',1,0,0,0,true,false,0.5,'linear');
        },500);
    });

    $("#close").click(function(){
        transform2d('full',1,0,0,0,false,true,0.5,'linear');
        
        setTimeout(function(){
            transform2d('minimize',1,0,0,0,true,false,0.5,'linear');
        },500);
    });
    
    $('#spinbt').click(function(){
    	startSpin();
    	$('#spinbt').css('display','none');
    });
    
    $('#findmap').click(function(){
        showMap();
    });
    
    $('#replay').click(function(){
    	hideMap();
    });
}

function startSpin(){
	transform2d('column1',1,0,0,-1520,false,false,1.4,'ease-in-out');
	setTimeout(function(){
		transform2d('column1',1,0,0,-1500,false,false,0.1,'ease-in-out');
	},1400);
	transform2d('column2',1,0,0,1520,false,false,1.8,'ease-in-out');
	setTimeout(function(){
		transform2d('column2',1,0,0,1500,false,false,0.1,'ease-in-out');
	},1800);
	transform2d('column3',1,0,0,-1520,false,false,2.2,'ease-in-out');
	setTimeout(function(){
		transform2d('column3',1,0,0,-1500,false,false,0.1,'ease-in-out');
	},2200);
	
	setTimeout(function(){
		transform2d('text1',1,0,0,0,false,true,0.5,'linear');
	    transform2d('text2',1,0,0,0,true,false,0.5,'linear');
	}, 2500);
	
	setTimeout(function(){
		showMap();
	},5000);
}

var firstTimeShowMap = true;

function showMap(){
	transform2d('slide',1,0,-320,0,false,false,0.5,'ease-in-out'); 
	
	transform2d('replay',1,0,0,0,true,false,0.5,'linear');
    transform2d('findmap',1,0,0,0,false,true,0.2,'linear');
    
    if(firstTimeShowMap){
    	transform2d('direction',1,0,0,0,true,false,0.2,'linear');
    	setTimeout(function(){
        	transform2d('direct_arrow',1,0,10,0,false,false,0.25,'ease-in-out');
        	setTimeout(function(){
        		transform2d('direct_arrow',1,0,0,0,false,false,0.25,'ease-in-out');
        	},250);
        	setTimeout(function(){
        		transform2d('direct_arrow',1,0,10,0,false,false,0.25,'ease-in-out');
        	},500);
        	setTimeout(function(){
        		transform2d('direct_arrow',1,0,0,0,false,false,0.25,'ease-in-out');
        	},750);
        },500);
    	
    	firstTimeShowMap = false;
    }
    else{
    	transform2d('direction',1,0,0,0,true,false,0.2,'linear');
    }
    
    setTimeout(function(){
    	transform2d('column1',1,0,0,0,false,false,0,'ease-in-out');
    	transform2d('column2',1,0,0,0,false,false,0,'ease-in-out');
    	transform2d('column3',1,0,0,0,false,false,0,'ease-in-out');
    },500);
}

function hideMap(){
	transform2d('slide',1,0,0,0,false,false,0.5,'ease-in-out');
	
	transform2d('text1',1,0,0,0,true,false,0.5,'linear');
    transform2d('text2',1,0,0,0,false,true,0.5,'linear');
    
	transform2d('replay',1,0,0,0,false,true,0.5,'linear');
    transform2d('direction',1,0,0,0,false,true,0.2,'linear');
    transform2d('findmap',1,0,0,0,true,false,0.2,'linear');
    
    $('#spinbt').css('display','block');
}

/*--------- expand animation ---------------------------------------------------*/


/*---- bing map -----------------------------------------------------------------*/
TerraAds = {
	map: null,
	userInfo: {},
	
	init: function(id){
		Microsoft.Maps.loadModule('Microsoft.Maps.Themes.BingTheme', { callback: function() 
        {
			TerraAds.map = new Microsoft.Maps.Map(document.getElementById(id), {
				center: new Microsoft.Maps.Location(39.82119423, -75.34698486),
			  	credentials: 'AkThfkbDAqmTpHt--YLBuqOehdWQPP844W73nSzn0sE0adgm8V6P8AZuuHb8H41L',
			  	mapTypeId: Microsoft.Maps.MapTypeId.road,
		        zoom: 12,
		        showScalebar: false,
		        showDashboard: false,
		        theme: new Microsoft.Maps.Themes.BingTheme() 
			});
			
			
			navigator.geolocation.getCurrentPosition(function(position){
				TerraAds.userInfo.lat = 39.82119423;//position.coords.latitude;
				TerraAds.userInfo.lng = -75.34698486;//position.coords.longitude;
				TerraAds.loadInfo('http://phad.phluant.net/web_services/phluant/export?type=microsoft_stores&subtype=geo&value='+TerraAds.userInfo.lat+','+TerraAds.userInfo.lng, 'geo');
	        },function(e){
	        	TerraAds.loadInfo('http://phad.phluant.net/web_services/phluant/export?type=microsoft_stores&subtype=ip_address', 'ip');
	        });
        }});
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
            
            TerraAds.contentString = '<div id="content_infor">' +
                '<img class="map-image" src="img/surface.png"/>'+
                '<div class="address-text">'+
                    '<div class="address-name">'+TerraAds.userInfo.store_info.location+'</div>'+
                    '<div class="address-location">'+TerraAds.userInfo.store_info.address+' '+TerraAds.userInfo.store_info.phone+
                    '</div>'+
                '</div>'+
                '<div class="clear-both">&nbsp;</div>'+
            '</div>';
            var infoboxOptions = {
                showCloseButton: false,
                width: 300,
                height: 100,
                description: TerraAds.contentString,
                visible:true, 
                autoPan:true
            }; 
            var defaultInfobox = new Microsoft.Maps.Infobox(TerraAds.map.getCenter(), infoboxOptions );    
            TerraAds.map.entities.push(defaultInfobox);
            
            var self = TerraAds;
            setTimeout(function(){
            	var xExtraOffset = 33;
                var yExtraOffset = 37;
            	var newPoint = new Microsoft.Maps.Point(defaultInfobox.getWidth()/2-33, defaultInfobox.getHeight()/2);
            	var newLocation = self.map.tryPixelToLocation(newPoint);

                self.map.setView({
                    center: new Microsoft.Maps.Location(newLocation.latitude, newLocation.longitude)
                });
            },2000);
            
            
            $('#direction').bind('click', function(){
                console.log('mapClick');
                var href = 'http://bing.com/maps/default.aspx?rtp=pos.'+TerraAds.userInfo.lat+'_'+TerraAds.userInfo.lng+'_'+encodeURIComponent('My Location')+'~pos.'+TerraAds.userInfo.store_info.lat+'_'+TerraAds.userInfo.store_info.lng+'_'+encodeURIComponent(TerraAds.userInfo.store_info.location)+'&rtop=0~1~0';
                console.log(href);
                window.open(href, '_blank');
            });
        });
    }
}

/*---- bing map -----------------------------------------------------------------*/

/*--------------------------------------------------------------------------------*/
function resetAnimation(id){
    $('#'+id).css('-webkit-animation','');
    $('#'+id).css('-webkit-animation-play-state','');
}
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

