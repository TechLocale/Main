import React from 'react';
import { StyleSheet, Alert, View, Button, TextInput, KeyboardAvoidingView, ActivityIndicator} from 'react-native';
import firebase  from '../../API/firebase';


class SignUpScreen extends React.Component {

  constructor(props){
    super(props);

    this.state={
       email: '',
       pass: '',
       rpass: '',
       fname: '',
       mob: '',
       city:'',
       country:'',
       loading: false,

    }
  }

  onSignUpPress() {
    this.setState({ error: '', loading: true });
     var key =  firebase.database().ref('/UsersData').push().key
     const { email, pass, fname, mob, city, country } = this.state;
    
        if(this.state.pass == this.state.rpass){
          firebase.auth().createUserWithEmailAndPassword(email, pass)
                .then(() =>  {
                    this.setState({ error: '', loading: false })
                    this.props.navigation.navigate('Profile')
                    Alert.alert('Welcome');
                    
              },(error) =>{
                Alert.alert(error.message);
              }
              )
        }else{
          Alert.alert("Password didn't match");
        }
     
  }


  rederButton(){
    const {loading } = this.state;
    if(loading){
      return <ActivityIndicator />;
    }

    return(
      <Button
          onPress={this.onSignUpPress.bind(this)}
          title='SignIn'
      />
    );
  }  

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior='padding'>
            <TextInput
                placeholder='Enter Email'
                style={styles.TInput}
                value={this.state.email}
                onChangeText={ (email) => this.setState({ email })}
              />
              <TextInput
                placeholder='Enter Password'
                style={styles.TInput}
                value={this.state.pass}
                onChangeText={ (pass) => this.setState({ pass })}
                secureTextEntry={true}
              />
              <TextInput
                placeholder='Enter Password Again'
                style={styles.TInput}
                value={this.state.rpass}
                onChangeText={ (rpass) => this.setState({ rpass })}
                secureTextEntry={true}
              />
        </KeyboardAvoidingView>
        <View>
        {this.rederButton()}
        </View>
      </View>
    );
  }
}

export default SignUpScreen;

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
