import React, { Component } from 'react';
import './App.css';

const PlayerCard = ({color, symbol})=> {
	return(
		<div className="player-card">
			{symbol}
			{color}
		</div>
	)
}


class App extends Component {
	render() {
		return (
			<div className="App">
				<PlayerCard 
					color = "red"
					symbol = "paper"
				/>
				<PlayerCard
					color = "blue"
					symbol = "rock"
				/>
			</div>
		);
	}
}

export default App;
