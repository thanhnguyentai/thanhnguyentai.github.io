var videos = new Array();
videos[0]='<center><object width="600" height="420"><param name="movie" value="http://www.youtube.com/v/FfjRAXbo2hE&ob=av3e?fs=1&amp;hl=ro_RO&autoplay=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/FfjRAXbo2hE&ob=av3e?fs=1&amp;hl=ro_RO&autoplay=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="600" height="420"></embed></object></center>';       
videos[1]='<center><object width="600" height="420"><param name="movie" value="http://www.youtube.com/v/OGvwy3qhjDM?fs=1&amp;hl=ro_RO&autoplay=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/OGvwy3qhjDM?fs=1&amp;hl=ro_RO&autoplay=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="600" height="420"></embed></object></center>';
videos[2]='<center><object width="600" height="420"><param name="movie" value="http://www.youtube.com/v/RAhQ9oNXzAs?fs=1&amp;hl=ro_RO&autoplay=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/RAhQ9oNXzAs?fs=1&amp;hl=ro_RO&autoplay=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="600" height="420"></embed></object></center>';
videos[3]='<center><object width="600" height="420"><param name="movie" value="http://www.youtube.com/v/wGjV3OnZSeE?fs=1&amp;hl=ro_RO&autoplay=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/wGjV3OnZSeE?fs=1&amp;hl=ro_RO&autoplay=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="600" height="420"></embed></object></center>';
videos[4]='<center><object width="600" height="420"><param name="movie" value="http://www.youtube.com/v/pakvDbP_dJU?fs=1&amp;hl=ro_RO&autoplay=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/pakvDbP_dJU?fs=1&amp;hl=ro_RO&autoplay=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="600" height="420"></embed></object></center>';

var sound;
var sound2;

$(document).ready(function(){
	$("<img/>").attr("src","img/portrait_bg0.jpg").load(preload);
	$("<img/>").attr("src","img/portrait_bg1.jpg").load(preload);
	$("<img/>").attr("src","img/lens-flare.png").load(preload);
	$("<img/>").attr("src","img/portrait_lenflare.png").load(preload);
	$("<img/>").attr("src","img/portrait_frametop_bottom.png").load(preload);
	$("<img/>").attr("src","img/portrait_frametop_top.png").load(preload);
	$("<img/>").attr("src","img/portrait_signup.png").load(preload);
	$("<img/>").attr("src","img/portrait_start.png").load(preload);
	$("<img/>").attr("src","img/portrait_tab.png").load(preload);
	$("<img/>").attr("src","img/tab_view.png").load(preload);
	$("<img/>").attr("src","img/portrait_logo.png").load(preload);
	$("<img/>").attr("src","img/portrait_toptext.png").load(preload);
	$("<img/>").attr("src","img/portrait_bottomtext.png").load(preload);
	
	$("<img/>").attr("src","img/artist1.png").load(preload);
	$("<img/>").attr("src","img/artist2.png").load(preload);
	$("<img/>").attr("src","img/artist3.png").load(preload);
	$("<img/>").attr("src","img/artist4.png").load(preload);
	$("<img/>").attr("src","img/artist5.png").load(preload);
	
	$("<img/>").attr("src","img/artist1_image.jpg").load(preload);
	$("<img/>").attr("src","img/artist2_image.jpg").load(preload);
	$("<img/>").attr("src","img/artist3_image.jpg").load(preload);
	$("<img/>").attr("src","img/artist4_image.jpg").load(preload);
	$("<img/>").attr("src","img/artist5_image.jpg").load(preload);
	
	
	$("<img/>").attr("src","img/artist1_text.png").load(preload);
	$("<img/>").attr("src","img/artist2_text.png").load(preload);
	$("<img/>").attr("src","img/artist3_text.png").load(preload);
	$("<img/>").attr("src","img/artist4_text.png").load(preload);
	$("<img/>").attr("src","img/artist5_text.png").load(preload);

	$.ajax({
		url:'sound.wav',
		success:function(){
			preload();
		}
	});
	$.ajax({
		url:'sound2.wav',
		success:function(){
			preload();
		}
	});
	
	prepare();
	sound = document.getElementById('sound');
	sound2 = document.getElementById('sound2');
	
	$('#startbutton').click(function(){
		clearInterval(blink);
		fadeOutImg('frame1',0.5);
		fadeInImg('frame2',0.5);
		
		sound2.play();
		setTimeout(function(){
			randomLen();
		},500);
	});
	
});

