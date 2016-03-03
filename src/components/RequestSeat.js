import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import axios from 'axios';
import CardText from 'material-ui/lib/card/card-text';
import Snackbar from 'material-ui/lib/snackbar';


const styles = {
  root: {
    float: 'left'
  },

  textfield: {
    textAlign: 'left'
  },
};

export default class PostRide extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        autoHideDuration: 3000,
        message: 'Seat request sent!',
        open: false,
      };
    }

    handleTouchTap = () => {
      this.setState({
        open: true,
      });
    };

    handleActionTouchTap = () => {
      this.setState({
        open: false,
      });
      this.handleRequestClose
    };

    handleChangeDuration = (event) => {
      const value = event.target.value;
      this.setState({
        autoHideDuration: value.length > 0 ? parseInt(value) : 0,
      });
    };

    handleRequestClose = () => {
      this.setState({
        open: false,
      });
    };

  sendEmail = (event) => {
    event.preventDefault();
    console.log('email sent to ride poster')

    this.handleTouchTap()
  };

  render() {
      return (
        <div>
          <form
            onSubmit={this.sendEmail}
            className="form-style">
          <TextField
            style={styles.textfield}
            id="name-field"
            floatingLabelText="Your name"
            ref="requestName"
          />
          <br/>
          <TextField
            hintText="E.g. Hi there! I'm interested!"
            floatingLabelText="Message"
          />
          <br/>
          <FlatButton
            label="Send Request"
            primary={true}
            keyboardFocused={true}
            type="submit"
            onTouchTap={this.props.handleClose}
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

