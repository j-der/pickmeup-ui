import React, { Component } from 'react';

import Geosuggest from 'react-geosuggest';
import TextField from 'material-ui/lib/text-field';


export default class SearchAutoComplete extends Component {


  render() {
  	 const geoSuggest = [
      <Geosuggest
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onChange={this.onChange}
        onSuggestSelect={this.onSuggestSelect}
        location={new google.maps.LatLng(43.64465, -79.39503)}
        radius="20"
       />
     ];

    return (
    	<div>
       <TextField
       		floatingLabelText="Where to?"
       	/>
      </div>
    )
  }

  onFocus = () => {
  	  <Geosuggest
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onChange={this.onChange}
        onSuggestSelect={this.onSuggestSelect}
        location={new google.maps.LatLng(43.64465, -79.39503)}
        radius="20"
      />
  }

  onBlur = () => {
  	console.log('onBlur');
  	;
  }

  onChange = (value) => {
  	console.log('input changes to:' + value);
  }

   // When a suggest got selected
   // @param  {Object} suggest The suggest
  onSuggestSelect = (suggest) => {
    let destinationField = suggest;
  }
};



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