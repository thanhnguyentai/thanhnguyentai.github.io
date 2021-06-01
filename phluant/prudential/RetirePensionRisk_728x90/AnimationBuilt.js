/*
 * Depend on AnimationBase.js
 */

AnimationBuilt = {
	/*
	 * ------------------------------------------------------------------------------------------------------
	 * 	REUSE ANIMATION
	 * ------------------------------------------------------------------------------------------------------
	 */
		
	arrowPoint: function(id, deltax,number_move,time,timeFunc){
		var moveArrow = function(){
			AnimationBase.transform2d(id,1,0,deltax,0,false,false,time,timeFunc);
		};
		
		var moveArrowBack = function(){
			AnimationBase.transform2d(id,1,0,0,0,false,false,time,timeFunc);
		} ;
		var count = 0;
		$('#'+id).bind(AnimationBase.getAnimationEndName(), function(){
			count++;
			if(count % 2 !=0){
				moveArrowBack();
			}
			else if(count/2 < number_move){
				moveArrow();
			}
			else{
				$('#'+id).unbind(AnimationBase.getAnimationEndName());
			}
		});
		
		moveArrow();
	},
	
	fadeIn: function(id, time){
		if($('#'+id).css('display') == 'none'){
			AnimationBase.changeTimeAnimation(id,0);
			$('#'+id).css('opacity',0);
			$('#'+id).css('display','block');
			setTimeout(function(){
				AnimationBase.changeTimeAnimation(id,time);
				$('#'+id).css('opacity',1);
			},100);
		}
		else{
			$('#'+id).css('opacity',1);
		}
	},
		
	fadeOut: function(id, time){
		$('#'+id).bind(AnimationBase.getAnimationEndName(), function(){
			$('#'+id).css('display','none');
			$('#'+id).unbind(AnimationBase.getAnimationEndName());
		});
		
		$('#'+id).css('opacity',0);
	}
};