loaded = 0;


function preload(){
	if(loaded == 29){
		setTimeout('start()',2000);
		setArtistPosition();
	}
	
	loaded ++;
}

function prepare(){
	enableTranformZoom('logo',0.05,50,10);
	
	enableTranformZoom('artist1',0.2,50,50);
	enableTranformZoom('artist2',0.2,50,50);
	enableTranformZoom('artist3',0.2,50,50);
	enableTranformZoom('artist4',0.2,50,50);
	enableTranformZoom('artist5',0.2,50,50);
}

var arrPosition = new Array();
arrPosition.push({x:384,y:479,z:3,zoom:1});
arrPosition.push({x:564,y:335,z:2,zoom:0.75});
arrPosition.push({x:470,y:225,z:1,zoom:0.52});
arrPosition.push({x:295,y:225,z:1,zoom:0.52});
arrPosition.push({x:194,y:341,z:2,zoom:0.75});

var currentPositions = new Array();

function setArtistPosition(){
	var artist;
	var width;
	var height;
	for(var i=0;i<=4;i++){
		artist = $('#artist'+(i+1));		
		width = parseInt(artist.width());
		height = parseInt(artist.height());
		
		artist.css('top',arrPosition[i].y - height/2);
		artist.css('left',arrPosition[i].x - width/2);
		artist.css('z-index',arrPosition[i].z);
		currentPositions.push({y:arrPosition[i].y - height/2,x:arrPosition[i].x - width/2,width:width,height:height});
	}
}

var arrArtists = new Array();
arrArtists.push(1);
arrArtists.push(2);
arrArtists.push(3);
arrArtists.push(4);
arrArtists.push(5);

function displayArtists(){
	if(arrArtists.length == 0){
		registerViewArtist();
		continueAnimationFrame2();
		return;
	}
	var timeout = setTimeout(function(){
		var randomnumber=Math.floor(Math.random()*arrArtists.length);
		zoomInAnimation('artist'+arrArtists[randomnumber],arrPosition[arrArtists[randomnumber]-1].zoom,0.5,'linear');
		arrArtists.splice(randomnumber,1);
		displayArtists();
		clearTimeout(timeout);
	},250);
}

function registerViewArtist(){
	setTimeout(function(){
		fadeInImg('tab_to_see',1);
	},2000);
	fadeInImg('signup',1);
	fadeOutImg('findout',1);
	
	$('.artist').click(function(){
		$('#artist_detail').show();
		$('#artist_video').hide();
		fadeInImg('artist_detail',0.25);
		
		var id =$(this).attr('id');
		indexArtist = parseInt(id.substring('artist'.length)) - 1;
		if(indexArtist == 2 || indexArtist == 3){
			$('#tab_view').hide();
		}
		else{
			$('#tab_view').show();
		}
		
		
		$('#artist_portrait').attr('src','img/'+id+'_image.jpg');
		$('#artist_information').html('<img src="img/'+id+'_text.png'+'" alt=""/>');
		
		fadeInImg('mask',0.5);
	});
	
	$('#artist_close').click(function(){
		hideMask();
	});
	
	$('#artist_close_video').click(function(){
		hideMask();
	});
	
	$('#artist_portrait').click(function(){
		viewVideo();
	});
	
	$('#tab_view').click(function(){
		viewVideo();
	});
}

function viewVideo(){	
	if(indexArtist == 2 || indexArtist == 3){
		return;
	}
	$('#artist_video_container').html(videos[indexArtist]);
	fadeInImg('artist_video',0.5)
	fadeOutImg('artist_detail',0.5)
}

function hideMask(){
	fadeOutImg('mask',0.5);
	$('#artist_video').hide();
	$('#artist_detail').hide();
}


function previous(){
	if(enable == false)
		return;
	enable = false;	
	var temp;
	for(var i=0;i<=4;i++){
		temp = indexs[i];
		if(temp==4){
			temp = 0;
		}
		else{
			temp++;
		}
		
		
		indexs[i] = temp;
	}
	
	for(var i=0;i<=4;i++){
		temp = indexs[i];
		var current = currentPositions[i];
		var next = arrPosition[temp];
		zoomAndTranslate('artist'+(i+1),next.zoom,0.5,next.x-current.width/2-current.x,next.y-current.height/2-current.y,'linear');	
		$('#artist'+(i+1)).css('z-index',arrPosition[temp].z);
	}
	
	var timeout = setTimeout(function(){
		enable = true;
		clearTimeout(timeout);
	},500);
}

