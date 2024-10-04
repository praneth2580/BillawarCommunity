import React from 'react';
import { Form, Input, Label, FormGroup, Button } from 'reactstrap';

function Login() {

    let onSubmit = (e) => {
        // Prevent default browser page refresh.
        e.preventDefault();

        // Get form data as an object.
        let data = Object.fromEntries(new FormData(e.currentTarget));

        // Submit to your backend API...
        // setSubmitted(data);
    };

    return (
        <div className='login-bg'>
            <div className='login-container'>
                <Form onSubmit={onSubmit}>
                    <h2>LOGIN</h2>
                    <FormGroup floating>
                        <Input
                            id="login-email"
                            name="email"
                            placeholder="Email"
                            type="email"
                        />
                        <Label for="login-email">
                            Email
                        </Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input
                            id="login-password"
                            name="password"
                            placeholder="Password"
                            type="password"
                        />
                        <Label for="login-password">
                            Password
                        </Label>
                    </FormGroup>
                    <Button>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Login