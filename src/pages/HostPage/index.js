import React, { Component } from 'react'

import io from 'socket.io-client'

class HostPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			players: [null, null, null, null, null],
			open_slot: 0,
			tempName: "",
		}

		const socket = props.socket;
		socket.on('player_join', function (playerObj) {
			console.log(playerObj);
			this.state.players[this.open_slot] = playerObj;
			this.state.open_slot += 1;
		})

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	makePlayerSection(playerNum, state) {

		var rn = null;
		if(this.state.players[playerNum] != null) {
			rn = (
				<div>
					<br/>
					{/*Player name here, passed with props?*/}
				</div>
			)
		} else {
			var rn = (
				<div> 
					No player<br/>
				</div>
			)		
		}

		return (
			<div className="playerDiv">
				Player #{playerNum+1}<br/>
				{rn}
				<br/>
			</div>
		)
	}

	handleChange(event) {
		this.setState({tempName:event.target.name});
	}

	handleSubmit(event) {
		this.socket.emit('add_player')

	}

	render() {
		return(
			<div className="container">
				<div className="header">
					{/*LOGO Here?*/}
					<h1>Hosting a Five Liars Game</h1>
				</div>
				<div className="playerList">
					{ this.makePlayerSection(0) }
					{ this.makePlayerSection(1) }
					{ this.makePlayerSection(2) }
					{ this.makePlayerSection(3) }
					{ this.makePlayerSection(4) }
				</div>
				<div className="joinPlayerFormDiv">
					<form className="joinForm" onSubmit={this.handleSubmit}>
						<h2>Join the Game:</h2>
						<label>
							<input type="text" name="name" onChange={this.handleChange}/>
						</label>
						<input type="submit" value="Join"/>
					</form>				
				</div>
			</div>							
		)
	}
}

export default HostPage;