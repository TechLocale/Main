import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import{SearchBar} from 'react-native-elements'

import firebase from '../../API/firebase';


class NewsFeedScreen extends React.Component {
  
  

  check(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        
      }
    });
  }
  onPost(){
    
  }

  render() {
    return (
      <View style={styles.container}>
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
      </View>
    );
  }
}

export default NewsFeedScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#fff',  
  },
});
