import React, { useState } from "react";

import { Form, Button, Container } from 'react-bootstrap';

const SignUp = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const collectData = () => {
        console.warn(name, email, password)
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
                        <Form.Control type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Password" />
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