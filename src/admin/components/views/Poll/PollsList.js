import { Col, Row } from "react-bootstrap";
import { PollsListTable } from "../../PollsList/PollsListTable";
import { Http } from '../../../../api';
import { useEffect } from "react";

export function PollsList(props) {

    useEffect(() => {
        Http.get('orders').then(console.log);
    }, []);

    return (
        <Row>
            <Col>
                <Row className='mb-5'>
                    <Col>
                        <h3>Polls</h3>
                    </Col>
                </Row>

                <PollsListTable></PollsListTable>
            </Col>
        </Row>
    )
}