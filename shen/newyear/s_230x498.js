$(document).ready(function(){
	$("<img/>").attr("src","img_banner/230x498_bg.jpg").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_bg_footer.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_circle.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_frame1_bubble1.png").load(preload);	$("<img/>").attr("src","img_banner/230x498_bg.jpg").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_frame1_bubble2.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_frame1_couple.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_frame1_flower.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_frame2_flower.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_frame2_say.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_frame2_tab.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_frame3_horizontaltext.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_frame3_logo.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_frame3_verticaltext.png").load(preload);	
});

loaded = 0;

function preload(){
	if(loaded == 12){
		$('#bg').css('display','block');		
		setTimeout(function(){start();},1000);
		prepare();
	}
	loaded ++;
}

function prepare(){
	enableTranform('frame1_couple',0.5,'linear');
}

function start(){
	setTimeout(function(){
		startTranslate('frame1_couple',0,-372)
	},500);
	
	setTimeout(function(){
		fadeInImg('frame1_flower',0.5);
	},1250);
	
	setTimeout(function(){
		fadeInImg('frame1_bubble1',0.5);
	},2000);
	
	setTimeout(function(){
		fadeOutImg('frame1_bubble1',0.5);
	},3000);
	
	setTimeout(function(){
		fadeInImg('frame1_bubble2',0.5);
	},3500);
	
	setTimeout(function(){
		fadeOutImg('frame1',0.5);
	},5000);
	
	setTimeout(function(){
		fadeInImg('frame2',0.5);
	},5500);
	
	setTimeout(function(){
		fadeInImg('frame2_say',0.5);
	},6000);
	setTimeout(function(){
		fadeInImg('frame2_tab',0.5);
	},7000);
	
	setTimeout(function(){
		fadeOutImg('frame2',0.5);
	},9000);
	
	setTimeout(function(){
		fadeInImg('frame3',0.5);
	},9500);
	
	setTimeout(function(){
		fadeInImg('frame3_vertical',0.5);
		fadeInImg('frame3_horizontal',0.5);
	},10000);
	
	setTimeout(function(){
		fadeOutImg('frame3_vertical',0.5);
		fadeOutImg('frame3_horizontal',0.5);
	},11500);
	
	setTimeout(function(){
		fadeInImg('frame3_logo',0.5);
	},12000);
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
