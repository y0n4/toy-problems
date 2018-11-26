//arrange the numerals from greatest to least
var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

function convertToRoman(num) {
  var roman = '';
  for(var i = 0; i < numbers.length; i++) {
    if(numbers[i] <= num) { //as long as the the current roman num is less or equal to the num
      roman+= romans[i]; //add the roman character
      num-= numbers[i]; //subtract the current roman num from the num
      i = -1; //reset the index back before the beginning to get the roman character
    }
  }
 return roman;
}