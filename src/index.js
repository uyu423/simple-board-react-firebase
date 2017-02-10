import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './App';
import { Login, List } from './containers';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="login" component={Login} />
      <Route path="list" component={List} />
    </Route>
  </Router>,
  document.getElementById('root'),
);
