import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/nav";
import Home from "./pages/home";
import Login from "./pages/login";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
