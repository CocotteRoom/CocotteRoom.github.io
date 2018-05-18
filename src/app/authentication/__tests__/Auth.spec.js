import React from 'react';
import { shallow } from 'enzyme';
import { Auth } from '../Auth';

jest.mock('../../firebase', () => ({
  auth: jest.fn(() => ({
    signInWithPopup: jest.fn(() =>
      Promise.resolve({
        user: {},
        credential: { accessToken: 'token' },
      })),
  })),
}));

describe('Auth', () => {
  let props;

  const getWrapper = () => shallow(<Auth {...props} />);

  beforeEach(() => {
    props = {
      onUserConnected: jest.fn(),
      provider: {},
      SigninButton: () => <div>Signin button</div>,
    };
  });

  it('should match snapshot', () => {
    expect(getWrapper()).toMatchSnapshot();
  });

  it('should have called the different firebase method for authentications', async () => {
    const instance = getWrapper().instance();

    await instance.handleSignIn();

    expect(props.onUserConnected).toHaveBeenCalledWith({
      user: {},
      token: 'token',
    });
  });
});
