import React from 'react';
import { Google, Facebook } from '../../app/authentication/providers';

export const Login = () => (
  <div>
    <Google
      onUserConnected={userInfo => console.log(userInfo)}
      SigninButton={() => <div>Google</div>}
    />
    <Facebook
      onUserConnected={userInfo => console.log(userInfo)}
      SigninButton={() => <div>Facebook</div>}
    />
  </div>
);
