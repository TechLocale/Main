import {createStackNavigator} from 'react-navigation';

import InTrip from './InTrip';
import AirBus from './List/AirBus';


export default InTripStack = new createStackNavigator({
    
    InTrip: { screen: InTrip},
        AirBus: { screen: AirBus}
    
});
