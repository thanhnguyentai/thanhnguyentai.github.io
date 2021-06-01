
$(document).ready(function(){
    init();
});

var url = "#";
var currProduct = 0;
var maxProduct = 10;
var preClick = 0;
var flag = false;
var slideWidth = 0;
var email = '';
var execution = 3;
var device = 'ipad';
function init(){
    preload('img/buttonshowyour.png');
    preload('img/expand_bg.jpg');
    preload('img/expand_email_text.png');
    preload('img/expandlogo.png');
    preload('img/footer3.jpg');
    preload('img/highlight.png');
    preload('img/legal.png');
    preload('img/legal_txt.png');
    preload('img/list.png');
    preload('img/mini.jpg');
    preload('img/next.png');
    preload('img/previous.png');
    preload('img/product11.png');
    preload('img/product12.png');
    preload('img/product13.png');
    preload('img/product14.png');
    preload('img/product15.png');
    preload('img/product16.png');
    preload('img/product17.png');
    preload('img/product18.png');
    preload('img/product19.png');
    preload('img/sidebar_left.png');
    preload('img/sidebar_right.png');
    preload('img/smEmBt.png');
    preload('img/strimmer.png');
    preload('img/x.png');
    loadText(36);
    loadTap(13);
    prepareAnimation();
    initListImage();
    
    swipePanel = document.getElementById('productListImg');
    new BindSwipeGesture(swipePanel);
    swipePanel.addEventListener('swipeleft',function(){
        $('#next').trigger('touchstart');
    });
    swipePanel.addEventListener('swiperight',function(){
        $('#previous').trigger('touchstart');
    });
}


var loaded = 0;
var numberImage = 75;
function initListImage(){
    slideWidth = 300 * maxProduct;
    $('#productListImgContent').css('width', slideWidth+'px');
}
function loadText(numberCharacter){
    var imgurl = '';
    for(var x = 0; x <numberCharacter; x++){
        (function(x){
            imgurl = 'img/ext2'+x+'.png';
            preload(imgurl);
        }(x));
        
    }
}

function loadTap(numberCharacter){
    for(var x = 1; x <= numberCharacter; x++){
        (function(x){
            preload('img/tap'+x+'.png');
        }(x));
        
    }
}

function preload(src){
    var img = new Image();
    img.onload = function(){
        if(loaded == numberImage-1){
            prepareEvent();
            setTimeout('start()',1000);
        }
        loaded ++;
    }
    img.src = src;
}
function prepareEvent(){
    if(!$.browser.msie){
        $('#mini').click(function(){
            startExpand();
        });
        
        $('#minimize').click(function(){
            fadeOutImg('expand',0.5);
        });
        
        $('#legal_close').click(function(){
            transform2d('legalContent', 1 , 0, 0, 0,false,false, 0.5 ,'linear');
        });
        $('#legal').click(function(){
            transform2d('legalContent', 1 , 0, 0, -900,false,false, 0.5 ,'linear');
        });
    }
    else{
        prepareEventIE();
    }
}

function prepareEventIE(){
    $('#mini').click(function(){
        startExpandIE();
    });
    $('#minimize').click(function(){
        fadeOutImgIE('expand',0.5);
    });
    
    $('#legal_close').click(function(){
        transform2dIE('legalContent',0,900,false,false,0.5);
    });
    $('#legal').click(function(){
        transform2dIE('legalContent',0,-900,false,false,0.5);
    });
}
function clickProduct(){
    var id = '';
    var width = 0;
    var list = $(url+'listProductItem').children();
    list.each(function(index, value){
        value.addEventListener('touchstart',function(){
            currProduct = index;
            /*
            if(currProduct!=0){
                $('#previous').css('display', 'block');
            }else $('#previous').css('display', 'none');
            if(currProduct!=(maxProduct-1)){
                $('#next').css('display', 'block');
            }else $('#next').css('display', 'none');
            */
            id = "productListImgContent";
            width = currProduct * (-300);
            transform2d(id, 1 , 0, width, 0,false,false, 0.5 ,'linear');
            changeStyleProduct(value);
            resetProduct();
            preClick = index;
        });
    });
}
function changeStyleProduct(value){
    $(value).css('background','url(./img/highlight.png)');
    $(value).css('font-size','25px');
    $(value).css('color','#FFF');
}
function resetProduct(){
    $(url+'productItem'+preClick).css('background','none');
    $(url+'productItem'+preClick).css('font-size','24px');
    $(url+'productItem'+preClick).css('color','rgb(194, 194, 194)');       
}
function scroller(){
    var height = 69 * maxProduct;
    $('.scroller').css('height',height+'px');
    $('#productList').jScroll({
        hScroll: false,
        vScroll: true
    });
}
function textAnimation(numberCharacter){
    var timeout = [];
    var id = '';
    for(var x = 0 ; x < numberCharacter; x++){
        (function(x){
            timeout[x] = setTimeout(function(){
                id = 'character'+x;
                fadeInImg(id, 0.07);
            },(x+1)*70);
        })(x);
    }
    var clear = setTimeout(function(){
        for(var x in timeout){
            clearTimeout(timeout[x]);
            clearTimeout(clear);
        }
    },numberCharacter*70);
}


