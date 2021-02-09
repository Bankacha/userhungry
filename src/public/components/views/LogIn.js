import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { login } from "../../../api/login";

export function LogIn() {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        login(data)
        .then(({data}) => console.log(data.access_token))
    }

    

    return (
        <Row className='justify-content-center '>
            <Col md={5}>
                <Form  onSubmit={handleSubmit(onSubmit)} className='mt-5'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='username' ref={register({required: true})} placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' ref={register({required: true})} placeholder="Password" />
                    </Form.Group>

                    <Button variant="dark" className="w-100" type="submit">
                        Submit
            </Button>
                </Form>
            </Col>
        </Row>

    )
} 