import { useEffect, useState } from 'react';
import { getPoll } from '../../../api/polls';
import { Card, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import {postVote} from '../../../api/polls';

export function Vote() {

    const [poll, setPoll] = useState(null);
    const [selectedId, setSelectedId] = useState(null)

    const { pollId } = useParams();

    useEffect(() => {
        getPoll(pollId).then((res) => {
            setPoll(res.data);
        })
    }, [])

    const vote = () => {
        if(selectedId) {
            postVote(pollId , selectedId)
            .then( r => {
                console.log('you voted successfully')
            })
        } else {
            console.log('not selected')
        }
    }


    return (
        poll ? (
            <div>
                <Card className="bg-dark text-white">
                    <Card.Header className='text-center' as="h5"></Card.Header>
                    <Card.Body>
                        <Card.Title style={{ marginBottom: '40px' }}>Status: {poll.active === true ? 'Active' : 'No longer active'}</Card.Title>
                        <Card.Text style={{ marginBottom: '40px' }}>
                            {poll.label} 
                        </Card.Text>
                        <ul>
                            {
                                poll.restaurants.map((r, i) => {
                                    return (
                                        <li
                                            onClick={() => setSelectedId(r.id)}
                                            key={i}
                                            style={{ cursor: 'pointer' }}
                                            className={`p-4 text-dark my-3 rounded ${selectedId === r.id ? 'bg-info' : 'bg-light'}`}>
                                            {r.name}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <Button onClick={()=> vote()} className='w-100 mt-4' variant='success'>Vote</Button>
                    </Card.Body>
                </Card>
            </div>

        ) : ''

    )
}