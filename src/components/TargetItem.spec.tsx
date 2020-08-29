import * as React from 'react';
import renderer from 'react-test-renderer';

import TargetItem from './TargetItem';

const setup = (propertiesOverride?: any) => {
  const props = Object.assign(
    {
      target: {
        code: '13.1',
        title: 'target 13'
      }
    },
    propertiesOverride
  );

  const wrapper = () => <TargetItem {...props} />;

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
