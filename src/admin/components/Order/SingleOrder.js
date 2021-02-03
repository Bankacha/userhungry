import { useEffect, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { getMeals } from '../../../api/meals'
import { getOrders } from "../../../api/orders";
import { getRestaurants } from "../../../api/restaurants";

export function SingleOrder(props) {


    const singleItemTotal = (obj) => {
        let total = 0

        obj.forEach(element => {
            const meals = props.allMeals.filter(el => el.id === element.mealId)
            meals.map(m => {
                total += (m.price * element.quantity)
            })
        });

        return total
    }


    return (
        <div>
            {
                props.orderItems ? (props.orderItems || []).map((o, i) => {
                    return (
                        <div key={i} className="justify-content-between shadow-sm bg-light my-3 p-3 rounded row mealItem">
                            <Col className='mt-1' md={8}>
                                <strong>{o.consumer}</strong>
                            </Col>
                            <Col className='mt-1' md={2}>
                                {singleItemTotal(o.payloads)} $
                            </Col>
                            <Col md={2}>
                                <Button variant='dark'>view</Button>
                            </Col>
                        </div>
                    )
                }) : ''
            }

        </div>
    )
}