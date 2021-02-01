import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { getPoll } from "../../../../api/polls";
import { Meals } from "../../../../admin/components/Restaurants/Meals"
import { getMeals } from "../../../../api/meals";
import { Table, Button, Row, Col, Card } from "react-bootstrap";
import {Cart} from "../../orders/Cart"

export function CreateOrder() {

    const [poll, setPoll] = useState([]);
    const [meals, setMeals] = useState([]);
    const [cartMeal, setCartMeal] = useState([]);

    const { pollId } = useParams();

    const votes = poll.votes ? poll.votes.map(v => v.restaurantId) : [];



    //
    const winnerRest = () => {
        let list = [];
        votes.forEach(id => {
            const filtered = votes.filter(v => v === id)
            list = filtered.length > list.length ? filtered : list;
        });
        const winner = poll.restaurants ? poll.restaurants.find(r => r.id === list[0]) : []

        return winner ? winner : poll.restaurants[0]
    }
    const winner = winnerRest();


    useEffect(() => {
        getPoll(pollId).then(({ data }) => {
            setPoll(data)
        })

        setTimeout(function () {
            getMeals(winner.id).then(({ data }) => {
                setMeals(data)
            })
        }, 2000);
    }, [])


    console.log(poll, meals)
    return (
        //winner restaurant is....
        <div>
            <h3 className="text-center restaurantName">Winner restaurant is: {winner.name}</h3>

            <h5 className=" mt-3 mb-5 text-center"><i>Here are meals for the winner restaurant</i></h5>


            <Row>
                <Col className={cartMeal ? 'md-8' : 'md-12'}>
                    <Table className='mt-3' striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Meal name</th>
                                <th>Available?</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                !meals ? [] : meals.map((m, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{m.name}</td>
                                            <td className='text-center'>{m.available === true ? 'yes' : 'no'}</td>
                                            <td>{`${m.price} $`}</td>
                                            <td><Button onClick={() => {
                                                setCartMeal([...cartMeal, {
                                                    quantity: 1,
                                                    mealId: m.id
                                                }])
                                            }
                                            }>To cart</Button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
                {
                    cartMeal.length ? (
                        <Cart cartMeal={cartMeal} meals={meals}></Cart>
                    ) : ''
                }

            </Row>



        </div>

    )
}