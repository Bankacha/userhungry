import { useEffect, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { getRestaurants } from '../../../../api/restaurants'
import '../../../../styles/pollCreate.css'
import { createPoll } from '../../../../api/polls'
import { useHistory } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosClose } from "react-icons/io";

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
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Enter Poll Label</Form.Label>
                <Form.Control onChange={e => setLabel(e.target.value)} type="string" placeholder="Poll Name" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Row>
                    <Col className='offset-1 md-3'>
                        <Form.Label className='mt-3 mb-5'><strong>Click on restaurant to make a WishList &gt;</strong></Form.Label>

                    </Col>
                    <Col className=' md-3'>
                        <Form.Label className='mt-3 mb-5'><strong>Wishlist</strong></Form.Label>
                    </Col>
                </Row>

                <Row>
                    <Col className='offset-1 md-3'>
                        {
                            restaurants.map((r, i) => {
                                return (
                                    <Row key={i} onClick={() => restSelect(r)} className="justify-content-between shadow-sm bg-light my-4 p-2 rounded">
                                        <Col md={10} className='mb-1 mt-1' >{r.name}</Col>
                                        <Col md={2}>
                                            <IoIosArrowForward />
                                        </Col>
                                    </Row>
                                )
                            })
                        }
                    </Col>
                    <Col className='offset-1 md-3'>
                        {
                            selectedRestaurants.map((r, i) => {
                                return (
                                    <Row key={i} className="justify-content-between shadow-sm bg-light my-4 p-2 rounded">
                                        <Col>{r.name}  <IoIosClose onClick={() => deleteFromWishlist(r)} size='1.5em'></IoIosClose></Col>
                                    </Row>
                                )
                            })
                        }
                    </Col>
                    <Col className='md-2'>
                        {
                            selectedRestaurants.length ? <Button onClick={() => create()} type="button" variant="success" className=''>CREATE</Button> : ''
                        }
                    </Col>
                </Row>

            </Form.Group>
        </Form >
    )
}