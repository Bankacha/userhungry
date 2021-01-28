import { Button, Form } from 'react-bootstrap';
import { Row, Col, Card } from 'react-bootstrap';
import { IoIosAdd, IoIosRemove } from "react-icons/io";

export function Cart(props) {

    return (
        <div className="justify-content-between shadow-sm bg-light my-4 p-2 rounded row">
            <Col    >
                <Card>
                    <Card.Header>ORDER</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md='7'>jelo</Col>
                            <Col md='3'></Col>
                            <Col md='2'>2</Col>
                        </Row>
                        <Row>
                            <Col md='7'>jelo jelo</Col>
                            <Col md='3'></Col>
                            <Col md='2'>2e</Col>
                        </Row>
                        <Row>
                            <Col md='7'>jelo jelo jelo</Col>
                            <Col md='3'></Col>
                            <Col md='2'>2e</Col>
                        </Row>
                        <Row>
                            <Col md='7'>jelo jelo jelo jelo jelo</Col>
                            <Col md='3'></Col>
                            <Col md='2'>2e</Col>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Col>
                                <h4 className='text-right'>Total: 8e</h4>
                            </Col>
                        </Row>
                    </Card.Body>


                    <Card.Footer><Form.Control placeholder='Customer name'></Form.Control></Card.Footer>
                </Card>
            </Col>
        </div>
    )
}