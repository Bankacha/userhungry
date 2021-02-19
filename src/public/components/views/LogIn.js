import { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { getLoggedUserprofile, login } from "../../../api/login";
import { TOKEN_STORAGE_KEY } from '../../../constants';

export function LogIn() {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getLoggedUserprofile()
            .then(data => {
                if (data.status === 200) {
                    history.push('admin')
                }
            })
            .catch(() => setLoaded(true))
    })


    const history = useHistory()

    const [errorLogin, setErrorLogin] = useState(false);

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {

        console.log(errors);

        login(data)
            .then(({ data }) => {
                localStorage.setItem(TOKEN_STORAGE_KEY, data.access_token)
                history.push('admin')
            })
            .catch((err) => {
                console.log('error while login')
                setErrorLogin(true)
            })
    }

    const isValidFormField = (fieldName) => !errors[fieldName];

    return (
        <div>
            {
                loaded === true ? (
                    <Row className='justify-content-center '>
                        <Col md={5}>
                            {
                                errorLogin ? <div className='alert alert-danger'> Wrong username or password </div> : ''
                            }

                            <Form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control isInvalid={!isValidFormField('username')} name='username' ref={register({ required: true, pattern: /^\S+@\S+$/ })} placeholder="Enter email" />
                                    <Form.Control.Feedback type="invalid">
                                        Username must be an valid mail
                                </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control isInvalid={!isValidFormField('password')} type="password" name='password' ref={register({ required: true })} placeholder="Password" />
                                    <Form.Control.Feedback type="invalid">
                                        Password is required
                                </Form.Control.Feedback>
                                </Form.Group>

                                <Button variant="dark" className="w-100" type="submit">
                                    Submit
                    </Button>
                            </Form>
                        </Col>
                    </Row>
                ) : ''
            }
        </div>


    )
} 