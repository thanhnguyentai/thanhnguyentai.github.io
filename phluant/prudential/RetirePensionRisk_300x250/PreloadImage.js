/*
	---------- How to use ----------
	var arr = new Array();
	arr.push('image1.png');
	arr.push('image2.png');
	
	var newPreloadImage = PreloadImage.create(arr, function(){});
	newPreloadImage.preload();
	
 */

PreloadImage = {
	// arrImage: array of images with links of them
	// callback: call back function after all images are loaded
	// return: an object
	create: function(arrImage, callback){
		if(arrImage.length > 0){
			return this._create(arrImage, callback);
		}
			
		return null;
	},
	
	_create: function(arrImage, callback){
		var preloadObj = function(arr, callback){
			this.numberImage = arr.length;
			this.callback = callback;
			this.imageLoaded = 0;
			
			var self = this;
			
			this._preloadCallback = function(){
				self.imageLoaded++;
				
				if(self.imageLoaded == self.numberImage){
					if(self.callback)
						self.callback();
				}
			};
			
			this._preload = function(src){
				var img = new Image();
				img.onload = function(){
					self._preloadCallback();
				}
				img.src = src;
			};
			
			this.preload = function(){
				for(var i=0;i<arrImage.length;i++){
					self._preload(arrImage[i]);
				}
			}
		}
		
		return new preloadObj(arrImage, callback);
	}
};