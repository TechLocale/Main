import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Button
} from 'react-native';
import { ImagePicker } from 'expo';
import firebase from '../../API/firebase';

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      id: '',
      url:null
     };
  }
  onChooseImagePress = async () => {
    const { id } = this.state;
    //let result = await ImagePicker.launchCameraAsync();
    let result = await ImagePicker.launchImageLibraryAsync();
    console.log(result)
    if (!result.cancelled) {
      this.setState({
        url: result.uri
      });
    }
  };
  

 
  render() {
    console.log('Chal raah ha bhaiya')
    let { url } = this.state; 
    return (
      <View style={styles.container}>
     <View>
      <TextInput
          placeholder="enter id" style ={{width : 300}}
          onChangeText={id => this.setState({ id })}
        />
        <Button bordered title="Choose image" onPress={this.onChooseImagePress} />
      </View>
      <View>
        <Image
        style={{ width: 200, height: 200 }}
         source={{ uri: this.state.url }}
        />
      </View>
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  }
 
});

