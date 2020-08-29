import * as React from 'react';
import renderer from 'react-test-renderer';

import HomeHeader from './HomeHeader';

const setup = () => {
  const wrapper = () => <HomeHeader />;

  return {
    wrapper
  };
};

it('should render the component correctly', () => {
  const { wrapper } = setup();
  const component = renderer.create(wrapper());
  expect(component.toJSON()).toMatchSnapshot();
});
