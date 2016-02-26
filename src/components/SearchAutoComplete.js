import React, { Component } from 'react';

import Geosuggest from 'react-geosuggest';
import TextField from 'material-ui/lib/text-field';

// export default class SearchAutoComplete extends Component {

//   componentDidMount = () => {
//     var input = document.getElementById('whereTo');
//     var options = document.getElementById('whereTo'); 
//     // now render google.maps.Autocomplete given the above input and options  
//     // new google.maps.places.Autocomplete(input, options);
//   };


//   render() {
//     return (
//       <div>
//       	Hello!
//       	<input ref='searchField' id="whereTo" type="text" size="50"/>
//       </div>
//     );
//   }
// };

	// This example requires the Places library. Include the libraries=places
	// parameter when you first load the API. For example:
	// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

	// function initMap() {
	//   var map = new google.maps.Map(document.getElementById('map'), {
	//     center: {lat: -33.8688, lng: 151.2195},
	//     zoom: 13
	//   });
	//   var input = document.getElementById('destination'));

	//   var types = document.getElementById('type-selector');
	//   map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
	//   map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);

	//   var autocomplete = new google.maps.places.Autocomplete(input);
	//   autocomplete.bindTo('bounds', map);

	//   var infowindow = new google.maps.InfoWindow();
	//   var marker = new google.maps.Marker({
	//     map: map,
	//     anchorPoint: new google.maps.Point(0, -29)
	//   });

	//   autocomplete.addListener('place_changed', function() {
	//     infowindow.close();
	//     marker.setVisible(false);
	//     var place = autocomplete.getPlace();
	//     if (!place.geometry) {
	//       window.alert("Autocomplete's returned place contains no geometry");
	//       return;
	//     }

	//     // If the place has a geometry, then present it on a map.
	//     if (place.geometry.viewport) {
	//       map.fitBounds(place.geometry.viewport);
	//     } else {
	//       map.setCenter(place.geometry.location);
	//       map.setZoom(17);  // Why 17? Because it looks good.
	//     }
	//     marker.setIcon(/** @type {google.maps.Icon} */({
	//       url: place.icon,
	//       size: new google.maps.Size(71, 71),
	//       origin: new google.maps.Point(0, 0),
	//       anchor: new google.maps.Point(17, 34),
	//       scaledSize: new google.maps.Size(35, 35)
	//     }));
	//     marker.setPosition(place.geometry.location);
	//     marker.setVisible(true);

	//     var address = '';
	//     if (place.address_components) {
	//       address = [
	//         (place.address_components[0] && place.address_components[0].short_name || ''),
	//         (place.address_components[1] && place.address_components[1].short_name || ''),
	//         (place.address_components[2] && place.address_components[2].short_name || '')
	//       ].join(' ');
	//     }

	//     infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
	//     infowindow.open(map, marker);
	//   });

	//   // Sets a listener on a radio button to change the filter type on Places
	//   // Autocomplete.
	//   function setupClickListener(id, types) {
	//     var radioButton = document.getElementById(id);
	//     radioButton.addEventListener('click', function() {
	//       autocomplete.setTypes(types);
	//     });
	//   }

	//   setupClickListener('changetype-all', []);
	//   setupClickListener('changetype-address', ['address']);
	//   setupClickListener('changetype-establishment', ['establishment']);
	//   setupClickListener('changetype-geocode', ['geocode']);
	// }


// var React = require('react'),
//   Geosuggest = require('./src/Geosuggest.jsx');

var SearchAutoComplete = React.createClass({
  /**
   * Render the example app
   */
  render: function() {
    var fixtures = [
      {label: 'Old Elbe Tunnel, Hamburg', location: {lat: 53.5459, lng: 9.966576}},
      {label: 'Reeperbahn, Hamburg', location: {lat: 53.5495629, lng: 9.9625838}},
      {label: 'Alster, Hamburg', location: {lat: 53.5610398, lng: 10.0259135}}
    ];

    return (
      <div>
        <Geosuggest, TextField
          placeholder="Where to?"
          initialValue={null}
          fixtures={fixtures}
          onSuggestSelect={this.onSuggestSelect}
          location={new google.maps.LatLng(53.558572, 9.9278215)}
          radius="20" />
      </div>
    )
  },

  /**
   * When a suggest got selected
   * @param  {Object} suggest The suggest
   */
  onSuggestSelect: function(suggest) {
    console.log(suggest);
  }
});

export default SearchAutoComplete;