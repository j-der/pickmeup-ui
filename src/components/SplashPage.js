import React from 'react'
import SearchBar from './SearchBar'
import { browserHistory } from 'react-router'

var SplashPage = React.createClass({

  handleSubmit: function(event) {
    event.preventDefault();
    browserHistory.push('/main');
  },

  render: function() {
    return (
      <div>
        <SearchBar handleSubmit={this.handleSubmit}/>
      </div>
    );
  }

});

export default SplashPage;