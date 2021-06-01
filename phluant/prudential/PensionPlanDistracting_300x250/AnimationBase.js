AnimationBase = {
	/*
	 * ------------------------------------------------------------------------------------------------------
	 * 	LIBRARY PART
	 * ------------------------------------------------------------------------------------------------------
	 */
		
	/*
	 *  Enable css3 animation to an element by id
	 *  --------------------------------------------
	 *  id: id of element, required
	 *  scale init: original scale value, example: 1, required
	 *  rotate init: original rotate value, example: 0, required
	 *  centerX: transform origin by x, example: 50, required
	 *  centerY: transform origin by y, example: 50, required
	 *  time: duration time by second, example: 1, required
	 *  timeFunc: time function of css3 animation, example: linear, ease, required
	 */
	enableTransform2d: function(id,scaleInit,rotateInit,centerX,centerY,time,timeFunc){
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
	    
	    $('#'+id).css('-webkit-backface-visibility','hidden');
	},

	/*
	 * Make css3 animation to an element by id. Need enable animation before making animation
	 * ---------------------------------------------------------------------------------------
	 * id: id of element, required
	 * scale: scale value, required
	 * rotate: rotate value, required
	 * translatex: translate by x from original position, required
	 * translatey: translate by y from original position, required
	 * isfadein: this animation is fade in or not, required
	 * isfadeout: this animation is fade out or not, required
	 * timeFunc: time function of css3 animation, not required
	 * centerX: transform origin by x, not required but required when set centerY
	 * centerY: transform origin by y, not required but required when set centerX
	 */
	transform2d: function(id,scale,rotate,translatex,translatey,isfadein,isfadeout,time,timeFunc,centerX,centerY){
	    if(time != null && timeFunc){
	        $('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	        $('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	        $('#'+id).css('transition', time + 's ' + timeFunc);
	        $('#'+id).css('-ms-transition', time + 's ' + timeFunc);
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
	},
	
	changeTimeAnimation: function(id, time){
		$('#'+id).css('transition-duration',time+'s');
		$('#'+id).css('-webkit-transition-duration',time+'s');
		$('#'+id).css('-moz-transition-duration',time+'s');
		$('#'+id).css('-ms-transition-duration',time+'s');
	},
	
	/*
	 * Check the browser support css3 animation
	 */
	isSupportCSS3Animation: function() {
		var style = document.documentElement.style;

	    if (
	        style.webkitTransition !== undefined ||
	        style.MozTransition !== undefined ||
	        style.OTransition !== undefined ||
	        style.MsTransition !== undefined ||
	        style.transition !== undefined
	    )
	    {
	    	return true;
	    }
		
	    return false;
	},
	
	/*
	 * Get Animation End Event
	 */
	
	_animationEndName: null,
	getAnimationEndName: function(){
		if(this._animationEndName != null)
			return this._animationEndName;
		
		var ANIMATION_END_EVENT_NAMES = {
			'-ms-animation' : 'transitionend',
		    'animation': 'transitionend',
		    '-o-animation': 'oTransitionEnd otransitionend',
		    '-moz-animation': 'transitionend',
		    '-webkit-animation': 'webkitTransitionEnd'
		};

		var eventName,
		fakeEl = document.createElement('fakeelement');

		for (eventName in ANIMATION_END_EVENT_NAMES) {
			if (typeof(fakeEl.style[eventName]) !== 'undefined') {
				this._animationEndName = ANIMATION_END_EVENT_NAMES[eventName];
				return ANIMATION_END_EVENT_NAMES[eventName];
			}
		}
		return null;
	}
};