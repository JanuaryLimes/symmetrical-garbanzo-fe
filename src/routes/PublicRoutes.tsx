import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Shortlink } from "../features/shortlink";

export const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Shortlink />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};
