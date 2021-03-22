// Jquery call //

{/* <script>
        $(document).ready(function() {

        });
    </script> */}

    var city = "Salford";
    // Integrated an API from openweathermap with weather details for Salford. From the dataset provided I took the icon, weather description, current temperature and the maximum and minimum temperatures //
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=8d709df59e1576a5be785a7d588937c9", function(data){
        console.log(data);
            var icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
            var temp = Math.floor(data.main.temp);
            var weather = data.weather[0].main;
            var tempMax = Math.floor(data.main.temp_max);
            var tempMin = Math.floor(data.main.temp_min);

            $(".icon").attr('src', icon);
            $(".weather").append(weather);
            $(".temp").append(temp);
            $(".tempMax").append(tempMax);
            $(".tempMin").append(tempMin);
          }
    );