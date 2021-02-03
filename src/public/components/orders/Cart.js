import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Row, Col, Card } from 'react-bootstrap';
import { sendOrderItems } from '../../../api/orders';

export function Cart(props) {

    const [consumer, setConsumer] = useState('');

    const getMealProperty = (key, id) => {
        const meal = props.meals.find(m => m.id === id)
        return meal[key]
    }

    const itemTotal = (mealId, quantity) => {
        return getMealProperty('price', mealId) * quantity
    }

    const total = () => {
        let result = 0;

        props.cartItems.forEach((cartItem) => result += itemTotal(cartItem.mealId, cartItem.quantity));

        return result;
    }

    const sendOrder = (orderId) => {

        const payload = {
            consumer: consumer,
            payloads: [
                ...props.cartItems
            ]
        }

        sendOrderItems(orderId, payload).then(r=>console.log(r.data))

        setConsumer('')
        props.clearCart()
    }

    return (
        <div className="justify-content-between shadow-sm bg-light my-3 p-2 rounded row">
            <Col    >
                <Card>
                    <Card.Header className='text-center'>ORDER</Card.Header>
                    <Card.Body>
                        {
                            props.cartItems.map((k, i) => {
                                return (
                                    <Row key={i}>
                                        <Col md='6'>{getMealProperty('name', k.mealId)}</Col>
                                        <Col md='2'>{getMealProperty('price', k.mealId)}$</Col>
                                        <Col md='2'>x{k.quantity}</Col>
                                        <Col md='2'>{itemTotal(k.mealId, k.quantity)}$</Col>
                                    </Row>
                                )
                            })
                        }

                        <hr></hr>
                        <Row>
                            <Col>
                                <h4 className='text-right'>Total: {total()}$</h4>
                            </Col>
                        </Row>
                    </Card.Body>


                    <Card.Footer><Form.Control value={consumer} onChange={(e) => setConsumer(e.target.value)} placeholder='Consumer name'></Form.Control></Card.Footer>
                    {
                        consumer ? <Button variant='dark' onClick={()=>sendOrder(props.orderId)}>SEND</Button> : ''
                    }
                </Card>
            </Col>
        </div>
    )
}