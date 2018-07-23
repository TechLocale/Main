
import {  createStackNavigator } from 'react-navigation';

import SignUpScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';
import ForgotScreen from './Forgot';

export default  AuthStack = new createStackNavigator({
  SignUp: { screen: SignUpScreen},
  Login: { screen: LoginScreen },
  Forgot: { screen: ForgotScreen}
});
