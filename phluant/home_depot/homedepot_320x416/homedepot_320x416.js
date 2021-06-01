bannerWidth = 0;
bannerHeight = 0;
gameTree = undefined;

stop = false;
loaded = 0;
interval = undefined;
currentTimeout = 500;

collisionInterval = undefined;

dropObjects = {};
collisionObjects = {};

banner = undefined;
gameArea = undefined;

//configurable
toys = 15;
minSpeed = 1000;
maxSpeed = 4000;

collisionIntervalTime = 50;

//resolution configuration
gameTreeWidth = 130;
gameTreeHeight = 200;
droppedHeight = 416;

initialOffsetX = 30;
initialOffsetY = 90;

$(document).ready(function(){
	banner = $("#banner");
	gameArea = $('#game_area');
	$("<img/>").attr("src","img/bg.png").load(preload);
	$("<img/>").attr("src","img/bg_fr1.png").load(preload);
	$("<img/>").attr("src","img/fr1_text1.png").load(preload);
	$("<img/>").attr("src","img/fr1_text2.png").load(preload);
	$("<img/>").attr("src","img/fr1_text3.png").load(preload);
	$("<img/>").attr("src","img/bt_play.png").load(preload);
	$("<img/>").attr("src","img/leaf.png").load(preload);
	$("<img/>").attr("src","img/bt_live.png").load(preload);
	
	bannerWidth = banner.width();
	bannerHeight = banner.height();
	gameTree = $('#game_tree');
	gameTreeHeight = gameTree.height();
	
	prepare();
});


function prepare() {
	enableTransform2d('frame1',1,0,0,0,0.5,'linear');
	enableTransform2d('frame2',1,0,0,0,0.5,'linear');
	enableTransform2d('frame3',1,0,0,0,0.5,'linear');
	
	enableTransform2d('fr1_text1',1,0,0,0,0.5,'linear');
	enableTransform2d('fr1_text2',1,0,0,0,0.5,'linear');
	enableTransform2d('fr1_text3',1,0,0,0,0.5,'linear');
	
	$('#bt_play').click(function(){
		start2();
	});
	
	$('#bt_playagain').click(function(){
		replay();
	});
	
	regisDragTree();
}

function preload(){
	if(loaded == 7){
		start();
	}
	loaded++;
}

function replay(){
	start2();
}

function start(){
	animationFrame1();
};

function getTreeOffset() {
	if (gameTree.dragOffset) {
		return gameTree.dragOffset;
	}
	return {
		x: initialOffsetX,
		y: initialOffsetY
	}
}

function start2(){
	transform2d('frame1',1,0,0,0,false,true,0.5,'linear');
	transform2d('frame2',1,0,0,0,true,false,0.5,'linear');
	transform2d('frame3',1,0,0,0,false,true,0.5,'linear');
	$('#frame2').css('z-index','10');
	$('#frame1').css('z-index','1');
	$('#frame3').css('z-index','1');
	
	stopGame();
	for(var i in collisionObjects) {
		 if (collisionObjects[i])
			collisionObjects[i].remove();

	}
	collisionObjects = {};
	totalScore = 0;
	refreshScore();
	
	stop = false;
	
	var timeout2 = setTimeout(function(){	
		clearTimeout(timeout2);
		spawn();
		checkCollision();
		adjustTimeout();
	},2000);
	
}

function formatScore() {
	if (totalScore == 0)
		return "0000";
	if (totalScore < 10)
		return "0" + (totalScore * 100);
	return + (totalScore * 100);
}

function refreshScore() {
	$('#game_score').html(formatScore(totalScore));
}

function stopGame() {
	stop = true;
	clearInterval(collisionInterval);
	clearTimeout(interval);
	
	for(var i in dropObjects) {
		if (dropObjects[i])
			dropObjects[i].remove();
	}
	dropObjects = {};
}

function startFrame3(){
	var timeout = setTimeout(function(){
		start3();
		clearTimeout(timeout);
	},2000);
}

function checkCollision() {
	collisionInterval = setInterval(function() {
		for(var i in dropObjects) {
			var obj = dropObjects[i];
			if (obj) {
				var result = checkCollisionFor(obj);
				if (result) {
					totalScore++;
					refreshScore();
				}
			}
		}
	}, collisionIntervalTime);
}

