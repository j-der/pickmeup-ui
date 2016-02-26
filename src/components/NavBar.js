import React from 'react';
import PostRide from './PostRide';
import NewUser from './NewUser';
import LogInForm from './LogInForm';
import Avatar from './Avatar';

var NavBar = React.createClass({

  render: function(){
    return (
      <div className="nav-bar">
        <span className="avatar">
          <Avatar />
        </span>
        <span className="nav-buttons">
          <PostRide />
        </span>

        <NewUser />
        <LogInForm />

      </div>
    );
  }

});

export default NavBar;
