/* for (let current = 0;current < 100 ; current = current + 1) {
    if (current % 2 == 0) {
      console.log(current);
      break;
    }
  }
  
  This was a bad piece of code from 'Essential JavaScript */

  

  

function oddNumbers(currentNumber) {
// If a number is odd, then that number % 2 !=== 0
// If a number is even, then that number % 2 === 0

if (currentNumber %2 === 0){
  console.log("The number: " + currentNumber + " is even.")} else {
      console.log("The number: " + currentNumber + " is odd.")
    }
}

// start your engines
oddNumbers(11)
oddNumbers(50)
oddNumbers(81)
oddNumbers(3.14)
oddNumbers("puppy")

// This needs to have a check that the value of currentNumber is an actual integer number added