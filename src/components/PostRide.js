import React from 'react';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import axios from 'axios';

export default class PostRide extends React.Component {

/* The above is the same as:

var PostRide = React.createClass({
  [...]
})

export default PostRide;

*/

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        // type="submit"
        onTouchTap={this.axiosPost}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Post a Ride" onTouchTap={this.handleOpen} />
        <Dialog
          title="Post a Ride!"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
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
        />
        </Dialog>
      </div>
    );
  }

  axiosPost = (event) => {
    event.preventDefault();
    // console.log(this.refs.input1.value)
    axios.post('http://localhost:3000/rides', {
      origin: this.refs.postOrigin.value,
      destination: this.refs.postDestination.value
    })

      .then(function(response){
        console.log('success, response: ', response)
        })
    }
  }





