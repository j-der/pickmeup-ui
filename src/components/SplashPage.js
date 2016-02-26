import React from 'react'
import SearchBar from './SearchBar'
import { browserHistory } from 'react-router'

var SplashPage = React.createClass({

  firstSearch: function(event) {
    event.preventDefault();
    browserHistory.push('/main');
  },

  render: function() {
    return (
      <div>
        <SearchBar handleSubmit={this.firstSearch}/>
      </div>
    );
  }

});

export default SplashPage;