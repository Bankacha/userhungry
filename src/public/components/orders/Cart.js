import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Row, Col, Card } from 'react-bootstrap';
import { IoIosAdd , IoIosRemove } from "react-icons/io";

export function Cart(props) {
    console.log(props.cartMeal)

    const [quantity, setQuantity] = useState([...props.cartMeal])


    // const handleQuantity = (add, remove) => {
    //     if(add) {
    //         setQuantity(...props.cartMeal, quantity +1)
    //     }
    //     if(remove && quantity > 0) {
    //         setQuantity(...props.cartMeal, quantity +1)
    //     }
    // }
    console.log(quantity)

    return (
        <Col xs lg='5'>
            <Card>
                <Card.Header>ORDER</Card.Header>
                {
                    props.cartMeal ? props.cartMeal.map((m, i) => {
                        return (
                            <Card.Body key={i}>
                                <Row>
                                    <Col md='7'>{props.meals.find(meal=>meal.id === m.mealId).name}</Col>
                                    <Col md='3'><IoIosRemove onClick={()=>setQuantity({...props.cartMeal.map(o=> o.id === m.mealId ? quantity: props.cartMeal.quantity - 1)} )}/>{quantity.quantity}<IoIosAdd onClick={()=>setQuantity({...props.cartMeal.map(o=> o.id === m.mealId ? quantity: props.cartMeal.quantity + 1)})}/></Col>
                                    <Col md='2'>{props.meals.find(meal=>meal.id === m.mealId).price} $</Col>
                                </Row>
                            </Card.Body>
                        )
                    }) : ''
                }
                <Card.Footer><Form.Control placeholder='Customer name'></Form.Control></Card.Footer>
            </Card>
        </Col>
    )
}