function checkCollisionFor(obj) {
	var now = new Date().getTime();
	var walked = (now - obj.startTime) / obj.speed * droppedHeight;
	if (walked >= droppedHeight) {
		dropObjects[obj.index] = undefined;
		obj.remove();
		return false;
	} else {
		var x = obj.x;
		var y = walked - 100;
		
		var treeOffset = getTreeOffset();
		var treeX = treeOffset.x;
		var treeY = treeOffset.y;
		if (x >= treeX && y >= treeY && x <= treeX + gameTreeWidth && y <= treeY + gameTreeHeight) {
			var collided = false;
			if (x < treeX + gameTreeWidth/2) {
				var tmpX = treeX + (gameTreeWidth / 2) - x;
				var tmpY = gameTreeHeight / (gameTreeWidth / 2) * tmpX;
				if (tmpY < y - treeY) {
					collided = true;
				}
			} else {
				var tmpX = x - treeX - (gameTreeWidth / 2);
				var tmpY = gameTreeHeight / (gameTreeWidth / 2) * tmpX;
				if (tmpY < y - treeY) {
					collided = true;
				}
			}
			
			if (collided) {
				dropObjects[obj.index] = undefined;
				obj.remove();
				var img = $('<img style="z-index: 100;pointer-events: none;position: absolute;" src="img/toys/toy'+obj.img+'.png" />').appendTo(gameArea);
				while(collisionObjects[obj.index]) {
					obj.index++;
				}
				collisionObjects[obj.index] = img;
				img.css('top', y);
				img.css('left', 0);
				img.css('-webkit-transform', 'translate3d('+x+'px, 0, 0)');
				img.x = x - treeX;
				return true;
			}
		}
	}
	return false;
}

function adjustTimeout() {
	setTimeout(function() {
		currentTimeout = 400;
		setTimeout(function() {
			currentTimeout = 300;
			setTimeout(function() {
				stopGame();
				startFrame3();
			}, 9000);
		}, 5000);
	}, 5000);
}

function getRandom(num) {
	return Math.round((Math.random() * num));
}

function spawnItem(src, x, speed) {
	var time = new Date().getTime();
	var img = $('<img class="item-animation" style="pointer-events: none;position: absolute; top: -100px" src="img/toys/toy'+src+'.png" />');
	img.css('left', x);
	img.css('-webkit-animation-duration', speed+'ms');
	img.appendTo(gameArea);
	img.startTime = time;
	img.speed = speed;
	img.x = x;
	img.img = src;
	
	var random = Math.round(Math.random() * 10000);
	while(dropObjects[random]) {
		random++;
	}
	img.index = random;
	dropObjects[random] = img;
}

function spawn() {
	if (!stop) {
		var item = getRandom(toys);
		var x = getRandom(bannerWidth);
		var speed = getRandom((maxSpeed-minSpeed))+minSpeed;
		
		spawnItem(item, x, speed);
		
		interval = setTimeout(function() {
			clearTimeout(interval);
			spawn();
		}, currentTimeout);
	}
}

function animationFrame1(){
	var timeout = setTimeout(function(){
		transform2d('fr1_text1',1,0,0,0,false,true,0.5,'linear');
		clearTimeout(timeout);
	},4000);
	var timeout1 = setTimeout(function(){
		transform2d('fr1_text2',1,0,0,0,true,false,0.5,'linear');
		clearTimeout(timeout1);
	},4250);
	
	var timeout2 = setTimeout(function(){
		transform2d('fr1_text2',1,0,0,0,false,true,0.5,'linear');
		clearTimeout(timeout2);
	},8750);
	
	var timeout3 = setTimeout(function(){
		transform2d('fr1_text3',1,0,0,0,true,false,0.5,'linear');
		clearTimeout(timeout3);
	},9000);
}

function animationFrame2(){
	
}

function regisDragTree(){
	var offset = null; 
    var orig; var pos; 
    var start = function(e) {
    	orig = e.originalEvent;  
        pos = gameTree.position();  		
        offset = {  
            x: orig.changedTouches[0].pageX - pos.left,  
            y: orig.changedTouches[0].pageY - pos.top 
        };
    };
    var moveMe = function(e) { 
        e.preventDefault();
        orig = e.originalEvent;
        var top = orig.changedTouches[0].pageY - offset.y;
        var left = orig.changedTouches[0].pageX - offset.x;
        gameTree.css('-webkit-transform', 'translateX('+left+'px) translateY('+initialOffsetY+'px)');
        gameTree.dragOffset = {
        	x: left,
        	y: initialOffsetY
        };
        
        for(var i in collisionObjects) {
        	var obj = collisionObjects[i];
        	obj.css('-webkit-transform', 'translateX('+(left+obj.x)+'px) translateY(0)');
        }
    };
    gameTree.bind("touchstart", start);  
    gameTree.bind("touchmove", moveMe);
}

