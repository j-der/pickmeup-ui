import React from 'react';
import PostRide from './PostRide';
import NewUser from './NewUser';
import LogInForm from './LogInForm';
import Avatar from './Avatar';

var NavBar = React.createClass({

  render: function(){
    return (
      <div className="nav-bar">
        <div className="avatar">
          <Avatar />
        </div>
        <div className="nav-buttons">

        </div>
      	<PostRide />
        <NewUser />
        <LogInForm />

      </div>
    );
  }

});

export default NavBar;
