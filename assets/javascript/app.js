
 $("#search").on("click", function(){
  event.preventDefault();
  var article_search = $(this).attr("data-article");
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?=" + article_search + "&apiKey=6e741a59e1244940bfdc0b372e710931";

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    });

  });

