import React, { Component } from "react";
import "./App.css";
import { Button } from "react-materialize";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

class App extends Component {
	render() {
		return (
			<Router>
			<Switch>
				<Route exact path='/' render={() => {
					return <MainLayout />
				}} />
				<Route
					exact
					path="/register"
					render={() => {
						// return <SignupPage />;
					}}
				/>
				<Route
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
				<Route
					exact
					path="/events/:eventId"
					render={({ match }) => {
						const id = match.params.eventId;
						// return <EventPage eventId={id} />;
					}}
				/>
			</Switch>
			</Router>
		);
	}
}

export default App;