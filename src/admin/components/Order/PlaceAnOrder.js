// import { Accordion, Form, Card, Button } from 'react-bootstrap'
// import { IoIosCheckmark } from "react-icons/io";
// import { postOrder } from '../../../api/orders'
// import { useForm } from "react-hook-form";



// export function PlaceOrder(props) {

//     const { register, handleSubmit} = useForm();
//     const onSubmit = data => {
 
//         postOrder(winner.id, data.name).then(r => console.log(r.data));
//         document.getElementById("myForm").reset();
//         alert('Order created successfully!')
//     };


//     const winnerRestaurant = () => {
//         const votes = props.poll.votes.map(v => v.restaurantId)

//         let list = [];
//         votes.forEach(id => {
//             const filtered = votes.filter(v => v === id)
//             list = filtered.length > list.length ? filtered : list
//         })
//         return props.poll.restaurants.find(r => r.id === list[0])
//     }

//     const winner = winnerRestaurant();
//     console.log(winnerRestaurant())
//     const finalWinner = winner.name ? winner : {...winner, name: ''}

//     return (
//         <Accordion defaultActiveKey="0">
//             <Card className="bg-light text-dark">
//                 <Card.Header className='text-center'>
//                     <Accordion.Toggle as={Button} variant="warning" eventKey="1">
//                         Place an Order
//          </Accordion.Toggle>
//                 </Card.Header>
//                 <Accordion.Collapse eventKey="1">
//                     <Form id='myForm' onSubmit={handleSubmit(onSubmit)}>
//                         <Form.Group className='mt-4 text-center' controlId="exampleForm.ControlInput1">
//                             <Form.Label ref={register} value={finalWinner.name} name='restaurant'>Chosen Restaurant is <strong>{finalWinner.name}</strong></Form.Label>
//                             <Form.Control ref={register} name="name" type="string" placeholder="Enter Order Label" />
//                         </Form.Group>

//                         <Button type="submit" variant="secondary" style={{ width: '100%' }}><IoIosCheckmark size='2em' /></Button>


//                     </Form>
//                 </Accordion.Collapse>
//             </Card>
//         </Accordion>

//     )
// }