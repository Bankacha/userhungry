import { useEffect, useState } from "react"
import { getOrders } from "../../../../api/orders"

export function Orders () {

const [ orders, setOrders ] = useState([]);
const [ error, setError ] = useState(false)

useEffect(()=> {
    getOrders().then(r  => setOrders(r.data))
    .catch(e=> setError(true))
} ,[])

console.log(orders)

    return <h1>Orders</h1>
}