import React, { Component } from 'react';
import Config from '../config';

import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import axios from 'axios';

export default class NewUser extends Component {

  constructor(props) {
    super(props)

    this.state = {showForm: false}
    // this.axiosPost = this.axiosPost.bind(this) can use this instead of ev =>
  }

  axiosPost(event) {
    event.preventDefault();

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

 displayForm() {
    if (this.state.showForm) {
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
  }

  toggleForm = () => {
    if (this.state.showForm) {
      this.setState({
        showForm: false
      })
    }
    else {
      this.setState({
        showForm: true
      })
    }
  }

  render() {
    return (
      <div>
        <RaisedButton label="Sign Up!" className="sign-up-button" onClick={this.toggleForm} />
        {this.displayForm()}
      </div>
    );
  }


}
