import React from 'react';
import {Link} from 'react-router';

/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.
*/

/*
PAO: Instead of checking if a number is divisible by all numbers we can check if it's divisible by any of the prime numbers up to
that number. This is a lot faster. For example prime numbers: 2, 3, 4, 7, 11, 13. To check if 9 is prime we check 9%2 = true,
9%3 = false therefore not a prime. To check if 13 is a prime we would mod agains all primes up to 13. That would show us it's a prime
*/
class Problem10 extends React.Component{
  constructor(props, context) {
    super(props, context);
  }

  getSummationOfPrimesBelow(limit){
    let primesFound = [2,3];
    let numberCounter = 3;

    if (limit === 0){
      return 0;
    }

    if (limit === 2){
      return 0;
    }

    if (limit === 3){
      return 2;
    }

    let sum = 5;

    while(numberCounter < limit){
      let isPrime = true;

      for (let i = 0; i <= Math.sqrt(numberCounter) ; i++){
        if (numberCounter % primesFound[i] === 0){
          isPrime = false;
          continue;
        }
      }

      if(isPrime){
        sum = sum + numberCounter;
        primesFound.push(numberCounter);
      }

      numberCounter = numberCounter + 2;
    }

    return sum;
  }


  render(){
    return (
      <div>
        <h1>Summation of primes</h1>
        <h4>The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17. Find the sum of all the primes below two million.</h4>
        <p>Answer: {this.getSummationOfPrimesBelow(2000000)}</p>
      </div>
    );
  }
}

export default Problem10;
