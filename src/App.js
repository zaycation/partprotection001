import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Forgot from "./pages/forgot";
import Learn from "./pages/learnmore";
import Contact from "./pages/contact";
import Policy from "./pages/policy";

import AdminPolicyLookup from "./pages/admin-pages/policy-lookup";
import AdminUserMgmt from "./pages/admin-pages/user-mgmt";
import AdminSellerMgmt from "./pages/admin-pages/seller-mgmt";
import AdminCreateUser from "./pages/admin-pages/create-user";
import AdminCreateSeller from "./pages/admin-pages/create-seller";
import AdminFunctions from "./pages/admin-pages/admin-functions";
import PrivacyPolicy from "./pages/admin-pages/privacy-policy";

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
        <Route exact path="/admin-usermgmt" component={AdminUserMgmt} />
        <Route exact path="/admin-createuser" component={AdminCreateUser} />
        <Route exact path="/admin-createseller" component={AdminCreateSeller} />
        <Route exact path="/admin-sellermgmt" component={AdminSellerMgmt} />
        <Route exact path="/admin-functions" component={AdminFunctions} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
      </Switch>
    </Router>
  );
}

export default App;
