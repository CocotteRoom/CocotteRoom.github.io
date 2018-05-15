import React from 'react';
import { shallow } from 'enzyme';
import { MainRouter } from '../MainRouter';

describe('MainRouter', () => {
  const getWrapper = () => shallow(<MainRouter />);

  it('should match snapshot', () => {
    expect(getWrapper()).toMatchSnapshot();
  });
});
