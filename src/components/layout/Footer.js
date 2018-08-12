import React, { Component } from "react";
import {Footer} from "react-materialize";

class MyFooter extends Component {
	render() {
		return (
            <Footer copyrights="© 2018 Copyright "
            links={
                <ul>
                <li><a className="grey-text text-lighten-3" href="#!">GitHub</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Slack</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Facebook</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">FundME</a></li>
                </ul>
            }
            className='blue-grey darken-4'
            >
                <h5 className="white-text left-align">ERGO</h5>
                <p className="grey-text text-lighten-4 left-align">To empower employee resource groups to collaborate, connect and create events for their communities</p>
            </Footer>
		);
	}
}

export default MyFooter;