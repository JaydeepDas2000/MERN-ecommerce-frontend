import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const loginUser = (e) => {
        e.preventDefault();
        
        console.log(email)
        console.log(password)
    }

    return (
        <Container className="my-5">
            <h1 className="text-center">Login</h1>
            <div className="register-div">
                <Form className="register-form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" value='password' onChange={(e) => setpassword(e.target.value)} onClick={loginUser} className="btn-action">
                        Login
                    </Button>
                    <Link to='/signup'>
                        <Button variant="link" type="submit" className="btn-action">
                            Create a New Account
                        </Button>
                    </Link>
                </Form>
            </div>
        </Container>
    )
}

export default Login;