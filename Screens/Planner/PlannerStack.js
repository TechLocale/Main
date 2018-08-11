import {createStackNavigator} from 'react-navigation';

import PlannerScreen from './PlannerScreen';
import Create from './Create';
import GetPal from './GetPal';
import Home from './Home';
import GoHome from './GoHome';
import InTripStack from './Trip/InTripStack';


export default PlannerStack = new createStackNavigator({
    PlannerScreen: { screen: PlannerScreen},
    Create: { screen: Create},
    GetPal: { screen:GetPal},
    Home: {screen: Home},
    InTrip: { screen: InTripStack},
    GoHome: { screen: GoHome},
})
