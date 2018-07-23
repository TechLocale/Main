import {createStackNavigator} from 'react-navigation';

import TopBar from './TopBar';

export default FeedStack = new createStackNavigator({
    TopBar:{ screen : TopBar},

  },
  {
  headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
})
