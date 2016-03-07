import React from 'react';
import Avatar from './Avatar';
import PostRide from './PostRide';
import LogInForm from './LogInForm';
import NewUser from './NewUser';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import ModalWindow from './ModalWindow';
import NavButton from './NavButton';
import DropDownMenu from './DropDownMenu';
import { Link } from 'react-router';
// import MenuItem from 'material-ui/lib/menus/menu-item';
// import DropDownMenu from 'material-ui/lib/DropDownMenu';

// will need a componentWillUnmount method to remove <NewUser /> and <LogInForm /> components when user session is true
//pseudocode
//componentWillUnmount = () => {
  //if (current_session) {
      // var newUserBtn = <NewUser />;
      // newUserBtn.addEventListener(current_session=true, unmount);
  // }
// }

//unmount = () => {
  // React.unmountComponentAtNode(document.getElementById('new-user'));
  // newUserBtn.remove();
// }

const styles = {
  root: {
    background: '#ff4081',
    paddingLeft: 40,
  },
  navbarTitle: {
    fontFamily: 'Gotham Light',
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    background: 'transparent',
    color: 'black',
  },
  toolbar: {
    paddingTop: '5px',
    display: 'inline-flex'
  }
}

const ToolbarExamplesSimple = () => (

  <Toolbar
    style={styles.root}>
    <ToolbarGroup firstChild={true} float="left">
      <Link to='/'>
        <ToolbarTitle
          text="pickmeUp"
          style={styles.navbarTitle} />
      </Link>
    </ToolbarGroup>
    <ToolbarGroup
      float="right"
      style={styles.toolbar}>
        <ModalWindow title="Post a ride" label="Post a ride" index="1" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <ModalWindow title="How it works" label="How it works" index="3" />
        <ModalWindow title="Sign up" label="Sign up" index="0" />
    </ToolbarGroup>
  </Toolbar>
);

export default ToolbarExamplesSimple;

<DropDownMenu />
