import React from 'react';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import ContentFilter from 'material-ui/lib/svg-icons/content/filter-list';
import ModalWindow from './ModalWindow';

export default class DropDownMenu extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  showModal = () => {
    if (this.state.modal)
      return <ModalWindow open={true} title={this.state.modal.title} label={this.state.modal.label} index={this.state.modal.index} />
  };

  closeDropdown = (event, index) => {
    const modals = [
      {
        title: 'Sign Up',
        label: 'Sign Up',
        index: index
      },
      {},
      {
        title: 'Log in',
        label: 'Log in',
        index: index
      },
      {
        title: 'How it Works',
        label: 'How it Works',
        index: index
      }]

    this.setState({open: false, modal: modals[index]})
  };

  render() {
    return (
      <div>
        <IconMenu
          iconButtonElement={<IconButton><ContentFilter /></IconButton>}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onChange={this.closeDropdown}
          open={this.state.open ? false : null}
        >
          <MenuItem primaryText="Sign up" value={0}/>
          <MenuItem primaryText="Log in" value={2}/>
          <MenuItem primaryText="How it Works" value={3}/>
        </IconMenu>
        {this.showModal()}

      </div>
    )
  }

}
