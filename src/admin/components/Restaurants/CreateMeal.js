import { useState } from 'react'
import { Form, Button, Row, Col, Alert } from 'react-bootstrap'
import '../../../styles/meals.css'
import { createMeal } from '../../../api/meals'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function CreateMeal(props) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState(false)

    const notify = () => toast.dark("You just created a new meal!");

    const handleCheck = () => {
        if (checked === true) {
            setChecked(false)
        } else {
            setChecked(true)
        }
    }

    const resetForm = () => {
        setName('');
        setPrice('');
        setChecked(false);
    }

    const handleMealCreation = () => {
        const body = {
            "name": name,
            "price": price,
            "available": checked
        }

        if (!name || !price) {
            alert('please set name and price correctly')
        } else {
            createMeal(props.id, body)
                .then(r => {
                    resetForm()
                    props.loadRestaurant()
                    notify()

                })
                .catch(() => setError(true))
        }
    }

    return (
        <div>
            {
                !error ? (
                    <Form id='form' className='w-100 form'>
                        <Form.Group className='mt-3'>
                            <Row>
                                <Col>
                                    <h4>Create new meal:</h4>
                                </Col>
                                <Col>
                                    <Form.Control value={name} onChange={(e) => setName(e.target.value)} />
                                </Col>
                                <Col>
                                    <Form.Check checked={checked} onChange={(e) => handleCheck(e.target.checked)} className='mt-2' type="checkbox" label="Check if available" />
                                </Col>
                                <Col>
                                    <Form.Control value={price} onChange={(e) => setPrice(e.target.value)} type="number" />
                                </Col>
                                <Col>
                                    <Button onClick={handleMealCreation} variant="dark" type="button">
                                        Create Meal
                                    </Button>
                                    <ToastContainer />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                ) : <div className="alert alert-danger">Error while saving.</div>
            }
        </div >

    )
}