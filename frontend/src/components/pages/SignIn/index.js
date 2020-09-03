import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {gql, useMutation} from "@apollo/client";

import {Box, Button, Form, FormField, TextInput} from "grommet";
import ErrorMessage from "../../common/Error";
import * as routes from "../../../constants/routes";

const SIGN_IN = gql`
  mutation($userName: String!, $password: String!, $grantType: String!, $clientId: String!) {
    signIn(userName: $userName, password: $password, grantType: $grantType, clientId: $clientId) {
      access_token
      token_type
      expires_in
      error
    }
  }
`;

const SignIn = ({history, setSession}) => {
  const [userLoginInfo, setUserLoginInfo] = useState({userName: '', password: ''});
  const [signInError, setSignInError] = useState(null);
  const invalidForm = userLoginInfo.password === '' || userLoginInfo.userName === '';
  const [signIn] = useMutation(SIGN_IN);

  return (
    <Box width="large" style={{margin: "0 auto"}}>
      <Form
        value={userLoginInfo}
        onChange={nextValue => setUserLoginInfo(nextValue)}
        onReset={() => setUserLoginInfo({userName: '', password: ''})}
        onSubmit={() => {
          signIn({variables: {...userLoginInfo, grantType: 'password', clientId: 'minddenCodeTest'}}).then(result => {
            if (result.data.signIn && result.data.signIn.error) {
              setSignInError(result.data.signIn.error)
            } else {
              localStorage.setItem('access_token', result.data.signIn.access_token);
              localStorage.setItem('userName', userLoginInfo.userName);
              setSession({userName: userLoginInfo.userName})
              history.push(routes.LANDING);
            }
          })
        }}
      >
        <FormField name="userName" htmlfor="text-input-userName" label="UserName">
          <TextInput id="text-input-userName" name="userName"/>
        </FormField>
        <FormField name="password" htmlfor="text-input-password" label="Password">
          <TextInput id="text-input-password" name="password" type="password" />
        </FormField>
        <Box direction="row" gap="medium">
          <Button disabled={invalidForm} type="submit" primary label="Submit" />
          <Button type="reset" label="Reset"/>
        </Box>
      </Form>
      {!!signInError && <ErrorMessage error={{message: signInError}} /> }
    </Box>
  )
}

export default withRouter(SignIn);