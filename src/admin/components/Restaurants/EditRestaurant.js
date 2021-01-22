import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap'
import { updateRestaurant } from '../../../api/restaurants'

export function EditRestaurant(props) {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [error, setError] = useState(false)


    const edit = () => {
        const body = { ...props.restaurant }

        body.name = name ? name : body.name;
        body.address = address ? address : body.address;

        updateRestaurant(props.restaurant.id, body)
            .then(r => props.onEdited())
            .catch(() => setError(true))

    }

    return (
        <div>
            {
                props.restaurant ? (
                    <Row className='mt-3'>
                        <Col>
                            {error ? <div className="alert alert-danger">Error while saving.</div> : ''}
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Restaurant Name is <strong>{props.restaurant.name}</strong></Form.Label>
                                    <Form.Control onChange={(e) => setName(e.target.value)} />
                                    <Form.Text className="text-muted">
                                        You can change current restaurant name, just type a new one
                                </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Restaurant address is <strong>{props.restaurant.address}</strong></Form.Label>
                                    <Form.Control onChange={(e) => setAddress(e.target.value)} />
                                    <Form.Text className="text-muted">
                                        You can change current restaurant address, just type a new one
                                </Form.Text>
                                </Form.Group>
                                <Button onClick={edit} variant="dark" type="button">
                                    Submit edit
                            </Button>
                            </Form>
                        </Col>
                    </Row>
                ) : ''
            }
        </div>
    )
}