import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class MessageScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Message Screen</Text>
        
      </View>
    );
  }
}

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
