import React, { Component } from "react";
import './MainLayout.css';
import AppNavbar from  './AppNavbar';

export default class MainLayout extends Component {
	render() {
		return <div className={'MainLayout'}> 
			<AppNavbar/>
		</div>
	}
}
