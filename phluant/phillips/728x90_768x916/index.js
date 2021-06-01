var url = "#";
var currlat, currlng;
var city = '';
$(document).ready(function(){
    // ph_m.initGeocoder();
    startBanner();
});
var map = null;
var dayArray = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var weathericon = ['img/sunny.png','img/rainy.png','img/cloudy.png'];
function bindpage1(){
    $('#button1').click(function(){
        $('#page1').css('display','none');
        $('#page2').css('display','block');
        resetAll();
        getNews();
        showEach('morningnew', 'news');
    });
    $('#button2').click(function(){
        $('#page1').css('display','none');
        $('#page2').css('display','block');
        resetAll();
        getWeather(currlat,currlng);
        showEach('morningweather', 'weather');
    });
    $('#button3').click(function(){
        $('#page1').css('display','none');
        $('#page2').css('display','block');
        resetAll();
        GetMap();
        showEach('morningtraffic', 'traffic');
    });
    $('#button4').click(function(){
        $('#page1').css('display','none');
        $('#page2').css('display','block');
        resetAll();
        showEach('findastation', 'station');
        
        showStation();
    });
}
function bindpage2(){
    $('#page2button1').click(function(){
        resetAll();
        getNews();
        showEach('morningnew', 'news');
    });
    $('#page2button2').click(function(){
        resetAll();
        getWeather(currlat,currlng);
        showEach('morningweather', 'weather');
    });
    $('#page2button3').click(function(){
        resetAll();
        GetMap();
        showEach('morningtraffic', 'traffic');
    });
    $('#page2button4').click(function(){
        resetAll();
        showEach('findastation', 'station');
        
        showStation();
    });
}
function resetAll(){
    $('#findastation').css('display','none');
    $('#morningnew').css('display','none');
    $('#morningweather').css('display','none');
    $('#morningtraffic').css('display','none');
    $('#station').css('display','none');
    $('#news').css('display','none');
    $('#traffic').css('display','none');
    $('#weather').css('display','none');
    
}
function showEach(text,content){
    $('#'+text).css('display','block');    
    $('#'+content).css('display','block');
}
function getCity(){
    $.ajax({
        url:'http://api.openweathermap.org/data/2.5/weather?lat='+currlat+'&lon='+currlng+'&mode=xml',
        type: 'GET',
        success:function(res){
            var myXML = res.responseText;
            var data = $.xml2json(myXML);
            city = data.city.name;
        }
    }); 
}

var isGetWeather = false;
function getWeather(lat, lng){
    if(isGetWeather)
        return;
    var html = '';
    $.ajax({
        url:'http://api.openweathermap.org/data/2.5/forecast/daily?lat='+currlat+'&lon='+currlng+'&mode=xml',
        type: 'GET',
        beforeSend : function(){
            $('#loading').css('display','block');
        },
        success:function(res){
            $('#loading').css('display','none');
            var myXML = res.responseText;
            var data = $.xml2json(myXML);
            html ='<div class="currDay">';
            html += '<span class="title">Weather for '+data.location.name+'</span>';
            html += '<div class="info">';
            var weather = checkWeather(data.forecast.time[0].precipitation.type, data.forecast.time[0].clouds.all);
            html += '<img class="weatherlogo" src="' + weather.url + '"/>';
            html += '<div class="more-info">';
            var min = Math.round(data.forecast.time[0].temperature.min - 273);
            min = Math.round(min * 9/5 + 32);
            var max = Math.round(data.forecast.time[0].temperature.max - 273);
            max = Math.round(max * 9/5 + 32);
            html += '<span class="item" style="color: #000;font-size: 30px;margin-bottom: 3px;font-weight: bold;">' + min +' &deg;F - ' + max +' &deg;<span>F</span>';
            html += '</span>';
            html += weather.type;
            html += '</span>';
            html += '<span class="item">' + data.forecast.time[0].windDirection.code + ' at ';
            html += data.forecast.time[0].windSpeed.mps + ' mps ';
            html += '</span>';
            html += '<span class="item">Humidity: ' + data.forecast.time[0].humidity.value + data.forecast.time[0].humidity.unit;
            html += '</span>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            //4 day next
            html += '<div class="dayNext">';
            var day;
            var temp;
            for(x = 1; x < 5; x++){
                html += '<div class="dayItem">';
                html += '<span class="dayTitle">';
                temp = data.forecast.time[x].day.split('-');
                var date = new Date(temp[0],parseInt(temp[1])-1,temp[2]);
                day = date.getDay();
                html += dayArray[day];
                html += '</span>';
                weather = checkWeather(data.forecast.time[x].precipitation.type, data.forecast.time[x].clouds.all);
                html += '<img class="weatherlogo" src="' + weather.url + '"/>';
                min = Math.round(data.forecast.time[x].temperature.min - 273);
                min = Math.round(min * 9/5 + 32);
                max = Math.round(data.forecast.time[x].temperature.max - 273);
                max = Math.round(max * 9/5 + 32);
                html += '<span class="item">' + min +'&deg; <span style="color:  rgb(128, 128, 128);">' + max +'&deg;</span>';
                html += '</span>';
                html += '</div>';
            }
            html += '</div>';
            $('#weather').html(html);
            
            isGetWeather = true;
        }
    });
}

