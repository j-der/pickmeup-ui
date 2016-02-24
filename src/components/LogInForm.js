import React from 'react';

import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

var LogInForm = React.createClass({

  getInitialState: function() {
    return {showForm: false}
  },

  displayLogInForm: function() {
    if (this.state.showForm) {
      return (
        <form action="/sessions" method="POST">
          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" name="user[email]" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="user[password]" placeholder="Password" />
          </div>
          <div>
            <FlatButton
              label="Let's Roll"
              primary={true}
              type="submit" />
          </div>
        </form>
      )
    }
  },

  toggleLogInForm: function() {
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
  },

  render: function(){
    return (
      <div>
        <RaisedButton label="Log in" className="log-in-button" onClick={this.toggleLogInForm} />
        {this.displayLogInForm()}
      </div>
    );
  }

});

export default LogInForm;