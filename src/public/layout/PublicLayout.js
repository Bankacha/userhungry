import { Container, Navbar } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Footer } from "../../admin/components/views/footer";
import { PollVote } from "../components/views/PollVote";
import { Vote } from '../components/views/Vote'
import { Results } from "../components/views/VoteResults"
import { CreateOrder } from "../components/views/OrderPage"

export function PublicLayout(props) {

    const { path } = useRouteMatch();

    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/" className='navLogo'><strong>UserHungry</strong></Navbar.Brand>
            </Navbar>
            <Container>
                <Switch>
                    <Route exact path={`${path}order/:orderId`} component={CreateOrder}></Route>

                    <Route path={`${path}polls/:pollId/result`} component={Results}></Route>
                    <Route path={`${path}polls/:pollId/vote`} component={Vote}></Route>
                    <Route path={`${path}polls/:pollId`} component={PollVote}></Route>
                </Switch>
            </Container>
            <Footer></Footer>
        </div>
    )
}