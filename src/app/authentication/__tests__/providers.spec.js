import React from 'react';
import { shallow } from 'enzyme';
import { createProvider } from '../providers';

describe('createProvider', () => {
  it('should have created a good authentication provider', () => {
    const customProvider = jest.fn();
    const Component = props => <div {...props} />;
    const AuthComponent = createProvider(Component, customProvider);
    const wrapper = shallow(<AuthComponent />);

    expect(wrapper.find(Component).prop('provider')).toEqual(customProvider);
  });
});
