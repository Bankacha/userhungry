import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { updateRestaurant } from '../../../api/restaurants'

export function EditRestaurant(props) {

    const [name, setName] = useState(props.restaurant.name)
    const [address, setAddress] = useState(props.restaurant.address)
    const [error, setError] = useState(false)

    const history = useHistory();

    const goBack = () => {
        history.push("./");
    }

    const edit = () => {
        const body = { ...props.restaurant }

        body.name = name ? name : body.name;
        body.address = address ? address : body.address;

        updateRestaurant(props.restaurant.id, body)
            .then(r => props.onEdited())
            .catch(() => setError(true))

        goBack()
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
                                    <Form.Label><strong>Restaurant Name is:</strong></Form.Label>
                                    <Form.Control value={name} onChange={(e) => setName(e.target.value)} />
                                    <Form.Text className="text-muted">
                                        You can edit/change current restaurant name.
                                </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label><strong>Restaurant address is:</strong></Form.Label>
                                    <Form.Control value={address} onChange={(e) => setAddress(e.target.value)} />
                                    <Form.Text className="text-muted">
                                        You can edit/change current restaurant address.
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