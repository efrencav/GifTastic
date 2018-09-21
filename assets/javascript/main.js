var apikey = "lyjGjWxcgbDM3z1AfvMYWxbRhsXmOyC4"
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + q + "&api_key=" + apikey + "&limit=" + limit;
var topics = ["parrot", "goose", "duck", "cat", "zebra"];
var q = $('#searchTerm').val();
var limit = 10;
var rating = "";

$(".gif").on("click", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");

    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
    $.ajax({
        url: queryURL,
        method: "GET"
    })
  
    .then(function(response){
        var results = response.data;
        for (var i = 0; i < results.lenth; i++){
            if(results[i].rating !== "r" && results[i].rating !== "pg-13") {
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.fixed_height.url);
  
                gifImage.append(gitImage);
                $("#gifs-here").prepend(gifImage);
            }
        }
    });
  });


  
