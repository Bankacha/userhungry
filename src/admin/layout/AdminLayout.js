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
import { LogIn } from "../components/views/LogIn";

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
                    <Route path={`${path}/polls/create`} component={PollsCreate}></Route>
                    <Route path={`${path}/polls/:pollId`} component={PollPreview}></Route>
                    <Route path={`${path}/polls`} component={PollsList}></Route>

                    {/* <Route path={`${path}/restaurants/:restID/meals`} component={Meals}></Route> */}
                    <Route path={`${path}/restaurants/:restId`} component={Restaurant}></Route>
                    <Route path={`${path}/restaurants`} component={Restaurants}></Route>

                    <Route path={`${path}/orders/:orderId`} component={OrderPage}></Route>
                    <Route path={`${path}/orders`} component={Orders}></Route>

                    <Route exact path={`${path}`} component={AdminDashboard}></Route>

                    <Route path={`${path}/login`} component={LogIn}></Route>

                </Switch>
                
            </Container>
            <Footer></Footer>
        </div>
    )
}