import React from 'react';
import TextField from 'material-ui/lib/text-field';
import Config from '../config';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

export default class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = { To: "", From: "" }
  }

  handleToChange = (event) => {
    this.setState({To: event.target.value});
  }

  handleFromChange = (event) => {
    this.setState({From: event.target.value});
  }

  render() {
    return (

      // props of handleSubmit from IndexPage
      <form className={this.props.cssClass} onSubmit={event => this.props.handleSubmit(event, this.state)}>
        <TextField
          className="form-autofill"
          onChange={this.handleToChange}
          id="destination-field"
          hintText="E.g. Steamwhistle Brewery"
          floatingLabelText="Where to?"
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField
          onChange={this.handleFromChange}
          id="origin-field"
          hintText="E.g. Lighthouse Labs"
          floatingLabelText="Where from?"
        />
        <RaisedButton
            label="Search"
            primary={true}
            keyboardFocused={true}
            type="submit" />

      </form>
    );
  }

};
