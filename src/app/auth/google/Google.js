import React, { Component } from 'react';
import PropTypes from 'prop-types';

const GOOGLE_AUTH_CONFIG = {
  client_id: '866896715748-lo6lv3b3ulh3ds3tculqohijnt436mv9.apps.googleusercontent.com',
  cookiepolicy: 'single_host_origin',
};

/* eslint-disable */
export class Google extends Component {
  attachSignin(auth2) {
    const element = document.getElementById('google-id');
    auth2.attachClickHandler(
      element,
      {},
      user => {
        this.props.onUserLoad({ name: user.getBasicProfile().getName(), type: 'google' });
      },
      error => {
        alert(JSON.stringify(error, undefined, 2));
      },
    );
  }

  componentDidMount() {
    window.gapi.load('auth2', () => {
      const auth2 = gapi.auth2.init(GOOGLE_AUTH_CONFIG);
      this.attachSignin(auth2);
    });
  }

  render() {
    return <div id="google-id">Sign in with google</div>;
  }
}

Google.propTypes = {
  onUserLoad: PropTypes.func.isRequired,
};
