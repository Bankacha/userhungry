import { Col, Row, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { PollsListTable } from "../../PollsList/PollsListTable";
import { useEffect } from "react";
import { getPolls } from "../../../../api/polls";
import { useDispatch } from 'react-redux';
import { setPolls } from '../../../../store/actions/pollsAction';
import { Title } from "../../Shared/Title";



export function PollsList(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        getPolls().then(({ data }) => dispatch(setPolls(data)));
    }, [dispatch]);

    return (
        <Row>
            <Col>
                <Row>
                    <Col>
                       <Title props={"Polls"}></Title>
                    </Col>
                </Row>

                <Link to='polls/create'><Button className='mb-3' variant='dark' style={{width: '100%'}}>Create New</Button></Link>
                <PollsListTable></PollsListTable>
            </Col>
        </Row>
    )
}