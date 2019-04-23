import * as actions from './index';

it('should create an action to sign in a user', () => {
  const userId = '123';
  const expectedAction = {
    type: 'SIGN_IN',
    payload: userId
  }
  expect(actions.signIn(userId)).toEqual(expectedAction);
})

it('should create an action to sign out a user', () => {
  const expectedAction = {
    type: 'SIGN_OUT'
  }
  expect(actions.signOut()).toEqual(expectedAction);
})
