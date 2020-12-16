import { useEffect, useState } from 'react';
import { Form, Table, Row, Col } from 'react-bootstrap';
import { getRestaurants } from '../../../../api/restaurants'
import '../../../../styles/pollCreate.css'
import { useForm } from "react-hook-form";
import { Button } from 'bootstrap';


export function PollsCreate(props) {


    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurants, setSelectedRestaurants] = useState([]);


    useEffect(() => {
        getRestaurants().then(r => setRestaurants(r.data))
    }, [])

    const restSelect = (r) => {
        setSelectedRestaurants([...selectedRestaurants, r]);
        setRestaurants([...restaurants.filter(rest => rest.id !== r.id)])
    }

    console.log(restaurants)

    const listForSelected = selectedRestaurants.length ? selectedRestaurants : [];

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Poll Label</Form.Label>
                <Form.Control ref={register} type="string" placeholder="Poll Name" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Row>
                    <Col className='offset-2 md-3'>
                        <Form.Label className='mt-3 mb-5'><strong>Click on chosen restaurant to make a WishList -></strong></Form.Label>

                    </Col>
                    <Col className='md-3'>
                        <Form.Label className='mt-3 mb-5'><strong>Wishlist</strong></Form.Label>
                     </Col>
                </Row>

            <Table>
                <tbody>
                    <Row>
                        <Col className='offset-2 md-3'>
                            {
                                restaurants.map((r, i) => {
                                    return (
                                        <tr key={i}>
                                            <td onClick={() => restSelect(r)}>{r.name}</td>
                                        </tr>
                                    )
                                })
                            }
                        </Col>
                        <Col className='md-3'>
                            {
                                listForSelected.map((r, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{r.name}</td>
                                        </tr>
                                    )
                                })
                            }
                        </Col>
                    </Row>



                </tbody>
            </Table>
            </Form.Group>
        </Form >
    )
}