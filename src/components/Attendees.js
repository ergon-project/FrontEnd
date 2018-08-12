import React, { Component } from "react";
import {Button, Chip, Col, Input, Row} from 'react-materialize';
import './Attendees.css'

class Attendees extends Component {
    users = [
        {name:'Qwer Nbv', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Asdf Poiu', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Xcvb Lkjh', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Yuio Mnb', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Vbnm Hgfd', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Werty Rewq', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Dfgh Jhgfd', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Qwer Nbv', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Asdf Poiu', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Xcvb Lkjh', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Yuio Mnb', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Vbnm Hgfd', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Werty Rewq', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Dfgh Jhgfd', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Qwer Nbv', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Asdf Poiu', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Xcvb Lkjh', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Yuio Mnb', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Vbnm Hgfd', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Werty Rewq', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Dfgh Jhgfd', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Qwer Nbv', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Asdf Poiu', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Xcvb Lkjh', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Yuio Mnb', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Vbnm Hgfd', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Werty Rewq', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
        {name:'Dfgh Jhgfd', pic:'http://entertainment.ie//images_content/rectangle/620x372/E-T.jpg'},
    ];

    constructor(props){
        super(props);
        this.state = {
            open: false
        };
    }
    
    render() {
		return (
            <div className={'Attendees'}>
                <Row>
                    <div className={'meter'}></div>
                    <Col s={4} className={'bBar'}></Col>
                    <Col s={8} className={'gBar'}></Col>
                </Row>
                <Row>
                    <Col s={12}>
                    <div>
                        <div className={'scroll'}>
                        {this.users.map((user, i)=>{
                            return (<Chip key={i} className={'blue lighten-2'}><img src={user.pic} alt='Contact Person' /> {user.name}</Chip>);
                        })}
                        </div>
                    </div>
                    </Col>
                </Row>
            </div>
		);
    }

}


export default Attendees;