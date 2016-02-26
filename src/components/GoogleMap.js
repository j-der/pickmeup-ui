import React from 'react';

var GoogleMap = React.createClass({
  
  componentDidMount: function(){

    // componentDidMount is called by React directly after Map is rendered
    // the map must be initialized after the div is rendered or it will have nothing to grab onto
    var gMap;
    // define the init function that google maps need to initialize
    function initMap() {
      gMap = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 43.652325, lng: -79.379377},
        zoom: 14
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
	      </div>
	      <div>
	      	{this.props.originField ? this.props.originField : 'No origin'}
	      </div>
    	</div>
    );
  }
});

export default GoogleMap;