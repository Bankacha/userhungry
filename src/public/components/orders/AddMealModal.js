import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";

export function AddMealModal(props) {
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");

  const reset = () => {
    setNote("")
    setQuantity(1)
  }

  const submit = () => {
    const payload = {
      quantity: parseInt(quantity),
      mealId: props.meal.id,
      note: note,
    };

    props.onSubmit(payload);

    reset()
  };

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header >
        <Modal.Title>{props.meal ? props.meal.name : ''}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            Quantity:
          </Col>
          <Col lg={3}>
            <Form.Control onChange={(e) => setQuantity(e.target.value)} as="select" custom>
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
        <Button onClick={submit} variant="dark">
          To cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
