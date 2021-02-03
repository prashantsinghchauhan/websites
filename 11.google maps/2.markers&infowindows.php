<!DOCTYPE html>
<html>
    <head>
        <title>Markers and Infowindows</title>
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
        <meta charset="utf-8">
        <style>
            html, body{
                height:100%;   
            }
            #map{
                height:60%;   
            }
        </style>
    </head>
    
    <body>
        <div id="map"></div>
        
        <script>
            
            
            var latlng = {lat: 28.644800, lng: 77.216721};
            var map;
            
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: latlng,
          zoom: 8
        });
          
            
            //create marker1 for new delhi
          // marker matlab location pe joh tag lagatey hai red color ka 
            var marker1Options = {
                position: latlng,//latitiude, and langitude is variable mai hai new delhi location ke
                map: map,// "map" object ko pass karna jaruri hai nahi toh page pe marker attact ni hoga location se, isko hum bad mai bhi function call krke set kar saktey markername.setMap(object name);// marker1Options.setmap(map);
                title: "This is Newdelhi",
                draggable: true,
                animation: google.maps.Animation.DROP //ANIMATION
                
            }
            var marker1 = new google.maps.Marker(marker1Options);//marker bananey ke liye object banana padega jisem 'marker1Options' koi bhi variable pass karo jisme marker ki details ho .
            
            //create InfoWindow
          //info window jab hum hover karnege ya click joh bhi functionality define karenge jis bhi marker ke liye ,uska yeh info batayegi yeh tootltip hai joh info batati.
            var contentString = "<div>This is an InfoWindow</div>";
            var infowindow = new google.maps.InfoWindow({
                content: contentString,
                maxWidth: 100
            });
            
            //add lister to the markers to show InfoWindow 
           // marker1 pe click event lagaya jisse jab hum uspe click karenge toh tooltip show hoga
          
            
            marker1.addListener("click", function(){
            infowindow.open(map, marker1);// iske first parameter mai 'map' object jisme tooltip ki location hai, 2nd mai marker ka namm "marker1" jispe tooltip lagani hai
        
            });
            
            
            
            
            
            //create marker2
            var marker2Options = {
                position: {lat:52.1337, lng: -0.4577},
                title: "This is Bedford."
            }
            var marker2 = new google.maps.Marker(marker2Options);
            marker2.setAnimation(google.maps.Animation.BOUNCE);//  hm direct object ko call krke bhi properties set kar saktey hai
            marker2.setMap(map);
          
      }
        </script>
        
        

          <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBOnCixHmrgoNlHr5t16-HJWrdaL-mB_W4&callback=initMap"
  type="text/javascript"></script>
        
    </body>

</html>