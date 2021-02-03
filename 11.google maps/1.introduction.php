<!DOCTYPE html>
<html>
    <head>
        <title>Introduction to Google Maps Javascript API</title>
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
<!--      is div mai humara map hoga ,div ki id ha "mao"-->
        <div id="map"></div>
        
<!--       humko script mai map ka source batana hoga kaha and key add karni hogi joh humne generate ki hai humari we page ke liye, procedure yeh hai key generate karne ka

go to google.maps.api website -> go to DOCUMENTATAION section -> select 'MAPS JAVASCRIPT API' -> then go for 'GET AN API KEY' ->

then go for the link " Google Cloud Platform Console." -> then go to "CREDENTIAL" section and generate an key -> then ENABLE 'maps javascript api' .

-->
        <script>
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
    </script>
<!--        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBOnCixHmrgoNlHr5t16-HJWrdaL-mB_W4"></script>-->
          <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBOnCixHmrgoNlHr5t16-HJWrdaL-mB_W4&callback=initMap"
  type="text/javascript"></script>
<!--
        <script>
            
            //set map options
            //vese toh joh indian template hoga waha pe key ko inable karne ka usme diya hoga latitude or langitude jab aap 'maps javascript api' page pe jaoge ,maine wahi se kiya hai copy ,yeh centering ke liye hai map ki,india ka latitude and langitude yeh hai .
            //mapTypeId: google.maps.MapTypeId.SATELLITE isko define karna isliye jaruri hai hume view konsa chaiye woh batana hoga
            var myLatLng = {lat: -34.397, lng: 150.644},
            var mapOptions = {
                center: myLatLng,
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP
                
            };
            
            //create map
            // sbe pehle object create karna hoga constructor se jisme do parameters hote hai pehla jisme google map display karna hai , and dusra variable name jisme options ho mean map ki property dfine karni hai.
            var map = new google.maps.Map(document.getElementById('map'), mapOptions);
            
            //setting the mapTypeId upon construction
//            map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
        </script>
-->
    </body>

</html>