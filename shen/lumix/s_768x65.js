$(document).ready(function(){
		
	$("<img/>").attr("src","img_banner/item1_768x65.png").load(preload);
	$("<img/>").attr("src","img_banner/item2_768x65.png").load(preload);
	$("<img/>").attr("src","img_banner/item3_768x65.png").load(preload);
	$("<img/>").attr("src","img_banner/item4_768x65.png").load(preload);
	$("<img/>").attr("src","img_banner/item5_768x65.png").load(preload);
	$("<img/>").attr("src","img_banner/item6_768x65.png").load(preload);	
	$("<img/>").attr("src","img_banner/item7_768x65.png").load(preload);	
	$("<img/>").attr("src","img_banner/item8_768x65.png").load(preload);	

});

loaded = 0;

function preload(){
	if(loaded == 7){
		
		$('#item1').css('display','block');
		$('#item2').css('display','block');
		$('#item3').css('display','block');
		$('#item10').css('display','block');			
		setTimeout(function(){start();},500);
	}
	loaded ++;
}

function start(){	
	setTimeout(function(){
		fadeInImg('item4',1);
	},500);
	
	setTimeout(function(){
		moveObject('item4',0,7,0.35,'linear');
	},1150);
	
	setTimeout(function(){
		fadeInImg('item5',1);
		fadeInImg('item7',1);		
	},1500);
	setTimeout(function(){
		fadeInImg('item6',1);
	},3000);
	
	setTimeout(function(){
		
		fadeOutImg('item4',1);
		fadeOutImg('item5',1);	
	},3500);
	setTimeout(function(){
		fadeInImg('item9',1);
	},4500);

}
function enable(id)
{
	$('#'+id).css('display','block');
	$('#'+id).css('-webkit-animation-fill-mode','forwards');
	$('#'+id).css('-moz-animation-fill-mode','forwards');
}
function moveObject(id,move_left,move_top,time,timeFunc){
	var left = parseFloat($('#'+id).css('left'));
	var top = parseFloat($('#'+id).css('top'));
	$('#'+id).css('left',(left - move_left)+'px');
	$('#'+id).css('top',(top - move_top)+'px');
 	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
    $('#'+id).css('-moz-transition', time + 's ' + timeFunc);
}

function enableTranformZoom(id,time,timeFunc,initScale){
    $('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
    $('#'+id).css('-moz-transition', time + 's ' + timeFunc);
    $('#'+id).css('-webkit-transform','scale('+initScale+')');
    $('#'+id).css('-moz-transform', 'scale('+initScale+')');
}    

function zoomAnimation(id,scale,time,timeFunc){
	$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
    $('#'+id).css('-moz-transition', time + 's ' + timeFunc);
    $('#'+id).css('-webkit-transform','scale('+scale+')');
    $('#'+id).css('-moz-transform','scale('+scale+')');
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
