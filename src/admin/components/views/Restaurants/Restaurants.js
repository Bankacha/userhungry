import { useEffect, useState } from "react";
import { Row, Col, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { getRestaurants } from "../../../../api/restaurants";
import '../../../../styles/restaurants.css'
import { IoIosEye } from "react-icons/io";

export function Restaurants() {

    const [restaurants, setRestaurants] = useState([{ 'name': 'no', 'id': 'no', 'address': 'no', 'created': 'no' }]);
    const [error, setError] = useState(false)

    const history = useHistory()

    const handleClick = (id) => {
        history.push(`/admin/restaurants/${id}`)
    }

    useEffect(() => {
        getRestaurants()
            .then(r => setRestaurants(r.data))
            .catch(() => setError(true))
    }, [])

    const list = Object.values(restaurants);

    return (
        <div>
            {
                error ? <h2 className='text-center'>Error while loading.</h2> : (
                    <div>
                        <h1 className="text-center restaurantName"><i>Restaurants</i></h1>
                        <Row className='mt-4'>
                            <Col>
                                <Table striped bordered hover variant="dark" size="sm">
                                    <thead className='thead'>
                                        <tr>
                                            <th>NAME</th>
                                            <th className='text-center'>SHOW</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            list.map((r, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <th>{r.name}</th>
                                                        <th className='text-center'><IoIosEye size='2em' color='gray' type='button' onClick={() => handleClick(r.id)}></IoIosEye></th>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </Table>
                            </Col>

                        </Row>
                    </div>
                )
            }

        </div>

    )
}