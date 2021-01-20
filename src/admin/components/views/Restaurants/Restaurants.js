import { useEffect, useState } from "react";
import { Button, Row, Col, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { getRestaurants } from "../../../../api/restaurants";
import '../../../../styles/restaurants.css'
import { EditRestaurant } from './EditRestaurant'

export function Restaurants() {

    const [restaurants, setRestaurants] = useState([{'name': 'no', 'id': 'no', 'address': 'no', 'created':'no'}]);

    const [ clicked, setClicked ] = useState(false);

    const [ clickedID , setClickedID] = useState(null);

    const history = useHistory()

    const handleClick = (id) => {
        history.push(`/admin/restaurants/${id}/meals`)
    }

    useEffect(() => {
        getRestaurants().then(r => {
            setRestaurants(r.data)
            console.log(restaurants)
        })
    }, [])

    const handleEditButton = (id) => {
        if(clicked === false) {
            setClicked(true)
            setClickedID(id)
        } else {
            setClickedID(id)
        }
    }

    const list = Object.values(restaurants);

    console.log(restaurants)

    return (
        <div>
            <h1 className="text-center">Restaurants</h1>
            <Row className='mt-4'>
                <Col md={clicked === false ? 12 : 8}>
                    <Table className='bg-info mt-3'>
                        <thead className='thead'>
                            <tr>
                                <th>NAME</th>
                                <th>EDIT</th>
                                <th>SHOW MEALS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map((r, i) => {
                                    return (
                                        <tr key={i}>
                                            <th>{r.name}</th>
                                            <th><Button onClick={ ()=> handleEditButton(r.id)}></Button></th>
                                            <th><Button type='button' onClick={() => handleClick(r.id)}></Button></th>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </Table>
                </Col>
                <Col mt={4}>
                    <EditRestaurant restaurants={restaurants} id={clickedID}></EditRestaurant>
                </Col>
            </Row>
        </div>

    )
}