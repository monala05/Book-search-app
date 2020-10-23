$(document).ready(function(){
      var $divs = $("#books");
      var key = '&key=AIzaSyDZJ8zBoAGwQDJ5krJJ3E8KZVXLuUqZE7k'
      var book;

      $("#search-button").click(function(){
      $divs.html('');
       book = $("#search-box").val()
       $.ajax({
         type: 'GET',
         dataType: "json",
         url: 'https://www.googleapis.com/books/v1/volumes?q='+ book + key,
         success: function(res){
           console.log(res)
           displayResults(res);
         }
       });
        $("#search-box").val("");
        return false
      });
      function displayResults(res){
        for(var i = 0; i < res.items.length; i++){
          $divs.append('<li class = "card center text-center"> <strong>Title:</strong>' + res.items[i].volumeInfo.title +'<br> <strong>Author: </strong>'
          +  res.items[i].volumeInfo.authors + '<br> <strong>ISBN-13:</strong> ' + res.items[i].volumeInfo.industryIdentifiers[1].identifier + '</li>');
          $divs.append('<div class = "center"><img src = ' + res.items[i].volumeInfo.imageLinks.thumbnail  +' class = card></div>');
          $divs.append('<a class="btn btn-primary mb-3" href='+res.items[i].volumeInfo.infoLink+' role="button">More info!</a>')
          //$divs.append('<a href =' + res.items[i].volumeInfo.infoLink + ' class= btn btn-info btn-danger>' +'link'+ '</a>');
        }
      }

  });
