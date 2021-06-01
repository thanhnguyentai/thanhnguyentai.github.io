$(document).ready(function(){
	$("<img/>").attr("src","img_banner/479x233_bg.jpg").load(preload);
	$("<img/>").attr("src","img_banner/479x233_1.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_2.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_3.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_2_1.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_4.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_5.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_6.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_7.png").load(preload);
	$("<img/>").attr("src","img_banner/479x233_8.png").load(preload);
});

loaded = 0;

function preload(){
	if(loaded == 8){
		prepare();
		setTimeout(function(){start();},1000);
	}
	loaded ++;
}

function prepare(){
	enableTranform('img2',0.4,'linear');
	enableTranform('img2_2',0.2,'linear');
	enableTranform('img3',2.8,'linear');
}

function start(){
	var count = 1;
	var deltaY = -30;
	var deltaX = 33;
	var interval = setInterval(function(){
		if(count % 2 == 1){
			startTranslate('img2',deltaX * count,0);	
			startTranslate('img2_2',deltaX * count,0);
			fadeOutImg('img2_2',0.5);			
		}
		else{
			startTranslate('img2',deltaX * count,deltaY);	
			startTranslate('img2_2',deltaX * count,0);
			fadeInImg('img2_2',0.5);			
		}
		
		if(count>=7){
			clearInterval(interval);
		}
		count++;
	},400);
	
	startTranslate('img3',-250,0);
	
	setTimeout(function(){
		fadeInImg('img4',0.2);
		startTranslate('img2_2',deltaX * count-13,0);
	},3500);
	
	setTimeout(function(){
		startTranslate('img2',250,-38);
		fadeInImg('img2_2',0.2);					
	},4000);
	
	setTimeout(function(){
		fadeOutImg('frame1',0.5);
		fadeInImg('frame2',0.5);
	},5000);
	
	setTimeout(function(){
		fadeOutImg('frame2',0.5);
	},6500);
	
	setTimeout(function(){
		fadeInImg('img6',0.5);
	},6750);
	setTimeout(function(){
		fadeInImg('img7',0.5);
		fadeInImg('img8',0.5);
	},7500);
}

function enableTranform(id,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
}	

function startTranslate(id,translateX,translateY){
	$('#'+id).css('-webkit-transform','translate('+translateX+'px,'+translateY+'px)');
	$('#'+id).css('-moz-transform','translate('+translateX+'px,'+translateY+'px)');
}

function startZoom(id,degree){
}

function startScale(id,scale){
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