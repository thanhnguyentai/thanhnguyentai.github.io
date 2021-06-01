$(document).ready(function(){
	$("<img/>").attr("src","img_banner/479x630_couple.png").load(preload);
	$("<img/>").attr("src","img_banner/479x630_bg.jpg").load(preload);
	$("<img/>").attr("src","img_banner/479x630_bubble1.png").load(preload);
	$("<img/>").attr("src","img_banner/479x630_bubble2.png").load(preload);
	$("<img/>").attr("src","img_banner/479x630_bubble3.png").load(preload);
	$("<img/>").attr("src","img_banner/479x630_circle.png").load(preload);
	$("<img/>").attr("src","img_banner/479x630_flower_small_1.png").load(preload);
	$("<img/>").attr("src","img_banner/479x630_flower_small_2.png").load(preload);
	$("<img/>").attr("src","img_banner/479x630_flower_small_3.png").load(preload);
	$("<img/>").attr("src","img_banner/479x630_flower_small_4.png").load(preload);
	$("<img/>").attr("src","img_banner/479x630_flower_small_5.png").load(preload);
	$("<img/>").attr("src","img_banner/479x630_flowercircle.png").load(preload);
	$("<img/>").attr("src","img_banner/479x630_logo_big.png").load(preload);
	$("<img/>").attr("src","img_banner/479x630_logo_small.png").load(preload);
	$("<img/>").attr("src","img_banner/479x630_sayall.png").load(preload);
	$("<img/>").attr("src","img_banner/479x630_tab_here.png").load(preload);
	$("<img/>").attr("src","img_banner/479x630_verticaltext.png").load(preload);
});

loaded = 0;

function preload(){
	if(loaded == 16){
		setTimeout(function(){start();},1000);
		prepare();
	}
	loaded ++;
}

function prepare(){
	enableTranform('frame1_flower',0.5,'linear');
	enableTranformZoom('frame1_couple',0.5,'linear',1.0,50,100);
	
	enableTranform('frame1_flower1',3.5,'linear');
	enableTranform('frame1_flower2',3.5,'linear');
	enableTranform('frame1_flower3',3.5,'linear');
	enableTranform('frame1_flower4',3.5,'linear');
	enableTranform('frame1_flower5',3.5,'linear');
	enableTranform('frame1_flower6',3.5,'linear');
	enableTranform('frame1_flower7',3.5,'linear');
	enableTranform('frame1_flower8',3.5,'linear');
	enableTranform('frame1_flower9',3.5,'linear');
	enableTranform('frame1_flower10',3.5,'linear');
	enableTranform('frame1_flower11',3.5,'linear');
	enableTranform('frame1_flower12',3.5,'linear');
	enableTranform('frame1_flower13',3.5,'linear');
	enableTranform('frame1_flower14',3.5,'linear');
	enableTranform('frame1_flower15',3.5,'linear');
	enableTranform('frame1_flower16',3.5,'linear');
	enableTranform('frame1_flower17',3.5,'linear');
	enableTranform('frame1_flower18',3.5,'linear');
	
}


function start(){
	startTranslate('frame1_flower2',-550,0);
	
	startTranslate('frame1_flower10',-550,0);
	
	setTimeout(function(){
		startTranslate('frame1_flower1',-550,0);
	},200);
	setTimeout(function(){
		startTranslate('frame1_flower3',-550,0);
	},400);
	
	setTimeout(function(){
		startTranslate('frame1_flower4',-550,0);
	},1000);
	
	setTimeout(function(){
		startTranslate('frame1_flower6',-550,0);
	},2000);
	
	setTimeout(function(){
		startTranslate('frame1_flower5',-550,0);
	},2500);
	
	setTimeout(function(){
		startTranslate('frame1_flower7',-550,0);
	},3000);
	
	setTimeout(function(){
		startTranslate('frame1_flower8',-550,0);
	},3500);
	
	setTimeout(function(){
		startTranslate('frame1_flower11',-550,0);
	},4000);
	
	setTimeout(function(){
		startTranslate('frame1_flower12',-550,0);
	},4500);
	
	setTimeout(function(){
		startTranslate('frame1_flower17',-550,0);
	},5000);
	
	setTimeout(function(){
		startTranslate('frame1_flower13',-550,0);
	},5500);

	
	/*
	startTranslate('frame1_flower5',-550,0);
	startTranslate('frame1_flower6',-550,0);
	startTranslate('frame1_flower7',-550,0);
	startTranslate('frame1_flower8',-550,0);
	startTranslate('frame1_flower9',-550,0);
	startTranslate('frame1_flower10',-550,0);
	startTranslate('frame1_flower11',-550,0);
	startTranslate('frame1_flower12',-550,0);
	startTranslate('frame1_flower13',-550,0);
	startTranslate('frame1_flower14',-550,0);
	startTranslate('frame1_flower15',-550,0);
	startTranslate('frame1_flower16',-550,0);
	startTranslate('frame1_flower17',-550,0);
	startTranslate('frame1_flower18',-550,0);
	*/
	
	
	setTimeout(function(){
		startTranslate('frame1_flower',0,90);
		zoomAnimation('frame1_couple',0.83);
	},500);
	
	setTimeout(function(){
		fadeInImg('frame1_bubble1',0.5);
	},1500);
	
	setTimeout(function(){
		fadeOutImg('frame1_bubble1',0.5);
	},2500);
	
	setTimeout(function(){
		fadeInImg('frame1_bubble2',0.5);
	},3000);
	
	setTimeout(function(){
		fadeOutImg('frame1_bubble2',0.5);
	},4000);
	
	setTimeout(function(){
		fadeInImg('frame1_bubble3',0.5);
	},4500);
	
	setTimeout(function(){
		fadeOutImg('frame1',0.5);
	},6000);
	
	setTimeout(function(){
		fadeInImg('frame2',0.5);
	},6500);
	
	setTimeout(function(){
		fadeInImg('frame2_flower',0.5);
		fadeInImg('frame2_sayall',0.5);
	},7000);
	
	setTimeout(function(){
		fadeInImg('frame2_tabhere',0.5);
	},7500);
	
	setTimeout(function(){
		fadeOutImg('frame2_flower',0.5);
		fadeOutImg('frame2_sayall',0.5);
		fadeOutImg('frame2_tabhere',0.5);
	},9500);
	
	setTimeout(function(){
		fadeInImg('frame2_verticaltext',0.5);
	},10000);
	
	setTimeout(function(){
		fadeOutImg('frame2_verticaltext',0.5);
		fadeOutImg('frame2_small_logo',0.5);
	},11500);
	
	setTimeout(function(){
		fadeInImg('frame2_logo_big',0.5);
	},12000);
	
}

function enableTranformZoom(id,time,timeFunc,initScale,centerX,centerY){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	
	$('#'+id).css('-webkit-transform','scale('+initScale+')');
	$('#'+id).css('-moz-transform', 'scale('+initScale+')');
	
	$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
	$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY+ '%');
}	

function zoomAnimation(id,scale){
	$('#'+id).css('-webkit-transform','scale('+scale+')');
	$('#'+id).css('-moz-transform','scale('+scale+')');
}

function enableTranform(id,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
	$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
}	

function startTranslate(id,translateX,translateY){
	$('#'+id).css('-webkit-transform','translate('+translateX+'px,'+translateY+'px)');
	$('#'+id).css('-moz-transform','translate('+translateX+'px,'+translateY+'px)');
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
 