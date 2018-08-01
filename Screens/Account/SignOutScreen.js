import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from '../../API/firebase';

class SignOutScreen extends React.Component {

    componentDidMount(){
        firebase.auth().signOut()
        .then(() => {
            console.log('Done')
            this.props.navigation.navigate('Login');
        })
    }
       
  render() {
    return (
      <View style={styles.container}>
        <Text>Signed Out</Text>
      </View>
    );
  }
}

export default SignOutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
