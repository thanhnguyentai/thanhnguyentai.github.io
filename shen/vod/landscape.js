$(document).ready(function(){
	$("<img/>").attr("src","img/landscape_bg.jpg").load(preload);
	$("<img/>").attr("src","img/landscape_controller.png").load(preload);
	$("<img/>").attr("src","img/landscape_headline.png").load(preload);
	$("<img/>").attr("src","img/landscape_logo.png").load(preload);
	$("<img/>").attr("src","img/headline_text.png").load(preload);
});

loaded = 0;

function preload(){
	if(loaded == 4){
		$('#img_bg').css('display','block');
		setTimeout('start()',1000);
	}
	loaded ++;
}

var videos = new Array();
videos[0]='<center><object width="543" height="314"><param name="movie" value="http://www.youtube.com/v/fe90Xxt5LBw?fs=1&amp;hl=ro_RO&autoplay=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/fe90Xxt5LBw?fs=1&amp;hl=ro_RO&autoplay=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="543" height="314"></embed></object></center>';       
videos[1]='<center><object width="543" height="314"><param name="movie" value="http://www.youtube.com/v/uE4TWU42eUA?fs=1&amp;hl=ro_RO&autoplay=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/uE4TWU42eUA?fs=1&amp;hl=ro_RO&autoplay=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="543" height="314"></embed></object></center>';
videos[2]='<center><object width="543" height="314"><param name="movie" value="http://www.youtube.com/v/3H8bnKdf654?fs=1&amp;hl=ro_RO&autoplay=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/3H8bnKdf654?fs=1&amp;hl=ro_RO&autoplay=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="543" height="314"></embed></object></center>';
videos[3]='<center><object width="543" height="314"><param name="movie" value="http://www.youtube.com/v/O49hiK2E2MU?fs=1&amp;hl=ro_RO&autoplay=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/O49hiK2E2MU?fs=1&amp;hl=ro_RO&autoplay=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="543" height="314"></embed></object></center>';
videos[4]='<center><object width="543" height="314"><param name="movie" value="http://www.youtube.com/v/L7LYeFRrZoU?fs=1&amp;hl=ro_RO&autoplay=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/L7LYeFRrZoU?fs=1&amp;hl=ro_RO&autoplay=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="543" height="314"></embed></object></center>';
videos[5]='<center><object width="543" height="314"><param name="movie" value="http://www.youtube.com/v/Q3I24dmg9cI?fs=1&amp;hl=ro_RO&autoplay=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/Q3I24dmg9cI?fs=1&amp;hl=ro_RO&autoplay=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="543" height="314"></embed></object></center>';

function start(){
	$('#controller').css('top','209px');
	
	setTimeout(function(){
		$('#controller').css('top','400px');
	},1500);
	
	setTimeout(function(){
		$('#line_top').css('left','-360px');
		$('#line_bottom').css('left','512px');
		setTimeout(function(){
			reelMoveLeft(2);
		},500);
	},2500);
	
	setTimeout(function(){
		$('.thumbnailmask').css('visibility','visible');
		moveThumbnailLeft();
		moveThumbnailRight();
	},3000);
	
	setTimeout(function(){
		$('#line_top').css('left','160px');
		$('#line_bottom').css('left','160px');
	},3500);
	
	setTimeout(function(){
		$('#arm').css('top','-60px');
	},4000);
	
	setTimeout(function(){
		$('#all_main_screen').css('opacity','1');
		$('#all_main_screen').css('height','322px');
		$('#all_main_screen').css('top','71px');
	},5000);
	
	
	setTimeout(function(){
		$('#all_main_screen').css('z-index',13);
		$('#all_main_screen').css('left','353px');
		$('#all_main_screen').css('width','312px');
		fadeInImg('playtext',1);
	},5500);
	
		
	setTimeout(function(){
		$('#fan_1').css('opacity','0.68');
		$('#fan_2').css('opacity','0.68');
		$('#mainscreen_bg').css('opacity','0.68');
		$('#slider_img').css('opacity','0.0');
		
		$('#all_main_screen').css('left','0px');
		$('#all_main_screen').css('width','1024px');

	},6500);
	
	setTimeout(function(){
		$('#super_below').css('display','block');
		$('#super_top').css('display','block');
	},7000);
	
	setTimeout(function(){
		showSuperBelow();
	},7500);
	
	setTimeout(function(){
		noticeChooseVideo();
	},8000);
}

