import { useEffect, useState } from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';
import { getRestaurants } from '../../../../api/restaurants'
import '../../../../styles/pollCreate.css'
import { createPoll } from '../../../../api/polls'
import { useHistory } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosClose } from "react-icons/io";
import { GiKnifeFork } from "react-icons/gi";
import "../../../../styles/wishList.css"

export function PollsCreate(props) {

    const history = useHistory();

    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurants, setSelectedRestaurants] = useState([]);
    const [label, setLabel] = useState('')
    const [hovered, setHovered] = useState(-1)

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

        if (!label) {
            alert('please enter poll label')
        } else {
            createPoll(label, IdList)

                .then(r => {
                    history.push(`/admin/polls/${r.data.id}`);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    // x button function
    const deleteFromWishlist = (r) => {
        setRestaurants([...restaurants, r]);
        setSelectedRestaurants([...selectedRestaurants.filter(rest => rest.id !== r.id)])
    }

    return (
        <Container>
            <Form>
                <Form.Group className='pollLabel' controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter Poll Label</Form.Label>
                    <Form.Control className='pollLabel' onChange={e => setLabel(e.target.value)} type="string" placeholder="Poll Label" />
                </Form.Group>

            </Form >
            <Row>
                <Col className='md-3'>
                    <Form.Label className='mt-3 mb-5 pollsCreateText'><strong>Click
                             to make a WishList &gt;</strong></Form.Label>

                </Col>
                <Col className='md-3'>
                    <Form.Label className='mt-3 mb-5 pollsCreateText2'><strong>Wishlist</strong></Form.Label>
                </Col>
            </Row>
            <Row className="wishList">
                <Col className='md-3 wishListItems'>
                    {
                        restaurants.map((r, i) => {
                            return (
                                <Row key={i} onClick={() => restSelect(r)} className="justify-content-between shadow-sm bg-light my-4 p-2 rounded">
                                    <Col md={10} className='mb-1 mt-1' >{r.name}</Col>
                                    <Col md={2} className='p-0 text-right'>
                                        <IoIosArrowForward />
                                    </Col>
                                </Row>
                            )
                        })
                    }
                </Col>
                <Col className='offset-1 md-3 wishListItems'>
                    {
                        !selectedRestaurants.length ? (
                            <Row className="justify-content-between shadow-sm bg-light my-4 p-2 rounded">
                                <Col>
                                    Your wishlist is currently empty
                                </Col>
                            </Row>) : selectedRestaurants.map((r, i) => {
                                return (
                                    <Row onMouseLeave={() => setHovered(-1)} onMouseOver={() => setHovered(i)} key={i} className="justify-content-between shadow-sm bg-light my-4 p-2 rounded">
                                        <Col onClick={() => deleteFromWishlist(r)}>
                                            {r.name}
                                            {
                                                hovered === i ? <IoIosClose size='1.5em'></IoIosClose> : ''
                                            }
                                        </Col>
                                    </Row>
                                )
                            })
                    }
                </Col>
                <Col className='md-2 createCol'>
                    {
                        selectedRestaurants.length ? <GiKnifeFork onClick={() => create()} type="button" size='9em' className='createBtn' /> : ''
                    }
                </Col>
            </Row>

        </Container>

    )
}