import React from 'react';
import { browserHistory } from 'react-router';

var GoogleMap = React.createClass({

  getInitialState: function() {
    return {origin: null, destination: null}
  },
  
  componentDidMount() {
    var that = this;
    // componentDidMount is called by React directly after Map is rendered
    // the map must be initialized after the div is rendered or it will have nothing to grab onto
    var gMap, geocoder;
    // define the init function that google maps need to initialize
    function initMap() {

      geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: that.props.originField}, function(results, status) {
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

        console.log('lat is', lat)
        console.log('lng is', lng)
      });

    }
    // create a function to load the proper script in time for the intialize
    function loadScript() {
      // it returns a promise, which will finish before calling the next function (initMap)
      // it is passed two parameters for success and failure
      return new Promise(function(resolve, reject) {
        // creating a <script> and giving it an attribute src=url, then append it to the document
        var url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCJfqqterywMRGBN3IYziMGwJ5tsD6aGCk";
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

  render: function() {
    return (
    	<div>
	      <div id="map">
	      </div>
	      <div>
	      	{this.props.destinationField ? this.props.destinationField : 'No destination'}
          {console.log(this.state.origin)}
          {console.log(this.state.destination)}
	      </div>
	      <div>
	      	{this.props.originField ? this.props.originField : 'No origin'}
	      </div>
    	</div>
    );
  }
});

export default GoogleMap;