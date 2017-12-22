import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import Problem1 from './components/problems/Problem1';
import Problem2 from './components/problems/Problem2';
import Problem7 from './components/problems/Problem7';
import Problem8 from './components/problems/Problem8';
import Problem10 from './components/problems/Problem10';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="1" component={Problem1} />
    <Route path="2" component={Problem2} />
    <Route path="7" component={Problem7} />
    <Route path="8" component={Problem8} />
    <Route path="10" component={Problem10} />
  </Route>
);
