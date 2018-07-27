import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {  createSwitchNavigator } from 'react-navigation';

import HomeScreenTabNavigator from './Screens/BottomBar';
import AuthStack from './Screens/Authentication/MainAuth';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: ''
    };
  }

  // Fetch the token from storage then navigate to our appropriate place
  componentDidMount() {
    const { user } = this.state; 
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(user ? 'Bottom' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});



export default createSwitchNavigator(
  {
    AuthLoading: App,
    Bottom: HomeScreenTabNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
