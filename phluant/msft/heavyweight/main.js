$(document).ready(function(){
    init();
});

function init(){
	preload('img/direction.png');
    preload('img/find_store.png');
    preload('img/logo.png');
    preload('img/m_discover.png');
    preload('img/m_mslogo.png');
    preload('img/microsoft_logo.png');
    preload('img/phone.png');
    preload('img/surface.png');
    preload('img/xbox.png');
    
    prepareAnimation();
    prepareEvent();
    
    TerraAds.init('bingmap');
}

var loaded = 0;
var numberImage = 9;

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
    enableTransform2d('m_logo',1,0,0,0,0.5,'linear');
    enableTransform2d('m_discover',1,0,0,0,0.5,'linear');
    enableTransform2d('minimize',1,0,0,0,0.5,'linear');
	enableTransform2d('banner',1,0,0,0,0.5,'linear');
	enableTransform2d('container_all',1,0,0,0,0.5,'linear');
    enableTransform2d('findstore_arrow',1,0,0,0,0.2,'linear');
    enableTransform2d('getDirection',1,0,0,0,0.2,'linear');
}

function prepareEvent(){
	var autoSwipe = true;
	
    $('#findstore').bind('click', function(){
    	$('.flexslider').flexslider(3);
    	transform2d('getDirection',1,0,0,0,true,false,0.5,'linear'); 
    	$('#findstore').css('display','none');
        $('#mask_slide').css('display','none');
    	$('#text1').css('display','none');
    	$('#text2').css('display','block');
    });
    
    var firtTimeExpand = true;
    $('#minimize').click(function(){
        expand();
        if(firtTimeExpand)
        	firtTimeExpand = false;
        else
        	return;
        
        $('.flexslider').flexslider({
            animation: "slide",
            slideshow: true,
            controlNav: false,
            reverse: false,
            startAt: 0,
            animationLoop: false,
            mousewheel: true,
            animationSpeed: 250,
            initDelay: 5000,
            slideshowSpeed: 5000,
            after: function(slider) {
    			if(slider.currentSlide == 3){
    				transform2d('getDirection',1,0,0,0,true,false,0.5,'linear'); 
    				$('#findstore').css('display','none');
    				$('#text1').css('display','none');
    				$('#text2').css('display','block');
    				
    				autoSwipe = false;
    			}
    			else{
    				transform2d('getDirection',1,0,0,0,false,true,0.5,'linear'); 
    				$('#findstore').css('display','block');
    				$('#text1').css('display','block');
    				$('#text2').css('display','none');
    			}
            }
        });
        
        setTimeout(function(){
        	transform2dObject($('.slides').eq(0),1,0,-100,0,false,false,0.3,'linear');
            setTimeout(function(){
            	transform2dObject($('.slides').eq(0),1,0,0,0,false,false,0.3,'linear');
                $('#mask_slide').css('display','none');
            },1000);
        },1000);
        
        setTimeout(function(){
            transform2d('findstore_arrow',1,0,10,0,false,false,0.25,'ease-in-out');
            setTimeout(function(){
                transform2d('findstore_arrow',1,0,0,0,false,false,0.25,'ease-in-out');
            },250);
            setTimeout(function(){
                transform2d('findstore_arrow',1,0,10,0,false,false,0.25,'ease-in-out');
            },500);
            setTimeout(function(){
                transform2d('findstore_arrow',1,0,0,0,false,false,0.25,'ease-in-out');
            },750);
        },1000);
    });
    
    $('#bt_close').click(function(){
    	transform2d('minimize',1,0,0,0,true,false,0.5,'linear');
    	transform2d('banner',1,0,0,0,false,true,0.5,'linear');
    });
}

function start(){
    transform2d('minimize',1,0,0,0,true,false,0.5,'linear');
    setTimeout(function(){
        transform2d('banner_text1',1,0,0,0,true,false,0.5,'linear');
        transform2d('banner_text2',1,0,0,0,true,false,0.5,'linear');
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
    },2000);
}
function expand(){
    transform2d('minimize',1,0,0,0,false,true,0.5,'linear');
    transform2d('banner',1,0,0,0,true,false,0.5,'linear');
}


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
                '<img class="map-image" src="img/xbox.png"/>'+
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
            
            
            $('#getDirection').bind('click', function(){
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

function transform2dObject(obj,scale,rotate,translatex,translatey,isfadein,isfadeout,time,timeFunc,centerX,centerY){
    if(time != null && timeFunc){
    	obj.css('-webkit-transition',time + 's ' + timeFunc);
    	obj.css('-moz-transition', time + 's ' + timeFunc);
    }
    if(centerX != undefined && centerY != undefined){
    	obj.css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
    	obj.css('-webkit-transform-origin', centerX+'% ' + centerY+ '%');
    }
    
    obj.css('-webkit-transform','translateX('+translatex+'px) translateY('+translatey+'px) rotate('+rotate+'deg) ' + ' scale('+scale+')');
    obj.css('-moz-transform','translateX('+translatex+'px) translateY('+translatey+'px) rotate('+rotate+'deg) ' + ' scale('+scale+')');
    obj.css('-ms-transform','translateX('+translatex+'px) translateY('+translatey+'px) rotate('+rotate+'deg) ' + ' scale('+scale+')');
    obj.css('transform','translateX('+translatex+'px) translateY('+translatey+'px) rotate('+rotate+'deg) ' + ' scale('+scale+')');
    if(isfadein){
    	obj.css('display','block');
        var timeout = setTimeout(function(){
        	obj.css('opacity',1);
            clearTimeout(timeout);
        },100);
    }
    else if(isfadeout){
    	obj.css('opacity',0);
        var timeout = setTimeout(function(){
        	obj.css('display','none');
        },1000*time);
    }
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
    $('#'+id).css('-ms-transform','translateX('+translatex+'px) translateY('+translatey+'px) rotate('+rotate+'deg) ' + ' scale('+scale+')');
    $('#'+id).css('transform','translateX('+translatex+'px) translateY('+translatey+'px) rotate('+rotate+'deg) ' + ' scale('+scale+')');
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