var enable = true;
var indexs = new Array();
indexs.push(0);
indexs.push(1);
indexs.push(2);
indexs.push(3);
indexs.push(4);

function next(){
	if(enable == false)
		return;
	enable = false;	
	var temp;
	for(var i=0;i<=4;i++){
		temp = indexs[i];
		if(temp==0){
			temp = 4;
		}
		else{
			temp--;
		}
		
		
		indexs[i] = temp;
	}
	
	for(var i=0;i<=4;i++){
		temp = indexs[i];
		var current = currentPositions[i];
		var next = arrPosition[temp];
		zoomAndTranslate('artist'+(i+1),next.zoom,0.5,next.x-current.width/2-current.x,next.y-current.height/2-current.y,'linear');	
		$('#artist'+(i+1)).css('z-index',arrPosition[temp].z);
	}
	
	var timeout = setTimeout(function(){
		enable = true;
		clearTimeout(timeout);
	},500);
}

var allLight = new Array();
allLight.push(1);
allLight.push(2);
allLight.push(3);
allLight.push(4);
allLight.push(5);
allLight.push(6);
allLight.push(7);
allLight.push(8);
allLight.push(9);

function flashLight(){
	var timeout = setTimeout(function(){
		var number = Math.floor(Math.random()*allLight.length);
		var random = Math.floor(Math.random()*2);
		if(random == 0){
			fadeOutImg('len'+allLight[number],0.2);
			var timeout1 = setTimeout(function(){
				fadeInImg('len'+allLight[number],0.2);
				clearTimeout(timeout1);
			},250);
			
			var timeout2 = setTimeout(function(){
				fadeOutImg('len'+allLight[number],0.1);
				clearTimeout(timeout2);
			},350);
		}
		else{
			fadeInImg('len'+allLight[number],0.1);
			var timeout1 = setTimeout(function(){
				fadeOutImg('len'+allLight[number],0.1);
				clearTimeout(timeout1);
			},150);
			
			var timeout2 = setTimeout(function(){
				fadeInImg('len'+allLight[number],0.1);
				clearTimeout(timeout2);
			},350);
		}
		clearTimeout(timeout);
		
		flashLight();
	},550);	
}

var arrLen = new Array();
arrLen.push(1);
arrLen.push(2);
arrLen.push(3);
arrLen.push(4);
arrLen.push(5);
arrLen.push(6);
arrLen.push(7);
arrLen.push(8);
arrLen.push(9);

function randomLen(){
	if(arrLen.length == 0){
		startFrame2();
		return;
	}
	var timeout = setTimeout(function(){
		var randomnumber=Math.floor(Math.random()*arrLen.length);
		
		fadeInImg('len'+arrLen[randomnumber],0.2);
		arrLen.splice(randomnumber,1);
		randomLen();
		
		clearTimeout(timeout);
	},200);
}


var typeblink = 1;
var blink;
function start(){
	zoomInAnimation('logo',1,1.5,'linear');
	
	setTimeout(function(){
		blink = setInterval(function(){
			blinkLen(typeblink);
			if(typeblink == 0){
				typeblink = 1;
			}
			else{
				typeblink = 0;
			}
			
		},550);
	},1500);
	
	setTimeout(function(){
		fadeInImg('startbutton',1);
	},2500);
}

function startFrame2(){
	setTimeout(function(){
		fadeInImg('toptext',0.5);
		flashLight();
	},500);
	
	setTimeout(function(){
		displayArtists();
	},1000);
}

function continueAnimationFrame2(){
	setTimeout(function(){
		fadeInImg('tabmore',0.5);
		setTimeout(function(){
			fadeInImg('bottomtext',0.5);
		},1000);
		setTimeout(function(){
			fadeInImg('signupbutton',0.5);
		},1500);
	},2000);
}

function blinkLen(type){
	if(type == 0){
		fadeOutImg('len_blink',0.5);
	}
	else{
		fadeInImg('len_blink',0.5);
	}
}




/*----------------------------------------------------------------------------------------------------------------------*/

function enableTransformRotate3D(id,time,timeFunc,centerX,centerY){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
	$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY);
}

function rotate3dAnimation(id,rotateX,rotateY,rotateZ){
	$('#'+id).css('-webkit-transform','rotateX('+rotateX+'deg) ' + 'rotateY('+rotateY+'deg) ' + 'rotateZ('+rotateZ+'deg)');
}

