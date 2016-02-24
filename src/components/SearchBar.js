import React from 'react';
import TextField from 'material-ui/lib/text-field';

var SearchBar = React.createClass({

  getInitialState: function() {
    return { placeholder: "Where to?" }
  },

  changePlaceholder: function(){
    this.setState({ placeholder: "Where from?"});
  },

  render: function(){
    return (
      <TextField
        id="origin-field"
        hintText="E.g. Lighthouse Labs"
        floatingLabelText="Where to?"
      />

      // <form action="/index" method="POST">
      //   <div id="splash-input">
      //     <input id="origin-field" placeholder={this.state.placeholder} onSubmit={this.changePlaceholder}/>
      //   </div>
      // </form>
    );
  }

});

export default SearchBar;
