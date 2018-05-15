import React, { Component } from 'react';

import { Google } from './../../app/auth/google/Google';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.handleUserLoad = this.handleUserLoad.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

    this.state = { user: null, signout: null };
  }

  handleUserLoad(user, signout) {
    this.setState({ user, signout });
  }

  handleLogout() {
    this.state.signout().then(() => this.setState({ user: null, signout: null }));
  }

  render() {
    const { user } = this.state;
    return user ? (
      <button onClick={this.handleLogout}>Hello {user.name}</button>
    ) : (
      <Google onUserLoad={this.handleUserLoad} />
    );
  }
}
