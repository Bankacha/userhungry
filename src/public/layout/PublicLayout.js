import { Container, Navbar } from "react-bootstrap";

export function PublicLayout(props) {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">UserHungry</Navbar.Brand>
            </Navbar>
            <Container>
                <h1>Public Layout</h1>
            </Container>
        </div>
    )
}