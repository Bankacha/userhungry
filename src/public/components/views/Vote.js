import { useEffect, useState } from 'react';
import { getPoll } from '../../../api/polls';
import { Card, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { postVote } from '../../../api/polls';
import { useHistory } from 'react-router-dom';

export function Vote() {

    const [poll, setPoll] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const [isSending, setIsSending] = useState(false);

    const history = useHistory();

    const { pollId } = useParams();

    useEffect(() => {
        getPoll(pollId).then((res) => {
            setPoll(res.data);
        })
    }, [pollId])

    const vote = () => {
        if (!isSending) {
            if (selectedId) {
                setIsSending(true)

                postVote(pollId, selectedId)
                    .then(r => {
                        setIsSending(false)
                        console.log('you voted successfully')
                        history.push(`./result`)
                    })
                    .catch((err) => {
                        setIsSending(false);
                        console.error('error while voting')
                    })
            } else {
                alert('Restaurant not selected')
                console.log('not selected')
            }
        }

    }


    return (
        poll ? (
            <div className='my-3'>
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
                                            className={`p-4 text-dark my-3 rounded ${selectedId === r.id ? 'bg-success' : 'bg-light'}`}>
                                            {r.name}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <Button onClick={() => vote()} className='w-100 mt-4' variant='success'>Vote</Button>
                    </Card.Body>
                </Card>
            </div>

        ) : ''

    )
}