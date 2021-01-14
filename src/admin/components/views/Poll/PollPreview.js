import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { getPoll } from '../../../../api/polls';
import { PlaceOrder } from '../../PollPreview/PlaceAnOrder';
import { RestaurantsList } from '../../PollPreview/RestaurantsList';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IoIosCopy } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../../styles/pollPreview.css';

export function PollPreview(props) {

    let { pollId } = useParams();

    const [poll, setPoll] = useState(null);

    useEffect(() => {

        getPoll(pollId).then((response) => {
            setPoll(response.data);
        });

    }, []);

    const notify = () => toast('Link is copied to the clipboard!', {type:'dark'})

    return (
        <div>
            {
                poll ? (
                    <div>
                        <Card className="bg-dark text-white">
                            <Card.Header className='text-center' as="h5">{poll.label}</Card.Header>
                            <Card.Body>
                                <Card.Title style={{ marginBottom: '40px' }}>Status: {poll.active === true ? 'active' : 'no longer active'}</Card.Title>
                                <h6 className='mb-3'>Send link below to your friends, and give them chance to vote for your next dinner</h6>
                                <Card.Text
                                    style={{ marginBottom: '40px' }}>
                                    {`http://localhost:3000/polls/${poll.id}`}
                                    <CopyToClipboard text={`http://localhost:3000/polls/${poll.id}`}><IoIosCopy onClick={notify} className='copyButton' size='1.5em' type='button'></IoIosCopy></CopyToClipboard>
                                    <ToastContainer/>
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

const appRoot = document.createElement('div');
document.body.appendChild(appRoot);