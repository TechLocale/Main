import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, Alert, TextInput, KeyboardAvoidingView} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { CheckBox } from 'react-native-elements';

import firebase from '../../API/firebase';

class Create extends React.Component{
  constructor(props) {
     super(props);

     this.state = {
       dest: '',
       email: '',
       contact: '',
       start: "2016-05-15",
       end: "2016-05-15",
       purpose: '',
       stay: '',
       first: false,
       checked:false,
       loading: false,

     };
   }

   onCreate() {
     this.setState({ error: '', loading: true });
     var key =  firebase.database().ref('/TripData').push().key
     const { dest, email, contact, start, end, purpose, stay, first, checked } = this.state;
     if(email){

               this.setState({ error: '', loading: false });
              firebase.database().ref('/TripData').child(key).set(
                {
                 dest : dest,
                 email : email,
                 contact: contact,
                 start : start,
                 end : end,
                 purpose: purpose,
                 stay: stay,
                 first: first
                })
                Alert.alert('Trip', `${dest} + ${email} + ${contact} + ${start} + ${end} + ${purpose} + ${checked}`);
                this.props.navigation.navigate('AccountScreen')
              }
     }


  render(){
    return(

      <KeyboardAvoidingView  style={styles.container} behavior="padding" enabled>

        <TextInput
          value={this.state.dest}
          onChangeText={(dest) => this.setState({ dest })}
          placeholder={'Where are you going?'}
          style={styles.input}
        />
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'Enter Your registered Email Id'}
          style={styles.input}
        />
        <TextInput
          value={this.state.contact}
          onChangeText={(contact) => this.setState({ contact })}
          placeholder={'Your mobile no.'}
          keyboardType={'numeric'}
          style={styles.input}
        />
        <TextInput
          value={this.state.purpose}
          onChangeText={(purpose) => this.setState({purpose})}
          placeholder={'Purpose of visit'}
          style={styles.input}
        />
        <TextInput
          value={this.state.stay}
          onChangeText={(stay) => this.setState({ stay })}
          placeholder={'Area of Stay'}
          style={styles.input}
        />
        <View>
          <Text style={{ fontWeight: 'bold'}}>Trip Duration</Text>
        </View>
        <View style={styles.dinput}>

          <DatePicker
            style={styles.date}
            date={this.state.start}
            mode="date"
            placeholder="When will you reach ?"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            // customStyles={{
            //   dateIcon: {
            //     position: 'absolute',
            //     left: 0,
            //     top: 4,
            //     marginLeft: 0
            //   },
            //   dateInput: {
            //     marginLeft: 36
            //   }
            // }}
            onDateChange={(start) => {this.setState({start: start})}}
          />
          <DatePicker
            style={styles.date}
            date={this.state.end}
            mode="date"
            placeholder="When will you leave ?"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(end) => {this.setState({end: end})}}
          />
        </View>
        <View style={styles.check}>
          <CheckBox
            title="It's my first visit"
            containerStyle={{backgroundColor: '#ecf0f1', padding: 5}}
            checked={this.state.first}
            onPress={() => this.setState({ first: !this.state.first })}
          />
          <CheckBox
            title="Make it rain!"
            containerStyle={{backgroundColor: '#ecf0f1', padding: 5}}
            checked={this.state.checked}
            onPress={() => this.setState({ checked: !this.state.checked })}
          />
        </View>
        <Button
          title={'Create Trip'}
          style={styles.input}
          onPress={this.onCreate.bind(this)}
          />
      </KeyboardAvoidingView>
    );
  }
}

export default Create;


const styles = StyleSheet.create({
 container: {
   marginTop: StatusBar.currentHeight,
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '#ecf0f1',
 },
 input: {
   borderRadius: 9,
   width: 300,
   height: 44,
   padding: 10,
   borderWidth: 1,
   borderColor: 'black',
   marginBottom: 10,
 },
 date: {
   width: 150,
   borderRadius: 20,
   padding: 10,
 },
 dinput:{
   flexDirection: 'row',
 },
 ckeck: {
   flexDirection: 'row',
 },
});
