import React from 'react';
import {Link} from 'react-router';

/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10001st prime number?
*/

/*
PAO: Instead of checking if a number is divisible by all numbers we can check if it's divisible by any of the prime numbers up to
that number. This is a lot faster. For example prime numbers: 2, 3, 4, 7, 11, 13. To check if 9 is prime we check 9%2 = true,
9%3 = false therefore not a prime. To check if 13 is a prime we would mod agains all primes up to 13. That would show us it's a prime
*/
class Problem7 extends React.Component{
  constructor(props, context) {
    super(props, context);
  }

  getNPrime(nthPrime){
    let primesFound = [2];
    let numberCounter = 2;

    while(primesFound.length < nthPrime){
      let isPrime = true;

      primesFound.forEach((prime) => {
        if(numberCounter%prime === 0){
          isPrime = false;
        }
      });

      if(isPrime){
        primesFound.push(numberCounter);
      }

      numberCounter++;
    }

    return primesFound[primesFound.length-1];
  }

  render(){
    return (
      <div>
        <h1>10001st prime</h1>
        <h4>By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13. What is the 10 001st prime number?</h4>
        <p>Answer: {this.getNPrime(10001)}</p>
      </div>
    );
  }
}

export default Problem7;
