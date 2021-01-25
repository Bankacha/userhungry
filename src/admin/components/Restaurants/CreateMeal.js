import { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import '../../../styles/meals.css'
import { createMeal } from '../../../api/meals'
import { useParams } from 'react-router';
import { getMeals } from '../../../api/meals'
import { getRestaurant } from '../../../api/restaurants'

export function CreateMeal(props) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState(false)


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
                    
                })
                .catch(() => setError(true))
        }
    }
    console.log(name, price, checked)

    return (
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
                    </Col>
                </Row>
            </Form.Group>
        </Form>
    )
}