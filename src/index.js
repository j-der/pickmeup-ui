import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SplashPage from './components/SplashPage';
import IndexPage from './components/IndexPage';
import PostRide from './components/PostRide';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' origin="" destination="" component={App}>
      <IndexRoute component={SplashPage}/>
      <Route path='/main'component={IndexPage}/>
    </Route>
  </Router>,
document.getElementById('root'));
