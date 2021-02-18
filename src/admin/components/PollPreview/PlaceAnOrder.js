import { Form, Card, Button } from 'react-bootstrap'
import { IoIosCheckmark } from "react-icons/io";
import { postOrder } from '../../../api/orders'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useHistory } from 'react-router';


export function PlaceOrder(props) {

    const [name, setName] = useState('')

    const history = useHistory();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        if (props.pollStatus === false) {
            postOrder(winner.id, data.name).then(r => console.log(r.data));

            notifyValid()
            reset()
            setTimeout(() => history.push("../orders"), 2000);

        } else {
            notifyError()
        }
    };

    const notifyValid = () => toast('Order created successfully!', { type: 'dark' })
    const notifyError = () => toast('Poll is still active!', { type: 'dark' })



    const winnerRestaurant = () => {
        const votes = props.poll.votes.map(v => v.restaurantId)

        let list = [];
        votes.forEach(id => {
            const filtered = votes.filter(v => v === id)
            list = filtered.length > list.length ? filtered : list
        })

        const winner = props.poll.restaurants.find(r => r.id === list[0]);

        return winner ? winner : props.poll.restaurants[0];
    }

    const winner = winnerRestaurant();

    return (
        winner ? (
            <Card className="bg-light text-dark p-4">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className='mt-4 text-center'>
                        <Form.Label ref={register} value={winner.name} name='restaurant'>Chosen Restaurant is <strong>{winner.name}</strong></Form.Label>
                        <Form.Control onChange={e => setName(e.target.value)} ref={register} name="name" type="string" placeholder="Order Label" />
                    </Form.Group>
                    {
                        name ? (<Button type="submit" variant="secondary" style={{ width: '100%' }}><IoIosCheckmark size='2em' /></Button>
                        ) : ''
                    }
                    <ToastContainer />
                </Form>
            </Card>
        ) : <h2>There is no winner.</h2>
    )
}