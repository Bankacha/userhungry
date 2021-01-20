import { Container, Navbar } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { PollVote } from "../components/views/PollVote";
import { Vote } from '../components/views/Vote'
import { Results } from "../components/views/VoteResults"

export function PublicLayout(props) {

    const { path } = useRouteMatch();

    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">UserHungry</Navbar.Brand>
            </Navbar>
            <Container>
                <Switch>
                    <Route path={`${path}polls/:pollId/result`} component={Results}></Route>
                    <Route path={`${path}polls/:pollId/vote`} component={Vote}></Route>
                    <Route path={`${path}polls/:pollId`} component={PollVote}></Route>
                </Switch>
            </Container>
        </div>
    )
}