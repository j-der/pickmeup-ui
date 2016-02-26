import React, { Component } from 'react';
import SearchBar from './SearchBar';
import GoogleMap from './GoogleMap';

export default class IndexPage extends Component {

	constructor(props) {
		super(props);

		this.state = {
			destinationField: null,
			originField: null,
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		let destinationField = event.target.querySelector("#destination-field").value;
		let originField = event.target.querySelector("#origin-field").value;
		// handleSubmit causes changeState, d- and o-fields become the values set in changeState below
		this.changeState({destinationField: destinationField, originField: originField});
		browserHistory.push('/main');

		// let request = axios.get('http://localhost:3000/search', {
		// 	destination_field: destinationField,
		// 	origin_field: originField,
		// })

		// request.then(//send to map by updating state)
	}

	changeState = (newState) => { // saving the changeState to a newState
		// this.setState(...newState)

		this.setState({
			destinationField: newState.destinationField, // new values set for d- and o-fields.
			originField: newState.originField
		})
	}

	render() {
		return (
			//handleSubmit will become the properties of the handleSubmit function above
			<div>
				{/* <SearchBar handleSubmit={this.handleSubmit}/> */}
				<GoogleMap originField={this.props.From} destinationField={this.props.To}/>
			</div>
				//post to map with newState
		)
	}
}