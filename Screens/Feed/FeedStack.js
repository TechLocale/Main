import {createStackNavigator} from 'react-navigation';

import NewsFeedScreen from './NewsFeedScreen';
import CreatePost from './CreatePost';

export default FeedStack = new createStackNavigator({
    NewsFeed:{ screen : NewsFeedScreen},
    CreatePost:{ screen: CreatePost}
  
})
