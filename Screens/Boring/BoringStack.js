import {createStackNavigator} from 'react-navigation';

import BoringScreen from './BoringScreen';

export default PlannerStack = new createStackNavigator({
    BoringScreen: { screen: BoringScreen}
  },
{
  headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
})
