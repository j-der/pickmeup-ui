import React from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import SearchAutoComplete from './components/SearchAutoComplete';


var App = React.createClass({

  render: function(){
    return (
      <div>
        <NavBar />
        <SearchAutoComplete />
        {this.props.children}
      </div>
    );
  }

});

export default App;