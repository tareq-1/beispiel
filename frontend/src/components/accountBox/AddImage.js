import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AddImage.css';

import React, { useState } from 'react';
const AddImage = (props) => {


    return (
        <div className='container '>
            <Form onSubmit={props.handleSubmit} >
                <div className='div-image'></div>
                <Form.Group controlId="formFile" className="mb-3">


                    <Form.Control type="file"
                        onChange={props.handleChange}

                    />
                </Form.Group>

                <Row className="mb-3 ">
                    <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                        <Form.Label>Firstname:</Form.Label>
                        <Form.Control
                            className='border-start-0 border-top-0 border-end-0'
                            type="text"
                            placeholder="Enter your Name"



                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                        <Form.Label>Lastname:</Form.Label>
                        <Form.Control
                            className='border-start-0 border-top-0 border-end-0'
                            type="text"
                            placeholder="Enter your Name"

                        />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                        placeholder="Enter email"
                        className='border-start-0 border-top-0 border-end-0'

                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        placeholder="Password"
                        className='border-start-0 border-top-0 border-end-0'

                    />
                </Form.Group>




                <Button className="mb-3" variant="primary" type="submit">
                    UPDATE
                </Button>
            </Form >

        </div >

    )
}
export default AddImage;