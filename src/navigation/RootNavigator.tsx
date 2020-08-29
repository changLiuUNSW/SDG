import { createStackNavigator } from 'react-navigation-stack';

import DetailScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';
import { DETAIL_SCREEN, HOME_SCREEN } from './screens';

const RootNavigator = createStackNavigator(
  {
    [HOME_SCREEN]: HomeScreen,
    [DETAIL_SCREEN]: DetailScreen
  },
  {
    initialRouteName: HOME_SCREEN
  }
);

export default RootNavigator;
