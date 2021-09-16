import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MyForm.css';

import React, { useState } from 'react';
const MyForm = (props) => {


    return (
        <div className='container '>
            <Form onSubmit={props.handleSubmit} >

                <Row className="mb-3 ">
                    <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                        <Form.Label>Firstname:</Form.Label>
                        <Form.Control
                            className='border-start-0 border-top-0 border-end-0'
                            type="text"
                            placeholder="Enter your Name"
                            value={props.firstName}
                            onChange={props.formHandler}
                            name='firstNameValue'


                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                        <Form.Label>Lastname:</Form.Label>
                        <Form.Control
                            className='border-start-0 border-top-0 border-end-0'
                            type="text"
                            placeholder="Enter your Name"
                            value={props.lastName}
                            onChange={props.formHandler}
                            name='lastNameValue'
                        />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                        placeholder="Enter email"
                        className='border-start-0 border-top-0 border-end-0'
                        value={props.email}
                        onChange={props.formHandler}
                        name='emailValue'
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        placeholder="Password"
                        className='border-start-0 border-top-0 border-end-0'
                        value={props.password1}
                        onChange={props.formHandler}
                        name='passwordValue1'
                    />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password"
                        placeholder="Password"
                        className='border-start-0 border-top-0 border-end-0'
                        onChange={props.formHandler}
                        name='passwordValue2'
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">

                </Form.Group>


                <Button className="mb-3" variant="primary" type="submit">
                    Submit
                </Button>
            </Form >

        </div >

    )
}
export default MyForm;