import React from 'react';

var Map = React.createClass({
  
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

export default Map;