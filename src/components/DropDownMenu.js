import React from 'react';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import ContentFilter from 'material-ui/lib/svg-icons/content/filter-list';
import ModalWindow from './ModalWindow';

const AvatarExampleSimple = () => (
  <div>
    <IconMenu
      iconButtonElement={<IconButton><ContentFilter /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <ModalWindow title="How it works" label="How it works" index="3"/>
      <ModalWindow title="Post a ride" label="Post a ride" index="1"/>
      <ModalWindow title="Sign up" label="Sign up" index="0" />
      <ModalWindow title="Log in" label="Log in" index="2" />

    </IconMenu>
  </div>
);

export default AvatarExampleSimple;
