import { combineReducers } from 'redux';
import '../reducers';

jest.mock('redux', () => ({
  combineReducers: jest.fn(() => ({ user: () => null })),
}));

describe('combinedReducers', () => {
  it('should reducers', () => {
    expect(combineReducers).toHaveBeenCalledWith({});
  });
});
