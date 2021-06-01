BindSwipeGesture = function(obj){
	window._swiperight = document.createEvent("Event");
	window._swipeleft = document.createEvent("Event");
	//window._swipedown = document.createEvent("Event");
	//window._swipeup = document.createEvent("Event");
	window._touchdragstart = document.createEvent("Event");
	window._touchdragmove = document.createEvent("Event");
	window._touchdragend = document.createEvent("Event");
	//window._animationready = document.createEvent("Event");
	//window._animationnotready = document.createEvent("Event");

	window._swiperight.initEvent("swiperight", true, false);
	window._swipeleft.initEvent("swipeleft", true, false);
	//window._swipedown.initEvent("swipedown", true, false);
	//window._swipeup.initEvent("swipeup", true, false);
	window._touchdragend.initEvent("touchdragend", true, false);
	window._touchdragstart.initEvent("touchdragstart", true, false);
	window._touchdragmove.initEvent("touchdragmove", true, false);
	//window._animationready.initEvent("animationready");
	//window._animationnotready.initEvent("animationnotready");

	var _touch = {
        "start": {},
        "end": {}
    };
    var _thr = 170;
    var _thr_hr = 50;
    var _thr_vr = 170;
    var _dist = function(_start,_end){
        if(_start && _end){
            return Math.sqrt( Math.pow((_start.left-_end.left),2) + Math.pow((_start.top-_end.top),2) );
        }
        return 0;
    };
	
    var _endTouch = function(e){		
    	if(_touch.start == undefined || _touch.end == undefined){
    		return;
    	}
    	try{
    		try{
    			try{
					if(_touch.start.left - _touch.end.left > _thr_hr){
                        if(_touch.start.left < 848){
							_touch.start = undefined;
							_touch.end = undefined;
                            obj.dispatchEvent(_swipeleft);    
                        }
			        	return;
			        }else if(_touch.start.left - _touch.end.left < -_thr_hr){
                        if(_touch.start.left > 21){
							_touch.start = undefined;
							_touch.end = undefined;
                            obj.dispatchEvent(_swiperight);   
                        }
			        	return;
			        }
    			}catch(e){
    				console.log("error in p1.1");
    				console.log("start: "+_touch.start.left);
    				console.log("end: "+_touch.end.left);
    			}
    		}catch(e){
    			console.log("error in part1");
    		}
    		try{
				if(_dist(_touch.start,_touch.end) > (_thr + 175)){
		            obj.dispatchEvent(_touchdragend);
		        }
		        _touch.start = undefined;
		        _touch.end = undefined;
    		}catch(e){
    			console.log("error in part2");
    		}
    	}catch(e){
    		console.log("error in EndTouch");
    	}
    };
    var _moveTouch = function(e){
		//console.log('touch move');
    	if(e.touches.length>1){
			return;
		}
    	try{
			var _isTouchStart = false;
	    	if(_touch.end == undefined){
	    		_isTouchStart = true;
	    	}
	        _touch.end = {};
	        _touch.end.top = e.touches[0].screenY;
	        _touch.end.left = e.touches[0].screenX;
			if(_dist(_touch.start,_touch.end) >= _thr){
				if(_isTouchStart){
					_touchdragstart.screenX = e.touches[0].screenX;
			    	_touchdragstart.screenY = e.touches[0].screenY;
			    	obj.dispatchEvent(_touchdragstart);
				}else{
					_touchdragmove.screenX = e.touches[0].screenX;
			    	_touchdragmove.screenY = e.touches[0].screenY;
			    	obj.dispatchEvent(window._touchdragmove);
				}
	        }else{
		        _touch.end = undefined;
	        }
    	}catch(e){
    		console.log("error in MoveTouch");
    	}
    }
    var _startTouch = function(e){
    	try{
			_touch.start = {};
			if(e.touches.length>1){
				return;
			}
	        _touch.start.top = e.touches[0].screenY;
	        _touch.start.left = e.touches[0].screenX;
    	}catch(e){
    		console.log("error in TouchStart");
    	}
        
    }
    obj.addEventListener('touchstart', _startTouch);
    obj.addEventListener('touchmove', _moveTouch)
    obj.addEventListener('touchend', _endTouch);
    obj.addEventListener('touchcancel', _endTouch);      
}

