import {createStackNavigator} from 'react-navigation';

import NewsFeedScreen from './NewsFeedScreen';

export default FeedStack = new createStackNavigator({
    NewsFeed:{ screen : NewsFeedScreen},
  },
{
  headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
})
