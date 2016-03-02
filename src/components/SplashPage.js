import React from 'react'
import SearchBar from './SearchBar'
// import the css className


var SplashPage = React.createClass({

  render: function() {
    return (
      <div>
        <div className="splash-image">
        <div className="content">
        <div className="visible">
          <h2 className="scrolly">Find a&nbsp;</h2>
          <ul>
            <li>Ride</li>
            <li>Carpool</li>
            <li>Buddy</li>
            <li>Route</li>
          </ul>
        </div>
        </div>
        <div className="splash-search"><SearchBar handleSubmit={this.props.splashPageSearchSubmit}/></div>
        </div>
      </div>
    );
  }

});

export default SplashPage;
