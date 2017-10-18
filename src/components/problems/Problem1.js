import React from 'react';
import {Link} from 'react-router';

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

class Problem1 extends React.Component{
  constructor(props, context) {
    super(props, context);
  }

  getSumOfMultiplesThreeAndFiveBelow(limit){
    let multiplesFound = [];
    let numberCounter = 1;

    while(numberCounter < limit){

      if(numberCounter%3 === 0 || numberCounter%5 ===0){
        multiplesFound.push(numberCounter);
      }

      numberCounter++;
    }

    const sum = multiplesFound.reduce((a,b) => a+b, 0);

    return sum;
  }

  render(){
    return (
      <div>
        <h1>Multiples of 3 and 5</h1>
        <h4>If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.</h4>
        <p>Answer: {this.getSumOfMultiplesThreeAndFiveBelow(1000)} </p>
      </div>
    );
  }
}

export default Problem1;
