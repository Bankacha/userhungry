import { useEffect, useState } from "react"
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getOrders } from "../../../../api/orders"

export function Orders(props) {

    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(false)

    useEffect(() => {
        getOrders().then(r => setOrders(r.data))
            .catch(e => setError(true))
    }, [])

    return (
        <div>
            <h1 className='text-center mb-4'><i>Orders</i></h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Order label</th>
                        <th className='text-center'>Active?</th>
                        <th className='text-center'>Creation date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders ? (orders || []).map((r, i) => {
                            return (
                                <tr key={i} onClick={() => props.history.push(`orders/${r.id}`)}>
                                    <td>{r.label}</td>
                                    <td className='text-center'>{r.active === true ? 'yes' : 'no'}</td>
                                    <td className='text-center'>{r.created.split('T')[0]}</td>
                                </tr>
                            )
                        }) : ''
                    }

                </tbody>
            </Table>
        </div>


    )
}