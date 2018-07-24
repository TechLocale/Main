import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class BoringScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Boring Screen</Text>
      </View>
    );
  }
}

export default BoringScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
