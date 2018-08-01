
import {  createStackNavigator } from 'react-navigation';

import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
  import ProfileScreen from './ProfileScreen';
import ForgotScreen from './Forgot';

export default  AuthStack = new createStackNavigator({
  
  Login: { screen: LoginScreen },
  SignUp: { screen: SignUpScreen},
  Profile:{ screen: ProfileScreen},
  Forgot: { screen: ForgotScreen}
});
