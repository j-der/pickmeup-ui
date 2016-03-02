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
        <div className="content">
        <div className="visible">
          <p>Find a&nbsp;</p>
          <ul>
            <li>Ride</li>
            <li>Carpool</li>
            <li>Buddy</li>
            <li>Route</li>
          </ul>
        </div>
        </div>
        <div clasName="splash-nav"><NavBar /></div>
        <div className="splash-search"><SearchBar /></div>
        </div>
      </div>
    );
  }

});

export default SplashPage;
