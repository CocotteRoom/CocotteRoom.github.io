import React from 'react';
import { shallow } from 'enzyme';
import { Auth } from '../Auth';
import firebase from '../../firebase';

jest.mock('../../firebase');

describe('Auth', () => {
  let props;

  const getWrapper = () => shallow(<Auth {...props} />);

  beforeEach(() => {
    props = {
      onUserConnected: jest.fn(),
      onError: jest.fn(),
      provider: {},
      SigninButton: () => <div>Signin button</div>,
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should match snapshot', () => {
    expect(getWrapper()).toMatchSnapshot();
  });

  it('should have called the onUserConnected if everything is going good', async () => {
    firebase.auth.mockReturnValue({
      signInWithPopup: jest.fn(() =>
        Promise.resolve({ user: {}, credential: { accessToken: 'token' } })),
    });

    const instance = getWrapper().instance();

    await instance.handleSignIn();
    expect(props.onUserConnected).toHaveBeenCalledWith({
      user: {},
      token: 'token',
    });
  });

  it('should have called the onError if something is going wrong', async () => {
    firebase.auth.mockReturnValue({
      signInWithPopup: jest.fn(() => Promise.reject({ code: 'errorCode' })),
    });

    const instance = getWrapper().instance();

    await instance.handleSignIn();
    expect(props.onError).toHaveBeenCalledWith({ code: 'errorCode' });
  });
});
