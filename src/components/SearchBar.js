import React from 'react';
import TextField from 'material-ui/lib/text-field';
import Config from '../config';
import FlatButton from 'material-ui/lib/flat-button';

export default class SearchBar extends React.Component {

  // getInitialState: function() {
  //   return { placeholder: "Where to?", formMethod: "", formAction: "" }
  // },

  // saveDestination: function(){
  //   var destination = document.getElementById('destination-field').value;
  //   this.setState({placeholder: "Where from?", formMethod: "POST", formAction: "/users"});
  // },

  // changePlaceholder: function(){
  //   this.setState({ placeholder: "Where from?"});
  // },

  render() {
    return (

      // props of handleSubmit from IndexPage
      <form onSubmit={this.props.handleSubmit}>
          <TextField
            id="destination-field"
            hintText="E.g. Steamwhistle Brewery"
            floatingLabelText="Where to?"
          />
        <TextField
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

};