function rotate3dAnimationFadeOut(id,rotateX,rotateY,rotateZ){
	$('#'+id).css('-webkit-transform','rotateX('+rotateX+'deg) ' + 'rotateY('+rotateY+'deg) ' + 'rotateZ('+rotateZ+'deg)');
	$('#'+id).css('opacity',0.2);
}

function rotate3dAnimationFadeIn(id,rotateX,rotateY,rotateZ){
	setTimeout(function(){
		$('#'+id).css('-webkit-transform','rotateX('+rotateX+'deg) ' + 'rotateY('+rotateY+'deg) ' + 'rotateZ('+rotateZ+'deg)');
	},1000);
	$('#'+id).css('opacity',1);
}

function rotate3dAnimationOut(id,rotateX,rotateY,rotateZ){
	$('#'+id).css('-webkit-transform','rotateX('+rotateX+'deg) ' + 'rotateY('+rotateY+'deg) ' + 'rotateZ('+rotateZ+'deg)');
	$('#'+id).css('opacity','0');
}

function rotate3dAnimationIn(id,rotateX,rotateY,rotateZ){
	$('#'+id).css('-webkit-transform','rotateX('+rotateX+'deg) ' + 'rotateY('+rotateY+'deg) ' + 'rotateZ('+rotateZ+'deg)');
	$('#'+id).css('opacity','1');
}

function enableTranformZoomRotate(id,initScale,centerX,centerY,angle){
	$('#'+id).css('-webkit-transform','scale('+initScale+') ' + 'rotateX(0deg) ' + 'rotateY(0deg) ' + 'rotateZ('+angle+'deg)');
	$('#'+id).css('-moz-transform', 'scale('+initScale+') ' + 'rotateX(0deg) ' + 'rotateY(0deg) ' + 'rotateZ('+angle+'deg)');
	
	$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
	$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY+ '%');
	
	$('#'+id).css('-webkit-backface-visibility','hidden');
}

function zoomRotate(id,scale,angle,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	
	$('#'+id).css('-webkit-transform','scale('+scale+') ' + 'rotateX(0deg) ' + 'rotateY(0deg) ' + 'rotateZ('+angle+'deg)');
	$('#'+id).css('-moz-transform','scale('+scale+') ' + 'rotateX(0deg) ' + 'rotateY(0deg) ' + 'rotateZ('+angle+'deg)');
}

function enableTranformZoom(id,initScale,centerX,centerY){
	$('#'+id).css('-webkit-transform','scale('+initScale+')');
	$('#'+id).css('-moz-transform', 'scale('+initScale+')');
	
	$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
	$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY+ '%');
	
	$('#'+id).css('-webkit-backface-visibility','hidden');
}	

function zoomAnimation(id,scale,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	
	$('#'+id).css('-webkit-transform','scale('+scale+')');
	$('#'+id).css('-moz-transform','scale('+scale+')');
}

function zoomInAnimation(id,scale,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	
	$('#'+id).css('-webkit-transform','scale('+scale+')');
	$('#'+id).css('-moz-transform','scale('+scale+')');
	$('#'+id).css('opacity','1');
}

function enableTranform(id,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
}	

function startTranslate(id,translateX,translateY){
	$('#'+id).css('-webkit-transform','translate('+translateX+'px,'+translateY+'px)');
	$('#'+id).css('-moz-transform','translate('+translateX+'px,'+translateY+'px)');
}


function zoomAndTranslate(id,scale,time,translateX,translateY,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	
	$('#'+id).css('-webkit-transform','translate('+translateX+'px,'+translateY+'px)' + ' scale('+scale+') ');
	$('#'+id).css('-moz-transform','translate('+translateX+'px,'+translateY+'px)'+ ' scale('+scale+') ');
}

function fadeInImg(id,time){
	$('#'+id).css('display','block');
	$('#'+id).css('-moz-animation','fadein '+time+'s linear');
	$('#'+id).css('-webkit-animation','fadein '+time+'s linear');
	$('#'+id).css('-webkit-animation-fill-mode','forwards');
	$('#'+id).css('-moz-animation-fill-mode','forwards');
}

function fadeOutImg (id,time){
	$('#'+id).css('-moz-animation','fadeout '+time+'s linear');
	$('#'+id).css('-webkit-animation','fadeout '+time+'s linear');
	$('#'+id).css('-webkit-animation-fill-mode','forwards');
	$('#'+id).css('-moz-animation-fill-mode','forwards');
	setTimeout(function(){
		$('#'+id).css('display','none');
	},time*1000);
}
