import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Alert,
  Button
} from 'react-native';
import { ImagePicker } from 'expo';
import firebase from '../../API/firebase';


class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = { id: '' };
  }
  onChooseImagePress = async () => {
    const { id } = this.state;
    //let result = await ImagePicker.launchCameraAsync();
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      this.uploadImage(result.uri, id)
        .then(() => {
          Alert.alert('Success');
        })
        .catch(error => {
          Alert.alert(error);
        });
    }
  };
  uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = firebase
      .storage()
      .ref()
      .child('images/' + imageName);
    const uploadStatusImage = await  ref.put(blob)
    const downloadURL = await uploadStatusImage.ref.getDownloadURL();
    console.log(downloadURL)
    return true;
  };
  

  render() {
    return (
      <View style={styles.container}>
     <View>
      <TextInput
          placeholder="enter id" style ={{width : 300}}
          onChangeText={id => this.setState({ id })}
        />
        <Button bordered title="Choose image" onPress={this.onChooseImagePress} />
      </View>
      </View>
      
    );
  }
}

export default  CreatePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  }
 
});