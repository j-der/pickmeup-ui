import React from 'react';
import axios from 'axios';

export default class RideTweets extends React.Component {
	loadRidesFromServer = () => {
		var rides, title, seats;
		console.log('RIDES LOADING')
		axios.get('http://localhost:3000/rides')
			.then(function (response) {
			console.log(response);
			rides = response.data;
			rides.forEach(
				function(tweet){
					title = tweet.title;
					seats = tweet.available_seats
					console.log(title, seats);
				})
			displayTweets(
				function(){});
		})
			.catch(function (response) {
			console.log(response)
		});
	}

	loadUsersFromServer = () => {
		var name;
		console.log('USERS LOADING')
		axios.get('http://localhost:3000/users')
			.then(function (response) {
			console.log(response);
			var userNames = response.data;
			userNames.forEach(
				function(user){
					name = user.first_name
					console.log(name);
				})
			{displayTweets()};
		})
			.catch(function (response) {
			console.log(response)
		});
	}

	displayTweets = () => {
		console.log("DISPLAYING TWEETS!!")
	}

	// constructor(props) {
	// 	super(props)
	// 	this.state = console.log('hello')
	// }

	componentDidMount() {
    this.loadRidesFromServer();
    this.loadUsersFromServer();
	}

	componentDidUpdate() {
		this.displayTweets();
	}

	render() {
		return(
			<div>
				Ride Tweets
			</div>
		);
	}
}
				// on div load, axios.get request to Rails API - SELECT * FROM rides;

// var UserTweet = React.createClass({

//   userDetails: function(users){
//     return users.map(function(user) {
//       return (
//         <div key={user.first_name} className="user-tweet">
//           <img id="user-pic" src="/images/profile_pic.png" />
//           <h4 id="user-first-name">{user.first_name}</h4>
//           <p>Rating here</p>
//           <h6>HERE ------> THERE</h6>
//         </div>
//       );
//     });
//   },

  // render: function() {
  //   return (
  //     <div>
  //       {this.userDetails(this.props.users)}
  //     </div>
  //   );
  // }


  // // getInitialState() {
  // //     return {
  // //         tweets: null  
  // //     };
  // // }

  // initTweets = () => {
  // 	console.log('tweets within rides div');
  // }
  // 	axios.get('http://localhost:3000/rides')
  // 	.then(function (response) {
  // 		console.log("list of ride tweets", response.data);
  // 	})
  // 	.catch(function (response) {
  // 		console.log("catch response is", response);
  // 	});

  // 	that.setState({allTweets: tweets})
  // }

  // get request to both rides and users

  // loadTweets = () => {
  // 	{console.log(ride.origin + ride.destination + user.first_name)}
  // }