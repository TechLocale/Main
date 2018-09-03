import {createStackNavigator} from 'react-navigation';

import PlannerScreen from './PlannerScreen';
import Create from './Create';
import GetPal from './GetPal';
import Home from './Home';
import GoHome from './GoHome';
import InTripStack from './Trip/InTripStack';
import AirBus from './Trip/List/AirBus';


export default PlannerStack = new createStackNavigator({
    PlannerScreen: { screen: PlannerScreen},
    Create: { screen: Create},
    GetPal: { screen:GetPal},
    Home: {screen: Home},
        AirBus: {screen: AirBus},
    InTrip: { screen: InTripStack},
    GoHome: { screen: GoHome},
})
