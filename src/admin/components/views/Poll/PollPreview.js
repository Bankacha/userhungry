import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { getPoll } from '../../../../api/polls';
import { PlaceOrder } from '../../PollPreview/PlaceAnOrder';
import { RestaurantsList } from '../../PollPreview/RestaurantsList';

export function PollPreview(props) {

    let { pollId } = useParams();

    const [poll, setPoll] = useState(null);

    useEffect(() => {

        getPoll(pollId).then((response) => {
            setPoll(response.data);
        });

    }, []);

    return (
        <div>
            {
                poll ? (
                    <div>
                        <Card className="bg-dark text-white">
                            <Card.Header className='text-center' as="h5">{poll.label}</Card.Header>
                            <Card.Body>
                                <Card.Title style={{ marginBottom: '40px' }}>Status: {poll.active === true ? 'active' : 'no longer active'}</Card.Title>
                                <Card.Text style={{ marginBottom: '40px' }}>
                                    {poll.id}
                                </Card.Text>
                                <PlaceOrder poll={poll}></PlaceOrder>
                                </Card.Body>
                        </Card>
                        <RestaurantsList restaurants={poll.restaurants} votes={poll.votes}></RestaurantsList>

                    </div>
                ) : ''
            }
        </div>
    )
}