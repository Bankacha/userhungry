import { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { getPoll } from '../../../../api/polls';

export function PollPreview(props) {

    let { pollId } = useParams();

    const [poll, setPoll] = useState(null);

    useEffect(() => {

        getPoll(pollId).then((response) => {
            // Uncoment next line to see poll object structure
            // console.log(response.data);
            setPoll(response.data);
        });

    }, []);

    return (
        <div>
            {
                poll ? (
                    <Card>
                        <Card.Header className='text-center' as="h5">{poll.label}</Card.Header>
                        <Card.Body>
                            <Card.Title style={{ marginBottom: '40px' }}>Status: {poll.active === true ? 'active' : 'no longer active'}</Card.Title>
                            <Card.Text style={{ marginBottom: '40px' }}>
                                {poll.id}
                            </Card.Text>
                            <Button variant="primary">{poll.active === true ? 'deactivate' : 'make it active'}</Button>
                        </Card.Body>
                    </Card>
                ) : ''
            }
        </div>
    )
}