$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var textInput = $("#input").val();

    var words = textInput.split(" ");
    var wordCounts = {};

    words.forEach(function(word){
      if (wordCounts[word] === undefined) {
        wordCounts[word] = 1;
      }
      else {
        wordCounts[word]++;
      }
    });

    console.log(wordCounts);
  });
});
