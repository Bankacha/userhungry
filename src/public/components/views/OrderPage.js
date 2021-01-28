import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { Table, Row, Col } from "react-bootstrap";
import { Cart } from "../orders/Cart"
import { getOrder } from "../../../api/orders"
import { getRestaurant } from "../../../api/restaurants";
import { MealItem } from "../orders/mealItem";


export function CreateOrder() {

    const [order, setOrder] = useState({});
    const [restaurant, setRestaurant] = useState(null)

    const { orderId } = useParams();


    useEffect(() => {
        getOrder(orderId)
            .then((res) => {
                const order = res.data

                setOrder(order);

                getRestaurant(order.restaurantId)
                    .then(({ data }) => {
                        setRestaurant(data)
                    })
            })

    }, [])


    console.log(order)
    return (
        <div>
            <h2 className='text-center my-5'>mAkE your order</h2>
            <Row>
                <Col md={8} className="p-4">
                    {

                        restaurant ? (restaurant.meals || []).map((m, i) => {
                            return (
                                <MealItem key={i} mealItem={m}></MealItem>
                            )
                        }) : ''
                    }
                </Col>
                <Col md={4} className="p-4">
                    <Cart></Cart>
                </Col>

            </Row>

        </div>

    )
}