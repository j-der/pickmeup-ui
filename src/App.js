import React, { Children, cloneElement } from 'react';
import { browserHistory } from 'react-router';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import RideTweets from './components/RideTweets';


var App = React.createClass({

  getInitialState() {
    return {To: "", From: ""}
  },

  splashPageSearchSubmit: function(event, formData) {
    event.preventDefault();
    this.setState({To: formData.To, From: formData.From});
    browserHistory.push('/main');
  },

  indexPageSearchSubmit: function(event, formData) {
    event.preventDefault();
    this.setState({To: formData.To, From: formData.From});
  },

  render: function(){
    // Children is a helper imported from 'react', tells the children of this component access its methods and state
    // map will pass the children of App in Router, and tells each child about App's props and state
    let children = Children.map(this.props.children, child => {
      return cloneElement(child, {
        ...child.props,
        ...this.props,
        ...this.state,
        splashPageSearchSubmit: this.splashPageSearchSubmit,
        indexPageSearchSubmit: this.indexPageSearchSubmit
      })
    })

    return (
      <div>
      	<RideTweets />
        <NavBar />
        {children}
      </div>
    );
  }

});

export default App;