import React from 'react';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import axios from 'axios';

export default class PostRide extends React.Component {

  constructor(props) {
    super(props)
  }

  axiosPost = (event) => {

    axios.post('http://localhost:3000/rides', {
      title: this.refs.postTitle.getValue(),
      available_seats: this.refs.postSeatsAvailable.getValue(),
      origin: this.refs.postOrigin.getValue(),
      destination: this.refs.postDestination.getValue()
    })

      .then(function(response){
        console.log('success, response: ', response)
        })
      .error( res => console.log("Something bad happened", res) )
  }

  render() {
      return (
        <div>
          <form onSubmit={this.axiosPost}>
          <TextField
            id="post-title-field"
            hintText="E.g. Daily to downtown Toronto"
            floatingLabelText="Title"
            ref="postTitle"
          />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
            id="post-available-seats"
            hintText="E.g. 2"
            floatingLabelText="Seats available"
            ref="postSeatsAvailable"
          />

          <TextField
            id="post-destination-field"
            hintText="E.g. Lighthouse Labs"
            floatingLabelText="Where to?"
            ref="postDestination"
          />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
            id="post-origin-field"
            hintText="E.g. Steamwhistle Brewery"
            floatingLabelText="Where from?"
            ref="postOrigin"
          /><br/>
          <FlatButton
            label="Buckle up!"
            primary={true}
            keyboardFocused={true}
            type="submit"
            onClick={this.props.handleClose}
          />
          <FlatButton
            label="Cancel"
            secondary={true}
            onTouchTap={this.props.handleClose}
          />
          </form>
        </div>
      );
    }
  }


// <input type="text" value={this.state.title} onChange={ev => this.setState({title: ev.target.value})} />
