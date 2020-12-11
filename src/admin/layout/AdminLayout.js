import { Container, Nav, Navbar } from "react-bootstrap";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import { AdminDashboard } from "../components/views/AdminDashboard";
import { PollsCreate } from "../components/views/Poll/PollCreate";
import { PollPreview } from "../components/views/Poll/PollPreview";
import { PollsList } from "../components/views/Poll/PollsList";

export function AdminLayout(props) {

    const { path } = useRouteMatch();

    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">UserHungry</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link className='nav-link' to={`${path}/polls`}>Polls</Link>
                </Nav>
            </Navbar>
            <Container className='pt-5'>
                <Switch>
                    {/* Be careful with ordering the Route components: */}
                    <Route path={`${path}/polls/create`} component={PollsCreate}></Route>
                    <Route path={`${path}/polls/:pollId`} component={PollPreview}></Route>
                    <Route path={`${path}/polls`} component={PollsList}></Route>

                    <Route exact path={`${path}`} component={AdminDashboard}></Route>
                </Switch>
            </Container>
        </div>
    )
}