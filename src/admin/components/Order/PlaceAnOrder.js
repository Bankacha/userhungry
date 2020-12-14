import { Accordion, Form, Card, Button } from 'react-bootstrap'

export function PlaceOrder(props) {

    const winnerRestaurant = () => {
        const votes = props.poll.votes.map(v=> v.restaurantId)

        let list = [];
        votes.forEach(id => {
            const filtered = votes.filter(v => v === id)
            list = filtered.length > list.length ? filtered : list
        })
        return props.poll.restaurants.find( r => r.id === list[0])
    }
console.log(winnerRestaurant())
    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Place an Order
         </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Chosen Restaurant</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                    </Form>
                </Accordion.Collapse>
            </Card>
        </Accordion>

    )
}