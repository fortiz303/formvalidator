'use strict';

//create an array with characters we only accept
let valid = ['0','1','2','3','4','5','6','7','8','9','10','/'];
//makes sure the HTML is fully loaded
$(document).ready(function(){
  //defines variables
  let submit = $('#submit');
  let input = $('#input');
  let resultsBox = $('#results');
//attach click listener
  submit.click(function() {
  //when clicked, create a variable holding the value of the input
    let bday = input.val();
    //check that input character is 10 chars
    if (bday.length == 10){
      //grab the first character
      var currentChar = bday.charAt(0);

      var invalid;

      for (var charCounter = 0; charCounter < bday.length; charCounter++){



      if(!invalid){
        resultsBox.html(currentChar + ': is valid');
      } else{
        resultsBox.html(currentChar + ': is invalid');
      }

    }else(
      resultsBox.html('this is not a valid bday')
    )


  }

}

if(!invalid) {
  results.html('bday is valid')
}
