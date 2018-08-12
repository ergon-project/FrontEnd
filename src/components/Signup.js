import React, { Component } from "react";
import {Button, Col, Input, Row} from 'react-materialize';
import Modal from 'react-responsive-modal';


class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            UserType: '',
            open: false
        };
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };
     
    onCloseModal = () => {
        this.setState({ open: false });
    };

	render() {
        const { open } = this.state;

		return (
                <li><a onClick={this.onOpenModal}><i class="green-text material-icons left">android</i>Register</a>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h2>Register!</h2>
                    <Row>
                        <Input s={6} label="Name" />
                        <Input s={6} type='email' label="Email" />
                        <Input type="file" label="Logo" s={12} />
                        
                        <Col s={12} >
                            <Input name='group1' type='radio' value='ERG Employee' label='ERG Employee' onClick={()=>{ this.setState({UserType: 'ERG Employee'}); }} />
                            <Input name='group1' type='radio' value='Dreamer' label='Dreamer' onClick={()=>{ this.setState({UserType: 'Dreamer'}); }} />
                            <Input name='group1' type='radio' value='Speaker' label='Speaker' onClick={()=>{ this.setState({UserType: 'Speaker'}); }} />
                            <Input name='group1' type='radio' value='Vendor' label='Vendor' onClick={()=>{ this.setState({UserType: 'Vendor'}); }} />
                        </Col>

                        <UserType type={this.state.UserType} />
                    </Row>
                </Modal>
                </li>
		);
    }

}

class UserType extends Component {
    render(){
        switch(this.props.type){
            case 'ERG Employee':
                return (
                    <Col s={12}>
                        <h5>Welcome ERG Employee</h5>
                        <Input s={12} type='textarea' label='Causes' />
                        <Button waves='light' className='blue'>Sign Up!</Button>
                    </Col>
                );
            case 'Dreamer':
                return (
                    <Col s={12}>
                        <h5>Welcome Dreamer</h5>
                        <Button waves='light' className='blue'>Sign Up!</Button>
                    </Col>
                );
            case 'Speaker':
                return (
                    <Col s={12}>
                        <h5>Welcome Speaker</h5>
                        <Button waves='light' className='blue'>Sign Up!</Button>
                    </Col>
                );
            case 'Vendor':
                return (
                    <Col s={12}>
                        <h5>Welcome Vendor</h5>
                        <Button waves='light' className='blue'>Sign Up!</Button>
                    </Col>
                );
            default:
                return(<div></div>);
        }
    }
}

export default Signup;