$(document).ready(function(){
	$("<img/>").attr("src","img_banner/230x498_bg.jpg").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_1.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_2.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_3.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_4.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_5.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_6.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_7.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_8.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_9.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_10.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_11.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_12.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_13.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_14.png").load(preload);	
	$("<img/>").attr("src","img_banner/230x498_15.png").load(preload);
    $("<img/>").attr("src","img_banner/230x498_16.png").load(preload);		
});

loaded = 0;

function preload(){
	if(loaded == 16){
		$('#bg').css('display','block');		
		setTimeout(function(){start();},1000);
	}
	loaded ++;
}

function start(){
	fadeInImg('item1',1);
	setTimeout(function(){
		var top = parseFloat($('#item1').css('top'));
		$('#item1').css('top',(top + 50)+'px');
	},1250);
	
	setTimeout(function(){
		rotateImage('item1',0.5);
	},2000);
	
	
	setTimeout(function(){
		var count1 = 0;
		$('#item2').css('display','block');
		var interval1 = setInterval(function(){
			var top = parseFloat($('#item2').css('top'));
			var left = parseFloat($('#item2').css('left'));
			
			if(count1 <= 10){
				$('#item2').css('top',(top-5)+'px');
				$('#item2').css('left',(left-4)+'px');				
			}
			else{
			   $('#item2').css('top',(top+5)+'px');
			   $('#item2').css('left',(left-2)+'px');
			   $('#item2').css('z-index',1);
			   
			   if(count1 >= 17){
				    clearInterval(interval1);			    
			   }
			}
			
			count1++;
		},30);
		
		var count2 = 0;
		$('#item3').css('display','block');
		var interval2 = setInterval(function(){
			var top = parseFloat($('#item3').css('top'));
			var left = parseFloat($('#item3').css('left'));
			
			if(count2 <= 10){
				$('#item3').css('top',(top-5)+'px');
				$('#item3').css('left',(left+1)+'px');
			}
			else{
			    $('#item3').css('top',(top+3)+'px');
				$('#item3').css('z-index',1);
				if(count2 >= 14){
					clearInterval(interval2);				
				}
			}
			
			count2++;
		},30);
		
		
		var count3 = 0;
		$('#item4').css('display','block');
		var interval3 = setInterval(function(){
			var top = parseFloat($('#item4').css('top'));
			var left = parseFloat($('#item4').css('left'));
			
			if(count3 <= 10){
				$('#item4').css('top',(top-11)+'px');
				$('#item4').css('left',(left-6)+'px');
			}
			else{
				clearInterval(interval3);
			}
			
			count3++;
		},30);
		
		
		var count4 = 0;
		$('#item5').css('display','block');
		var interval4 = setInterval(function(){
			var top = parseFloat($('#item5').css('top'));
			var left = parseFloat($('#item5').css('left'));
			
			if(count4 <= 10){
				$('#item5').css('top',(top-9.5)+'px');
				$('#item5').css('left',(left+2)+'px');
			}
			else{
				clearInterval(interval4);
			}			
			count4++;
		},30);
		
		
		
		var count5 = 0;
		$('#item6').css('display','block');
		var interval5 = setInterval(function(){
			var top = parseFloat($('#item6').css('top'));
			var left = parseFloat($('#item6').css('left'));
			
			if(count1 <= 10){
				$('#item6').css('top',(top-17)+'px');
				$('#item6').css('left',(left+2)+'px');
			}
			else{
				clearInterval(interval5);
			}
			
			count5++;
		},30);
		
		
		
		var count6 = 0;
		$('#item7').css('display','block');
		var interval6 = setInterval(function(){
			var top = parseFloat($('#item7').css('top'));
			var left = parseFloat($('#item7').css('left'));
			
			if(count6 <= 10){
				$('#item7').css('top',(top-15)+'px');
				$('#item7').css('left',(left+7)+'px');
			}
			else{
				clearInterval(interval6);
			}
			
			count6++;
		},30);
		
		
		
		var count7 = 0;
		$('#item8').css('display','block');
		var interval7 = setInterval(function(){
			var top = parseFloat($('#item8').css('top'));
			var left = parseFloat($('#item8').css('left'));
			
			if(count7 <= 10){
				$('#item8').css('top',(top-9.5)+'px');
				$('#item8').css('left',(left+5)+'px');
			}
			else{
				clearInterval(interval7);
			}
			
			count7++;
		},30);
		
		
		
		var count8 = 0;
		$('#item9').css('display','block');
		var interval8 = setInterval(function(){
			var top = parseFloat($('#item9').css('top'));
			var left = parseFloat($('#item9').css('left'));
			
			if(count8 <= 10){
				$('#item9').css('top',(top-4)+'px');
				$('#item9').css('left',(left+5.5)+'px');
			}
			else{
				clearInterval(interval8);
			}
			
			count8++;
		},30);
		
		
		var count9 = 0;
		$('#item10').css('display','block');
		var interval9 = setInterval(function(){
			var top = parseFloat($('#item10').css('top'));
			var left = parseFloat($('#item10').css('left'));
			
			if(count9 <= 10){
				$('#item10').css('top',(top-5)+'px');
				$('#item10').css('left',(left+3)+'px');
			}
			else{
			    $('#item10').css('top',(top+4)+'px');
				$('#item10').css('left',(left+1)+'px');
				$('#item10').css('z-index',4);
				if(count9 >= 20){
					clearInterval(interval9);
				}
			}
			
			count9++;
		},30);		
		
		var count10 = 0;
		$('#item11').css('display','block');
		var interval10 = setInterval(function(){
			var top = parseFloat($('#item11').css('top'));
			var left = parseFloat($('#item11').css('left'));
			
			if(count10 <= 10){
				$('#item11').css('top',(top-6)+'px');
				$('#item11').css('left',(left-2.5)+'px');
			}
			else{
				clearInterval(interval10);
			}
			
			count10++;
		},30);
		
		
		var count11 = 0;
		$('#item12').css('display','block');
		var interval11 = setInterval(function(){
			var top = parseFloat($('#item12').css('top'));
			var left = parseFloat($('#item12').css('left'));
			
			if(count11 <= 10){
				$('#item12').css('top',(top-7)+'px');
				$('#item12').css('left',(left+4.6)+'px');
			}
			else{
				clearInterval(interval11);
			}
			
			count11++;
		},30);
		
		
		var count12 = 0;
		$('#item13').css('display','block');
		var interval12 = setInterval(function(){
			var top = parseFloat($('#item13').css('top'));
			var left = parseFloat($('#item13').css('left'));
			
			if(count12 <= 10){
				$('#item13').css('top',(top-10)+'px');
				$('#item13').css('left',(left-1)+'px');
			}
			else{
				clearInterval(interval12);
			}
			
			count12++;
		},30);		
	},2500);
	
	setTimeout(function(){
		fadeOutImg('item',1);
	},4000);
	setTimeout(function(){
		fadeInImg('item14',0.5);
	},5000);
	setTimeout(function(){
		fadeOutImg('item14',0.5);
	},6000);
	setTimeout(function(){
		fadeInImg('item15',1);
	},6500);
	setTimeout(function(){
		fadeInImg('item16',1);
	},7000);
}
	
function moveObject(id,delta){
	var left = parseFloat($('#'+id).css('left'));
	$('#'+id).css('left',(left - delta)+'px');
}

function rotateImage(id, time){
	$('#'+id).css('display','block');
	$('#'+id).css('-moz-animation','rotate '+time+'s ease-in-out');
	$('#'+id).css('-webkit-animation','rotate '+time+'s ease-in-out');
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
