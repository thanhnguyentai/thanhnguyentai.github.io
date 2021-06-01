PhluantAds = {
	init: function(){
		this.enableAnimation();		
		this.preload();
	},
	
	enableAnimation: function(){
		/*
		 * Banner
		 */
		AnimationBase.enableTransform2d('banner',1,0,0,0,1,'linear');
		AnimationBase.enableTransform2d('text_header',1,0,0,0,0.5,'linear');
		AnimationBase.enableTransform2d('text_footer',1,0,0,0,0.5,'linear');
		AnimationBase.enableTransform2d('logo',1,0,0,0,0.5,'linear');
		AnimationBase.enableTransform2d('frame1_text1',1,0,0,0,0.5,'linear');
		AnimationBase.enableTransform2d('frame1_text2',1,0,0,0,0.5,'linear');
		
		AnimationBase.enableTransform2d('frame2_text1',1,0,0,0,0.5,'linear');
		AnimationBase.enableTransform2d('frame2_text2',1,0,0,0,0.5,'linear');
		AnimationBase.enableTransform2d('frame2_text3',1,0,0,0,0.5,'linear');
		AnimationBase.enableTransform2d('button',1,0,0,0,0.5,'linear');
	},
	
	
	preload: function(){
		var arrImages = new Array();
		
		arrImages.push('img/header_text.png');
		arrImages.push('img/logo.png');
		arrImages.push('img/number.png');
		arrImages.push('img/roar.png');
		arrImages.push('img/swing_stand.png');
		arrImages.push('img/swing_rotate.png');
		arrImages.push('img/walk.png');
		arrImages.push('img/walk_swing.png');

		var imageLoaded = 0;
		var self = this;

		this.config = {
			width: 183,
			height: 141,
			newWidth: 61,
			newHeight: 47,
			x: 250,
			y: 10
		};

		for(var i=0;i<arrImages.length;i++){
			var img = new Image();
			img.onload = function(){
				if(this.src.indexOf('roar.png') > 0){
					var canvas = document.createElement('canvas');
					canvas.width = this.width;
					canvas.height = this.height;
					canvas.getContext('2d').drawImage(this, 0, 0);
					self.roar = canvas;
				}
				imageLoaded++;
				
				if(imageLoaded == arrImages.length){
					self.start();
				}
			}
			img.src = arrImages[i];
			if(arrImages[i].indexOf('roar.png') > 0){
				this.roar = img;
				this.roar_frame = 0;
				this.roar_config = new Array();
				this.roar_config.push(0);
				this.roar_config.push(183);
				this.roar_config.push(366);
			}
			else if(arrImages[i].indexOf('swing_stand.png') > 0){
				this.swing = img;
				this.swing_frame = 0;
				this.swing_config = new Array();
				this.swing_config.push(0);
				this.swing_config.push(183);
				this.swing_config.push(366);
				this.swing_config.push(549);
				this.swing_config.push(732);
			}
			else if(arrImages[i].indexOf('swing_rotate.png') > 0){
				this.swing_rotate = img;
				this.swing_rotate_frame = 0;
				this.swing_rotate_config = new Array();
				this.swing_rotate_config.push(0);
				this.swing_rotate_config.push(183);
				this.swing_rotate_config.push(366);
				this.swing_rotate_config.push(549);
				this.swing_rotate_config.push(732);
			}
			else if(arrImages[i].indexOf('walk.png') > 0){
				this.walk = img;
				this.walk_frame = 0;
				this.walk_config = new Array();
				this.walk_config.push(0);
				this.walk_config.push(183);
				this.walk_config.push(366);
			}
			else if(arrImages[i].indexOf('walk_swing.png') > 0){
				this.walk_swing = img;
				this.walk_swing_frame = 0;
				this.walk_swing_config = new Array();
				this.walk_swing_config.push(0);
				this.walk_swing_config.push(183);
				this.walk_swing_config.push(366);
			}
		}

		this.canvas = document.getElementById('canvas');
		this.ctx = document.getElementById('canvas').getContext('2d');
	},

	drawWalk: function(){
		var self = this;
		if(this.config.x < 430){
			setTimeout(function(){
				self.ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
				self.ctx.drawImage(self.walk, self.walk_frame*self.config.width, 0, self.config.width, self.config.height, self.config.x, self.config.y, self.config.width/1.8, self.config.height/1.8);
				self.ctx.stroke();
				
				if(!self.walkDirect)
					self.walkDirect = 0;
				if(self.walkDirect == 0)
					self.walk_frame++;
				else
					self.walk_frame--;	
				self.config.x +=8;
				if(self.walk_frame >= self.walk_config.length){
					self.walk_frame = self.walk_config.length - 2;
					self.walkDirect = 1;
				}
				if(self.walk_frame < 0){
					self.walk_frame = 1;
					self.walkDirect = 0;	
				}

				self.drawWalk();	

			}, 1000/20);
		}
		else{
			this.drawSwing();
		}
	},

	drawSwing: function(){
		var self = this;
		setTimeout(function(){
			self.ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
			self.ctx.drawImage(self.swing, self.swing_frame*self.config.width, 0, self.config.width, self.config.height, self.config.x, self.config.y, self.config.width/1.8, self.config.height/1.8);
			self.ctx.stroke();
			
			if(!self.swingDirect)
				self.swingDirect = 0;
			if(self.swingDirect == 0)	
				self.swing_frame++;
			else 	
				self.swing_frame--;
			if(self.swing_frame >= self.swing_config.length){
				self.swing_frame = self.swing_config.length - 2;
				self.swingDirect = 1;
			}
			if(self.swing_frame < 0){
				self.swing_frame = 1;
				self.swingDirect = 0;
			}

			if(self.countDrawSwing == undefined){
				self.countDrawSwing = 0;
			}
			else{
				self.countDrawSwing++;
			}
			if(self.countDrawSwing>=25){
				self.drawWalkSwing();
			}
			else{
				self.drawSwing();
			}
		}, 1000/20);
	},

	drawWalkSwing: function(){
		var self = this;
		setTimeout(function(){
			self.ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
			self.ctx.drawImage(self.walk_swing, self.walk_swing_frame*self.config.width, 0, self.config.width, self.config.height, self.config.x, self.config.y, self.config.width/1.8, self.config.height/1.8);
			self.ctx.stroke();
			
			if(!self.walkSwingDirect)
				self.walkSwingDirect = 0;

			if(self.walkSwingDirect == 0){
				self.walk_swing_frame++;
			}
			else{
				self.walk_swing_frame--;
			}

			self.config.x += 4;
			if(self.walk_swing_frame >= self.walk_swing_config.length){	
				self.walk_swing_frame = self.walk_swing_config.length - 2;
				self.walkSwingDirect = 1;
			}
			if(self.walk_swing_frame < 0){	
				self.walk_swing_frame = 1;
				self.walkSwingDirect = 0;
			}

			if(self.config.x >= 550){
				self.drawSwingRotate();
			}	
			else{
				self.drawWalkSwing();
			}
		}, 1000/20);
	},

	drawSwingRotate: function(){
		var self = this;
		setTimeout(function(){
			self.ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
			self.ctx.drawImage(self.swing_rotate, self.swing_rotate_frame*self.config.width, 0, self.config.width, self.config.height, self.config.x, self.config.y, self.config.width/1.8, self.config.height/1.8);
			self.ctx.stroke();
			
			if(!self.swingRotateDirect)
				self.swingRotateDirect = 0;
			if(self.swingRotateDirect == 0)	
				self.swing_rotate_frame++;
			else	
				self.swing_rotate_frame --;
			if(self.swing_rotate_frame >= self.swing_rotate_config.length){
				self.swing_rotate_frame = self.swing_rotate_config.length - 2;
				self.swingRotateDirect = 1;
			}
			if(self.swing_rotate_frame < 0){
				self.swing_rotate_frame = 1;
				self.swingRotateDirect = 0;
			}

			if(self.countSwingRotate == undefined){
				self.countSwingRotate = 0;
				self.frameText1In();
			}
			else{
				self.countSwingRotate++;
			}
			if(self.countSwingRotate>=30){
				self.walk_frame = 1;
				self.drawWalk2();			
			}
			else{
				self.drawSwingRotate();
			}
		}, 1000/20);
	},

	drawWalk2: function(){
		var self = this;
		if(this.config.x < 850){
			setTimeout(function(){
				self.ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
				self.ctx.drawImage(self.walk, self.walk_frame*self.config.width, 0, self.config.width, self.config.height, self.config.x, self.config.y, self.config.width/1.8, self.config.height/1.8);
				self.ctx.stroke();
				
				if(!self.walkDirect2)
					self.walkDirect2 = 0;

				if(self.walkDirect2 == 0)
					self.walk_frame++;
				else
					self.walk_frame--;
					
				self.config.x +=8;
				if(self.walk_frame >= self.walk_config.length){
					self.walk_frame = self.walk_config.length - 2;
					self.walkDirect2 = 1;
				}

				if(self.walk_frame < 0){
					self.walk_frame = 1;
					self.walkDirect2 = 0;
				}

				self.drawWalk2();	

			}, 1000/20);
		}
		else{
			self.frameText1Out();
		}
	},

	drawWalkInvert: function(){
		var self = this;
		if(this.config.x <= 568){
			setTimeout(function(){
				self.ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
				self.ctx.drawImage(self.walk, self.walk_frame*self.config.width, 0, self.config.width, self.config.height, self.config.x, self.config.y-13, self.config.newWidth, self.config.newHeight);
				self.ctx.stroke();
				
				if(!self.walkInvertDirect)
					self.walkInvertDirect = 0;

				if(self.walkInvertDirect == 0)	
					self.walk_frame++;
				else
					self.walk_frame--;	

				self.config.x +=8;
				if(self.walk_frame >= self.walk_config.length){
					self.walk_frame = self.walk_config.length - 2;
					self.walkInvertDirect = 1;
				}
				if(self.walk_frame < 0){
					self.walk_frame = 1;
					self.walkInvertDirect = 0;
				}

				self.drawWalkInvert();	

			}, 1000/20);
		}
		else{
			this.drawRoar();
		}
	},

	drawRoar: function(){
		var self = this;
		setTimeout(function(){
			self.ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
			self.ctx.drawImage(self.roar, self.roar_frame*self.config.width, 0, self.config.width, self.config.height, self.config.x, self.config.y-13, self.config.newWidth, self.config.newHeight);
			self.ctx.stroke();
			
			if(!self.roarDirect)
				self.roarDirect = 0;

			if(self.roarDirect == 0)	
				self.roar_frame++;
			else
				self.roar_frame--;	

			if(self.roar_frame >= self.roar_config.length){
				self.roar_frame = self.roar_config.length - 2;
				self.roarDirect = 1;
			}
			if(self.roar_frame < 0){
				self.roar_frame = 1;
				self.roarDirect = 0;
			}

			if(self.countRoar == undefined){
				self.countRoar = 0;
			}
			else{
				self.countRoar++;
			}
			if(self.countRoar>=10 && self.roar_frame == 0){
				return;
			}
			else{
				self.drawRoar();
			}
		}, 1000/20);
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
		}, 1500);
		setTimeout(function(){
			self.drawWalk();
		}, 2000);
	},

	frameText1In: function(){
		AnimationBase.transform2d('frame1_text2',1,0,0,10,true,false,0.5,'linear');
		AnimationBase.transform2d('frame1_text3',1,0,0,10,true,false,0.5,'linear');

		AnimationBase.transform2d('text_footer',1,0,0,10,false,true,0.5,'linear');
	},

	frameText1Out: function(){
		AnimationBase.transform2d('frame1_text1',1,0,0,25,false,true,0.5,'linear');
		AnimationBase.transform2d('frame1_text2',1,0,0,25,false,true,0.5,'linear');
		setTimeout(function(){
			AnimationBase.transform2d('frame1_text3',1,0,0,25,false,true,0.5,'linear');
		}, 500);

		var self = this;
		setTimeout(function(){
			self.frameText2In();
		}, 1500);
	},

	frameText2In: function(){
		AnimationBase.transform2d('frame2_text1',1,0,0,10,true,false,0.5,'linear');
		AnimationBase.transform2d('frame2_text2',1,0,0,10,true,false,0.5,'linear');
		setTimeout(function(){
			AnimationBase.transform2d('frame2_text3',1,0,0,10,true,false,0.5,'linear');
		}, 500);
		var self = this;
		setTimeout(function(){
			AnimationBase.transform2d('button',1,0,148,0,true,false,0.5,'linear');
			self.config.x = 450;
			setTimeout(function(){
				self.drawWalkInvert();
			}, 1000);
		}, 1000);
	}

};


$(document).ready(function(){
	PhluantAds.init();
});

