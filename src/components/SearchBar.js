import React from 'react';
import TextField from 'material-ui/lib/text-field';
import Config from '../config';
import FlatButton from 'material-ui/lib/flat-button';


var SearchBar = React.createClass({

  getInitialState() {
    return { To: "", From: "" }
  },

  handleToChange(event) {
    this.setState({To: event.target.value});
  },

  handleFromChange: function(event) {
    this.setState({From: event.target.value});
  },

  render: function(){
    return (

      // props of handleSubmit from IndexPage
      <form onSubmit={event => this.props.handleSubmit(event, this.state)}>
        <TextField
          onChange={this.handleToChange}
          id="destination-field"
          hintText="E.g. Steamwhistle Brewery"
          floatingLabelText="Where to?"
        />
        <TextField
          onChange={this.handleFromChange}
          id="origin-field"
          hintText="E.g. Lighthouse Labs"
          floatingLabelText="Where from?"
        />
        <FlatButton
            label="Search"
            primary={true}
            type="submit" />
      </form>
    );
  }

});

export default SearchBar;

