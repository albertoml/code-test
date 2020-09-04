import React from 'react';

import * as routes from '../../../constants/routes';
import SignOutButton from '../../SignOut';
import {Anchor, Header, Nav} from "grommet";

const Navigation = ({session, setSession}) => (

  <Header pad="medium" height="xsmall">
    {!!session ? (
      <NavigationAuth session={session} setSession={setSession}/>
    ) : (
      <NavigationNonAuth/>
    )}
  </Header>
);

const NavigationAuth = ({session, setSession}) => (
  <Nav direction="row" background="brand" pad="medium">
    <Anchor style={{margin: 'auto'}} href={routes.LANDING} label="Home"/>
    {!!session && (
      <>
        <Anchor style={{margin: 'auto'}} href={routes.ADMIN} label={session.userName}/>
        <SignOutButton setSession={setSession}/>
      </>
    )}
  </Nav>
);

const NavigationNonAuth = () => (
  <Nav direction="row" background="brand" pad="medium">
    <Anchor style={{margin: 'auto'}} href={routes.LANDING} label="Home"/>
    <Anchor style={{margin: 'auto'}} href={routes.SIGN_IN} label="Sign In"/>
  </Nav>
);

export default Navigation;
