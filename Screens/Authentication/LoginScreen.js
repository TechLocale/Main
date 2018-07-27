import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class LoginScreen extends React.Component {

  onLoginPress(){
    this.props.navigation.navigate('Bottom');
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Login Screen</Text>
        </View>
        <View>
        <Button
            onPress={this.onLoginPress.bind(this)}
            title='LogIn'
          />
          <Button
            onPress={() =>
              this.props.navigation.navigate('SignUpScreen')}
            title='New User? SignUp'
          />
          <Button
            onPress={() =>
              this.props.navigation.navigate('SignUpScreen')}
            title='Forgot Password?'
          />
        </View>
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
