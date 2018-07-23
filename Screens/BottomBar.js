import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import FeedStack from './Feed/NewsFeedScreen';
import SocialStack from './Social/SocialStack';

export default HomeScreenTabNavigator = new createMaterialBottomTabNavigator({
  NewsFeed: { screen: FeedStack},
  Social: { screen: SocialStack},
});
