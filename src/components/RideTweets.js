import React from 'react';
import axios from 'axios';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import ModalWindow from './ModalWindow';

const styles = {
  root: {
    display: 'block',
    flexWrap: 'wrap',
    height: '100%',
    width: '30%',
    float: 'left'
  },
  card: {
    overflowY: 'auto',
    margin: 5,
    height: 'auto',
  },

	request: {
		float: 'right',
		margin: '5px',
		color: 'black'
	}
};

export default class RideTweets extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			titles: [],
			seats: [],
			names: [],
			ids: [],
			avatars: [],
			rides: []
		}
	}

	componentWillMount() {
	  this.loadRidesDetails();
	  // console.log("component did mount")
	}

	loadRidesDetails = () => {
		axios.get('http://localhost:3000/rides')
			.then( (response) => {
			// console.log('this is the response', response);
			this.setState({rides: response.data.rides})
		})
			.catch(function (response) {
			// console.log(response)
		})
			.then(this.displayTweets)

	}

	displayTweets = () => {
		// console.log('this is this.state.rides', this.state.rides)
		this.state.rides.forEach( (ride) => {
			this.state.titles.push(ride.title)
			this.state.seats.push(ride.available_seats)
			this.state.names.push(ride.user_first_name)
			this.state.ids.push(ride.id)
			this.state.avatars.push(ride.user_avatar)
		})
		// console.log('this is this.state', this.state)
		this.setState( (previousState, currentProps) => {
		})
	}

	render() {
		// console.log('this.state:', this.state)
		// console.log('this.state.titles:', this.state.titles[0])
		// console.log('this is title', this.state.titles)
		return(

			<div style={styles.root}>
				{this.state.rides.map(tile => (
			    <Card
			      padding={1}
			      style={styles.card}
			      key={tile.id}
			    >
		        <CardHeader
		          title={tile.title}
		          subtitle={tile.user_first_name}
		          avatar={tile.user_avatar}
		          actAsExpander={true}
		          showExpandableButton={true}
		         />
	        	<CardText expandable={true}>
	        		<p>{tile.user_first_name}</p>
	        		<p>Number of seats available: {tile.available_seats}</p>
	        	</CardText>
		        	<CardActions expandable={true}>
	        			<ModalWindow
	        				title="Request a Seat!"
	        				label="Request a Seat"
	        				index="2"
	        				style={styles.request} />
		        	</CardActions>
			    </Card>
			    ))}
			  </div>
		);
	}
}