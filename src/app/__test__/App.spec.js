import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { store } from '../store';
import { App } from './../App';

jest.mock('../store', () => ({
  store: {
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: jest.fn(),
  },
}));

describe('App', () => {
  const getWrapper = () => shallow(<App />);

  it('should match snapshot', () => {
    const wrapper = getWrapper();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a react redux Provider with our own store', () => {
    const wrapper = getWrapper();

    expect(wrapper.find(Provider).prop('store')).toEqual(store);
  });
});
