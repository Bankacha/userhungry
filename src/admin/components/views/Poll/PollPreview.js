import { Card, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Axios from 'axios'

export function PollPreview(props) {

    const polls = useSelector(p => p.polls.polls)


    const arr = window.location.href.split('/');
    const pId = arr[arr.length - 1]
    console.log(pId)

    const currentPoll = polls.filter(p => p.id === pId ? p : null)
    console.log(currentPoll)

    // const getCurrent = () => Axios.get(`https://hungryherceg.api.veljko.dev/polls/:${id}`).then(r=>console.log(r))
    // console.log(getCurrent)

    return (
        <div>
            {
                currentPoll.map((p, i) => {
                    return (
                        <Card>
                            <Card.Header className='text-center' as="h5">{p.label}</Card.Header>
                            <Card.Body>
                                <Card.Title style={{marginBottom: '40px'}}>Status: {p.active === true ? 'active' : 'no longer active'}</Card.Title>
                                <Card.Text style={{marginBottom: '40px'}}>
                                    {p.id}
                                </Card.Text>
                    <Button variant="primary">{p.active === true ? 'deactivate' : 'make it active'}</Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }

        </div>


    )
}