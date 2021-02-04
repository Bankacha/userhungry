import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { getOrderItems, getOrder } from "../../../../api/orders";
import { getMeals } from "../../../../api/meals";
import { SingleOrder } from "../../Order/SingleOrder";


export function OrderPage() {

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
    // OTHER WAY FOR THE SAME CALCULATIONS

    // const calculate = () => {
    //     let payloadsList = [];
    //     orderItems.forEach(item => {
    //         payloadsList = [...payloadsList, ...item.payloads];
    //     })

    //     let total = 0;

    //     payloadsList.forEach(payload => {
    //         const meal = findMeal(payload.mealId);
    //         const mealTotal = meal.price * parseInt(payload.quantity);
    //         total += mealTotal;
    //     })

    //     return total
    // }

    // MAKING A LIST THAT CAN BE RENDERED SO CONSUMER NAME TAKES EVERY FIRST ROW-POSITION FOR HIS EVERY MEAL
    const testList = orderItems.map(element => ({
        consumer: element.consumer,
        payloads: element.payloads
    }))

    console.log(testList)
    const newList = [];

    testList.forEach( el => {
        el.payloads.forEach(e => {
            newList.push({
                consumer: el.consumer,
                mealId: e.mealId,
                quantity: e.quantity
            })
        })
    })
console.log(newList)
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