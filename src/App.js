import React from 'react';
import Main from './components/MainPage'
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