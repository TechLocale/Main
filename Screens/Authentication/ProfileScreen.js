import React, {Component} from 'react';
import { StyleSheet,Text, TextInput, View, Button, TouchableOpacity, Alert } from 'react-native';
import firebase from '../../API/firebase';

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
          console.log(user)
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
      <View style={styles.container}>
        <View>
            <Text> Profile Picture here </Text>
        </View>
            <View>
                <TextInput
                    value={this.state.fname}
                    onChangeText={(fname) => this.setState({ fname })}
                    placeholder={'Full Name'}
                    style={styles.TInput}
                    />
                    <TextInput
                        value={this.state.mob}
                        onChangeText={(mob) => this.setState({ mob })}
                        placeholder={'Mobile Number'}
                        keyboardType={'numeric'}
                        style={styles.TInput}
                    />
                    <TextInput
                        value={this.state.city}
                        onChangeText={(city) => this.setState({city })}
                        placeholder={'City'}
                        style={styles.TInput}
                    />
                    <TextInput
                        value={this.state.country}
                        onChangeText={(country) => this.setState({country})}
                        placeholder={'Country'}
                        style={styles.TInput}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TInput: {
    width: 300,
    height: 44,
    padding: 10,
    marginBottom: 10,
  },
});
