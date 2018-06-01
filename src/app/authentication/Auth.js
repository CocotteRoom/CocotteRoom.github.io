import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import firebase from '../firebase';

export class Auth extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  async handleSignIn() {
    const { provider, onUserConnected, onError } = this.props;

    try {
      const {
        user,
        credential: { accessToken },
      } = await firebase.auth().signInWithPopup(provider);

      onUserConnected({ user, token: accessToken });
    } catch (e) {
      onError(e);
    }
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
  onError: PropTypes.func.isRequired,
};
