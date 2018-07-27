
import {  createStackNavigator } from 'react-navigation';

import SignUpScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';
import ForgotScreen from './Forgot';

export default  AuthStack = new createStackNavigator({
  Login: { screen: LoginScreen },
  SignUp: { screen: SignUpScreen},
  Forgot: { screen: ForgotScreen}
});
