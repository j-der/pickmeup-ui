import React from 'react';
import TextField from 'material-ui/lib/text-field';
import Config from '../config';
import FlatButton from 'material-ui/lib/flat-button';
import Geosuggest from 'react-geosuggest';

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

  onSuggestSelect = (suggest) => {
    this.setState({From: event.target.value});
  }

  render() {
    return (

      // props of handleSubmit from IndexPage
      <form onSubmit={event => this.props.handleSubmit(event, this.state)}>
        <Geosuggest
          onChange={this.handleToChange}
          id="destination-field"
          hintText="E.g. Steamwhistle Brewery"
          floatingLabelText="Where to?"
          placeholder="Where to?"
          onSuggestSelect={this.onSuggestSelect}
          location={new google.maps.LatLng(43.64465, -79.39503)}
          radius="20"
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

};