function start3(){
	transform2d('frame2',1,0,0,0,false,true,0.5,'linear');
	transform2d('frame3',1,0,0,0,true,false,0.5,'linear');
	$('#frame2').css('z-index','1');
	$('#frame3').css('z-index','21');
	
	$('.level').css('display','none');
	if(totalScore <= 1){
		$('#level1').css('display','block');
	}
	else if(totalScore <10){
		$('#level2').css('display','block');
	}
	else if(totalScore < 20){
		$('#level3').css('display','block');
	}
	else{
		$('#level4').css('display','block');
	}
	
	$('#final_score').html(formatScore(totalScore));
}



/*----------------------------------------------------------------------*/	
function enableTransform2d(id,scaleInit,rotateInit,centerX,centerY,time,timeFunc){
	if(time && timeFunc){
		$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
		$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	}
	
	if(centerX != undefined && centerY != undefined){
		$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
		$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY+ '%');
	}
	
	$('#'+id).css('-webkit-backface-visibility','hidden');
	$('#'+id).css('-webkit-transform','rotate('+rotateInit+'deg) ' + ' scale('+scaleInit+')');
}

function transform2d(id,scale,rotate,translatex,translatey,isfadein,isfadeout,time,timeFunc,centerX,centerY){
	if(time && timeFunc){
		$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
		$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	}
	if(centerX != undefined && centerY != undefined){
		$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
		$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY+ '%');
	}
	
	$('#'+id).css('-webkit-transform','translateX('+translatex+'px) translateY('+translatey+'px) rotate('+rotate+'deg) ' + ' scale('+scale+')');
	if(isfadein){
		$('#'+id).css('opacity',1);
	}
	else if(isfadeout){
		$('#'+id).css('opacity',0);
	}
}

/*--------------------------------------------------------------------------------------------------------------------------------------------*/
function enablePerspective(id,perspective,originx,originy){
	if(!perspective){
		$('#'+id).css('-webkit-perspective','800');
		$('#'+id).css('-moz-perspective','800');
	}
	else{
		$('#'+id).css('-webkit-perspective',perspective);
		$('#'+id).css('-moz-perspective',perspective);
	}
	
	if(originx == undefined || originy == undefined){
		$('#'+id).css('-webkit-perspective-origin','50% 50%');
		$('#'+id).css('-moz-perspective-origin','50% 50%');
	}
	else{
		$('#'+id).css('-webkit-perspective-origin',originx + '% ' + originy + '%');
		$('#'+id).css('-moz-perspective-origin',originx + '% ' + originy + '%');
	}
	
	$('#'+id).css('-webkit-backface-visibility','hidden');
	$('#'+id).css('-webkit-transform-style','preserve-3d');
}

function enableTransform3d(id,scaleInit,rotateXInit,rotateYInit,rotateZInit,centerX,centerY,time,timeFunc){
	if(time && timeFunc){
		$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
		$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	}
	
	if(centerX != undefined && centerY != undefined){
		$('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '% ');
		$('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY+ '% ');
	}
	$('#'+id).css('-webkit-transform-style','preserve-3d');
	$('#'+id).css('-webkit-transform','rotateX('+rotateXInit+'deg) ' + 'rotateY('+rotateYInit+'deg) ' +  'rotateZ('+rotateZInit+'deg) ' + ' scale('+scaleInit+')');
}

function transform3d(id,scale,rotatex,rotatey,rotatez,translatex,translatey,translatez,isfadein,isfadeout,time,timeFunc){
	if(time && timeFunc){
		$('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
		$('#'+id).css('-moz-transition', time + 's ' + timeFunc);
	}
	
	$('#'+id).css('-webkit-transform','translateX('+translatex+'px) translateY('+translatey+'px) translateZ('+translatez+'px) rotateX('+rotatex+'deg) ' + ' rotateY('+rotatey+'deg) ' + ' rotateZ('+rotatez+'deg) ' + ' scale('+scale+')');
	
	if(isfadein){
		$('#'+id).css('opacity',1);
	}
	else if(isfadeout){
		$('#'+id).css('opacity',0);
	}
}

