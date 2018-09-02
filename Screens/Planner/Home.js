import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity  } from 'react-native';
import {deviceHeight, deviceWidth} from '../../Components/global';
import{SearchBar} from 'react-native-elements';


class Home extends React.Component{
  // static navigationOptions = {
  //      header: null
  //  }
  render(){
    return(
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
          <TouchableOpacity
            style={styles.ButtonL}
          >
            <Text style={{fontSize: 30, fontWeight: 'bold',color: '#EADB2C'}}>Get A Local</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.BGrid}>
          <TouchableOpacity
            style={styles.ButtonG}
          >
            <Text >Accomodation</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ButtonG}
          >
            <Text>Transportation</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.BGrid}>
          <TouchableOpacity
            style={styles.ButtonG}
          >
            <Text>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ButtonG}
          >
            <Text>Things To DO</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.BGrid}>
          <TouchableOpacity
            style={styles.ButtonG}
          >
            <Text>Health/History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ButtonG}
          >
            <Text>Packing</Text>
          </TouchableOpacity>
        </View>   
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  BGrid: {
    flex:1,
    flexDirection: 'row',
    
  },
  ButtonG:{
    borderRadius: 5,
    alignSelf:'auto',
    flex:1,
    margin: 1,
    padding: 40,
    width: deviceWidth*0.1,
    height: deviceHeight*0.05,
    backgroundColor: '#2C98EA',
  },
  ButtonL:{
    padding:10,
    marginBottom:1,
    alignItems:'center',
    justifyContent: 'center',
    height: deviceHeight*0.1,
    width: deviceWidth*0.2,
    backgroundColor: '#EA6E2C',
  },


})
