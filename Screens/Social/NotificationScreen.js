import React, {Component} from 'react';
import { StyleSheet, Text, View, Button,StatusBar } from 'react-native';

class NotificationScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      
        <Text>Notification Screen</Text>
        
      </View>
    );
  }
}

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
