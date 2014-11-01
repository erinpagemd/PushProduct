$(document).ready(initialize);

function initialize(){

  var numbers = [];

  $('#push').click(function(){
    var raw = $('#raw').val();
    raw = parseInt(raw);
    numbers.push(raw);
    $('#input').val(numbers);
    $('#raw').val(' ');

  })

  $('#product').click(function(){
    var product = 1;
    for(var i = 0; i < numbers.length; i++){
      product = product * numbers[i];
      $('#answer').val(product);
    }

  })

}
