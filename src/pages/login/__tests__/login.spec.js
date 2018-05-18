import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../Login';

describe('Login', () => {
  const getWrapper = () => shallow(<Login />);

  it('should match snapshot', () => {
    expect(getWrapper()).toMatchSnapshot();
  });
});
