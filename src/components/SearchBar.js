import React from 'react';
import Config from '../config';

import FlatButton from 'material-ui/lib/flat-button';

var SearchBar = React.createClass({

  // getInitialState: function() {
  //   return { placeholder: "Where to?", formMethod: "", formAction: "" }
  // },

  // saveDestination: function(){
  //   var destination = document.getElementById('destination-field').value;
  //   this.setState({placeholder: "Where from?", formMethod: "POST", formAction: "/users"});
  // },

  // changePlaceholder: function(){
  //   this.setState({ placeholder: "Where from?"});
  // },

  render: function(){
    return (
      <form onSubmit=>
        <div id="splash-destination">
          <input id="destination-field" name="destination" placeholder="Where to?" />
        </div>
        <div id="splash-origin">
          <input id="origin-field" name="origin" placeholder="Where from?" />
        </div>
        <div>
          <FlatButton
              label="Search"
              primary={true}
              type="submit" />
        </div>
      </form>
    );
  }

});

export default SearchBar;