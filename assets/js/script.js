//News Data API
var req = 'https://newsdata.io/api/1/news?apikey=pub_30896f648b6b5255ab2ed8adea68e18e48eba&q=anxiety%20OR%20depression%20OR%20wellness&country=us&language=en&category=health'
let updateArticles = function (articles){
    if (articles.length >= 3) {
        let article1title = document.querySelector("#article-1 h2")
        let article2title = document.querySelector("#article-2 h2")
        let article3title = document.querySelector("#article-3 h2")
        let article1link = document.querySelector("#article-1 a")
        let article2link = document.querySelector("#article-2 a")
        let article3link = document.querySelector("#article-3 a")
        let article1description = document.querySelector("#article-1 p")
        let article2description = document.querySelector("#article-2 p")
        let article3description = document.querySelector("#article-3 p")
        article1title.textContent = articles[0].title
        article2title.textContent = articles[1].title
        article3title.textContent = articles[2].title
        article1link.href = articles[0].link
        article2link.href = articles[1].link
        article3link.href = articles[2].link
        article1description.textContent = articles[0].description
        article2description.textContent = articles[1].description
        article3description.textContent = articles[2].description
    }
}

fetch(req)
.then(function (response) {
   if (response.ok) {
      console.log(response);
      response.json().then(function (data) {
        console.log(data.results[0,1,2]);
        updateArticles(data.results)
    });
    } else {
              alert('Error: ' + response.statusText);
            }
          })
          .catch(function (error) {
            alert('Unable to connect');
          });

//New York Times API
var articlesEl = document.querySelector('#articles');
//NYT API key
var APIKey = '9aowgcszLqFbGZEfQ1zABNeVTAnbhbrb';


//Change q={search} for options
var getArticles = function () {
    var apiUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=exercise&api-key=' + APIKey;
      console.log(apiUrl) 
          fetch(apiUrl)
            .then(function (response) {
              if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                console.log(data);
                printResults(data);
                });
              } else {
              alert('Error: ' + response.statusText);
              }
              })
              .catch(function (error) {
            alert('Unable to connect');
          });
};
          
function printResults(resultObj) {
  console.log(resultObj);
          
    var articles = resultObj.response.docs
          
          
for (let i=0; i < 3; i++) {
  articlesEl.children[i].getElementsByTagName("h7")[0].textContent=articles[i].headline.main
  articlesEl.children[i].getElementsByTagName("a")[0].href=articles[i].web_url
}
 //children gets divs

}
          
getArticles()
          
