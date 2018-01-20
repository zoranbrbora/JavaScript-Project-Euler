const questionBox = document.getElementsByClassName('js-question')[0];
const resultBox = document.getElementsByClassName('js-result')[0];

/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.*/

/*(function(){
  let question = 'Find the sum of all the multiples of 3 or 5 below 1000.';
  let multiples = [];
  let multiplesOfThree = [];
  let multiplesOfFive = [];

  function makeArrays(multiArray, num) {
    let multiplyNum;
    for (let i = 1; i < 350; i++) {
      multiplyNum = num * i;
      if (multiplyNum<= 1000) {
        multiArray.push(multiplyNum);
      } else {
        break;
      }
    }
    return multiArray;
  }

  multiplesOfThree = makeArrays(multiplesOfThree, 3);
  multiplesOfFive = makeArrays(multiplesOfFive, 5);

  function sumOfMultiples(multiArray) {
    let sumOfMulti = multiArray.reduce((a, b) => {
      return a + b;
    });
    return sumOfMulti;
  }
  let sumOfThree = sumOfMultiples(multiplesOfThree);
  let sumOfFive = sumOfMultiples(multiplesOfFive);

  multiples = multiplesOfThree.concat(multiplesOfFive);
  multiples.sort(function(a, b){return a - b});

  multiples = multiples.toString();
  multiples = multiples.replace(/,/g, ' ');

  questionBox.innerHTML = question;
  resultBox.innerHTML = `Sum of multiples of three: ${sumOfThree}.
  <hr />
  Sum of multiples of five: ${sumOfFive}.
  <hr />
  All multiples: <br />${multiples}`;
})();*/
