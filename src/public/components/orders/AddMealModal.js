import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";

export function AddMealModal(props) {
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");

  const submit = () => {
    const payload = {
      quantity: quantity,
      mealId: props.meal.id,
      note: note,
    };

    props.onSubmit(payload);
    console.log(payload)
  };

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{props.meal ? props.meal.name : ''}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            Quantity:
          </Col>
          <Col lg={3}>
            <Form.Control onChange={(e)=>setQuantity(e.target.value)} as="select" custom>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Col>
        </Row>
          Note:
        <Form.Control onChange={e => setNote(e.target.value)}></Form.Control>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onCancel} variant="secondary">Close</Button>
        <Button onClick={submit} variant="primary">
          Dodaj
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
