import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
  render(){
    return (
      <div>
        <h1>Project Euler Problems</h1>
        <ol reversed>
          <li><Link to="/7">10001st prime</Link></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li><Link to="1">Multiples of 3 and 5</Link></li>
        </ol>
      </div>

    );
  }
}

export default HomePage;