var enable_move = false;
var auto_move	= true;
var current_video = -1;
var playing		= false;
var startMovingAll = false;

function clickMoveReelRight(setauto){
	$('#mainscreen_video').css('display','none');
	$('#mainscreen_video').html('&nbsp');
	if(enable_move == false)
		return;
	enable_move	= false;
	if(setauto != false)
		auto_move	= false;
	
	if(playing == true){
		playing = false;
		setTimeout(function(){
			moveRightThumbnail();
			reelMoveRight();
			enableMoveReel();
		},100);
	}
	else{
		moveRightThumbnail();
		reelMoveRight();
		enableMoveReel();
	}
	showSuperBelow();
}

function clickMoveReelLeft(setauto){
	$('#mainscreen_video').css('display','none');
	$('#mainscreen_video').html('&nbsp');
	if(enable_move == false)
		return;
	enable_move	= false;
	if(setauto != false)
		auto_move	= false;
	
	if(playing == true){
		playing = false;
		setTimeout(function(){
			moveLeftThumbnail();
			reelMoveLeft();
			enableMoveReel();
		},100);
	}
	else{
		moveLeftThumbnail();
		reelMoveLeft();
		enableMoveReel();
	}
	showSuperBelow();
}

function moveLeftThumbnail(){
	var left = parseInt($('#thumbnail').css('left'),10);
	var line_top_left = parseInt($('#line_top').css('left'),10);
	if(line_top_left <= -3*143 + 160)
		return;
		
	$('#thumbnail').css('left',(left-143)+'px');
	
	$('#line_top').css('left', (line_top_left-143)+'px');
	$('#line_bottom').css('left', (line_top_left-143)+'px');
}

function moveRightThumbnail(){
	var left = parseInt($('#thumbnail').css('left'),10);
	var line_top_left = parseInt($('#line_top').css('left'),10);
	if(line_top_left >= 2*143 + 160)
		return;
	
	$('#thumbnail').css('left',(left+143)+'px');
	
	$('#line_top').css('left', (line_top_left+143)+'px');
	$('#line_bottom').css('left', (line_top_left+143)+'px');
}

function playVideo(){
	if(current_video >=0 && current_video < videos.length){
		if(auto_move == true){
			auto_move 	= false;
			setTimeout(function(){
				$('#mainscreen_video').html(videos[current_video]);
				$('#mainscreen_video').css('display','block');
			},1000);
		}
		else{
			$('#mainscreen_video').html(videos[current_video]);
			$('#mainscreen_video').css('display','block');
		}
	}
	
	hideSuperBelow();
	playing = true;
}

var first_time = true;

function reelMoveLeft(destination){
	if(destination != undefined){
		if(current_video == destination){
			/*	
			if(first_time == true){
				first_time = false;
				$('#thumbnail img').each(function(){
					$('#div_temp').append($(this).contents());
				});
				
				$('#final_thumbnail').html($('#div_temp').html());
			}
			*/
			enable_move = true;
			startMovingAll = true;
			clickMoveReelLeft(false);
			return;
		}
	}
	var left = parseInt($('#slider_content').css('left'),10);
	var width = parseInt($('#slider_content').css('width'),10);
	
	var left_screen = parseInt($('#mainscreen_list_keyart').css('left'),10);
	
	if(left > -1*width + 147){		
		current_video++;
		$('#slider_content').css('left',(left-147)+'px');
		$('#mainscreen_list_keyart').css('left',(left_screen - 543)+'px');
		hideSuperTop();
		setTimeout(function(){
			showSuperTop(current_video+1);
		},300);
		if(auto_move == true){
			if(startMovingAll == false){
				setTimeout(function(){reelMoveLeft(destination);},1000);
			}
			else{
				setTimeout(function(){clickMoveReelLeft(false);},1000);
			}	
		}
	}
	else{
		if(auto_move == true){
			if(startMovingAll == false)
				setTimeout(function(){reelMoveRight(destination);},1000);
			else{
				setTimeout(function(){clickMoveReelRight(false);},1000);
			}	
		}
	}
}

