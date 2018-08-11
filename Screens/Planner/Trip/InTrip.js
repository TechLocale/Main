import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, TouchableOpacity  } from 'react-native';


class InTrip extends React.Component{
  static navigationOptions = {
       header: null
   }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.BGrid}>
        <TouchableOpacity
        style={styles.ButtonG}
        onPress={() =>
          this.props.navigation.navigate('Accomodation')}
        >
        <Text>Accomodation</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.ButtonG}>
        <Text>Last Minute Spots</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.BGrid}>
        <TouchableOpacity
        style={styles.ButtonG}>
        <Text>Religious</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.ButtonG}>
        <Text>Shopping</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.BGrid}>
        <TouchableOpacity
        style={styles.ButtonG}>
        <Text>Activities</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.ButtonG}>
        <Text>Must Visit</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity
        style={styles.ButtonL}>
        <Text style={{fontSize: 20, fontWeight: 'bold',color: '#EADB2C'}}>Get A Local</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

export default InTrip;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: StatusBar.currentHeight,
    flex: 2,
  },
  BGrid: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
  },
  ButtonG:{
    borderRadius: 5,
    margin: 5,
    padding: 45,
    backgroundColor: '#2C98EA',
  },
  ButtonL:{
    borderRadius: 5,
    padding:20,
    alignItems: 'center',
    backgroundColor: '#EA6E2C',
  },


})
