import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import NewUser from './NewUser';
import PostRide from './PostRide';
import RequestSeat from './RequestSeat';
import HowItWorks from './HowItWorks'

export default class ModalWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open || false
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };


  // componentWillReceiveProps(nextProps) {
  //   this.setState({open: true})
  // };

  render() {
    const actions = [
      <NewUser handleClose={this.handleClose} />,
      <PostRide handleClose={this.handleClose} />,
      <RequestSeat handleClose={this.handleClose} />,
      <HowItWorks handleClose={this.handleClose} />
    ];

    return (
      <div>
        <FlatButton onTouchTap={this.handleOpen} label={this.props.label} style={this.props.open ? {display: 'none'} : {margin: 5}} />

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
