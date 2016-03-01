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
    background: 'lightblue',
    paddingLeft: 40,
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
      <ToolbarTitle
        text="pickmeUp"
        style={{
          fontFamily: 'gotham, sans-serif',
          color: '#fff'
        }} />
    </ToolbarGroup>
    <ToolbarGroup
      float="right"
      style={styles.toolbar}>
        <ModalWindow title="Post a ride" label="Post a ride" index="1" />
        <ModalWindow title="Sign up with pickmeUp!" label="Sign up" index="0" style={styles.button} />
        <LogInForm />

    </ToolbarGroup>
  </Toolbar>
);

export default ToolbarExamplesSimple;

