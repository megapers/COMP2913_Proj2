import React from 'react';
import { Button, Form } from 'react-bootstrap';


class EntryForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };
        this.formRef = null;
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        if(this.state.value !== ''){
            this.props.addRecord(this.state.value);
            this.setState({value: ''});
        }
        this.formRef.reset();
        event.preventDefault();
    }

    render(){
        const form = 
        <div>
            <Form ref={(ref) => this.formRef = ref} onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasic">
                    <Form.Control type="text" onChange={this.handleChange} placeholder="Search a book..." />
                </Form.Group>
            
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
            <br/>
        </div>;

        return form;
    }
}

export default EntryForm;