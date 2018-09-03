import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import {Permissions,ImagePicker,Camera} from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import{SearchBar} from 'react-native-elements'


import global from '../../Components/global';


class NewsFeedScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { id: '', url: null };
  }
  _openPhotoGallery = async () => {
    const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    
    if (status !== "granted") {
      const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (result.status !== "granted") {
        alert("you need to authorized the app");
        return;
      }
    }
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      console.log(result);
          this.setState({
            url: result.uri,
          });
        this.props.navigation.navigate('CreatePost', {
              picurl: result.uri,
              name : 'aaroon' ,
            });  
    }
  };
  _openCamera = async () => {
    const { status } = await Permissions.getAsync(Permissions.CAMERA);
    const { status1 } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== "granted") {
      const result = await Permissions.askAsync(Permissions.CAMERA);
      if (result.status !== "granted") {
        alert("you need to authorized the app");
        return;
      }
    }
    let result = await ImagePicker.launchCameraAsync();
    if (!result.cancelled) {
      console.log(result);
      this.setState({
            url: result.uri,
          });
           this.props.navigation.navigate('CreatePost', {
              picurl: result.uri,
            });
    }
  
  };

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
         <ActionButton buttonColor="rgba(231,76,60,1)" >
            <ActionButton.Item buttonColor="#9b59b6" title="Open Gallery" onPress={this._openPhotoGallery}>
              <Icon name="md-image" style={styles.actionButtonIcon}/>
           </ActionButton.Item>
            <ActionButton.Item buttonColor="#3498db" title="Open Camera" onPress={this._openCamera}>
              <Icon name="md-camera" style={styles.actionButtonIcon}/>
            </ActionButton.Item>
          </ActionButton>  
      </View>
    );
  }
}

export default NewsFeedScreen;

const styles = StyleSheet.create({
 
  welcome:{
    fontSize: 20,
    textAlign:'center',
    margin:10
  },
  actionButtonIcon:{
    fontSize:20,
    height:22,
    color:'white'
  }
});