$(document).ready(function(){
	$("<img/>").attr("src","img_banner/bg_479x233.png").load(preload);	
	$("<img/>").attr("src","img_banner/item1_479x233.png").load(preload);
	$("<img/>").attr("src","img_banner/item2_479x233.png").load(preload);
	$("<img/>").attr("src","img_banner/item3_479x233.png").load(preload);
	$("<img/>").attr("src","img_banner/item4_479x233.png").load(preload);
	$("<img/>").attr("src","img_banner/item5_479x233.png").load(preload);
	$("<img/>").attr("src","img_banner/item6_479x233.png").load(preload);	
	$("<img/>").attr("src","img_banner/item7_479x233.png").load(preload);	
	$("<img/>").attr("src","img_banner/item8_479x233.png").load(preload);	
     $("<img/>").attr("src","img_banner/frame_479x233.png").load(preload);	
});

loaded = 0;

function preload(){
	if(loaded == 9){
		$('#bg').css('display','block');
		$('#item1').css('display','block');
		$('#item2').css('display','block');
		$('#item3').css('display','block');		
		setTimeout(function(){start();},500);
	}
	loaded ++;
}

function start(){	
	setTimeout(function(){
		fadeInImg('item4',0.5);
	},500);
	
	setTimeout(function(){
	moveObject('item4',40,0,0.4,'linear');
	},1000);
	setTimeout(function(){
	moveObject('item4',0,5,0.2,'linear');
	},1400);
	setTimeout(function(){	
		fadeInImg('item5',1);
		fadeInImg('item7',1);
		fadeInImg('item10',1);
	},1600);
	
	setTimeout(function(){
		fadeInImg('item6',1);
		
	},2500);
	
	setTimeout(function(){
		fadeOutImg('item4',1);
		fadeOutImg('item6',1);		
		fadeOutImg('item5',1);
	},3500);

	setTimeout(function(){
		hide('item4');
		enable('item8');	
		fadeInImg('item11',1);
		fadeInImg('item9',1);
		enableTranformZoom('layout2',1,'linear',0.65);		
		enableTranformZoom('layout5',1,'linear',0.65);		
		moveObject('layout4',0,20,1,'linear');
	},4500);
	setTimeout(function(){
		moveObject('layout2',-10,-10,1,'linear');	
	},4500);
}

function hide(id){
	$('#'+id).css('display','none');
}

function enable(id)
{
	$('#'+id).css('display','block');
}
function moveObject(id,move_left,move_top,time,timeFunc){
	var left = parseFloat($('#'+id).css('left'));
	var top = parseFloat($('#'+id).css('top'));
	$('#'+id).css('left',(left - move_left)+'px');
	$('#'+id).css('top',(top - move_top)+'px');
 	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
    $('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	$('#'+id).css('-webkit-animation-fill-mode','forwards');
	$('#'+id).css('-moz-animation-fill-mode','forwards');
}

function enableTranformZoom(id,time,timeFunc,initScale){
    $('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
    $('#'+id).css('-moz-transition', time + 's ' + timeFunc);
    $('#'+id).css('-webkit-transform','scale('+initScale+')');
    $('#'+id).css('-moz-transform', 'scale('+initScale+')');
	$('#'+id).css('-webkit-animation-fill-mode','forwards');
	$('#'+id).css('-moz-animation-fill-mode','forwards');
}    

function zoomAnimation(id,scale,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
    $('#'+id).css('-moz-transition', time + 's ' + timeFunc);
    $('#'+id).css('-webkit-transform','scale('+scale+')');
    $('#'+id).css('-moz-transform','scale('+scale+')');
	$('#'+id).css('-webkit-animation-fill-mode','forwards');
	$('#'+id).css('-moz-animation-fill-mode','forwards');
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
