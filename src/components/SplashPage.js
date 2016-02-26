import React from 'react'
import SearchBar from './SearchBar'

var SplashPage = React.createClass({

  render: function() {
    return (
      <div>
        <SearchBar handleSubmit={this.props.splashPageSearchSubmit}/>
      </div>
    );
  }

});

export default SplashPage;