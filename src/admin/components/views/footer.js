import { Col, Row } from 'react-bootstrap';
import StickyFooter from 'react-sticky-footer';
import '../../../styles/footer.css'

export function Footer() {

    return (
        <StickyFooter
            className='footer'
            bottomThreshold={10000}
            normalStyles={{
                backgroundColor: "#999999",
                padding: "1rem"
            }}
            stickyStyles={{
                backgroundColor: "rgba(255,255,255,.8)",
                padding: "0.1rem"
                
            }}
        >
            <Row className='text-center footer'>
                <Col>Author: <strong>Bandzi</strong></Col> <Col>Email: <strong>bgbrankoman@gmail.com</strong></Col>
            </Row>

        </StickyFooter>
    )
}