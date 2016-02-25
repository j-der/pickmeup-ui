import React from 'react';
import Main from './Main'
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';


var App = React.createClass({

  render: function(){
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }

});

export default App;