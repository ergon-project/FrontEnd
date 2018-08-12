import React, { Component } from "react";
import "./App.css";
import { Button } from "react-materialize";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
// import MainLayout from './components/layout/MainLayout';
import AppNavbar from "./components/layout/AppNavbar";
import Signup from "./components/Signup";
// import { Link } from "react-router-dom";
// import Login fom "./components/Login";

class App extends Component {
	render() {
		return (
			<Router>
			<div className="App">
				<AppNavbar />
				<div className="container">
					<Switch>
				{/* <Route exact path='/' render={() => { */}
					{/* // return  */}
				
				{/* // }} /> */}
				 <Route exact path="/register" component={Signup}/>
				 {/* <Route exact path="/login" component={Login}/> */}
				
				

				 {/* <Route
				 	exact
					path="/login"
					render={() => {
						// return <LoginPage />;
					}}
				/>
				<Route
					exact
					path="/"
					render={() => {
						// return <LoginPage />;
					}}
				/>
				<Route exact path="/events/:eventId" render={({ match }) => {
					const id = match.params.eventId;
						// return <EventPage eventId={id} />;
					}}
				/> */}
			</Switch>
            </div>
          </div>
        </Router>
		);
	}
}

export default App;
