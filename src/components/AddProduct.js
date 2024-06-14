import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const AddProduct = () => {
    return(
        <Container className="my-5">
            <h1 className="text-center">Add Product</h1>
            <div className="register-div">
                <Form className="register-form">
                    <Form.Group controlId="formBasicEmail">
                        <div className='form-div d-flex'>    
                            <div className='form-child-div'>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </div>
                            <div className='form-child-div'>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </div>
                        </div>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <div className='form-div d-flex'>    
                            <div className='form-child-div'>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </div>
                            <div className='form-child-div'>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </div>
                        </div>
                    </Form.Group>
                    <div className='btn-div'>
                        <Button variant="primary" type="submit" className="btn-action btn-style">
                            Login
                        </Button>
                    </div>
                </Form>
            </div>
        </Container>
    );
}

export default AddProduct