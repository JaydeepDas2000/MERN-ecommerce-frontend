import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    // after login no need to visit signup again
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if(auth) {
            navigate('/')
        }
    })

    const navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();
        
        let result = await axios.post('http://localhost:5000/user/login', {
            email: email,
            password: password
        });

        const login_user = result.data;
        console.warn(login_user)
        if(login_user.name) {
            localStorage.setItem('user', JSON.stringify(login_user))
            navigate('/')
        } else {
            alert('Please input correct email and password')
        }
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
                        <Form.Control type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Enter password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={loginUser} className="btn-action">
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