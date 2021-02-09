import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { getOrderItems, getOrder } from "../../../../api/orders";
import { getMeals } from "../../../../api/meals";
import { SingleOrder } from "../../Order/SingleOrder";
import { Table } from "react-bootstrap";
import { ExelDownloadButton } from "../../Order/ExelDownloadButton";


export function OrderPage() {

    const { orderId } = useParams();

    const [orderItems, setOrderItems] = useState([]);
    const [allMeals, setAllMeals] = useState([]);

    useEffect(() => {
        getOrder(orderId)
            .then(({ data }) => {

                getMeals(data.restaurantId).then(({ data }) => {
                    setAllMeals(data);
                })

                getOrderItems(orderId)
                    .then(({ data }) => {
                        setOrderItems(data)
                    })
            })
    }, [orderId])

    // CALCULATIONS FOR ALL ORDER ITEMS ON ONE ORDER PAGE 
    const calculate = () => {
        const payloadsList = orderItems.map(o => o.payloads)

        let list = [];

        payloadsList.forEach(payload => {
            payload.forEach(a => {
                list.push(a)
            })
        })

        let total = 0;

        list.forEach(l => {
            allMeals.forEach(el => {
                if (el.id === l.mealId) {
                    total = total + (el.price * parseInt(l.quantity))
                }
            })
        })

        return total
    }

    const testList = orderItems.map(element => ({
        consumer: element.consumer,
        payloads: element.payloads
    }))

    const newList = [];

    testList.forEach(el => {

        el.payloads.forEach(e => {

            const meal = allMeals.find(m => m.id === e.mealId)
            newList.push({
                consumer: el.consumer,
                mealName: meal?.name,
                quantity: e.quantity,
                mealPrice: meal?.price,
                note: e.note,
                total: meal?.price * e.quantity
            })
        })
    })
    return (

        <div>
            {
                orderItems.length ? (
                    <div>
                        <h1 className='mb-4 text-center restaurantName'><i>Ordered saldo is - {calculate()} $</i></h1>
                        <ExelDownloadButton list={newList}></ExelDownloadButton>

                        <Table className='mt-3' striped bordered hover variant="dark" size="sm">
                            <thead className='thead'>
                                <tr>
                                    <th>Consumer</th>
                                    <th>Meal name</th>
                                    <th>Note</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    newList.map((el, i) => {
                                        return (
                                            <SingleOrder key={i} item={el}></SingleOrder>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                ) : <h2 className='mt-5 text-center'>Sorry, but there are no orders for this one</h2>
            }
        </div>
    )
}