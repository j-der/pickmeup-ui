import React from 'react'
import SearchBar from './SearchBar'
import NavBar from './NavBar'
// import the css className


var SplashPage = React.createClass({

  render: function() {
    return (
      <div>
      <div className="splash-image"><NavBar />
        <SearchBar /></div>


      </div>

    );
  }

});

export default SplashPage;