function reelMoveRight(destination){
	if(destination != undefined){
		if(current_video == destination){
			enable_move = true;
			startMovingAll = true;
			clickMoveReelRight(false);
			return;
		}
	}
	
	var left = parseInt($('#slider_content').css('left'),10);
	var left_screen = parseInt($('#mainscreen_list_keyart').css('left'),10);
	if(left < -147){
		current_video--;
		$('#slider_content').css('left',(left+147)+'px');
		$('#mainscreen_list_keyart').css('left',(left_screen + 543)+'px');
		hideSuperTop();
		setTimeout(function(){
			showSuperTop(current_video+1);
		},300);
		if(auto_move == true){
			if(startMovingAll == false)
				setTimeout(function(){reelMoveRight(destination);},1000);
			else{
				setTimeout(function(){clickMoveReelRight(false);},1000);
			}	
		}
	}
	else{
		if(auto_move == true){
			if(startMovingAll == false)
				setTimeout(function(){reelMoveLeft(destination);},1000);
			else{
				setTimeout(function(){clickMoveReelLeft(false);},1000);
			}	
		}
	}
}

function enableMoveReel(){
	setTimeout(function(){enable_move = true;},600);
}

function moveThumbnailLeft(){
	//var left = parseInt($('#thumbnail_left').css('left'),10);
	//if(left > 230){
		//$('#thumbnail_left').css('left',(left-70)+'px')
		$('#thumbnail_left').css('left','160px')
	//	setTimeout('moveThumbnailLeft()',500);
	//}
}

function moveThumbnailRight(){
	//var left = parseInt($('#thumbnail_right').css('left'),10);
	//if(left < 10){
	//	$('#thumbnail_right').css('left',(left+100)+'px')
	//	setTimeout('moveThumbnailRight()',500);
	//}
	$('#thumbnail_right').css('left','83px')
}

var isShowSuperBelow = true;
function showSuperBelow(){
	if(isShowSuperBelow == true){
		isShowSuperBelow = false;
		$('#super_below').css('top','392px');
	}
}

function hideSuperBelow(){
	if(isShowSuperBelow == false){
		isShowSuperBelow = true;
		$('#super_below').css('top','362px');
	}
}

var isShowSuperTop = true;
function showSuperTop(id){
	if(isShowSuperTop == true){
		isShowSuperTop = false;
		if(id != undefined){
			$('#super_top').attr('src','img/super_top_'+id+'.png');
		}
		$('#super_top').css('top','26px');
	}
}

function hideSuperTop(){
	if(isShowSuperTop == false){
		isShowSuperTop = true;
		$('#super_top').css('top','71px');
	}
}

var isNotice = true;
function noticeChooseVideo(){
	if(playing == true){
		if(isNotice == true){
			isNotice = false;
			hideSuperTop();
			setTimeout(function(){
				showSuperTop(0);
			},300);
		}
		else{
			isNotice = true;
			hideSuperTop();
			setTimeout(function(){
				showSuperTop(current_video+1);
			},300);
		}
	}
	
	setTimeout('noticeChooseVideo()',3000);
}

function fadeInImg(id,time){
	$('#'+id).css('display','block');
	$('#'+id).css('-moz-animation','fadein '+time+'s linear');
	$('#'+id).css('-webkit-animation','fadein '+time+'s linear');
	$('#'+id).css('-webkit-animation-fill-mode','forwards');
	$('#'+id).css('-moz-animation-fill-mode','forwards');
}

function fadeOutImg(id,time){
	$('#'+id).css('-moz-animation','fadeout '+time+'s linear');
	$('#'+id).css('-webkit-animation','fadeout '+time+'s linear');
	$('#'+id).css('-webkit-animation-fill-mode','forwards');
	$('#'+id).css('-moz-animation-fill-mode','forwards');
}

