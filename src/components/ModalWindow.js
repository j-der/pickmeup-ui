import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import NewUser from './NewUser';
import PostRide from './PostRide';

export default class ModalWindow extends React.Component {
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
      <NewUser handleClose={this.handleClose} />,
      <PostRide handleClose={this.handleClose} />
    ];

    return (
      <div>
        <RaisedButton onTouchTap={this.handleOpen} style={{margin: 5}}>{this.props.label}
        </RaisedButton>
        <Dialog
          title={this.props.title}
          actions={actions[this.props.index]}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        </Dialog>
      </div>
    );
  }
}