function tapAnimation(numberCharacter){
    for(var x = 1 ; x <= numberCharacter; x++){
        (function(x){
            setTimeout(function(){
                fadeInImg('tap'+x, 0.07);
            },(x-1)*70);
        })(x);
    }
}


function textAnimationIE(numberCharacter){
    var timeout = [];
    var id = '';
    for(var x = 0 ; x < numberCharacter; x++){
        (function(x){
            timeout[x] = setTimeout(function(){
                id = 'character'+x;
                fadeInImgIE(id, 0.07);
            },(x+1)*70);
        })(x);
    }   
    var clear = setTimeout(function(){
        for(var x in timeout){
            clearTimeout(timeout[x]);
            clearTimeout(clear);
        }
    },numberCharacter*70);
}

function tapAnimationIE(numberCharacter){
    for(var x = 1 ; x <= numberCharacter; x++){
        (function(x){
            setTimeout(function(){
                fadeInImgIE('tap'+x, 0.07);
            },(x-1)*70);
        })(x);
    }  
}
    
function slide(){
    var id = '';
    var width = 0;
    var x = 0;
    var enableCLick = true;
    $('#previous').bind('touchstart', function(){
        if(!enableCLick)
            return;
        enableCLick = false;
        setTimeout(function(){
            enableCLick = true;
        },600);
        if(currProduct > 0){
            currProduct--;
            changeStyleProduct('#productItem'+currProduct);
            $('#next').css('display','block');
            resetProduct();
            id = "productListImgContent";  
            transform2d(id, 1 , 0, -300*currProduct, 0,false,false, 0.5 ,'linear');
            preClick = currProduct;
            /*
            if(currProduct == 0){
                $('#previous').css('display','none');
            }
            */
        }else{
            //$('#previous').css('display','none');
            currProduct = maxProduct - 1;
            changeStyleProduct('#productItem'+currProduct);
            resetProduct();
            transform2d('productListImgContent', 1 , 0, 300, 0,false,false, 0.5 ,'linear');
            transform2d('lastImage', 1 , 0, 300, 0,false,false, 0.5 ,'linear');

            setTimeout(function(){
                transform2d('productListImgContent', 1 , 0, -300*currProduct, 0,false,false, 0 ,'linear');
                transform2d('lastImage', 1 , 0, 0, 0,false,false, 0 ,'linear');
            },600);
            preClick = currProduct;
        }
    });
    $('#next').bind('touchstart', function(){
        if(!enableCLick)
            return;
        enableCLick = false;
        setTimeout(function(){
            enableCLick = true;
        },600);
            if(currProduct < (maxProduct - 1)){
                currProduct++;
                changeStyleProduct('#productItem'+currProduct);
                resetProduct();
                $('#previous').css('display','block');
                id = "productListImgContent";
                transform2d(id, 1 , 0, -300*currProduct, 0,false,false, 0.5 ,'linear');
                preClick = currProduct;
                
                /*
                if(currProduct == (maxProduct - 1)){
                    $('#next').css('display','none');
                }
                */
            }else{
                //$('#next').css('display','none');
                currProduct = 0;
                changeStyleProduct('#productItem'+currProduct);
                resetProduct();
                transform2d('productListImgContent', 1 , 0, -300*maxProduct, 0,false,false, 0.5 ,'linear');
                transform2d('firstImage', 1 , 0, -300, 0,false,false, 0.5 ,'linear');

                setTimeout(function(){
                    transform2d('productListImgContent', 1 , 0, -300*currProduct, 0,false,false, 0 ,'linear');
                    transform2d('firstImage', 1 , 0, 0, 0,false,false, 0 ,'linear');
                },600);
                preClick = currProduct;
            }

    });
}
function submitInfo(){
    $('#emailSm').bind('touchend',function(){
        email = $('#emailInput').val();
        if(isValidEmail(email)){
            sendInfo();
            $('#emailInput').val('');
        }else{
            alert('Please check your email!');
        }
    });
}
function sendInfo(){
    $.ajax({
        type:'get',
        url : 'http://www.gwallet.com/splash/walmart/submit.php?email='+email+'&execution='+execution+'&device='+device,
        type: 'GET',
        success:function(res){
            console.log(res);
        }
    });
}
function isValidEmail(email){
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i;
    return filter.test(email);
}
function prepareAnimationText(numberCharacter){
    var id = '';
    for(var x = 0; x < numberCharacter; x++){
        id = 'character'+x;
        enableTransform2d(id,1,0,0,0.5,'linear');
    }
}

