import React from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';

var GoogleMap = React.createClass({

  getInitialState() {
    return {mapVariable: null}
  },

  loadRides: function(userDestination, geocoder, gMap) {
    var that = this;
    axios.get('http://localhost:3000/rides', {
      params: {
        userDestination: userDestination
      }
    })
    .then(function (response) {
      var rides = response.data.rides;
      that.addInfoToMap(rides, geocoder, gMap);
    })
    .catch(function (response) {
      console.log("error in googleMap componentWillUpdate", response);
    });
  },

  addInfoToMap: function(rides, geocoder, map) {
    var gMap = map;
    var rideLocation;
    rides.forEach(
      function (ride) {
        geocoder.geocode({address: ride.origin}, function (results) {
          rideLocation = results[0].geometry.location;
          
          var contentString = '<div id="content">'+
            '<h3 id="firstHeading" class="firstHeading">'+ride.origin+' <i class="fa fa-long-arrow-right"></i> '+ride.destination+'</h3>'+
            '<div id="bodyContent">'+'<i class="fa fa-car marker-color"></i> '+ ride.title +'<p><i class="fa fa-user marker-color"></i> '+ ride.user_first_name +'</p>'+
            '</div>'+
            '</div>';

          var infoWindow = new google.maps.InfoWindow({
            content: contentString
          });

          var marker = new google.maps.Marker({
            position: {lat: rideLocation.lat(), lng: rideLocation.lng()},
            map: gMap
          });

          marker.addListener('click', function() {
            infoWindow.open(gMap, marker);
          });

        });
      }
    );
  },

  loadScript: function() {

    return new Promise(function(resolve, reject) {
      var url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCu0KSRgrBizub3FSRecbFnCvPzG4HVfcQ&libraries=places";
      var script = document.createElement('script');
      script.setAttribute("src", url);
      document.head.appendChild(script);

      script.onload = resolve;
      script.onerror = reject;
    });
  },

  initMap: function(nextProps, nextState) {

    var geocoder = new google.maps.Geocoder();
    var service = new google.maps.places.PlacesService(map);
    var userOrigin = nextProps.originField;
    var userDestination = nextProps.destinationField;
    var that = this;

    geocoder.geocode({ address: userOrigin}, function(results, status) {
      if (status !== 'OK') {
        browserHistory.push('/');
      } else {
        var lat = results[0].geometry.location.lat();
        var lng = results[0].geometry.location.lng();
      }

      var gMap = new google.maps.Map(document.getElementById('map'), {
        center: {lat, lng},
        zoom: 14,
        scrollwheel: false
      });

      var originWindow = new google.maps.InfoWindow({
       position: {lat, lng},
       map: gMap,
       content: "<p>Your starting point.<br/>Don't see a ride near you? Zoom out.</p>"
     })

      that.loadRides(userDestination, geocoder, gMap);
      that.setState({mapVariable: gMap});
    });
  },

  componentDidMount() {
    var that = this;
    var nextProps = this.props;
    var nextState = this.State;

    this.loadScript().then(function(){
        that.initMap(nextProps, nextState);
    });
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    return nextProps.originField !== this.props.originField || nextProps.destinationField !== this.props.destinationField
  },

  componentWillUpdate: function(nextProps, nextState) {
    // refactor this into a function to use here and in componentDidMount
    var that = this;

    this.loadScript().then(function(){
        that.initMap(nextProps, nextState)
    });
  },

  render: function() {
    return (
    	<div>
	      <div id="map">
	      </div>
    	</div>
    );
  }
});

export default GoogleMap;
