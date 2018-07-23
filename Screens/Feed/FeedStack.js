import {createStackNavigator} from 'react-navigation';



export default FeedStack = new createStackNavigator({
    NewsFeed:{ screen : NewsFeedScreen},},
{
  headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
})
