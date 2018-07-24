import {createDrawerNavigator} from 'react-navigation';
import AccountScreen from './AcountScreen';


export default PlannerStack = new createDrawerNavigator({
    AcountScreen: {screen: AccountScreen},
  },
{
  headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
})
