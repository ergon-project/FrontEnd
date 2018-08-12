import React, { Component } from "react";
import './MainLayout.css';
import AppNavbar from  './AppNavbar';
import Footer from  './Footer';
import logo from '../../assets/logo3.png';

export default class MainLayout extends Component {
	render() {
		return <div className={'MainLayout'}> 
			<AppNavbar/>
			<div className={'fakeBody'}>
				<div className={'bigPic'}></div>
				<img src={logo} style={{width: '100%'}} />
			</div>
			<Footer/>
		</div>
	}
}
