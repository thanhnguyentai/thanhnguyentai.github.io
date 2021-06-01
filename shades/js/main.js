var App = {
	loaded: 0,
	numberImage:  19,
	init: function () {
		var self = this;
		$(document).ready(function(){
			self.resize();
			
			self.preloadAllImages();
		});
		
		window.addEventListener('resize', function(){
			self.resize();
    	});
	},
	
	resize: function(){
		var height = $('#container').height();
		if(height < 488)
			height = 500;
		var windowHeight = $(window).height();
		if(windowHeight > height)
			$('#container').css('top',((windowHeight-height)/2)+'px');
		else
			$('#container').css('top','0px');
	},
	
	preloadAllImages: function(){
		var self = this;
		$("<img/>").attr("src","img/bg.png").bind('load error',function(){
			self.preload();
		});	
		$("<img/>").attr("src","img/bottom_text1.png").bind('load error',function(){
			self.preload();
		});
		$("<img/>").attr("src","img/bottom_text.png").bind('load error',function(){
			self.preload();
		});
		$("<img/>").attr("src","img/button_register.png").bind('load error',function(){
			self.preload();
		});
		$("<img/>").attr("src","img/button_shop.png").bind('load error',function(){
			self.preload();
		});
		$("<img/>").attr("src","img/logo.png").bind('load error',function(){
			self.preload();
		});
		$("<img/>").attr("src","img/step1_woman1.png").bind('load error',function(){
			self.preload();
		});
		$("<img/>").attr("src","img/step1_woman2.png").bind('load error',function(){
			self.preload();
		});
		$("<img/>").attr("src","img/step1_woman3.png").bind('load error',function(){
			self.preload();
		});
		$("<img/>").attr("src","img/step1_woman4.png").bind('load error',function(){
			self.preload();
		});
		$("<img/>").attr("src","img/step1_woman5.png").bind('load error',function(){
			self.preload();
		});
		$("<img/>").attr("src","img/step2_woman1.png").bind('load error',function(){
			self.preload();
		});
		$("<img/>").attr("src","img/step2_woman2.png").bind('load error',function(){
			self.preload();
		});
		$("<img/>").attr("src","img/step2_woman3.png").bind('load error',function(){
			self.preload();
		});
		$("<img/>").attr("src","img/step3_woman1.png").bind('load error',function(){
			self.preload();
		});
		$("<img/>").attr("src","img/step3_woman2.png").bind('load error',function(){
			self.preload();
		});
		$("<img/>").attr("src","img/step4_woman1.png").bind('load error',function(){
			self.preload();
		});
		$("<img/>").attr("src","img/step4_woman2.png").bind('load error',function(){
			self.preload();
		});
		$("<img/>").attr("src","img/step4_woman3.png").bind('load error',function(){
			self.preload();
		});
	},
	
	preload: function(){
		var self = this;
		this.loaded++;
		if(this.loaded == this.numberImage){
			setTimeout(function(){
				self.start();
            },1000);
		}
	},
	
	start: function(){
        var self = this;
        
		fadeInImgIE('bg',1);
		setTimeout(function(){
			fadeInImgIE('step1_1',1);
			fadeInImgIE('step1_2',1);
			fadeInImgIE('step1_3',1);
			fadeInImgIE('step1_4',1);
			fadeInImgIE('step1_5',1);
		},1500);
		
		setTimeout(function(){
			fadeInImgIE('logo',1);
		},3000);
		setTimeout(function(){
			fadeInImgIE('small-text',1);
		},4000);
		setTimeout(function(){
			fadeInImgIE('text_bottom1',1);
		},5000);
		
		setTimeout(function(){
			fadeInImgIE('menu_top',1);
			fadeInImgIE('bt_register',1);
			fadeInImgIE('bt_shop',1);
			fadeInImgIE('text_bottom2',1);
		},6000);
		
		setTimeout(function(){
			fadeOutImgIE('step1_1',1);
			fadeInImgIE('step2_1',1);
		},10000);
		setTimeout(function(){
			fadeOutImgIE('step1_3',1);
			fadeInImgIE('step2_2',1);
		},11000);
		setTimeout(function(){
			fadeOutImgIE('step1_5',1);
			fadeInImgIE('step2_3',1);
		},12000);
		
		setTimeout(function(){
			fadeOutImgIE('step1_2',1);
			fadeInImgIE('step3_1',1);
		},17000);
		setTimeout(function(){
			fadeOutImgIE('step1_4',1);
			fadeInImgIE('step3_2',1);
		},18000);
		
		setTimeout(function(){
			fadeOutImgIE('step2_1',1);
			fadeInImgIE('step4_1',1);
		},23000);
		setTimeout(function(){
			fadeOutImgIE('step2_2',1);
			fadeInImgIE('step4_2',1);
		},24000);
		setTimeout(function(){
			fadeOutImgIE('step2_3',1);
			fadeInImgIE('step4_3',1);
            
            setTimeout(function(){
                self.repeatAnimationWoman();
            },6000);
		},25000);
	},
    
    repeatAnimationWoman: function(){
        fadeInImgIE('step1_1',1);
        fadeOutImgIE('step4_1',1);
        
        setTimeout(function(){
            fadeInImgIE('step1_2',1); 
            fadeOutImgIE('step3_1',1);
        }, 1000);
        
        setTimeout(function(){
            fadeInImgIE('step1_3',1); 
            fadeOutImgIE('step4_2',1);
        }, 2000);
        
        setTimeout(function(){
            fadeInImgIE('step1_4',1); 
            fadeOutImgIE('step3_2',1);
        }, 3000);
        
        setTimeout(function(){
            fadeInImgIE('step1_5',1); 
            fadeOutImgIE('step4_3',1);
        }, 4000);
        
        setTimeout(function(){
            fadeOutImgIE('step1_1',1);
            fadeInImgIE('step2_1',1); 
        }, 10000);
        
        setTimeout(function(){
            fadeOutImgIE('step1_3',1);
            fadeInImgIE('step2_2',1); 
        }, 11000);
        
        setTimeout(function(){
            fadeOutImgIE('step1_5',1);
            fadeInImgIE('step2_3',1); 
        }, 12000);
        
        setTimeout(function(){
            fadeOutImgIE('step1_2',1);
            fadeInImgIE('step3_1',1); 
        }, 18000);
        setTimeout(function(){
            fadeOutImgIE('step1_4',1);
            fadeInImgIE('step3_2',1); 
        }, 19000);
        
        setTimeout(function(){
            fadeOutImgIE('step2_1',1);
            fadeInImgIE('step4_1',1); 
        }, 25000);
        setTimeout(function(){
            fadeOutImgIE('step2_2',1);
            fadeInImgIE('step4_2',1); 
        }, 26000);
        
        setTimeout(function(){
            fadeOutImgIE('step2_3',1);
            fadeInImgIE('step4_3',1); 
        }, 27000);
        
        var self = this;
        setTimeout(function(){
            self.repeatAnimationWoman();
        }, 33000);
    }
}


App.init();