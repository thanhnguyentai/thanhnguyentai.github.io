
$(document).ready(function(){
    init();
});

function init(){
	function supports3d() {
		// borrowed from modernizr
		var div = document.createElement('div'),
			ret = false,
			properties = ['perspectiveProperty', 'WebkitPerspective'];
		for (var i = properties.length - 1; i >= 0; i--){
			ret = ret ? ret : div.style[properties[i]] != undefined;
		};
        
        // webkit has 3d transforms disabled for chrome, though
        //   it works fine in safari on leopard and snow leopard
        // as a result, it 'recognizes' the syntax and throws a false positive
        // thus we must do a more thorough check:
        if (ret){
            var st = document.createElement('style');
            // webkit allows this media query to succeed only if the feature is enabled.    
            // "@media (transform-3d),(-o-transform-3d),(-moz-transform-3d),(-ms-transform-3d),(-webkit-transform-3d),(modernizr){#modernizr{height:3px}}"
            st.textContent = '@media (-webkit-transform-3d){#test3d{height:3px}}';
            document.getElementsByTagName('head')[0].appendChild(st);
            div.id = 'test3d';
            document.body.appendChild(div);
            
            ret = div.offsetHeight === 3;
            
            st.parentNode.removeChild(st);
            div.parentNode.removeChild(div);
        }
        return ret;
	}
	
	isSupport3d = supports3d();	  
	  
	preload('img/arrow.png');
    preload('img/logo.png');
    preload('img/text.png');
    preload('img/cover_all.png');
    preload('img/scratch_new.png');
    preload('img/hand.png');
    
    prepareAnimation();
}

var loaded = 0;
var numberImage = 6;


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
    enableTransform2d('arrow',1,0,0,0,0.5,'linear');
    
    enableTransform2d('scratch',1,0,0,0,1,'ease');
    enableTransform2d('scratch_container',1,0,0,0,0.5,'ease');
    enableTransform2d('hand',1,0,0,0,0.5,'ease');
}

function start(){
    console.log('part 0');
    
    transform2d('minimize',1,0,0,0,true,false,0.5,'ease');
    //function transform2d(id,scale,rotate,translatex,translatey,isfadein,isfadeout,time,timeFunc,centerX,centerY)
    if(isSupport3d){
    	setTimeout(function(){
        	transform2d('hand',1,0,0,0,true,false,0.5,'ease');
        },500);
        setTimeout(function(){
        	transform2d('hand',1,0,160,-9,false,false,1,'ease');
        	$('#scratch').css('width','120px');
        },1000);
        setTimeout(function(){
            transform2d('hand',1,0,100,9,false,false,0.2,'ease');
        },2000);

        setTimeout(function(){
        	$('#scratch').css('width','0px');    	
            transform2d('hand',1,0,320,-20,false,false,1,'ease');
        },2200);
    }
    else{
    	setTimeout(function(){
        	$('#hand').css('opacity',1);
        },500);
        setTimeout(function(){
        	$('#hand').addClass('handframe-animation');
        	$('#scratch').addClass('scratch-animation');
        },1000);
    }
    
    setTimeout(function(){
        //console.log('part 3');
    	//transform2d('scratch_container',1,0,0,0,false,true,0.5,'ease');
    	$('#scratch_container').css('opacity',0);
    	//transform2d('scratch',1,0,0,0,false,true,0.5,'ease');
    	//transform2d('hand',1,0,320,0,false,true,0.1,'ease');
    },3500);
    
    setTimeout(function(){
    	$('#arrow').css('opacity',1);
    	setTimeout(function(){
    		$('#arrow').addClass('arrow-animation');
    		/*
        	transform2d('arrow',1,0,10,0,true,false,0.25,'ease-in-out');
        	setTimeout(function(){
        		transform2d('arrow',1,0,0,0,true,false,0.25,'ease-in-out');
        	},250);
        	setTimeout(function(){
        		transform2d('arrow',1,0,10,0,true,false,0.25,'ease-in-out');
        	},500);
        	setTimeout(function(){
        		transform2d('arrow',1,0,0,0,true,false,0.25,'ease-in-out');
        	},750);
        	*/
        },500);
    },4500);
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