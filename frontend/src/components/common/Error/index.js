import React from 'react';
import {Box} from "grommet";

const ErrorMessage = ({ error }) => (
  <Box gap="medium" margin="small">
    <p style={{color: 'red'}}>{error.message}</p>
  </Box>
);

export default ErrorMessage;
