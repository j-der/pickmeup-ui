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

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 10,
    height: '100%'
  },
  card: {
    width: '30%',
    overflowY: 'auto',
  },

	request: {
		float: 'right',
		margin: '5px',
		color: 'black'
	}
};

const cardData = [
	{
		title: 'Trinity Bellwoods to Caledon',
		name: 'Tessa',
		seats: 4,
		avatar: 'http://lorempixel.com/150/150/people/',
	},
	{
		title: 'Toronto to the Yukon',
		name: 'Leonardo',
		seats: 2,
		avatar: 'http://lorempixel.com/150/150/nature/',
	},
	{
		title: 'Mississauga to San Francisco',
		name: 'Nicholas',
		seats: 3,
		avatar: 'http://lorempixel.com/150/150/sports/',
	},
];

export default class RideTweets extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			titles: [],
			seats: [],
			names: [],
			rides: []
		}
	}

	componentWillMount() {
	  this.loadRidesDetails();
	  console.log("component did mount")
	}

	loadRidesDetails = () => {
		axios.get('http://localhost:3000/rides')
			.then( (response) => {
			console.log('this is the response', response);
			this.setState({rides: response.data.rides})
		})
			.catch(function (response) {
			// console.log(response)
		})
			.then(this.displayTweets)

	}

	displayTweets = () => {
		this.state.rides.forEach( (ride) =>{
			this.state.titles.push(ride.title)
			this.state.seats.push(ride.available_seats)
			this.state.names.push(ride.user_first_name)
		})
		console.log('these are rides', this.state)
		this.setState()
	}

	render() {

		return(

			<div style={styles.root}>
				{cardData.map(tile => (
			    <Card
			      padding={1}
			      style={styles.card}
			      key={tile.title}
			    >
		        <CardHeader
		          title={tile.title}
		          avatar={tile.avatar}
		          actAsExpander={true}
		          showExpandableButton={true}
		         />
	        	<CardText
	        		title={tile.name}
	        		expandable={true}
	        		>
	        		{tile.author}
	        		<p>Number of seats available: {tile.seats}</p>
	        	</CardText>
		        	<CardActions expandable={true}>
		        			<FlatButton
		        				label="Request a Seat"
		        				primary={true}
		        				keyboardFocused={true}
		        				style={styles.request}
		        			/>
		        	</CardActions>
			    </Card>
			    ))}
			  </div>
		);
	}
}


						// <Card style={styles.card}>
						// 	<CardHeader
						// 	title={this.state.titles[0]}
						// 	actAsExpander={true}
						// 	showExpandableButton={true}
						// 	/>
						// 	<CardText expandable={true}>
						// 		<p>Number of seats available: {this.state.seats[0]}</p>
						// 	</CardText>
						// 	<CardActions expandable={true}>
						// 			<FlatButton
						// 				label="Request a Seat"
						// 				primary={true}
						// 				keyboardFocused={true}
						// 				style={styles.request}
						// 			/>
						// 	</CardActions>
						// </Card>



// const CardExampleWithoutAvatar = () => (
//   <Card>
//     <CardHeader
//       title="Without Avatar"
//       subtitle="Subtitle"
//       actAsExpander={true}
//       showExpandableButton={true}
//     />
//     <CardText expandable={true}>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//       Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
//       Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
//       Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
//     </CardText>
//     <CardActions expandable={true}>
//       <FlatButton label="Action1"/>
//       <FlatButton label="Action2"/>
//     </CardActions>
//   </Card>
// );


// export default CardExampleWithoutAvatar;