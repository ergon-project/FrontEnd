import React, { Component } from "react";
import "./App.css";
import { Button } from "react-materialize";
import AppNavbar from  './components/layout/AppNavbar';

class App extends Component {
	render() {
		return (
			<div className="App">
				<AppNavbar />
				
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<Button floating large className="red" waves="light" icon="add" />
			</div>
		);
	}
}

export default App;
