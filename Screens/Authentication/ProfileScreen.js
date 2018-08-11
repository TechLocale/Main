import React, {Component} from 'react';
import { Text, TextInput, View, Button, TouchableOpacity, Alert } from 'react-native';
import firebase from '../../API/firebase';
import global from '../../Components/global';

class ProfileScreen extends React.Component {
    constructor(props){
        super(props);
            this.state={
                fname: '',
                mob: '',
                city:'',
                country:'',
                loading: false,
        }
      }

      onSave(){
        this.setState({ error: '', loading: true });
        const {  fname, mob, city, country } = this.state;
        firebase.auth().onAuthStateChanged(function(user) {
          user.updateProfile({
            displayName: fname,
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).catch(function(error) {
            Alert.alert(error.message);
          }).then(() => {
            firebase.database().ref('/UsersData').child(user.uid).set(
              {
              id: user.uid,
              email : user.email,
              name :  fname,
              mobile : mob,
              city: city,
              country: country,
              })
              this.setState({ error: '', loading: false })
          })
          
        })
        this.props.navigation.navigate('Bottom');
      }

  render() {
    return (
      <View style={global.container}>
        <View>
            <Text> Profile Picture here </Text>
        </View>
            <View>
                <TextInput
                    value={this.state.fname}
                    onChangeText={(fname) => this.setState({ fname })}
                    placeholder={'Full Name'}
                    style={global.TInput}
                    />
                    <TextInput
                        value={this.state.mob}
                        onChangeText={(mob) => this.setState({ mob })}
                        placeholder={'Mobile Number'}
                        keyboardType={'numeric'}
                        style={global.TInput}
                    />
                    <TextInput
                        value={this.state.city}
                        onChangeText={(city) => this.setState({city })}
                        placeholder={'City'}
                        style={global.TInput}
                    />
                    <TextInput
                        value={this.state.country}
                        onChangeText={(country) => this.setState({country})}
                        placeholder={'Country'}
                        style={global.TInput}
                    />
            </View>
        <View>
          <Button
            title='Save Details'
            onPress={this.onSave.bind(this)}
          />
        </View>  
      </View>
    );
  }
}

export default ProfileScreen;

