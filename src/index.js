import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MainPage from './components/MainPage';
import IndexPage from './components/IndexPage';
import PostRide from './components/PostRide';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const HigherComponent = React.createClass({
	render() {
		return (
			<SearchBar />

		)
	}
})

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={IndexPage}/>
      <Route path='/main' component={MainPage} />
    </Route>
  </Router>,
document.getElementById('root'));