function prepareAnimationTap(numberCharacter){
    for(var x = 1; x <= numberCharacter; x++){
        enableTransform2d('tap'+x,1,0,0,0.5,'linear');
    }
}

function prepareAnimation(){
    if(!$.browser.msie){
        enableTranform('mini',0.5,'linear');
        enableTranform('expand',0.5,'linear');
        enableTranform('next',0.5,'linear');
        enableTranform('previous',0.5,'linear');
        enableTranform('legal',0.5,'linear');
        enableTranform('minimize',0.5,'linear');
        enableTranform('showyourBt',0.5,'linear');
        enableTranform('emailSm',0.5,'linear');
        enableTranform('footer',0.5,'linear');
        enableTranform('sidebarleft',0.5,'linear');
        enableTranform('sidebarright',0.5,'linear');
        prepareAnimationText(36);
        prepareAnimationTap(13);
        enableTransform2d('productListImgContent',1,0,0,0.5,'linear');
        enableTransform2d('character1',1,0,0,0.5,'linear');
        enableTransform2d('lastImage',1,0,0,0.5,'linear');
        enableTransform2d('firstImage',1,0,0,0.5,'linear');
        enableTransform2d('strimmer',1,0,0,0,'linear');
        enableTransform2d('legalContent',1,0,0,0,'linear');
    }
    else{
        
    }
}

function prepareAnimationIE(){
}


function start(){
    if(!$.browser.msie){
        fadeInImg('mini',0.5);
        setTimeout(function(){
            tapAnimation(13);
        },500);
    }
    else{
        startIE();
    }
}

function startIE(){
    fadeInImgIE('mini',0.5);
    setTimeout(function(){
        tapAnimationIE(13);
    },500);
}

var alreadyAnimationExpand = false;
function startExpand(){
    fadeInImg('expand', 1);
    if(alreadyAnimationExpand)
        return;
    
    slide();
    scroller();
    clickProduct();
    textAnimation(36);
    submitInfo();
    
    alreadyAnimationExpand = true;
    
    setTimeout(function(){
        transform2d('strimmer',1,0,350,0,false,false,1,'linear');
    },4000);
}

function startExpandIE(){
    fadeInImgIE('expand', 1);
    if(alreadyAnimationExpand)
        return;
    
    slide();
    scroller();
    clickProduct();
    textAnimationIE(36);
    submitInfo();    
    
    alreadyAnimationExpand = true;
    
    setTimeout(function(){
        transform2dIE('strimmer',350,0,false,false,1);
    },4000);
}


