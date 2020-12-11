import { Col, Row } from "react-bootstrap";
import { PollsListTable } from "../../PollsList/PollsListTable";
import { useEffect } from "react";
import { getPolls } from "../../../../api/polls";
import { useDispatch } from 'react-redux';
import { setPolls } from '../../../../store/actions/pollsAction';



export function PollsList(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        getPolls().then(({ data }) => dispatch(setPolls(data)));
    }, []);

    return (
        <Row>
            <Col>
                <Row className='mb-5'>
                    <Col>
                        <h2 className='text-center'>Polls</h2>
                    </Col>
                </Row>

                <PollsListTable></PollsListTable>
            </Col>
        </Row>
    )
}