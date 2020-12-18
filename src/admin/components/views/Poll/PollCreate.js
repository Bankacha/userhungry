import { useEffect, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { getRestaurants } from '../../../../api/restaurants'
import { createPoll } from '../../../../api/polls'
import { useHistory } from 'react-router-dom';
import { IoIosCreate } from "react-icons/io";
import { RestaurantsList } from '../../PollCreate/RestaurantsList';

import '../../../../styles/pollCreate.css'

export function PollsCreate(props) {

    const history = useHistory();

    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurants, setSelectedRestaurants] = useState([]);
    const [label, setLabel] = useState('')

    useEffect(() => {
        getRestaurants().then(r => setRestaurants(r.data));
    }, [])

    // CREATING SECOND PARAMETER FOR CREATE REQUEST 
    const restSelect = (r) => {
        setSelectedRestaurants([...selectedRestaurants, r]);
        setRestaurants([...restaurants.filter(rest => rest.id !== r.id)])
    }

    // CREATE REQUEST
    const create = () => {
        const IdList = selectedRestaurants.map(r => r.id);

        createPoll(label, IdList)
            .then(r => {
                history.push(`/admin/polls/${r.data.id}`);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // x button function

    const deleteFromWishlist = (r) => {
        setRestaurants([...restaurants, r]);
        setSelectedRestaurants([...selectedRestaurants.filter(rest => rest.id !== r.id)])
    }

    return (
        <div>
            <Row className="justify-content-around shadow-sm row p-4 rounded bg-white">
                <Col md={12}>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter Poll Label</Form.Label>
                            <Form.Control onChange={e => setLabel(e.target.value)} type="string" placeholder="Poll Name" />
                        </Form.Group>
                    </Form >
                </Col>

                <Col className='md-3'>
                    <RestaurantsList type='add' onItemClicked={(r) => restSelect(r)} title="Select restaurants" restaurants={restaurants} />
                </Col>
                <Col className='md-3'>
                    <RestaurantsList type='delete' title="Click on some to remove" restaurants={selectedRestaurants} onItemClicked={(r) => deleteFromWishlist(r)} />
                </Col>

                <Col md={12} className="mt-4">
                    <Button disabled={!selectedRestaurants.length} onClick={() => create()} variant="success" className="w-100"><IoIosCreate /> Create</Button>
                </Col>
            </Row>
        </div>
    )
}