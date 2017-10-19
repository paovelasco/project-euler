import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import Problem1 from './components/problems/Problem1';
import Problem7 from './components/problems/Problem7';
import Problem8 from './components/problems/Problem8';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="1" component={Problem1} />
    <Route path="7" component={Problem7} />
    <Route path="8" component={Problem8} />
  </Route>
);
