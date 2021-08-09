import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Forgot from "./pages/forgot";
import Learn from "./pages/learnmore";
import Contact from "./pages/contact";
import Policy from "./pages/policy";

import AdminPolicyLookup from "./pages/admin-pages/policy-lookup"

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Switch>
        {/* Normal Routes */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/pwreset" component={Forgot} />
        <Route exact path="/learnmore" component={Learn} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/policy-lookup" component={Policy} />
        {/* Admin Routes */}
        <Route exact path="/admin-policy" component={AdminPolicyLookup} />
      </Switch>
    </Router>
  );
}

export default App;
