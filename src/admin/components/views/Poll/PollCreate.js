import { useEffect, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { getRestaurants } from '../../../../api/restaurants'
import '../../../../styles/pollCreate.css'
import { createPoll } from '../../../../api/polls'
import { getPolls } from '../../../../api/polls'


export function PollsCreate(props) {


    // const { register, handleSubmit} = useForm();
    // const onSubmit = data => console.log(data);

    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurants, setSelectedRestaurants] = useState([]);
    const [label, setLabel] = useState('')

    useEffect(() => {
        getRestaurants().then(r => setRestaurants(r.data));
        console.log(getPolls().then(r => console.log(r.data)))

    }, [])

    // CREATING SECOND PARAMETER FOR CREATE REQUEST 
    const restSelect = (r) => {
        setSelectedRestaurants([...selectedRestaurants, r]);
        setRestaurants([...restaurants.filter(rest => rest.id !== r.id)])
    }

    const selectedRestIDs = () => {
        let list = []
        if (selectedRestaurants.length > 0) {
            for (let rest of selectedRestaurants) {
                list.push(rest.id)
            }
            return list
        }
    }

    const IdList = selectedRestIDs()
    console.log(selectedRestIDs())


    // CREATE REQUEST
    const create = () => {
        createPoll(label, IdList).then(r => console.log(r.data))
            .catch(function (error) {
                console.log(error);
            });
        console.log(getPolls().then(r => console.log(r.data)))
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
                        <Form.Label className='mt-3 mb-5'><strong>Click on restaurant to make a WishList -></strong></Form.Label>

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
                                    <Row key={i}>
                                        <Col className=' mb-1 mt-1' onClick={() => restSelect(r)}>{r.name}</Col>
                                    </Row>
                                )
                            })
                        }
                    </Col>
                    <Col className='offset-1 md-3'>
                        {
                            selectedRestaurants.map((r, i) => {
                                return (
                                    <Row key={i}>
                                        <Col className=' mb-1 mt-1'>{r.name}</Col>
                                    </Row>
                                )
                            })
                        }
                    </Col>
                    <Col className='md-2'>
                        {
                            selectedRestaurants.length ? <Button onClick={() => create()} type='submit' variant="success" className=''>CREATE</Button> : ''
                        }
                    </Col>
                </Row>

            </Form.Group>
        </Form >
    )
}