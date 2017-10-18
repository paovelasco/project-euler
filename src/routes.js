import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Problem1 from './components/problems/Problem1';
import Problem7 from './components/problems/Problem7';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="1" component={Problem1} />
    <Route path="7" component={Problem7} />
  </Route>
);
