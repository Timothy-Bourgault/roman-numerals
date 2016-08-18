//BUSINESS LOGIC
function numberToRoman(number) {
  var ones = ["","I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var hundos = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var thousands = ["", "M", "MM", "MMM"];
  var stringDigitArray = number.split("").reverse();
  var digitArray = [];
  for (var i = 0; i < stringDigitArray.length; i++) {
    digitArray[i] = parseInt(stringDigitArray[i]);
  };
  alert(digitArray);
  for (var i = 0; i < digitArray.length; i++) {
    if(!digitArray[i]) {
      digitArray[i]=0;
    }
  }
  return thousands[digitArray[3]]+hundos[digitArray[2]]+tens[digitArray[1]]+ones[digitArray[0]];
};




//USER INTERFACE
$(function() {
  $("form").submit(function(event) {
  event.preventDefault();
  var number = $("input").val();

  $("#romanNumerals").text(numberToRoman(number));
  });
});
