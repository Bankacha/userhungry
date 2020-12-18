import { useEffect, useState } from 'react'
import {getPoll} from '../../../api/polls'
import { Form, Button} from 'react-bootstrap'
import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux';


export function Vote() {

    const [poll, setPoll] = useState();

    const identification = useSelector(p=> p.polls.pollId)
    

    console.log(identification)

    useEffect(() => {
        setPoll(getPoll(identification).then())   
    }, [])
    

    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
          </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
  </Button>
        </Form>
    )
}