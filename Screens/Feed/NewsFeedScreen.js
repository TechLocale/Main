import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import{SearchBar} from 'react-native-elements'

import firebase from '../../API/firebase';
import global from '../../Components/global';


class NewsFeedScreen extends React.Component {
  
  

  check(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user)
      }
    });
  }
  onPost(){
    
  }

  fb(){
    return(
      <View>
        <Button
          title='test'
        />
      </View>
    )
  }
  
  render() {
    return (
      <View style={global.container}>
        <View>
        <SearchBar
            round
            showLoading
            lightTheme
            searchIcon={{ size: 30 }}
            // onChangeText={someMethod}
            // onClear={someMethod}
            placeholder='Type Here...' 
          />
        </View>
        <View>
          <Button
          title='get user'
          onPress={this.check.bind(this)}
          />
          <Button
            onPress={() =>
              this.props.navigation.navigate('CreatePost')}
            title='Create Post'
          />
        </View>
        <View>
          {this.fb()}
        </View>
      </View>
    );
  }
}

export default NewsFeedScreen;

