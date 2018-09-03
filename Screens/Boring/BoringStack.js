import {createStackNavigator} from 'react-navigation';

import BoringScreen from './BoringScreen';
import CreateEvent from './CreateEvent';

export default PlannerStack = new createStackNavigator({
    BoringScreen: { screen: BoringScreen},
        CreateEvent: {screen: CreateEvent}
})
