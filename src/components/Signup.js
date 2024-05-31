import React, { useState } from "react";

import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    // middleware
    const navigate = useNavigate();

    const collectData = () => {
        // try {
        //     const response = await fetch('http://localhost:5000/user/register', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             name,
        //             email,
        //             password
        //         })
        //     });
    
        //     // Check if the response is successful (status code 2xx)
        //     if (response.ok) {
        //         // If successful, navigate to '/'
        //         navigate('/products');
        //     } else {
        //         // If not successful, throw an error
        //         throw new Error('Failed to register user');
        //     }
        // } catch (error) {
        //     // Handle any errors that occur during the fetch or navigation
        //     console.error('Error:', error);
        // }

        console.warn(name, email, password);
        const result = fetch('http://localhost:5000/user/register', {
            method : 'post',
            body : JSON.stringify({
                name,
                email,
                password
            }),
            headers: {
                'Content-Type' : 'application/json'
            },
        })
        console.warn(result);
        if(result) {
            navigate('/products');
        }
    }

    return (
        <Container className="my-5">
            <h1 className="text-center">Create a New User</h1>
            <div className="register-div">
                <Form className="register-form">
                    <Form.Group className="mb-3" controlId="formBasicFullname">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder="Enter full name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Enter password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={collectData}>
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>
    );
}

export default SignUp