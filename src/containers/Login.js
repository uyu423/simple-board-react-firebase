import React, { Component } from 'react';
import { Button } from '../components';

class Login extends Component {
  render() {
    return (
      <Button
        bsStyle="primary"
        text="Facebook Login"
        faName="facebook-official"
      />
    );
  }
}

export default Login;
