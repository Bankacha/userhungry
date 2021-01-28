import { Col, Row, Button } from "react-bootstrap";

export function MealItem(props) {

    return (
        <div className="justify-content-between shadow-sm bg-light my-4 p-2 rounded row">
            <Col md={8}>
                <strong>{props.mealItem.name}</strong>
            </Col>
            <Col md={2}>
                {props.mealItem.price} $
                </Col>
            <Col md={2}>
                <Button>Add</Button>
            </Col>
        </div>
    )
}