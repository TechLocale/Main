import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';

import FeedStack from './Feed/FeedStack';
import SocialStack from './Social/SocialStack';
import PlannerStack from './Planner/PlannerStack';
import BoringStack from './Boring/BoringStack';
import AccountStack from './Account/AccountStack';

import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json

export default HomeScreenTabNavigator = new createMaterialTopTabNavigator({
  NewsFeed: { screen: FeedStack},
  Social: { screen: SocialStack},
  Planner: { screen: PlannerStack},
  Boring: { screen: BoringStack},
  Account: { screen: AccountStack},
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Account') {
        iconName = `ios-contact${focused ? '' : '-outline'}`;
      }else if (routeName === 'Boring') {
        iconName = `ios-images${focused ? '' : '-outline'}`;
      }else if (routeName === 'Planner') {
        iconName = `ios-aperture${focused ? '' : '-outline'}`;
      }else if (routeName === 'Social') {
        iconName = `ios-alert${focused ? '' : '-outline'}`;
      } else if (routeName === 'NewsFeed') {
        iconName = `ios-browsers${focused ? '' : '-outline'}`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={30} color={'#ffff'} />;
    },
  }),
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
  },
  barStyle: { backgroundColor: '#33ADFF'},
  animationEnabled: true,
  swipeEnabled: false,
}
);