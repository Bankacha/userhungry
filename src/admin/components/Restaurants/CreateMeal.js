import { Form, Button, Row, Col } from 'react-bootstrap'

export function CreateMeal() {

    return (
        <Form>
            <Form.Group>
                <Row>
                    <Col>
                        Create new meal
                    </Col>
                    <Col>
                        <Form.Control />
                    </Col>
                    <Col>
                        <Form.Control />
                    </Col>
                    <Col>
                        <Button variant="info" type="button">
                            Submit edit
                        </Button>
                    </Col>
                </Row>
            </Form.Group>
        </Form>
    )
}