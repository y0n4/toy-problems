/*
  return true if passed string is a valid us number
  the number is in any type of format

  some conditions u want to consider
    just get the number by itself, should be a total of 10
    unless can only have 1 as country code, so 11 as total
*/

function telephoneCheck(str) {
  let totalDigits = [];
  let acceptFormat = ['(', ')', '-', ' '];
  let totalParens = {
    left: 0,
    right: 0
  };
  
  if(str[0] === '-' || '(' && str[str.length-1] === ')') return false;

  for(let i = 0; i < str.length; i++) {
    if(acceptFormat.indexOf(str[i]) === -1 && isNaN(parseInt(str[i]))) return false;
    if(str[i] === '(') totalParens.left++;
    if(str[i] === ')') totalParens.right++;
    if(!isNaN(parseInt(str[i]))) totalDigits.push(str[i]);
  };

  if(totalParens.left === totalParens.right) {
    if(totalDigits.length === 11 && totalDigits[0] === '1') return true;
    if(totalDigits.length === 10) return true;
    else return false;
  };
  return false;
}
telephoneCheck("555-555-5555");