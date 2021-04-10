import DefaultLayout from "./components/layout/DefaultLayout";
import Login from "./pages/login/Login";
import PasswordReset from "./pages/password-reset/PasswordReset";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Dashboard from "./pages/dashboard/Dashboard";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route path="/Dashboard"><Dashboard/></Route>

          <Route path="/password-reset" exact><PasswordReset/></Route>


          <Route exact path="/"><Login/></Route>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
