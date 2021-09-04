import './App.less';
import { Homepage, Login, Signup, UserDashboard } from './pages';
import {PrivateRoute} from './components'
import 'antd/dist/antd.less'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      
      <Switch>
       <Route path="/" exact component={Homepage} />
       <Route path="/login" exact component={Login} />
       <Route path="/signup" exact component={Signup} />
       <PrivateRoute path="/userdashboard" exact component={UserDashboard} />
      </Switch>
   
    </Router>
  );
}


export default App;
