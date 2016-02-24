import React from 'react';
import PostRide from './PostRide';
import NewUser from './NewUser';
import LogInForm from './LogInForm';

var NavBar = React.createClass({

  render: function(){
    return (
      <div className="nav-bar">
      	<PostRide />
        <NewUser />
        <LogInForm />
      </div>
    );
  }

});

export default NavBar;