import React, { Component } from "react";
import './MainLayout.css';
import AppNavbar from  './AppNavbar';
import Footer from  './Footer';

export default class MainLayout extends Component {
	render() {
		return <div className={'MainLayout'}> 
			<AppNavbar/>
			<div className={'fakeBody'}></div>
			<Footer/>
		</div>
	}
}
