import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

it('expect to render App Component', () => {
  expect(shallow(<App />)).toMatchSnapshot();
})
