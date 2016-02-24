import React from 'react';

var SearchBar = React.createClass({

  getInitialState: function() {
    return { placeholder: "Where to?" }
  },

  changePlaceholder: function(){
    this.setState({ placeholder: "Where from?"});
  },

  render: function(){
    return (
      <form action="/index" method="POST">
        <div id="splash-input">
          <input id="origin-field" placeholder={this.state.placeholder} onSubmit={this.changePlaceholder}/>
        </div>
      </form>
    );
  }

});

export default SearchBar;