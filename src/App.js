import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import { AdminLayout } from './admin/layout/AdminLayout';
import { PublicLayout } from './public/layout/PublicLayout';

import 'bootstrap/dist/css/bootstrap.min.css';
import {getPolls} from './api/polls'

function App() {
  console.log(getPolls())
  return (
    <BrowserRouter >
      <Switch>
        <Route path="/admin" component={AdminLayout}></Route>
        <Route path="/" component={PublicLayout}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
