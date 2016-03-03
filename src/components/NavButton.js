import React, { Component } from 'react';
import Config from '../config';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button'
import ModalWIndow from './ModalWindow';

export default class NavButton extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <span>
        <FlatButton>{this.props.text} </FlatButton>
      </span>
      )
  }


}
