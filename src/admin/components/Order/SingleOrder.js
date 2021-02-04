import { Table } from "react-bootstrap";


export function SingleOrder({ item }) {


    // const singleItemTotal = (obj) => {
    //     let total = 0

    //     obj.forEach(element => {
    //         const meals = props.allMeals.filter(el => el.id === element.mealId)
    //         meals.map(m => {
    //             total += (m.price * element.quantity)
    //         })
    //     });

    //     return total
    // }


    return (
        <tr>
            <td>{item.consumer}</td>
            <td>{item.mealName}</td>
            <td>{item.note ? item.note : '/'}</td>
            <td>{item.mealPrice} $</td>
            <td>{item.quantity}</td>
            <td>{item.total}</td>
        </tr>
    )
}