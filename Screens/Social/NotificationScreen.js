import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class NotificationScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Notification Screen</Text>
        <Button
          onPress={() =>
            this.props.navigation.navigate('SignUpScreen')}
          title='SignIn'
        />
      </View>
    );
  }
}

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
