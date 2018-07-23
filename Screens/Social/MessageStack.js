import {createStackNavigator} from 'react-navigation';

import MessageScreen from './MessageScreen';

export default MessageStack = new createStackNavigator({
    MessageScreen:{ screen : MessageScreen},
  },
{
headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
})
