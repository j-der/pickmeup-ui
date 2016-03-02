import React from 'react'
import SearchBar from './SearchBar'
// import the css className


var SplashPage = React.createClass({

  render: function() {
    return (
      <div>
        <div className="splash-image">
          <div className="splash-search-div"><SearchBar cssClass="splash-search" handleSubmit={this.props.splashPageSearchSubmit}/></div>
        </div>
        <div className="content">
          <div className="visible">
            <h2 className="scrolly">Find a&nbsp;</h2>
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
