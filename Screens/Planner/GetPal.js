import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { Card, ListItem, Icon, Rating } from 'react-native-elements';

class HomeScreen extends React.Component{
  // static navigationOptions = {
  //      header: null
  //  }
  render(){
    return(
      <View style={{marginTop: StatusBar.currentHeight}}>
        <View>
        <Card
          title='Get A Pal'
          image={require('../../Images/ic.png')}>
          <Text style={{marginBottom: 10}}>
            We are here to Accompany you
          </Text>
          <Button
            icon={<Icon name='code' color='#ffffff' />}
            backgroundColor='#03A9F4'
            fontFamily='Lato'
            onPress={() =>
            this.props.navigation.navigate('PlannerScreen')}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
          </Card>
        </View>
        <View>
          <Rating
          showRating
          type="star"
          fractions={1}
          startingValue={4}
          readonly
          imageSize={40}
          onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 10, }}
          />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
