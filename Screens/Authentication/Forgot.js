import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class ForgotScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Forgot Screen</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
          onPress={() =>
            this.props.navigation.navigate('SignUpScreen')}
          title='SignIn'
        />
      </View>
    );
  }
}

export default ForgotScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
