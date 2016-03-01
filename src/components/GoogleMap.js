import React from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';

var GoogleMap = React.createClass({

  getInitialState() {
    return {mapVariable: null}
  },
  
  componentDidMount() {
    var that = this;
    // componentDidMount is called by React directly after Map is rendered
    // the map must be initialized after the div is rendered or it will have nothing to grab onto
    var gMap, geocoder, service;
    // define the init function that google maps need to initialize
    function initMap() {

      geocoder = new google.maps.Geocoder();
      service = new google.maps.places.PlacesService(map);
      var userOrigin = that.props.originField
      var userDestination = that.props.destinationField

      geocoder.geocode({ address: userOrigin}, function(results, status) {
        if (status !== 'OK') {
          browserHistory.push('/');
        } else {
          var lat = results[0].geometry.location.lat();
          var lng = results[0].geometry.location.lng();
        }

        gMap = new google.maps.Map(document.getElementById('map'), {
          center: {lat, lng},
          zoom: 14
        });
        // get rides from database
        axios.get('http://localhost:3000/rides', {
          params: {
            userDestination: userDestination
          }
        })
        .then(function (response) {
          var rideLocation;
          var rides = response.data.rides;

          rides.forEach(
            function (ride) {
              geocoder.geocode({address: ride.origin}, function (results) {
                rideLocation = results[0].geometry.location;
              
                var marker = new google.maps.Marker({
                  position: rideLocation,
                  map: gMap,
                });
              });
            }
          );
        })
        .catch(function (response) {
          console.log("the axios catch response is", response);
        });

        that.setState({mapVariable: gMap})
      });

    }
    // create a function to load the proper script in time for the intialize
    function loadScript() {
      // it returns a promise, which will finish before calling the next function (initMap)
      // it is passed two parameters for success and failure
      return new Promise(function(resolve, reject) {
        // creating a <script> and giving it an attribute src=url, then append it to the document
        var url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCJfqqterywMRGBN3IYziMGwJ5tsD6aGCk&libraries=places";
        var script = document.createElement('script');
        script.setAttribute("src", url);
        document.head.appendChild(script)

        script.onload = resolve;
        script.onerror = reject;
      });
    }
    // after the loadScript completes, call initMap
    // this will include another instance of the script each time the map is rendered, resulting in a warning
    loadScript().then(function(){
        initMap()
    });
  },

  shouldComponentUpdate: function(nextProps, nextState) {
     return nextProps.originField !== this.props.originField
  },

  componentWillUpdate: function(nextProps, nextState) {
    // refactor this into a function to use here and in componentDidMount
    var that = this;
    var gMap, geocoder, service;

    function initMap() {

      geocoder = new google.maps.Geocoder();
      service = new google.maps.places.PlacesService(map);
      var userOrigin = nextProps.originField;
      var userDestination = nextProps.destinationField;

      geocoder.geocode({ address: userOrigin}, function(results, status) {
        if (status !== 'OK') {
          browserHistory.push('/');
        } else {
          var lat = results[0].geometry.location.lat();
          var lng = results[0].geometry.location.lng();
        }

        gMap = new google.maps.Map(document.getElementById('map'), {
          center: {lat, lng},
          zoom: 14
        });

        axios.get('http://localhost:3000/rides', {
          params: {
            userDestination: userDestination
          }
        })
        .then(function (response) {
          var rideLocation;
          var rides = response.data.rides;

          rides.forEach(
            function (ride) {
              geocoder.geocode({address: ride.origin}, function (results) {
                rideLocation = results[0].geometry.location;
              
                var marker = new google.maps.Marker({
                  position: rideLocation,
                  map: gMap,
                });
              });
            }
          );
        })
        .catch(function (response) {
          console.log("the axios catch response is", response);
        });

        that.setState({mapVariable: gMap})
      });

    }

    function loadScript() {

      return new Promise(function(resolve, reject) {
        var url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCJfqqterywMRGBN3IYziMGwJ5tsD6aGCk&libraries=places";
        var script = document.createElement('script');
        script.setAttribute("src", url);
        document.head.appendChild(script)

        script.onload = resolve;
        script.onerror = reject;
      });
    }

    loadScript().then(function(){
        initMap()
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