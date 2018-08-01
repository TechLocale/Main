import React from 'react';
import { StyleSheet, TextInput, View, Button, ActivityIndicator, Alert } from 'react-native';
import firebase from '../../API/firebase';


class ForgotScreen extends React.Component {

  constructor(props){
    super(props);

    this.state={
      email: '',
      loading: ''
    }
  }

  onForget(){

    this.setState({ error: '', loading: true });
     const { email } = this.state;
    firebase.auth().sendPasswordResetEmail(email).then(function() {
      // Email sent.
      this.setState({ error: '', loading: false });
    }).catch(function(error) {
      
      Alert.alert(error);
    });
  }

  renderButton(){
    const {loading } = this.state;
    if(loading){
      return <ActivityIndicator />;
    }

  return(  
        <Button
          onPress={this.onForget.bind(this)}
          title='Send Verification Email'
        />
      );
    
  }  

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            placeholder='Enter Your Registered Email'
            style={styles.TInput}
            value={this.state.email}
            onChangeText={ (email) => this.setState({email})}
          />
        </View>
        <View>
          {this.renderButton()}
        </View>
      </View>
    );
  }
}

export default ForgotScreen;

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
