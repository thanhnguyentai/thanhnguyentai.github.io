$(document).ready(function(){
    init();
});

function init(){
    preload('img/mslogo1.png');
    preload('img/expand.png');
    preload('img/close.png');
    preload('img/text3.png');
    preload('img/text1.png');
    preload('img/xbox.jpg');
    preload('img/mslogo.png');
    preload('img/findmap.png');
    preload('img/direction.png');
    preload('img/none_frame.png');
    
    prepareAnimation();
    prepareEvent();
    TerraAds.init('frame2');
}

var loaded = 0;
var numberImage = 10;

function preload(src){
    var img = new Image();
    img.onload = function(){
        if(loaded == numberImage-1){
            setTimeout('start()',500);
        }
        loaded ++;
    }
    img.src = src;
    
    if(src.indexOf('none_frame') >= 0)
    	image.front = img;
    
    if(src.indexOf('xbox') >= 0)
    	image.back = img;
}

function prepareAnimation(){
    enableTransform2d('minimize',1,0,0,0,0.5,'linear');
    enableTransform2d('minilogo',1,0,0,0,0.5,'linear');
    enableTransform2d('expand',1,0,0,0,0.5,'linear');
    enableTransform2d('full',1,0,0,0,0.5,'linear');
    enableTransform2d('nav',1,0,0,0,0.5,'linear');
    enableTransform2d('ohfun',1,0,0,0,0.5,'linear');
    enableTransform2d('text1',1,0,0,0,0.5,'linear');
    enableTransform2d('text2',1,0,0,0,0.5,'linear');
    enableTransform2d('slide',1,0,0,0,0.5,'linear');
    enableTransform2d('replay',1,0,0,0,0.5,'linear');
    enableTransform2d('fulllogo',1,0,0,0,0.5,'linear');
    enableTransform2d('findmap',1,0,0,0,0.5,'linear');
    enableTransform2d('direction',1,0,0,0,0.5,'linear');
    
    enableTransform2d('direct_arrow',1,0,0,0,0.25,'ease-in-out');
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
    },1500);
}

function prepareEvent(){
	var firtTime = true;
    $("#minimize").click(function(){
        transform2d('minimize',1,0,0,0,false,true,0.5,'linear');
        setTimeout(function(){
            transform2d('full',1,0,0,0,true,false,0.5,'linear');
        },500);
        
        if(firtTime){
        	recompositeCanvases();
        	checkAutoScrath();
        	firtTime = false;
        }
    });

    $("#close").click(function(){
        transform2d('full',1,0,0,0,false,true,0.5,'linear');
        setTimeout(function(){
            transform2d('minimize',1,0,0,0,true,false,0.5,'linear');
        },500);
    });
    
    $('#findmap').click(function(){
        showMap();
    });
    
    $('#replay').click(function(){
    	hideMap();
    });
    
    scratch();
}


/*--- scratch -------------------------------------------------------------*/
var image = { 
		back: '',
		front: ''
	};

var canvas = {temp:null, draw:null};

var timeoutAutoScratch = null;
var timeoutScratchTouch = null;
var endScratch = false;

function getLocalCoords(elem, ev) {
	var ox = 0, oy = 0;
	var first;
	var pageX, pageY;

	// Walk back up the tree to calculate the total page offset of the
	// currentTarget element.  I can't tell you how happy this makes me.
	// Really.
	while (elem != null) {
		ox += elem.offsetLeft;
		oy += elem.offsetTop;
		elem = elem.offsetParent;
	}

	if (ev.hasOwnProperty('changedTouches')) {
		first = ev.changedTouches[0];
		pageX = first.pageX;
		pageY = first.pageY;
	} else {
		pageX = ev.pageX;
		pageY = ev.pageY;
	}

	return { 'x': pageX - ox, 'y': pageY - oy };
}


var line_width=45;

function scratchLine(can, x, y, fresh) {
	var ctx = can.getContext('2d');
	ctx.lineWidth = line_width;
	ctx.lineCap = ctx.lineJoin = 'round';
	ctx.strokeStyle = '#E00F0F';
	if (fresh) {
		ctx.beginPath();
		// this +0.01 hackishly causes Linux Chrome to draw a
		// "zero"-length line (a single point), otherwise it doesn't
		// draw when the mouse is clicked but not moved:
		ctx.moveTo(x+0.01, y);
	}
	ctx.lineTo(x, y);
	ctx.stroke();
}

