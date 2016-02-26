// import React from 'react';
// import Avatar from 'material-ui/lib/avatar';

// export default class NewUser extends Component {

//   leftAvatar={
//         <Avatar src="lorempixel.com/200/200/people" />}
// }

import React from 'react';
import Avatar from 'material-ui/lib/avatar';
import FileFolder from 'material-ui/lib/svg-icons/file/folder';
import styles from 'material-ui/lib/styles';
import FontIcon from 'material-ui/lib/font-icon';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

const colors = styles.Colors;

const AvatarExampleSimple = () => (
  <List>
    <ListItem disabled={true} leftAvatar={
        <Avatar src="http://lorempixel.com/200/200/people" />
    }> Name of Person
    </ListItem>
  </List>
);

export default AvatarExampleSimple;
