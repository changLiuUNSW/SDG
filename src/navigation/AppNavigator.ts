import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import RootNavigator from './RootNavigator';
import { ROOT } from './screens';

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      [ROOT]: RootNavigator
    },
    {
      initialRouteName: ROOT
    }
  )
);

export default AppNavigator;
