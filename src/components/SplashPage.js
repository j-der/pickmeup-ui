import React from 'react'
import SearchBar from './SearchBar'
// import the css className


var SplashPage = React.createClass({

  render: function() {
    return (
      <div>
        <div className="splash-image">
          <div className="splash-search"><SearchBar handleSubmit={this.props.splashPageSearchSubmit}/>
          </div>
        </div>
      </div>
    );
  }

});

export default SplashPage;
