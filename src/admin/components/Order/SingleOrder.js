export function SingleOrder({ item }) {

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