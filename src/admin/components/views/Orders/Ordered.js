import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { getOrderItems, getOrder } from "../../../../api/orders";
import { getMeals } from "../../../../api/meals";
import { SingleOrder } from "../../Order/SingleOrder";


export function Ordered() {

    const { orderId } = useParams();

    const [orderItems, setOrderItems] = useState([]);
    const [allMeals, setAllMeals] = useState([]);

    useEffect(() => {
        getOrder(orderId)
            .then(({ data }) => {

                getMeals(data.restaurantId).then(({ data }) => {
                    // data -> [{meal}, {meal}, ...{meal}]
                    setAllMeals(data);
                })

                getOrderItems(orderId)
                    .then(({ data }) => {
                        setOrderItems(data)
                    })

            })
    }, [])


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


    return (
        <div>
            {

                orderItems.length ? (
                    <div>
                        <h1 className='mb-4 text-center'><i>Ordered saldo is - {calculate()} $</i></h1>
                        <SingleOrder allMeals={allMeals} orderItems={orderItems}></SingleOrder>
                    </div>
                ) : <h2 className='mt-5 text-center'>Sorry, but there are no orders for this one</h2>
            }
        </div>


    )
}