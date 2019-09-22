import React, { Component } from 'react';

class LandingPage extends Component {
	constructor(props){
		super(props);
		const socket = this.props.socket
	}

	render(){
		return(
			<div className="container">
				<h1>THIS IS THE LANDING PAGE</h1>
				<div className="openGamesDiv">
					<h2> List of open games would go here </h2>
				</div>
				<div className="createGameDiv">
					<form>
						<h2>Create New Room</h2>
						<label>
							Name:
							<input type="text" value="Submit"/>
						</label>
					</form>
				</div>
			</div>
		)
	}
}

export default LandingPage;
