import {createDrawerNavigator, createStackNavigator} from 'react-navigation';
import AccountScreen from './AcountScreen';
import SignOutScreen from './SignOutScreen';

const InnerNavigator = new createStackNavigator({
  Account: { screen: AccountScreen}
})

export default PlannerStack = new createDrawerNavigator({
  Home: {screen: InnerNavigator},
  SignOut: { screen: SignOutScreen},     
  },
{
  headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
})
