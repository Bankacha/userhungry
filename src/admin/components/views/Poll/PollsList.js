import { Col, Row } from "react-bootstrap";
import { PollsListTable } from "../../PollsList/PollsListTable";
import { useEffect } from "react";
import { getPolls } from "../../../../api/polls";

export function PollsList(props) {

    useEffect(() => {
        getPolls().then(({ data }) => console.log(data));
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