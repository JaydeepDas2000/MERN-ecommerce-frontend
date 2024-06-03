import React, { useEffect, useState } from "react";
import axios from 'axios';
// import { useHistory } from 'react-router-dom'; // for older version
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    // middleware
    const navigate = useNavigate();
    // const history = useHistory(); // for older version

    // after login no need to visit signup again
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if(auth) {
            navigate('/')
        }
    })

    const collectData = async (e) => {

        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/user/register', {
                name : name,
                email : email,
                password : password
            });

            const user = response.data;

            localStorage.setItem('user', JSON.stringify(user));

            navigate('/');
        } catch (error) {
            console.error('Error registering user : ', error);
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