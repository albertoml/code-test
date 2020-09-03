import React from 'react';

import * as routes from '../../constants/routes';
import history from '../../constants/history';
import {Button} from "grommet";

const SignOutButton = ({setSession}) => (
  <div style={{marginLeft: '20px'}}>
    <Button style={{padding: '10px'}} size="medium" gap="medium" primary onClick={() => {
      localStorage.clear();
      history.push(routes.SIGN_IN);
      setSession(null);
    }}>Sign Out</Button>
  </div>
);

export default SignOutButton;
