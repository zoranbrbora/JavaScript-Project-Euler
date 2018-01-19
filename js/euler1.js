const questionBox = document.getElementsByClassName('js-question')[0];
const resultBox = document.getElementsByClassName('js-result')[0];

/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.*/

/*(function(){
  let question = 'Find the sum of all the multiples of 3 or 5 below 1000.';

  let multiples = [];
  let multiplesOfThree = [];
  let multiplesOfFive = [];

  for (let i = 1; i < 300; i++) {
    multiplyThree = 3 * i;
    multiplyFive = 5 * i;
    if (multiplyThree <= 1000 && multiplyFive <= 1000) {
      multiples.push(multiplyThree, multiplyFive);
      multiplesOfThree.push(multiplyThree);
      multiplesOfFive.push(multiplyFive);
    } else {
      break;
    }
  }

  let sumOfThree = multiplesOfThree.reduce((a, b) => {
    return a + b;
  });

  let sumOfFive = multiplesOfFive.reduce((a, b) => {
    return a + b;
  });

  multiples = multiples.toString();
  multiples = multiples.replace(/,/g, ' ');

  questionBox.innerHTML = question;
  resultBox.innerHTML = `Sum of multiples of three: ${sumOfThree}.
  <hr />
  Sum of multiples of five: ${sumOfFive}.
  <hr />
  All multiples: <br />${multiples}`;
})();+/
