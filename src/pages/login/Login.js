import React, { Component } from 'react';

import { Google } from './../../app/auth/google/Google';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { user: null };
  }

  handleUserLoad = user => {
    this.setState({ user });
  };

  render() {
    const { user } = this.state;
    return user ? <div>Hello {user.name}</div> : <Google onUserLoad={this.handleUserLoad} />;
  }
}
