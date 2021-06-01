$(document).ready(function(){
	$("<img/>").attr("src","img_banner/482x630_bg.jpg").load(preload);
	$("<img/>").attr("src","img_banner/482x630_1.png").load(preload);
	$("<img/>").attr("src","img_banner/479x630_2.png").load(preload);
	$("<img/>").attr("src","img_banner/479x630_3.png").load(preload);
	$("<img/>").attr("src","img_banner/479x630_4.png").load(preload);
	$("<img/>").attr("src","img_banner/479x630_5.png").load(preload);
	$("<img/>").attr("src","img_banner/479x630_6.png").load(preload);
	$("<img/>").attr("src","img_banner/479x630_7.png").load(preload);
	
});

loaded = 0;

function preload(){
	if(loaded == 6){
		prepare();
		setTimeout(function(){start();},1000);
	}
	loaded ++;
}

function prepare(){
	enableTranform('bird1',1,'linear');
	enableTranform('bird2',0.5,'linear');
	enableTranform('bird3',0.5,'linear');
	
	var styles = new Array();
	styles.push('top');
	var times = new Array();
	times.push(0.5);
	var timeFuncs = new Array();
	timeFuncs.push('linear');
	enableTransition('logo',styles,times,timeFuncs);
}

function start(){
	$('#bird1').css('display','block');
	setTimeout(function(){
		startTranslate('bird1',350,380);
	},100);
	
	setTimeout(function(){
		$('#bird2').css('display','block');
		setTimeout(function(){
			startTranslate('bird2',270,-5);
		},100);
	},500);
	
	setTimeout(function(){
		$('#bird3').css('display','block');
		setTimeout(function(){
			startTranslate('bird3',50,350);
		},100);
	},500);
	
	
	setTimeout(function(){
		$('#frame2').css('display','block');
		fadeOutImg('frame1',0.3);
	},1100);
	
	setTimeout(function(){
		fadeOutImg('frame2',0.5);
		fadeInImg('frame3',0.5);
	},1500)
	
	setTimeout(function(){
		fadeOutImg('frame3',0.5);
	},2500);
	
	setTimeout(function(){
		fadeInImg('frame4',0.5);
	},3250);
	
	setTimeout(function(){
		fadeInImg('logo',0.5);
	},4000);
	setTimeout(function(){
		$('#logo').css('top','530px');
	},4250);
}

function enableTransition(id,styles,times,timefunctions){
	var transitionProperties = "";
	for(var i=0;i<styles.length;i++){
		transitionProperties += styles[i];
		if(styles.length > 1 && i < styles.length -1){
			transitionProperties += ',';
		}
	}
	
	var transitionTimes = "";
	for(var i=0;i<times.length;i++){
		transitionTimes += times[i] + 's';
		if(styles.length > 1 && i < times.length -1){
			transitionTimes += ',';
		}
	}
	
	var transitionTimeFunctions = "";
	for(var i=0;i<timefunctions.length;i++){
		transitionTimeFunctions += timefunctions[i];
		if(styles.length > 1 && i < timefunctions.length -1){
			transitionTimeFunctions += ',';
		}
	}
	
	$('#'+id).css('-webkit-transition-property',transitionProperties);
	$('#'+id).css('-moz-transition-property',transitionProperties);
	$('#'+id).css('-o-transition-property',transitionProperties);
	$('#'+id).css('transition-property',transitionProperties);
	
	$('#'+id).css('-webkit-transition-duration',transitionTimes);
	$('#'+id).css('-moz-transition-duration',transitionTimes);
	$('#'+id).css('-o-transition-duration',transitionTimes);
	$('#'+id).css('transition-duration',transitionTimes);
	
	$('#'+id).css('-webkit-transition-timing-function',transitionTimeFunctions);
	$('#'+id).css('-moz-transition-timing-function',transitionTimeFunctions);
	$('#'+id).css('-o-transition-timing-function',transitionTimeFunctions);
	$('#'+id).css('transition-timing-function',transitionTimeFunctions);
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
 