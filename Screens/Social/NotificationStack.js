import {createStackNavigator} from 'react-navigation';

import NotificationScreen from './NotificationScreen';

export default NotificationStack = new createStackNavigator({
    NotificationScreen:{ screen : NotificationScreen},
  },
{
headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
})
