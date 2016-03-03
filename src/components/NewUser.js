import React, { Component } from 'react';
import Config from '../config';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import axios from 'axios';

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
  }

  axiosPost = (event) => {
    event.preventDefault();
    console.log(this.refs.firstName.value)
    axios.post('http://localhost:3000/users', {
      avatar: this.refs.avatar.getValue(),
      first_name: this.refs.firstName.getValue(),
      last_name: this.refs.lastName.getValue(),
      email: this.refs.email.getValue(),
      password: this.refs.password.getValue(),
      password_confirmation: this.refs.passwordConfirmation.getValue()
      // authenticity_token: this.refs.authenticityToken.value
    })

      .then(function(response){
        // console.log(this.refs.firstName.value)
        console.log('success, response: ', response)

        localStorage.userId = response.data.id
        });
  }

  render() {

    return (
      <div>
       <form
       onSubmit={this.axiosPost}
       className="form-style">
       <TextField
        id="avatar-field"
        hintText="URL to your photo"
        floatingLabelText="Avatar"
        ref="avatar"
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField
        id="first-name-field"
        hintText="E.g. Donald"
        floatingLabelText="First name"
        ref="firstName"
        />
        <TextField
          id="last-name-field"
          hintText="E.g. Duck"
          floatingLabelText="Last name"
          ref="lastName"
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField
          id="email-field"
          hintText="E.g. donaldduck@example.com"
          floatingLabelText="Email"
          ref="email"
        />
        <TextField
          id="password-field"
          hintText="Pick something secure"
          type="password"
          floatingLabelText="Password"
          ref="password"
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField
          id="password-confirmation-field"
          hintText="Pick something secure"
          type="password"
          floatingLabelText="Confirm your password"
          ref="passwordConfirmation"
        /><br />
        <FlatButton
          onClick={this.props.handleClose}
          label="Submit"
          type="submit"
          primary={true}
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

