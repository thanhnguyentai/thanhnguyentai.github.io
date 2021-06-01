$(document).ready(function(){
    init();
});

function init(){
    preload('img/find_store.png');
    preload('img/logo.png');
    preload('img/marker.png');
    preload('img/microsoft_logo.png');
    preload('img/phone.png');
    preload('img/surface.png');
    preload('img/xbox.png');
    
    prepareAnimation();
    prepareEvent();
    
    TerraAds.init('bingmap');
}

var loaded = 0;
var numberImage = 7;

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
	enableTransform2d('banner',1,0,0,0,0.5,'linear');
	enableTransform2d('container_all',1,0,0,0,0.5,'linear');
    enableTransform2d('findstore_arrow',1,0,0,0,0.2,'linear');
}

function prepareEvent(){
    $('#findmap').click(function(){
        showMap();
    });
    
    
    $('.flexslider').flexslider({
        animation: "slide",
        slideshow: false,
        controlNav: false,
        startAt: 0,
        mousewheel: true,
        animationSpeed: 250,
        initDelay: 5000,
		slideshow: true,
        slideshowSpeed: 5000
    });
    
    
    $('#findstore').bind('click', function(){
    	showMap();
    });
}

function start(){
	transform2d('banner',1,0,0,0,true,false,0.5,'linear');
	
	setTimeout(function(){
		
		transform2dObject($('.slides').eq(0),1,0,-280,0,false,false,0.3,'linear');
		setTimeout(function(){
			transform2dObject($('.slides').eq(0),1,0,-180,0,false,false,0.3,'linear');
			
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
}

function showMap(){
	transform2d('container_all',1,0,-180,0,false,false,0.5,'ease-in-out'); 
	
	$('#findstore').css('display','none');
	$('#text1').css('display','none');
	$('#text2').css('display','block');
}


/*---- bing map -----------------------------------------------------------------*/
TerraAds = {
	map: null,
	userInfo: {},
	
	init: function(id){
		TerraAds.map = new Microsoft.Maps.Map(document.getElementById(id), {
			center: new Microsoft.Maps.Location(39.82119423, -75.34698486),
		  	credentials: 'AkThfkbDAqmTpHt--YLBuqOehdWQPP844W73nSzn0sE0adgm8V6P8AZuuHb8H41L',
		  	mapTypeId: Microsoft.Maps.MapTypeId.road,
	        zoom: 12,
	        showScalebar: false,
	        showDashboard: false
		});
		
		
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
        	var location1 = new Microsoft.Maps.Location(40.734136, -73.871673);
        	var location2 = new Microsoft.Maps.Location(41.031983, -73.760851);
        	var location3 = new Microsoft.Maps.Location(40.767968, -73.982463);
        	
        	var pushpinOptions = {icon: 'img/marker.png', width: 21, height: 21}; 
        	var pushpin= new Microsoft.Maps.Pushpin(location1, pushpinOptions);
        	TerraAds.map.entities.push(pushpin);
        	Microsoft.Maps.Events.addHandler(pushpin, 'click', function(){
        		TerraAds.openBingMap();
        	});  
        	
        	var pushpin2= new Microsoft.Maps.Pushpin(location2, pushpinOptions);
        	TerraAds.map.entities.push(pushpin2);
        	Microsoft.Maps.Events.addHandler(pushpin2, 'click', function(){
        		TerraAds.openBingMap();
        	});
        	
        	var pushpin3= new Microsoft.Maps.Pushpin(location3, pushpinOptions);
        	TerraAds.map.entities.push(pushpin3);
        	Microsoft.Maps.Events.addHandler(pushpin3, 'click', function(){
        		TerraAds.openBingMap();
        	});
        	
        	var locations = [location1,location2,location3];
            var boundingBox = Microsoft.Maps.LocationRect.fromLocations(locations);
            TerraAds.map.setView({ bounds: boundingBox });
        });
    },
    
    openBingMap: function(){
    	window.open('http://bingmap.com','_blank');
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