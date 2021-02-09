import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { Row, Col } from "react-bootstrap";
import { Cart } from "../orders/Cart"
import { getOrder } from "../../../api/orders"
import { getRestaurant } from "../../../api/restaurants";
import { MealItem } from "../orders/MealItem";
import { AddMealModal } from '../orders/AddMealModal';
import '../../../styles/cart.css'

export function CreateOrder() {

    const [order, setOrder] = useState({});
    const [restaurant, setRestaurant] = useState(null)

    const [addingMeal, setAddingMeal] = useState(null);
    const [cartItems, setCartItems] = useState([]);


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

    }, [orderId])

    const addMeal = (meal) => {
        setAddingMeal(meal);
    }

    const addMealToCart = (cartItem) => { // -> {mealId, quantity, note?}
        setCartItems([...cartItems, cartItem]);
        setAddingMeal(null);
    }

    const clearCart = () => {
        setCartItems([])
    }

    return (
        <div>
            <AddMealModal
                meal={addingMeal}
                onCancel={() => setAddingMeal(null)}
                onSubmit={addMealToCart}
                show={addingMeal ? true : false}
            ></AddMealModal>

            <h2 className='text-center my-4'><i>Make your order</i></h2>
            <Row>
                <Col className='md-7'>
                    {
                        restaurant ? (restaurant.meals || []).map((m, i) => {
                            return (
                                <MealItem onAdd={addMeal} key={i} mealItem={m}></MealItem>
                            )
                        }) : ''
                    }
                </Col>
                <Col md={5} className="p-3 cart">
                    <Cart clearCart={clearCart} orderId={orderId} meals={restaurant ? restaurant.meals : []} cartItems={cartItems}></Cart>
                </Col>
            </Row>
        </div>

    )
}