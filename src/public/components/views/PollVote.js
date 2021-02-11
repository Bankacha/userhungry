import { useParams } from "react-router-dom"
import {Card , Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../../styles/polVoteCard.css'

export function PollVote() {

    const { pollId } = useParams();



    return (
        <div>
            <Card className='pollVoteCard mt-5'>
                <Card.Header className="pollVoteHeader" as="h5">Poll Vote</Card.Header>
                <Card.Body>
                    <Card.Title>Where do you wanna eat with your friends?</Card.Title>
                    <Card.Text>
                        You can vote between few restaurants and pick your favorite one! Click below!
                    </Card.Text>
                    <Link to={`${pollId}/vote`}><Button className="w-100" variant="secondary">Go vote</Button></Link>
                </Card.Body>
            </Card>
        </div>


    )
}