import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, StatusBar, TouchableOpacity, Image } from 'react-native';
import{SearchBar} from 'react-native-elements'

class PlannerScreen extends React.Component {
  static navigationOptions = {
    header: null
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
          onPress={() =>
          this.props.navigation.navigate('Create')}
          title='Create Trip'
          />
        </View>
        <View style={styles.ButtonGroup}>
            <TouchableOpacity
            style={{alignItems:'center'}}
            onPress={() =>
            this.props.navigation.navigate('Home')}
            >
            <Image style={{ width:80, height:80 , borderRadius:100, margin:5}}
                 source={require('../../Images/home.jpg')}/>
                 <Text>HOME</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{alignItems:'center'}}
            onPress={() =>
            this.props.navigation.navigate('InTrip')}
            >
            <Image style={{ width:80, height:80 , borderRadius:100, margin:5}}
                 source={require('../../Images/intrip.jpg')}/>
                 <Text>InTrip</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{alignItems:'center'}}
            onPress={() =>
            this.props.navigation.navigate('Home')}
            >
            <Image style={{ width:80, height:80 , borderRadius:100, margin:5}}
                 source={require('../../Images/gohome.jpg')}/>
                 <Text>Go Home</Text>
            </TouchableOpacity>
        </View>
        <View>
          <Image style={{ width:'100%', height:'60%' , borderRadius:10,}}
             source={require('../../Images/home.jpg')}/>
          <Button
          title='Get A Local'
          onPress={() =>
          this.props.navigation.navigate('GetPal')}
          style={styles.input}
          />
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
    justifyContent:'space-evenly',
  },
});