var isGetNew = false;
function getNews(){
    if(isGetNew)
        return;
    var html = '';
    $.ajaxjson({
//        url:'http://api.feedzilla.com/v1/categories/26/articles/search.json?q=Michael&title_only=1',
        url:"http://api.feedzilla.com/v1/categories/26/articles.json",
        type: 'GET',
        beforeSend : function(){
            $('#loading').css('display','block');
        },
        success : function(res){
            $('#loading').css('display','none');
            var data = res.responseText.articles;
            html = '<div class="newscontent">';
            for(var x in data){
                html += '<div class="article" onclick="openArticalDetail(\''+data[x].url+'\')">';
                html += '<div class="title">'+data[x].title+'</div>';
                html += '<div class="summarry">'+data[x].summary+'</div>';
                html += '</div>';
            }
            html += '</div>';
            $('#news').html(html);
            isGetNew = true;
        }

    });
}

function openArticalDetail(url){
    
}
function checkWeather(rain, cloud){
    if(rain!=undefined){
        var obj = {
            type : 'Rainy',
            url : weathericon[1]
        };
        return obj;
    }else if (cloud != 0){
        var obj = {
            type : 'Cloudy',
            url : weathericon[2]
        };
        return obj;
    }
    var obj = {
        type : 'Sunny',
        url : weathericon[0]
    };
    return obj;
}

var isShowTraffic = false;
function GetMap(){
    if(isShowTraffic)
        return;
    map = new Microsoft.Maps.Map(document.getElementById("currentraffic"), {credentials: "AsglErklgMF5mMJLAG3LgPDqkTG_s8-5hXNcwQOxk5LVctHcGzzDyTvyu5ItR--e", center: new Microsoft.Maps.Location(currlat, currlng), zoom: 15 });
         Microsoft.Maps.loadModule('Microsoft.Maps.Traffic', { callback: trafficModuleLoaded });
    var center = map.getCenter();
    // Add a pin to the center of the map
    var pin = new Microsoft.Maps.Pushpin(center, {text: 'A'}); 
    map.entities.push(pin);
    $('#cityname').html(city);
    
    isShowTraffic = true;
}

function stationModuleLoaded(){
    var trafficManager = new Microsoft.Maps.Traffic.TrafficManager(mapStation);
    trafficManager.show();
}

var isInitStation = false;
function showStation(){
    if(isInitStation)
        return;
    mapStation = new Microsoft.Maps.Map(document.getElementById("map_station"), {credentials: "AsglErklgMF5mMJLAG3LgPDqkTG_s8-5hXNcwQOxk5LVctHcGzzDyTvyu5ItR--e", center: new Microsoft.Maps.Location(currlat, currlng), zoom: 15 });
        Microsoft.Maps.loadModule('Microsoft.Maps.Traffic', { callback: stationModuleLoaded });
    var center = mapStation.getCenter();
    // Add a pin to the center of the map
    var pin = new Microsoft.Maps.Pushpin(center, {text: 'Me'}); 
    mapStation.entities.push(pin);
    
    isInitStation = true;
  //And finally, this code snippet can be used for getting all Phillips 66 locations within a specified radius of the geocoordinates
    var dist = 50;//The distance in miles, which can be adjusted, or omitted for the default value of 30 miles.
    var campaign_id = 77201;//The Phillips 66 campaign ID as identified in the back-end database.  This must be included.
    var limit = 5;//If a limit is not desired, this value can be left off
    $.get('http://phad.phulant.net/web_services/store_locator/?lon='+currlng+'&lat='+currlat+'&dist='+dist+'&campaign_id='+campaign_id+'&limit='+limit, function(data){
        var jsonData = jQuery.parseJSON(data);
        //var count = jsonData.results.length;
        console.log(jsonData);
        return;
        for(var i=0; i<count; i++){
            jsonData.results[i].name;
            jsonData.results[i].street;
            jsonData.results[i].city;
            jsonData.results[i].state;
            jsonData.results[i].postal;
            jsonData.results[i].phone;
            jsonData.results[i].lat;
            jsonData.results[i].lng;
            jsonData.results[i].distance;
        }
    });
}

function trafficModuleLoaded(){
    var trafficManager = new Microsoft.Maps.Traffic.TrafficManager(map);
        trafficManager.show();
}

var ph_m = {
    zip:null,
    gMapsGeocoder : null,
    initGeocoder : function(){
        ph_m.gMapsGeocoder = new google.maps.Geocoder();
    },
    isValidUSZip : function (zip) {
       return /^\d{5}(-\d{4})?$/.test(zip);
    },
    convertLatLng_to_Zip : function(address, getZip){
        var zip;
        var a = address.lat+", "+address.lng;;//'38.90091472342271, -77.02911096191406';
        var ac; // address_components
        ph_m.gMapsGeocoder.geocode({'address': a}, geocodeResult);
        function geocodeResult(response, status) {
            if (status == google.maps.GeocoderStatus.OK && response[0]) {
                ac = response[0]["address_components"];
                var city = '';
                var zipCode = '';
                for(var i=0,l=ac.length; i<l; i++){
                    if(ac[i].types){
                        for(var t=0;t<ac[i].types.length;t++){
                            if(ac[i].types[t] == "locality"){
                                city = ac[i]['short_name']; 
                                break;
                            }
                            
                            if(ac[i].types[t] == "postal_code"){
                                zipCode = ac[i]['short_name']; 
                                break;
                            }
                        }
                    }
                }
                
                displayCity(city);
                if(zipCode.length > 0){
                    
                }
            }
        }
    },
    getCurrentLocation : function(a){
        // var lat, lng, userLatLng;
        navigator.geolocation.getCurrentPosition(function(position){
            currlat = position.coords.latitude;
            currlng = position.coords.longitude;
            getCity();
            // currlat = 35;
            // currlng = 139;
            // userLatLng = {"lat" : lat, "lng" : lng};
            // ph_m.convertLatLng_to_Zip(userLatLng,a);
        },function(){
            alert('Cannot get your current location.');
        });
    }
}