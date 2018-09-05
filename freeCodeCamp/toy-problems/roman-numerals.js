var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

function convertToRoman(num) {
  var roman = '';
  for(var i = 0; i < numbers.length; i++) {
    if(numbers[i] <= num) {
      roman+= romans[i];
      num-= numbers[i];
      i = -1;
    }
  }
 return roman;
}