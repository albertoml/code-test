import React, {useState} from 'react';
import {Route, Router} from 'react-router-dom';

import * as routes from '../../constants/routes';
import history from '../../constants/history';
import Navigation from "../common/Navigation";
import Landing from "../pages/Landing";
import {Admin} from "../pages/Admin";
import SignIn from "../pages/SignIn";
import {Main} from "grommet";

const App = () => {

  const userName = localStorage.getItem('userName');
  const [session, setSession] = useState(userName ? {userName}: null)

  return (
    <Router history={history}>
      <div>
        <Navigation session={session} setSession={setSession} />

        <hr />

        <Main pad="large">
          <Route
            exact
            path={routes.LANDING}
            component={() => <Landing />}
          />
          <Route
            exact
            path={routes.SIGN_IN}
            component={() => <SignIn history={history} setSession={setSession} />}
          />
          <Route
            exact
            path={routes.ADMIN}
            component={() => <Admin session={session} setSession={setSession} history={history} />}
          />
        </Main>
      </div>
    </Router>
  );
}

export default App;
