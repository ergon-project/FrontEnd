import React, { Component } from "react";
import './MainLayout.css';
import AppNavbar from  './AppNavbar';
import Footer from  './Footer';

export default class MainLayout extends Component {
	render() {
		console.log(this.props.children)
		return <div className={'MainLayout'}> 
			<AppNavbar/>
			{this.props.children[0]}
			<Footer/>
		</div>
	}
}
