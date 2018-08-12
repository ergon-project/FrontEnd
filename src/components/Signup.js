import React, { Component } from "react";
import {Button, Col, Modal, Icon, Input, Row} from 'react-materialize';
import $ from 'jquery';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            UserType: ''
        };
    }

	render() {
		return (
			/*<Modal
                header='Sign Up!'
                trigger={<Button waves='light'>Sign Up!<Icon right>insert_chart</Icon></Button>}
            >
                <Row>
                    <Input s={6} label="Name" />
                    <Input type="file" label="Logo" s={12} />
                    <Input s={12} type='select' label='User Type'>
                        <option value='ERG Employee'>ERG Employee</option>
                        <option value='Dreamer'>Dreamer</option>
                        <option value='Speaker'>Speaker</option>
                        <option value='Vendor'>Vendor</option>
                    </Input>
                </Row>
            </Modal>*/
            <Row>
                <Input s={6} label="Name" />
                <Input type="file" label="Logo" s={12} />
                
                <Col s={12} >
                    <Input name='group1' type='radio' value='ERG Employee' label='ERG Employee' onClick={()=>{ this.setState({UserType: 'ERG Employee'}); }} />
                    <Input name='group1' type='radio' value='Dreamer' label='Dreamer' onClick={()=>{ this.setState({UserType: 'Dreamer'}); }} />
                    <Input name='group1' type='radio' value='Speaker' label='Speaker' onClick={()=>{ this.setState({UserType: 'Speaker'}); }} />
                    <Input name='group1' type='radio' value='Vendor' label='Vendor' onClick={()=>{ this.setState({UserType: 'Vendor'}); }} />
                </Col>

                <UserType type={this.state.UserType} />
            </Row>
		);
    }
    
    radioHandler(value){

    }

}

class UserType extends Component {
    render(){
        switch(this.props.type){
            case 'ERG Employee':
                return (
                    <Col s={12}>Welcome ERG Employee</Col>
                );
            case 'Dreamer':
                return (
                    <Col s={12}>Welcome Dreamer</Col>
                );
            case 'Speaker':
                return (
                    <Col s={12}>Welcome Speaker</Col>
                );
            case 'Vendor':
                return (
                    <Col s={12}>Welcome Vendor</Col>
                );
            default:
                return(<div></div>);
        }
    }
}

export default Signup;