$.fn.draggable = function(options) {
	var obj = options.obj;
    var offset = null; 
    var orig; var pos; 
    var start = function(e) {
    	orig = e.originalEvent;  
        pos = $(this).position();  
        offset = {  
            x: orig.changedTouches[0].pageX - pos.left,  
            y: orig.changedTouches[0].pageY - pos.top  
        };
    };
    var moveMe = function(e) { 
        e.preventDefault();
        orig = e.originalEvent;
        var top = orig.changedTouches[0].pageY - offset.y;
        var left = orig.changedTouches[0].pageX - offset.x;
        $(this).css('-webkit-transform', 'translate3d('+left+'px, '+top+'px, 0)');
        obj.dragOffset = {
        	x: left,
        	y: top
        };
    };
    this.bind("touchstart", start);  
    this.bind("touchmove", moveMe);
};