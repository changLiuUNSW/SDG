import * as React from 'react';
import renderer from 'react-test-renderer';

import GoalItem from './GoalItem';
import { shallow } from 'enzyme';

const setup = (propertiesOverride?: any) => {
  const props = Object.assign(
    {
      goal: {
        code: '13',
        title: 'test 13'
      }
    },
    propertiesOverride
  );

  const wrapper = () => <GoalItem {...props} />;

  return {
    props,
    wrapper
  };
};

it('should render the component correctly', () => {
  const { wrapper } = setup();
  const component = renderer.create(wrapper());
  expect(component.toJSON()).toMatchSnapshot();
});

it('should disabled if noPress pass via prop', () => {
  const { wrapper } = setup();
  const component = shallow(wrapper());
  expect(component.prop('disabled')).toBeTruthy();
});

it('onPress should be called when passed via prop', () => {
  const onPress = jest.fn();
  const { wrapper } = setup({
    onPress
  });
  const component = shallow(wrapper());
  component.props().onPress();
  expect(onPress).toBeCalled();
});