/*-------------------------------------------------------------------------------*/
function enableTransform2d(id,scaleInit,rotateInit,centerX,centerY,time,timeFunc){
    if(time != null && timeFunc){
        $('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
        $('#'+id).css('-moz-transition', time + 's ' + timeFunc);
        $('#'+id).css('transition', time + 's ' + timeFunc);
        $('#'+id).css('-ms-transition', time + 's ' + timeFunc);
    }
    
    if(centerX != undefined && centerY != undefined){
        $('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
        $('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY+ '%');
        $('#'+id).css('transform-origin',centerX+'% ' + centerY+ '%');
        $('#'+id).css('-ms-transform-origin',centerX+'% ' + centerY+ '%');
    }
    
    $('#'+id).css('-webkit-transform','rotate('+rotateInit+'deg) ' + ' scale('+scaleInit+')');
    $('#'+id).css('-moz-transform','rotate('+rotateInit+'deg) ' + ' scale('+scaleInit+')');
    $('#'+id).css('transform','rotate('+rotateInit+'deg) ' + ' scale('+scaleInit+')');
    $('#'+id).css('-ms-transform','rotate('+rotateInit+'deg) ' + ' scale('+scaleInit+')');
    
    $('#'+id).css('-webkit-transform-style','preserve-3d');
    $('#'+id).css('-webkit-backface-visibility','hidden');
}

function transform2d(id,scale,rotate,translatex,translatey,isfadein,isfadeout,time,timeFunc,centerX,centerY){
    if(time != null && timeFunc){
        $('#'+id).css('-webkit-transition',time + 's ' + timeFunc);
        $('#'+id).css('-moz-transition', time + 's ' + timeFunc);
    }
    if(centerX != undefined && centerY != undefined){
        $('#'+id).css('-moz-transform-origin',centerX+'% ' + centerY+ '%');
        $('#'+id).css('-webkit-transform-origin', centerX+'% ' + centerY+ '%');
    }
    
    $('#'+id).css('-webkit-transform','translateX('+translatex+'px) translateY('+translatey+'px) rotate('+rotate+'deg) ' + ' scale('+scale+')');
    $('#'+id).css('-moz-transform','translateX('+translatex+'px) translateY('+translatey+'px) rotate('+rotate+'deg) ' + ' scale('+scale+')');
    if(isfadein){
        $('#'+id).css('display','block');
        var timeout = setTimeout(function(){
            $('#'+id).css('opacity',1);
            clearTimeout(timeout);
        },100);
    }
    else if(isfadeout){
        $('#'+id).css('opacity',0);
        var timeout = setTimeout(function(){
            $('#'+id).css('display','none');
        },1000*time);
    }
}

function enableTranform(id,time,timeFunc){
    $('#'+id).css('-webkit-transition', 'all '+time + 's ' + timeFunc);
    $('#'+id).css('-moz-transition','all '+ time + 's ' + timeFunc);
}

function fadeInImg(id,time){
    $('#'+id).css('display','block');
    var timeout = setTimeout(function(){
        $('#'+id).css('opacity',1);
        clearTimeout(timeout);
    },100);
}

function fadeOutImg (id,time){
    $('#'+id).css('opacity',0);
    setTimeout(function(){
        $('#'+id).css('display','none');
    },time*1000);
}

function fadeInImgIE(id,time){
    $('#'+id).css('display','block');
    setTimeout(function(){
        $('#'+id).animate({
            opacity: 1
        },time*1000);
    },100);
}
function fadeOutImgIE(id,time){
    $('#'+id).animate({
        opacity: 0
    },time*1000);
    setTimeout(function(){
        $('#'+id).css('display','none');
    },time*1000);
}

function enableZoomIE(id,width,height,top,left){
    $('#'+id).css({
        width: width+'px',
        height: height +'px',
        top: top+'px',
        left: left+'px'
    });
}

function zoomIE(id,width,height,top,left,time){
    $('#'+id).animate({
        width: width+'px',
        height: height+'px',
        top:top+'px',
        left:left+'px'
    },time*1000);
}

function transform2dIE(id,translatex,translatey,isfadein,isfadeout,time){
    if(isfadein){
        $('#'+id).css('display','block');
        var timeout = setTimeout(function(){
            if(translatex == 0){
                $('#'+id).animate({
                    opacity: 1,
                    top:'+='+translatey
                },time*1000);
            }
            else if(translatey == 0){
                $('#'+id).animate({
                    opacity: 1,
                    left:'+='+translatex
                },time*1000);
            }
            else{
                $('#'+id).animate({
                    opacity: 1,
                    left:'+='+translatex,
                    top:'+='+translatey
                },time*1000);
            }
            clearTimeout(timeout);
        },100);
    }
    else if(isfadeout){
        if(translatex == 0){
            $('#'+id).animate({
                opacity: 0,
                top:'+='+translatey
            },time*1000);
        }
        else if(translatey == 0){
            $('#'+id).animate({
                opacity: 0,
                left:'+='+translatex
            },time*1000);
        }
        else{
            $('#'+id).animate({
                opacity: 0,
                left:'+='+translatex,
                top:'+='+translatey
            },time*1000);
        }
        var timeout = setTimeout(function(){
            $('#'+id).css('display','none');
        },1000*time);
    }
    else{
        $('#'+id).animate({
            left:'+='+translatex,
            top:'+='+translatey
        },time*1000);
    }
}