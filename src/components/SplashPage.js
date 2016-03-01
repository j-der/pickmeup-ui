import React from 'react'
import SearchBar from './SearchBar'
import NavBar from './NavBar'

var SplashPage = React.createClass({

  render: function() {
    return (
      <div>
        <NavBar />
        <SearchBar />

      </div>
    );
  }

});

export default SplashPage;
