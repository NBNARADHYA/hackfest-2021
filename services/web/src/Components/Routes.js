import {Route, Switch} from "react-router-dom";

import {Layout} from "../Layout";

import {Admin} from "./admin";
import {Auth} from "./auth";
import {Home} from "./Home";
import {SuperUser} from "./su";
import {User} from "./user";

const Routes = () => (
  <Layout>
        <Switch>
          <Route path="/auth" component={
  Auth} />
          <Route path="/su" component={SuperUser} />
          <Route path="/admin" component={
  Admin} />
          <Route path="/user" component={User} />
          <Route path="/" component={
  Home} />    
        </Switch>
    </Layout>
);

export default Routes;
