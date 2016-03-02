import React from 'react'
import SearchBar from './SearchBar'
import NavBar from './NavBar'
// import the css className
import '../application.css'

var SplashPage = React.createClass({

  render: function() {
    return (
      <div>
        <div className="splash-image">

          <div clasName="splash-nav"><NavBar /></div>
          <h1 className="splash-title">Find a ride.</h1>
          <div className="splash-search"><SearchBar /></div>
        </div>
      </div>
    );
  }

});

export default SplashPage;
