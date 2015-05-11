var cityData = null;
var cityHtml = null;

$(document).ready(function() {
    console.log(cityData, cityHtml);
    $('#get-info-btn').on('click', function () {

        $('#more-stuff').empty();


        $.get('location.html', function (data) {
            cityData = data;
            $("#more-stuff").append(cityData);
        });

        $.get('data.json', function (data) {

            cityHtml = data;

            for (var i = 0; i < cityHtml.locations.length; i++) {

                var cityName = cityHtml.locations[i].location;
                var people = cityHtml.locations[i].population;
                var citySize = cityHtml.locations[i].area;

                console.log("It worked");
                $(".location-container").prepend("<div class='well col-md-4'><p>City: " + cityName + "</p><p>Population: " + people + "</p><p>Area: " + citySize + "</p><button class='btn btn-info'>Remove</button></div>").hide().fadeIn("slow");
            }

        });
        $("#more-stuff").on('click', 'button', function () {
            $(this).parent().fadeOut("slow");
        });
    });
});