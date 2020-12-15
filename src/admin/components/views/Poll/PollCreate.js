import { useEffect, useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import { getRestaurants } from '../../../../api/restaurants'
import '../../../../styles/pollCreate.css'
import { useForm } from "react-hook-form";
import { Button } from 'bootstrap';


export function PollsCreate(props) {


    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data =>  console.log(data) ;

    const [restaurants, setRestaurants] = useState([]);


    useEffect(() => {
        getRestaurants().then(r => setRestaurants(r.data))
    }, [])

    console.log(restaurants)
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Poll Label</Form.Label>
                <Form.Control  ref={register} type="string" placeholder="Poll Name" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label className='mt-3'>Example select</Form.Label>
                <Table>
                    <tbody>

                        {
                            restaurants.map((r, i) => {
                                return (
                                    <tr>
                                        <td className='inline' key={i}>{r.name}</td><Form.Check ref={register} className='check'></Form.Check>
                                    </tr>
                                )}
                            )
                        }

                    </tbody>
                </Table>
            <Button type='submit'  variant="secondary" style={{width: '100%'}}></Button>
            </Form.Group>
        </Form>
    )
}