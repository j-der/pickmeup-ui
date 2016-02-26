import React from 'react';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import axios from 'axios';

export default class PostRide extends React.Component {

  constructor(props) {
    super(props)
    this.state = {showPostForm: false,
      title: 'Default Title',
      //build default state here

    }
  }

  axiosPost = (event) => {
    event.preventDefault();
    console.log("here")
    axios.post('http://localhost:3000/rides', {
      title: this.state.title, //if we use the onChange and value below and state setup above
      available_seats: this.refs.postSeatsAvailable.value,
      origin: this.refs.postOrigin.value,
      destination: this.refs.postDestination.value
    })

      .then(function(response){
        console.log('success, response: ', response)
        })
      .error( res => console.log("Something bad happened", res) )
  }

  handleSubmit = () => {
    console.log(this.refs.postTitle.value);
    console.log('handling submit');
  }

  displayPostForm = () => {
    if (this.state.showPostForm) {
      return (
        <div>
         <form onSubmit={this.axiosPost}>
          <input type="text" value={this.state.title} onChange={ev => this.setState({title: ev.target.value})} />

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
            label="Submit"
            primary={true}
            keyboardFocused={true}
            type="submit"
          />
          <FlatButton
            label="Cancel"
            secondary={true}
            onTouchTap={this.togglePostForm}
          />
        </form>
        </div>
        // console.log("showing form")

      )
    }
  }

  togglePostForm = () => {
    if (this.state.showPostForm) {
      this.setState({showPostForm: false})
    }
    else {
      this.setState({showPostForm: true})
    }
  }

render() {
    return (
      <div>
        <RaisedButton label="Post a Ride" onClick={this.togglePostForm} />
        {this.displayPostForm()}
      </div>
    );
  }
}
