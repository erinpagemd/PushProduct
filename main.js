$(document).ready(initialize);

function initialize(){

  $('#clear').click(function(evt){
    evt.preventDefault();
    $('#input').val(" ");
    $('#answer').val(" ");
    numbers = [];
  })

  var numbers = [];
  $('#push').click(function(evt){
    evt.preventDefault();
    var raw = $('#raw').val();
    raw = parseInt(raw);
    numbers.push(raw);
    $('#input').val(numbers);
    $('#raw').val(' ');

  })

  $('#product').click(function(evt){
    evt.preventDefault();
    var product = 1;
    for(var i = 0; i < numbers.length; i++){
      product = product * numbers[i];
      $('#answer').val(product);
    }

  })

}
