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

const ToolbarExamplesSimple = () => (
  <Toolbar
    style={{
      background: 'lightblue',
      paddingLeft: '40px'
    }}>
    <ToolbarGroup firstChild={true} float="left">
      <ToolbarTitle
        text="pickmeup"
        style={{
          fontFamily: 'gotham, sans-serif',
          color: '#fff'
        }} />
    </ToolbarGroup>
    <ToolbarGroup
      float="right"
      style={{
        paddingTop: '5px'
      }}>
        <ModalWindow title="Sign up with pickmeUp!" label="Sign up" index="0"/>
        <ModalWindow title="Post a ride" label="Post a ride"index="1"/>
        <LogInForm />
        <Avatar />
    </ToolbarGroup>
  </Toolbar>
);

export default ToolbarExamplesSimple;
