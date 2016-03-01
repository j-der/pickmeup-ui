import React from 'react';
import axios from 'axios';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

var rides, seats, title, name, dataContent;

export default class RideTweets extends React.Component {

	loadRidesDetails = () => {
		axios.get('http://localhost:3000/rides')
			.then(function (response) {
			console.log('this is the response', response);
			dataContent = response.data;
			rides = dataContent.rides;
			console.log('this is the response.data', rides);
			title = rides.title;		})
			.catch(function (response) {
			// console.log(response)
		})
			.then(this.displayTweets)

	}

	displayTweets = () => {
		for(var i = 0; i < rides.length; i++) {
			console.log(rides[i].title);
		}
	}



	render() {
		this.loadRidesDetails();
		return(
			<div>
				<Card>
					<CardHeader
					title="title"
					actAsExpander={true}
					showExpandableButton={true}
					/>
					<CardText expandable={true}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</CardText>
				</Card>
							</div>
		);
	}
}


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