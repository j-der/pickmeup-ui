import React, { Component } from 'react';
import Config from '../config';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import axios from 'axios';
import Popover from 'material-ui/lib/popover/popover';
import PopoverAnimationFromTop from 'material-ui/lib/popover/popover-animation-from-top';

const styles = {
  popover: {
    padding: 20,
  },
};

export default class NewUser extends Component {

    // this.axiosPost = this.axiosPost.bind(this) can use this instead of ev =>
    //
  // getInitialState() {
  //   return {showForm: false}
  // }
  // this from ES5 is the same as the constructor below.
  // constructor is a lot like def initialize from ruby



  constructor(props) {
    super(props)

    this.state = {open: false}

  }

  axiosPost(event) {
    event.preventDefault();
    console.log(this.refs.firstName.value)
    axios.post('http://localhost:3000/users', {
      avatar: this.refs.avatar.value,
      first_name: this.refs.firstName.value,
      last_name: this.refs.lastName.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
      password_confirmation: this.refs.passwordConfirmation.value,
      authenticity_token: this.refs.authenticityToken.value
    })

      .then(function(response){
        // console.log(this.refs.firstName.value)
        console.log('success, response: ', response)
        });
  }

  displayForm = () => {
      return (
        <form onSubmit={ev => this.axiosPost(ev)} encType="multipart/form-data">

          <div>
            <label htmlFor="first_name">URL to your photo:</label>
            <input ref="avatar" type="text" name="user[avatar]" id="avatar" placeholder="URL to your photo" />
          </div>
          <div>
            <label htmlFor="first_name">First name:</label>
            <input ref="firstName" type="text" name="user[first_name]" id="first_name" placeholder="First name" />
          </div>
          <div>
            <label htmlFor="last_name">Last name:</label>
            <input ref="lastName" type="text" name="user[last_name]" id="last_name" placeholder="Last name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input ref="email" type="text" name="user[email]" id="email" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="password">Choose a password:</label>
            <input ref="password" type="password" name="user[password]" id="password" placeholder="Password" />
          </div>
          <div>
            <label htmlFor="password_confirmation">Confirm your password:</label>
            <input ref="passwordConfirmation" type="password" name="user[password_confirmation]" id="password_confirmation" placeholder="Confirm your password" />
          </div>
          <div>
        <input ref="authenticityToken" type="hidden" name="authenticity_token" value={this.props.authenticity_token} />
        </div>
          <div>
            <FlatButton
              label="Submit"
              primary={true}
              type="submit" />
          </div>
        </form>
      )

  }

  toggleForm = (event) => {
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <span>
          <RaisedButton
          label="Sign Up!"
          className="sign-up-button" onTouchTap={this.toggleForm}
          style={{
            margin: '5px'
          }} />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationFromTop}
        >
          <div style={styles.popover}>
            {this.displayForm()}
          </div>
        </Popover>
      </span>
    );
  }
}