var canvasWidth = 267;
var canvasHeight = 183;
function scratch() {
	var c = document.getElementById('scratch');
	line_width = canvasWidth/10;

	// create the temp and draw canvases, and set their dimensions
	canvas.temp = document.createElement('canvas');
	canvas.draw = document.createElement('canvas');
	canvas.temp.width = canvas.draw.width = canvasWidth;
	canvas.temp.height = canvas.draw.height = canvasHeight;

	// draw the stuff to start
	recompositeCanvases();
	
	
	var mouseDown = false;
	/*--- on mouse down ---*/
	
	function mousedown_handler(e) {
		if(endScratch)
			return;
		
		if(timeoutAutoScratch != null){
        	clearTimeout(timeoutAutoScratch);
        	timeoutAutoScratch = null;
        }
        
        if(timeoutScratchTouch == null){
        	checkScratchTouch();
        }
		
		var local = getLocalCoords(c, e);
		mouseDown = true;

		scratchLine(canvas.draw, local.x, local.y, true);
		recompositeCanvases();

		if (e.cancelable) { e.preventDefault(); } 
		return false;
	};
	
	/*--- on mouse move ---*/
	
	function mousemove_handler(e) {
		if(endScratch)
			return;
		
		if (!mouseDown) { return true; }

		var local = getLocalCoords(c, e);

		scratchLine(canvas.draw, local.x, local.y, false);
		recompositeCanvases();

		if (e.cancelable) { e.preventDefault(); } 
		return false;
	};

	/*--- on mouse up ----*/
	
	function mouseup_handler(e) {
		if (mouseDown) {
			mouseDown = false;
			if (e.cancelable) { e.preventDefault(); } 
			return false;
		}

		return true;
	};

	c.addEventListener('mousedown', mousedown_handler, false);
	c.addEventListener('touchstart', mousedown_handler, false);

	window.addEventListener('mousemove', mousemove_handler, false);
	window.addEventListener('touchmove', mousemove_handler, false);

	window.addEventListener('mouseup', mouseup_handler, false);
	window.addEventListener('touchend', mouseup_handler, false);
}

function recompositeCanvases(){
	
	var main = document.getElementById('scratch');
	var tempctx = canvas.temp.getContext('2d');
	var mainctx = main.getContext('2d');

	// Step 1: clear the temp
	canvas.temp.width = canvas.temp.width; // resizing clears

	// Step 2: stamp the draw on the temp (source-over)
	tempctx.drawImage(canvas.draw, 0, 0,canvas.temp.width, canvas.temp.height);

	// Step 3: stamp the background on the temp (!! source-atop mode !!)
	tempctx.globalCompositeOperation = 'source-atop';
	tempctx.drawImage(image.back, 0, 0,canvas.temp.width, canvas.temp.height);

	// Step 4: stamp the foreground on the display canvas (source-over)
	mainctx.drawImage(image.front, 0, 0,canvas.temp.width, canvas.temp.height);
	

	// Step 5: stamp the temp on the display canvas (source-over)
	mainctx.drawImage(canvas.temp, 0, 0);
	imageData = tempctx.getImageData(0, 0, canvas.temp.width, canvas.temp.height);
	var total=0;
	for(i=3;i<=imageData.data.length;i=i+4)
	{
		if(imageData.data[i]!=0)
		{
			total++;
		}
	}
	var perc=100*4*total/imageData.data.length;
	if(perc>=70)
	{
		if(!endScratch)
			endScratchAuto();
	}
}

function checkAutoScrath(){
	timeoutAutoScratch = setTimeout(function(){
		if(!endScratch){
			endScratch = true;

        	setTimeout(function(){
        		endScratchAuto();
        	},100);
		}
	},7000);
}

function checkScratchTouch(){
	timeoutScratchTouch = setTimeout(function(){
		if(!endScratch){
			endScratch = true;
        	setTimeout(function(){
        		endScratchAuto();
        	},100);
		}
	},5000);
}

function endScratchAuto(){
	endScratch = true;
	
	for(var i=0;i<=canvasWidth+line_width;i++){
		scratchLine(canvas.draw, i, 0, true);
		recompositeCanvases();
		scratchLine(canvas.draw, i, canvasHeight, false);
		recompositeCanvases();
		i += line_width/2;
	}
	
	transform2d('text1',1,0,0,0,false,true,0.5,'linear');
    transform2d('text2',1,0,0,0,true,false,0.5,'linear');
    
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
}

function hideMap(){
	transform2d('slide',1,0,0,0,false,false,0.5,'ease-in-out');
	
	transform2d('replay',1,0,0,0,false,true,0.5,'linear');
    transform2d('direction',1,0,0,0,false,true,0.2,'linear');
    transform2d('findmap',1,0,0,0,true,false,0.2,'linear');
}
/*--- scratch -------------------------------------------------------------------*/


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
                '<img class="map-image" src="img/xbox.jpg"/>'+
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
function clearTransform2d(id){
    $('#'+id).css('-webkit-transition','');
    $('#'+id).css('-moz-transition','');
    $('#'+id).css('-ms-transition','');
    $('#'+id).css('transition','');
    $('#'+id).css('transform-origin','');
    $('#'+id).css('-webkit-transform-origin','');
    $('#'+id).css('-moz-transform-origin','');
    $('#'+id).css('-ms-transform-origin','');
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

