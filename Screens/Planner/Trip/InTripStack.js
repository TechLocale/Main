import {createStackNavigator} from 'react-navigation';

import InTrip from './InTrip';
import Accomodation from './Accomodation';



export default InTripStack = new createStackNavigator({
    
    InTrip: { screen: InTrip},
    Accomodation: { screen: Accomodation},
});
