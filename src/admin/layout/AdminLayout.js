import { Container, Nav, Navbar } from "react-bootstrap";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import { AdminDashboard } from "../components/views/AdminDashboard";
import { PollsCreate } from "../components/views/Poll/PollCreate";
import { PollPreview } from "../components/views/Poll/PollPreview";
import { PollsList } from "../components/views/Poll/PollsList";
import { Restaurant } from "../components/views/Restaurants/Restaurant";
import { Restaurants } from "../components/views/Restaurants/Restaurants";
import { Footer } from "../components/views/footer"
import { Orders } from "../components/views/Orders/Orders"
import '../../styles/container.css';
import { OrderPage } from "../components/views/Orders/OrderPage";
import '../../styles/nav.css'
import { PrivateRoute } from "../../auth/PrivateRoute";

export function AdminLayout(props) {

    const { path } = useRouteMatch();

    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/admin" className='navLogo'><strong>UserHungry</strong></Navbar.Brand>
                <Nav className="mr-auto">
                    <Link className='nav-link' to={`${path}/polls`}><strong>Polls</strong></Link>
                    <Link className='nav-link' to={`${path}/restaurants`}><strong>Restaurants</strong></Link>
                    <Link className='nav-link' to={`${path}/orders`}><strong>Orders</strong></Link>
                </Nav>
            </Navbar>
            <Container className='pt-5 container'>
                <Switch>
                    {/* Be careful with ordering the Route components: */}
                    <PrivateRoute path={`${path}/polls/create`} component={PollsCreate} />
                    <PrivateRoute path={`${path}/polls/:pollId`} component={PollPreview} />
                    <PrivateRoute path={`${path}/polls`} component={PollsList} />

                    <PrivateRoute path={`${path}/restaurants/:restId`} component={Restaurant} />
                    <PrivateRoute path={`${path}/restaurants`} component={Restaurants} />

                    <PrivateRoute path={`${path}/orders/:orderId`} component={OrderPage} />
                    <PrivateRoute path={`${path}/orders`} component={Orders} />

                    <PrivateRoute exact path={`${path}`} component={AdminDashboard} />
                </Switch>

            </Container>
            <Footer></Footer>
        </div>
    )
}