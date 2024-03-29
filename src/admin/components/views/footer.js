import { Col, Row } from 'react-bootstrap';
import StickyFooter from 'react-sticky-footer';
import '../../../styles/footer.css'

export function Footer() {

    const FooterFn = () => (<div className="footer"> <p>This is some content in sticky footer</p> </div>);

    return (
        <StickyFooter
            className='footerino'
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