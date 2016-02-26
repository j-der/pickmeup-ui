import React, { Children, cloneElement } from 'react';
import { browserHistory } from 'react-router';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import SearchAutoComplete from './components/SearchAutoComplete';


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
    console.log("formData is", formData);
    console.log("formData.To is", formData.To);
    console.log("formData.From is", formData.From);
    console.log("the state before setState is", this.state);
    this.setState({To: formData.To, From: formData.From});
    console.log("the state after setState is", this.state);
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
        <NavBar />
        <SearchAutoComplete />
        {children}
      </div>
    );
  }

});

export default App;