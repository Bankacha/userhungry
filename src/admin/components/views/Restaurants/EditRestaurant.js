import { Form, Button, Row, Col } from 'react-bootstrap'

export function EditRestaurant(props) {

    const currentRestaurant = () => {
        return props.restaurants.find(r => r.id === props.id)
    }

    const current = currentRestaurant();

    const forEdit = current ? current : {name: 'no', id: 'no', address: 'no'}

    console.log(forEdit)

    return (
        <Row className='mt-3'>
            <Col>
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Restaurant Name is <strong>{forEdit.name}</strong></Form.Label>
                <Form.Control></Form.Control>
                <Form.Text className="text-muted">
                    You can change current restaurant name, just type a new one
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Restaurant address is <strong>{forEdit.address}</strong></Form.Label>
                <Form.Control/>
                <Form.Text className="text-muted">
                    You can change current restaurant address, just type a new one
                </Form.Text>
            </Form.Group>
            <Button variant="info" type="submit">
                Submit edit
                
            </Button>
        </Form>
            </Col>
        </Row>
        
    )
}