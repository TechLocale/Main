import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Avatar} from 'react-native-elements';
import firebase from '../../API/firebase';



var data = [];

class AccountScreen extends React.Component {

  constructor(props){
    super(props);

    this.state=({
      username:'',
      email: '',
      photo:''
    })
  }

  componentDidMount(){
    var that = this
    var userId = firebase.auth().currentUser.uid;
    const{ email, photo} = this.state;
    return firebase.database().ref('/UsersData/' + userId).once('value')
    .then(function(data) {
      that.setState({ 
        username:data.val().name 
      })
        // console.log(data.val());
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.username}</Text>
      </View>
    );
  }
}

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
