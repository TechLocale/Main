import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, StatusBar, TouchableOpacity, Image, Alert } from 'react-native';
import {  deviceHeight, devicWidth} from '../../Components/global';
import{SearchBar} from 'react-native-elements'

class PlannerScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to Localepal'
  }

  constructor(props) {
    super(props);
    this.state = {
        place:'',
    };
}

onPlace(){
  const{place}= this.state
  if( place=='Delhi' || place=='delhi'){
      this.props.navigation.navigate('Home')
  }
  else{
    Alert.alert('We are not present in this city');
  }
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
            onChangeText={(place) => this.setState({place})}
            onClear={(place) => this.setState({place})}
            placeholder='Where to?' 
          />
          <Button
          title='Search'
          onPress={this.onPlace.bind(this)}
          />
        </View>
        <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
          <View style={styles.ButtonGroup}>
              <TouchableOpacity
              onPress={() =>
              this.props.navigation.navigate('GetPal')}
              >
              <Image style={{ width: 100, height:80 , borderRadius:1}}
                  source={require('../../Images/giphy.gif')}/>
                  
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() =>
              this.props.navigation.navigate('InTrip')}
              >
              <Image style={{ width:150, height:80 , borderRadius:1}}
                  source={require('../../Images/giphy.gif')}/>
                  
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() =>
              this.props.navigation.navigate('GetPal')}
              >
              <Image style={{ width:80, height:80 , borderRadius:1}}
                  source={require('../../Images/giphy.gif')}/>
                  
              </TouchableOpacity>
          </View>
          <View style={styles.ButtonGroup}>
              <TouchableOpacity
              onPress={() =>
              this.props.navigation.navigate('GetPal')}
              >
              <Image style={{ width: 100, height:150 , borderRadius:1}}
                  source={require('../../Images/giphy.gif')}/>
                  
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() =>
              this.props.navigation.navigate('GetPal')}
              >
              <Image style={{ width:150, height:150 , borderRadius:1}}
                  source={require('../../Images/gohome.jpg')}/>
                  
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() =>
              this.props.navigation.navigate('GetPal')}
              >
              <Image style={{ width:80, height:150 , borderRadius:1}}
                  source={require('../../Images/giphy.gif')}/>
                  
              </TouchableOpacity>
          </View>
          <View style={styles.ButtonGroup}>
              <TouchableOpacity
              onPress={() =>
              this.props.navigation.navigate('GetPal')}
              >
              <Image style={{ width: 100, height:80 , borderRadius:1}}
                  source={require('../../Images/giphy.gif')}/>
                  
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() =>
              this.props.navigation.navigate('InTrip')}
              >
              <Image style={{ width:150, height:80 , borderRadius:1}}
                  source={require('../../Images/giphy.gif')}/>
                  
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() =>
              this.props.navigation.navigate('GetPal')}
              >
              <Image style={{ width:80, height:80 , borderRadius:1}}
                  source={require('../../Images/giphy.gif')}/>
                  
              </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default PlannerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight,
  },
  ButtonGroup:{
    flexDirection: 'row',
    
  },
});
