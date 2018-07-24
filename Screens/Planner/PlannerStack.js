import {createStackNavigator} from 'react-navigation';

import PlannerScreen from './PlannerScreen';

export default PlannerStack = new createStackNavigator({
    PlannerScreen: { screen: PlannerScreen}
  },
{
  headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
})
