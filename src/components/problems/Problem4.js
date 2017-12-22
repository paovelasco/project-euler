import React from 'react';
import {Link} from 'react-router';

/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

class Problem4 extends React.Component{
  constructor(props, context) {
    super(props, context);
  }
  
  isPalindrome(num){
    let word = num.toString();
    let start = 0;
    let end = word.length-1;
    let isPalindrome = true;

    while(start < end){
      if(word.charAt(start) !== word.charAt(end)){
        isPalindrome = false;
      }

      start ++;
      end --;
    }

    return isPalindrome;
  }

  getLargestPalindromeProductOfTwoThreeDigitNumbers(){
    let numbers = [];
    const startNum = 999;
    let result;
    
    for (let i=startNum; i>0; i--){
      for (let j=startNum; j>0; j--){
        numbers.push(i*j);
      }
    }
    
    numbers = numbers.sort((a,b) => {
      return b-a;
    });
    
    for(let number of numbers){
      if(this.isPalindrome(number)){
        result = number;
        break;
      }
    }
    
    return result;
  }

  render(){
    return (
      <div>
        <h1>Largest palindrome product</h1>
        <h4>A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99. Find the largest palindrome made from the product of two 3-digit numbers.</h4>
        <p>Answer: {this.getLargestPalindromeProductOfTwoThreeDigitNumbers()} </p>
      </div>
    );
  }
}

export default Problem4;