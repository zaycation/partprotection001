import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/nav";
import Footer from "./components/footer";
import Home from "./pages/home";
import Login from "./pages/login";
import Forgot from "./pages/forgot";
import Learn from "./pages/learnmore";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/pwreset" component={Forgot} />
        <Route exact path="/learnmore" component={Learn} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
