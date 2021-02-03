import { Col, Button } from "react-bootstrap";
import '../../../styles/meals.css';

export function MealItem(props) {


    return (
        <div className="justify-content-between shadow-sm bg-light my-3 p-3 rounded row mealItem">
            <Col className='mt-1' md={8}>
                <strong>{props.mealItem.name}</strong>
            </Col>
            <Col className='mt-1' md={2}>
                {props.mealItem.price} $
                </Col>
            <Col md={2}>
                <Button variant='dark' onClick={() => props.onAdd(props.mealItem)}>Add</Button>
            </Col>
        </div>
    )
}