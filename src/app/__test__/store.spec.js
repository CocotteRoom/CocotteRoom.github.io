import { createStore } from 'redux';
import { initStore } from '../store';
import { combinedReducers } from '../reducers';

jest.mock('redux', () => ({
  createStore: jest.fn(),
}));

jest.mock('../reducers', () => ({
  combinedReducers: { user: () => null },
}));

describe('initStore', () => {
  it('should have created a redux store', () => {
    initStore();
    expect(createStore).toHaveBeenCalledWith(combinedReducers);
  });
});
