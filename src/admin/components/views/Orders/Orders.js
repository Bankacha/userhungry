import { useEffect, useState } from "react"
import { Table } from "react-bootstrap";
import { getOrders } from "../../../../api/orders"
import { IoIosEye } from "react-icons/io";
import { Title } from "../../Shared/Title";
import '../../../../styles/td.css'

export function Orders(props) {

    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(false)

    useEffect(() => {
        getOrders().then(r => setOrders(r.data))
            .catch(e => setError(true))
    }, [])

    return (
        <div>
            {
                error ? <h2 className='text-center'>Error while loading.</h2> : (
                    <div>
                        <Title props={"Orders"}></Title>
                        <Table striped bordered hover variant="dark" size="sm">
                            <thead className='thead'>
                                <tr>
                                    <th></th>
                                    <th>Order label</th>
                                    <th className='text-center'>Active?</th>
                                    <th className='text-center'>Creation date</th>
                                    <th className='text-center'>Show</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders ? (orders || []).map((r, i) => {
                                        return (
                                            <tr key={i}>
                                                <td className='td'>{i + 1}</td>
                                                <td>{r.label}</td>
                                                <td className='text-center'>{r.active === true ? 'yes' : 'no'}</td>
                                                <td className='text-center'>{r.created.split('T')[0]}</td>
                                                <td className='text-center'><IoIosEye size='2em' type='button' color='gray' onClick={() => props.history.push(`orders/${r.id}`)}></IoIosEye></td>
                                            </tr>
                                        )
                                    }) : ''
                                }

                            </tbody>
                        </Table>
                    </div>
                )

            }

        </div>


    )
}