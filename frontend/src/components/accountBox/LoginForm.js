import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginForm = () => {
    return (
        <div className='container '>
            <Form  >


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
                    Signin
                </Button>
            </Form >

        </div >
    )
}

export default LoginForm;