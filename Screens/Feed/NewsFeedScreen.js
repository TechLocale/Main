import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';

import{SearchBar} from 'react-native-elements'

import firebase from '../../API/firebase';
import global from '../../Components/global';


class NewsFeedScreen extends React.Component {
  
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
      </View>
    );
  }
}

export default NewsFeedScreen;

