import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-materialize";
import Signup from './components/Signup';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<Button floating large className="red" waves="light" icon="add" />
			</div>
		);
	}
}

export default App;
