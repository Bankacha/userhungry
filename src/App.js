import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import { AdminLayout } from './admin/layout/AdminLayout';
import { PublicLayout } from './public/layout/PublicLayout';

import 'bootstrap/dist/css/bootstrap.min.css';
import { PrivateRoute } from './auth/PrivateRoute';


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/admin" component={AdminLayout}></PrivateRoute>
        <Route path="/" component={PublicLayout}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
