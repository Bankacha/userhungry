import { Accordion, Form, Card, Button } from 'react-bootstrap'
import { IoIosCheckmark } from "react-icons/io";
import { postOrder } from '../../../api/orders'
import { useForm } from "react-hook-form";



export function PlaceOrder(props) {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        postOrder(winner.id, data.name).then(r => console.log(r.data));
        alert('Order created successfully!')
    };


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
                        <Form.Control ref={register} name="name" type="string" placeholder="Order Label Name" />
                    </Form.Group>

                    <Button type="submit" variant="secondary" style={{ width: '100%' }}><IoIosCheckmark size='2em' /></Button>
                </Form>
            </Card>
        ) : <p>There is no winner.</p>
    )
}