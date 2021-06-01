PhluantAds = {
	init: function(){
		this.enableAnimation();		
		this.preload();
	},
	
	enableAnimation: function(){
		AnimationBase.enableTransform2d('banner',1,0,0,0,1,'linear');
		AnimationBase.enableTransform2d('text_header',1,0,0,0,0.5,'linear');
		AnimationBase.enableTransform2d('text_footer',1,0,0,0,0.5,'linear');
		AnimationBase.enableTransform2d('logo',1,0,0,0,0.5,'linear');
		AnimationBase.enableTransform2d('frame1_text1',1,0,0,0,0.5,'linear');
		AnimationBase.enableTransform2d('frame1_text2',1,0,0,0,0.5,'linear');
		AnimationBase.enableTransform2d('frame1_text3',1,0,0,0,0.5,'linear');
		AnimationBase.enableTransform2d('frame1_text4',1,0,0,0,0.5,'linear');
		AnimationBase.enableTransform2d('frame1_text5',1,0,0,0,0.5,'linear');
		AnimationBase.enableTransform2d('frame2_text1',1,0,0,0,0.5,'linear');
		AnimationBase.enableTransform2d('frame2_text2',1,0,0,0,0.5,'linear');
		AnimationBase.enableTransform2d('frame2_text3',1,0,0,0,0.5,'linear');
		AnimationBase.enableTransform2d('button',1,0,0,0,0.5,'linear');
		AnimationBase.enableTransform2d('line',1,0,0,0,1,'linear');
	},
	
	
	preload: function(){
		var arrImages = new Array();
		
		arrImages.push('img/logo.png');
		arrImages.push('img/header_text.png');
		arrImages.push('img/number.png');
		arrImages.push('img/fly.png');
		arrImages.push('img/fly_start.png');
		arrImages.push('img/line.png');
		arrImages.push('img/start0.png');
		arrImages.push('img/start1.png');
		arrImages.push('img/start2.png');
		arrImages.push('img/start3.png');
		arrImages.push('img/start4.png');

		var imageLoaded = 0;
		var self = this;

		this.config = {
			width: 208,
			height: 235,			
			x: 270,
			y: 130
		};

		for(var i=0;i<arrImages.length;i++){
			var img = new Image();
			img.onload = function(){
				if(this.src.indexOf('start0.png') > 0){
					var canvas = document.createElement('canvas');
					canvas.width = this.width;
					canvas.height = this.height;
					canvas.getContext('2d').drawImage(this, 0, 0);
					self.start0 = canvas;
				}

				if(this.src.indexOf('start1.png') > 0){
					var canvas = document.createElement('canvas');
					canvas.width = this.width;
					canvas.height = this.height;
					canvas.getContext('2d').drawImage(this, 0, 0);
					self.start1 = canvas;
					self.start1_frame = 0;
					self.start1_frame_max = 2;
				}

				if(this.src.indexOf('start2.png') > 0){
					var canvas = document.createElement('canvas');
					canvas.width = this.width;
					canvas.height = this.height;
					canvas.getContext('2d').drawImage(this, 0, 0);
					self.start2 = canvas;
					self.start2_frame = 0;
					self.start2_frame_max = 2;
				}

				if(this.src.indexOf('start3.png') > 0){
					var canvas = document.createElement('canvas');
					canvas.width = this.width;
					canvas.height = this.height;
					canvas.getContext('2d').drawImage(this, 0, 0);
					self.start3 = canvas;
					self.start3_frame = 0;
					self.start3_frame_max = 3;
				}

				if(this.src.indexOf('start4.png') > 0){
					var canvas = document.createElement('canvas');
					canvas.width = this.width;
					canvas.height = this.height;
					canvas.getContext('2d').drawImage(this, 0, 0);
					self.start4 = canvas;
					self.start4_frame = 0;
					self.start4_frame_max = 3;
				}

				imageLoaded++;
				
				if(imageLoaded == arrImages.length){
					self.start();
				}
			}
			img.src = arrImages[i];
		}

		this.canvas = document.getElementById('canvas');
		this.ctx = document.getElementById('canvas').getContext('2d');
	},

	drawRotate: function(){
		var self = this;
		setTimeout(function(){
			if(self.arcRotate == undefined){
				self.arcRotate = 0;
			}
			else{
				self.arcRotate -= 5;
			}
			if(self.arcRotate < -90){
				self.drawLine();
				return;
			}
			self.ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
			self.ctx.save();
			self.ctx.translate(self.config.x+self.config.width/2,self.config.y+self.config.height/2);
			self.ctx.rotate(self.arcRotate*Math.PI/180);
			self.ctx.drawImage(self.start0, 0, 0, self.config.width, self.config.height, -self.config.width/2, -self.config.height/2, self.config.width, self.config.height);
			self.ctx.stroke();
			self.ctx.restore();

			self.drawRotate();	

		}, 1000/20);
	},

	drawLine: function(){
		var self = this;
		$('#line').css('width','230px');
		setTimeout(function(){
			self.drawTopEdge1();
		}, 1000);
	},

	drawTopEdge1: function(){
		var self = this;
		setTimeout(function(){
			self.ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
			self.ctx.save();
			self.ctx.translate(self.config.x+self.config.width/2,self.config.y+self.config.height/2);
			self.ctx.drawImage(self.start1, self.start1_frame*self.config.height, 0, self.config.height, self.config.width, -self.config.height/2, -self.config.width/2, self.config.height, self.config.width);
			self.ctx.stroke();
			self.ctx.restore();

			self.start1_frame++;
			if(self.start1_frame > self.start1_frame_max){
				self.drawBottomEdge1();
				return;
			}

			self.drawTopEdge1();	

		}, 1000/4);
	},

	drawTopEdge2: function(){
		var self = this;
		setTimeout(function(){
			self.ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
			self.ctx.save();
			self.ctx.translate(self.config.x+self.config.width/2,self.config.y+self.config.height/2);
			self.ctx.drawImage(self.start3, self.start3_frame*self.config.height, 0, self.config.height, self.config.width, -self.config.height/2, -self.config.width/2, self.config.height, self.config.width);
			self.ctx.stroke();
			self.ctx.restore();

			self.start3_frame++;
			if(self.start3_frame > self.start3_frame_max){
				self.drawBottomEdge2();
				return;
			}

			self.drawTopEdge2();	

		}, 1000/5);
	},

	drawBottomEdge1: function(){
		var self = this;
		setTimeout(function(){
			self.ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
			self.ctx.save();
			self.ctx.translate(self.config.x+self.config.width/2,self.config.y+self.config.height/2);
			self.ctx.drawImage(self.start2, self.start2_frame*self.config.height, 0, self.config.height, self.config.width, -self.config.height/2, -self.config.width/2, self.config.height, self.config.width);
			self.ctx.stroke();
			self.ctx.restore();

			self.start2_frame++;
			if(self.start2_frame > self.start2_frame_max){
				self.drawTopEdge2();
				return;
			}

			self.drawBottomEdge1();	

		}, 1000/4);
	},

	drawBottomEdge2: function(){
		var self = this;
		setTimeout(function(){
			self.ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
			self.ctx.save();
			self.ctx.translate(self.config.x+self.config.width/2,self.config.y+self.config.height/2);
			self.ctx.drawImage(self.start4, self.start4_frame*self.config.height, 0, self.config.height, self.config.width, -self.config.height/2, -self.config.width/2, self.config.height, self.config.width);
			self.ctx.stroke();
			self.ctx.restore();

			self.start4_frame++;
			if(self.start4_frame > self.start4_frame_max){
				setTimeout(function(){
					self.startFly();
				}, 500);
				return;
			}

			self.drawBottomEdge2();	

		}, 1000/5);
	},

	startFly: function(){
		$('#line').css('display','none');
		this.ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
		this.ctx.stroke();
		this.drawFlyStart();
	},

	drawFlyStart: function(){
		var self = this;
		var path = "M258,178c-17,6-152-11.608-158.765-24.009";
			firstWalkerObj = $('#flyStart')[0],
			walkers = [];		
		
		// handles whatever moves along the path
		function AnimateWalker(walker){
			this.pathAnimator = new PathAnimator( path );
			this.walker = walker;
			this.reverse = false;
			this.speed = 1;
			this.easing = '';
			this.startOffset = null;
			this.color = 'deeppink'; // visually separate different walkers easily
		}

		AnimateWalker.prototype = {
			start : function(){
				//this.walker.style.cssText = "";
				this.startOffset = (this.reverse || this.speed < 0) ? 100 : 0; // if in reversed mode, then animation should start from the end, I.E 100%
				this.pathAnimator.context = this; // just a hack to pass the context of every Walker inside it's pathAnimator
				this.pathAnimator.start( this.speed, this.step, this.reverse, this.startOffset, this.finish, this.easing);
			},

			// Execute every "frame"
			step : function(point, angle){
				this.walker.style.cssText = "top:" + point.y + "px;opacity:1;" + 
											"left:" + point.x + "px;" + 
											"transform:rotate(" + angle + "deg);" +
											"-webkit-transform:rotate(" +  angle + "deg);" +
											"color:" + this.color;
			},

			// Restart animation once it was finished
			finish : function(){
				this.walker.style.cssText = "opacity:0";
				self.drawFlyOut();
			},

			// Resume animation from the last completed percentage (also updates the animation with new settings' values)
			resume : function(){
				this.pathAnimator.start( this.speed, this.step, this.reverse, this.pathAnimator.percent, this.finish, this.easing);
			}
		}

		function generateWalker(walkerObj){
			var newAnimatedWalker = new AnimateWalker( walkerObj );
			walkers.push(newAnimatedWalker);
			return newAnimatedWalker;
		}

		generateWalker(firstWalkerObj).start();
	},

	drawFlyOut: function(){
		var self = this;
		var path = "M99.235,153.991C-137.467-90.112,300.798-79.373,217,78,M217,78C91.981,181.563,234.83-235.896,580-161";
			firstWalkerObj = $('#flyOut')[0],
			walkers = [];
		var scale = 1;	
		
		// handles whatever moves along the path
		function AnimateWalker(walker){
			this.pathAnimator = new PathAnimator( path );
			this.walker = walker;
			this.reverse = false;
			this.speed = 2;
			this.easing = '';
			this.startOffset = null;
			this.color = 'deeppink'; // visually separate different walkers easily
		}

		AnimateWalker.prototype = {
			start : function(){
				//this.walker.style.cssText = "";
				this.startOffset = (this.reverse || this.speed < 0) ? 100 : 0; // if in reversed mode, then animation should start from the end, I.E 100%
				this.pathAnimator.context = this; // just a hack to pass the context of every Walker inside it's pathAnimator
				this.pathAnimator.start( this.speed, this.step, this.reverse, this.startOffset, this.finish, this.easing);
			},

			// Execute every "frame"
			step : function(point, angle){
				scale = scale/1.01;
				this.walker.style.cssText = "top:" + point.y + "px;opacity:1;" + 
											"left:" + point.x + "px;" + 
											"transform:rotate(" + angle + "deg) scale("+scale+");" +
											"-webkit-transform:rotate(" +  angle + "deg) scale("+scale+");" +
											"color:" + this.color;
			},

			// Restart animation once it was finished
			finish : function(){
				self.frameText1Out();
			},

			// Resume animation from the last completed percentage (also updates the animation with new settings' values)
			resume : function(){
				this.pathAnimator.start( this.speed, this.step, this.reverse, this.pathAnimator.percent, this.finish, this.easing);
			}
		}

		function generateWalker(walkerObj){
			var newAnimatedWalker = new AnimateWalker( walkerObj );
			walkers.push(newAnimatedWalker);
			return newAnimatedWalker;
		}

		generateWalker(firstWalkerObj).start();

	},

	drawFlyIn: function(){
		var self = this;
		var path = "M509-194c-64.753,38.855-139.107,462.045,5,340,M514,146c36.094-169.751-192,64.147-370,94";
			firstWalkerObj = $('#flyEnd')[0],
			walkers = [];
		var scale = 1;	
		
		// handles whatever moves along the path
		function AnimateWalker(walker){
			this.pathAnimator = new PathAnimator( path );
			this.walker = walker;
			this.reverse = false;
			this.speed = 2;
			this.easing = '';
			this.startOffset = null;
			this.color = 'deeppink'; // visually separate different walkers easily
		}

		AnimateWalker.prototype = {
			start : function(){
				//this.walker.style.cssText = "";
				this.startOffset = (this.reverse || this.speed < 0) ? 100 : 0; // if in reversed mode, then animation should start from the end, I.E 100%
				this.pathAnimator.context = this; // just a hack to pass the context of every Walker inside it's pathAnimator
				this.pathAnimator.start( this.speed, this.step, this.reverse, this.startOffset, this.finish, this.easing);
			},

			// Execute every "frame"
			step : function(point, angle){
				scale = scale/1.01;
				this.walker.style.cssText = "top:" + point.y + "px;" + 
											"left:" + point.x + "px;" + 
											"transform:rotate(" + angle + "deg) scale("+scale+");" +
											"-webkit-transform:rotate(" +  angle + "deg) scale("+scale+");" +
											"color:" + this.color;
			},

			// Restart animation once it was finished
			finish : function(){
				this.walker.style.cssText = "opacity: 0;";
			},

			// Resume animation from the last completed percentage (also updates the animation with new settings' values)
			resume : function(){
				this.pathAnimator.start( this.speed, this.step, this.reverse, this.pathAnimator.percent, this.finish, this.easing);
			}
		}

		function generateWalker(walkerObj){
			var newAnimatedWalker = new AnimateWalker( walkerObj );
			walkers.push(newAnimatedWalker);
			return newAnimatedWalker;
		}

		generateWalker(firstWalkerObj).start();
	},
	
	start: function(){
		var self = this;

		AnimationBuilt.fadeIn('banner',1);

		setTimeout(function(){
			AnimationBuilt.fadeIn('text_header',1);
			AnimationBuilt.fadeIn('text_footer',1);
			AnimationBuilt.fadeIn('logo',1);
		}, 500);

		setTimeout(function(){
			AnimationBuilt.fadeIn('frame1_text1',0.5);
			self.drawRotate();
			AnimationBuilt.fadeOut('text_footer',1);
		}, 1500);

		setTimeout(function(){
			//self.drawFlyStart();
			//AnimationBuilt.fadeOut('text_footer',1);
		}, 3000);
	},

	frameText1Out: function(){
		AnimationBase.transform2d('frame1_text1',1,0,0,25,false,true,0.5,'linear');
		var self = this;
		setTimeout(function(){
			self.frameText2In();
		}, 500);
	},

	frameText2In: function(){
		AnimationBase.transform2d('frame2_text1',1,0,0,10,true,false,0.5,'linear');
		setTimeout(function(){
			AnimationBase.transform2d('frame2_text2',1,0,0,10,true,false,0.5,'linear');
		}, 250);
		setTimeout(function(){
			AnimationBase.transform2d('frame2_text3',1,0,0,10,true,false,0.5,'linear');
		}, 500);

		var self = this;
		setTimeout(function(){
			AnimationBase.transform2d('button',1,0,0,0,true,false,0.5,'linear');
			self.drawFlyIn();
		}, 1000);
	}
};


$(document).ready(function(){
	PhluantAds.init();
});

