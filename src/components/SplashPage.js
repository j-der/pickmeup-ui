import React from 'react'
import SearchBar from './SearchBar'
// import the css className


var SplashPage = React.createClass({

  render: function() {
    return (
      <div>
        <div className="splash-image">
          <div className="splash-search-div"><SearchBar handleSubmit={this.props.splashPageSearchSubmit}/></div>
        </div>
        <div className="content">
          <div className="visible">
            <p className="scrolly">Find a&nbsp;</p>
            <ul>
              <li>Ride</li>
              <li>Carpool</li>
              <li>Route</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

});

export default SplashPage;
