//https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

function solution(N) {
  var gaps = [];
  var zeros = 0;
  var binaryRep = N.toString(2); //converts N to binary number
  
  binaryRep.split('').forEach(char => {
    if (char === '0') {zeros++;
    } else {
      gaps.push(zeros);
      zeros = 0;
    }
  });
  return gaps.sort((a, b) => b - a)[0];
}