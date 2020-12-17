import { useParams } from "react-router-dom"
import {Card , Button} from 'react-bootstrap'

export function PollVote() {

    const { pollId } = useParams();

    // Use effect to fetch poll data;

    return (
        <div>
            <h1>Poll Vote Page for Poll with id: {pollId}</h1>
            <Card>
                <Card.Header as="h5">Poll Vote</Card.Header>
                <Card.Body>
                    <Card.Title>Where do you wanna eat with your friends?</Card.Title>
                    <Card.Text>
                        You can vote between few restaurants and pick your favorite one! Click below!
                    </Card.Text>
                    <Button variant="secondary">Go vote</Button>
                </Card.Body>
            </Card>
        </div>


    )
}