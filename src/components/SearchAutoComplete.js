import React, { Component } from 'react';

import Geosuggest from 'react-geosuggest';
// import TextField from 'material-ui/lib/text-field';
// import AutoComplete from 'material-ui/lib/auto-complete';
import GoogleMap from './GoogleMap';

// export default class SearchAutoComplete extends Component {

	var SearchAutoComplete = React.createClass({

		// constructor(props) {
		// 	super(props);

		// 	this.state = {
		// 		dataSource: [],
		// 	};
		// }

		// handleUpdateInput = (fixtures) = {
		// 	this.setState({
		// 		dataSource: [fixtures + fixtures],
		// 	})
		// }

	  render: function() {
	    var fixtures = [
	      {label: 'Lighthouse Labs', location: {lat: 43.64465, lng: -79.39503}},
	      {label: 'Steamwhistle Brewery', location: {lat: 43.64117, lng: -79.385186}},
	      {label: 'CN Tower', location: {lat: 43.6426, lng: -79.3871}}
	    ];

	    return (
	      <div>
		        <Geosuggest
		          placeholder="Where to?"
		          fixtures={fixtures}
		          onSuggestSelect={this.onSuggestSelect}
		          location={new google.maps.LatLng(43.64465, -79.39503)}
		          radius="20" />
	      </div>
	    )
	  },

	   // When a suggest got selected
	   // @param  {Object} suggest The suggest
	  onSuggestSelect: function(suggest) {
	    console.log(suggest);
	  }
	});

	export default SearchAutoComplete;


// 	render() {
// 		return (
// 			<div>
// 				<input id="autocomplete" type="text" className="controls" onFocus="geolocate()"/>
// 			</div>)
// 	}
// };



// 	var placeSearch, autocomplete;
// 	var componentForm = {
// 	  street_number: 'short_name',
// 	  route: 'long_name',
// 	  locality: 'long_name',
// 	  administrative_area_level_1: 'short_name',
// 	  country: 'long_name',
// 	  postal_code: 'short_name'
// 	};

// 	initAutocomplete = () => {

// 		var autocomplete = new google.maps.places.Autocomplete(
// 			(document.getElementById('autocomplete')),{types: ['address']});

// 		autocomplete.addListener('place_changed', fillInAddress);
// 	}

// 	fillInAddress = () => {
// 		var place = autocomplete.getPlace();

// 		for (var component in componentForm) {
// 			document.getElementById(component).value = '';
// 			document.getElementById(component).disabled = false;
// 		}

// 		for (var i = 0; i < place.address_components.length; i++) {
// 		    var addressType = place.address_components[i].types[0];
// 		    if (componentForm[addressType]) {
// 		      var val = place.address_components[i][componentForm[addressType]];
// 		      document.getElementById(addressType).value = val;
// 		    }
// 		  }
// 	}

// 	geolocate = () => {
// 		if (navigator.geolocation) {
// 			navigator.geolocation.getCurrentPosition(function(position) {
// 				var geolocation = {
// 					lat: position.coords.latitude,
// 					lng: position.coords.longitude
// 				};
// 				var circle = new google.maps.Circle({
// 					center: geolocation,
// 					radius: position.coords.accuracy
// 				});
// 				autocomplete.setBounds(circle.getBounds());
// 			});
// 		}
// 	}

	// componentDidMount() {
 //    var input = document.getElementById('destination');
 //    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

 //    var autocomplete = new google.maps.places.Autocomplete(input, options);

 //    var place = autocomplete.getPlace();
	
	// }