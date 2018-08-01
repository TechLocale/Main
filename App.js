import React from 'react';

import {  createSwitchNavigator } from 'react-navigation';

import HomeScreenTabNavigator from './Screens/BottomBar';
import AuthStack from './Screens/Authentication/MainAuth';
import Loading from './Screens/Authentication/Loading';





export default createSwitchNavigator(
  {
    AuthLoading: Loading,
    Bottom: HomeScreenTabNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
