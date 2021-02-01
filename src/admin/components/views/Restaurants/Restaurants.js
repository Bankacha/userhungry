import { useEffect, useState } from "react";
import { Button, Row, Col, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { getRestaurants } from "../../../../api/restaurants";
import '../../../../styles/restaurants.css'
import { EditRestaurant } from '../../../components/Restaurants/EditRestaurant'
import { IoEyeOutline, IoPencil } from "react-icons/io5";

export function Restaurants() {

    const [restaurants, setRestaurants] = useState([{'name': 'no', 'id': 'no', 'address': 'no', 'created':'no'}]);

    const [ clicked, setClicked ] = useState(false);

    const [ clickedID , setClickedID] = useState(null);

    const history = useHistory()

    const handleClick = (id) => {
        history.push(`/admin/restaurants/${id}`)
    }

    useEffect(() => {
        getRestaurants().then(r => {
            setRestaurants(r.data)
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
            <h1 className="text-center"><i>Restaurants</i></h1>
            <Row className='mt-4'>
                <Col>
                    <Table striped bordered hover variant="dark">
                        <thead>
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
                                            <th className='text-center'><IoEyeOutline size='2em' type='button' onClick={() => handleClick(r.id)}></IoEyeOutline></th>
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