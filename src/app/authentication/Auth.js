import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from '../firebase';

export class Auth extends Component {
  constructor(props) {
    super(props);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignIn() {
    const { provider, onUserConnected } = this.props;
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const token = result.credential.accessToken;
        const { user } = result;

        onUserConnected({ user, token });
      })
      .catch((error) => {
        console.log(error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.email;
        // const credential = error.credential;
      });
  }

  render() {
    const { SigninButton } = this.props;

    return (
      <button onClick={this.handleSignIn}>
        <SigninButton />
      </button>
    );
  }
}

Auth.propTypes = {
  provider: PropTypes.shape({}).isRequired,
  SigninButton: PropTypes.func.isRequired,
  onUserConnected: PropTypes.func.isRequired,
};
