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
    }, [pollId]);
    
    const notify = () => toast('Link is copied to the clipboard!', {type:'dark'})
    
    const currentURL = window.location.href.split('/').filter(a=> a !== 'admin').join('/')

    return (
        <div>
            {
                poll ? (
                    <div className='mb-3'>
                        <Card className="bg-dark text-white">
                            <Card.Header className='text-center' as="h5">{poll.label ? poll.label : 'This poll has no name'}</Card.Header>
                            <Card.Body>
                                <Card.Title style={{ marginBottom: '40px' }}>Poll status: {poll.active === true ? 'still active' : 'voting is finisged'}</Card.Title>
                                <h6 className='mb-4'>Send link below to your friends, and give them chance to vote for your next dinner</h6>
                                <Card.Text
                                    style={{ marginBottom: '40px' }}>
                                    Click to copy your shareable link
                                    <CopyToClipboard text={currentURL}><IoIosCopy onClick={notify} className='copyButton' size='1.5em' type='button'></IoIosCopy></CopyToClipboard>
                                    <ToastContainer/>
                                </Card.Text>



                                <PlaceOrder poll={poll} pollStatus={poll.active}></PlaceOrder>
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