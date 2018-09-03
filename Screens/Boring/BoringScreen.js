import React from 'react';
import { StyleSheet, Text, View, Button, ListView, FlatList, TouchableOpacity, Alert } from 'react-native';
import {deviceWidth, deviceHeight} from '../../Components/global';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import DatePicker from 'react-native-datepicker';


import firebase from '../../API/firebase';

var data = []

export default class BoringScreen extends React.Component {

  static navigationOptions = {
    headerTitle: 'Boring Page',
    headerRight: (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{padding:5, margin:5, transform: [{ rotate: '180deg'}]}}>
          <Ionicons name={'ios-funnel'} size={30} color={'#000000'} />
        </TouchableOpacity>
        <TouchableOpacity style={{padding:5, margin:5}}>
          <Ionicons name={'ios-funnel'} size={30} color={'#000000'} />
        </TouchableOpacity>
      </View>
    ),
    headerLeft: (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{padding:5, margin:5}}>
          <Ionicons name={'ios-calendar'} size={30} color={'#000000'} />
        </TouchableOpacity>
      </View>
    ),
  }

  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

    this.state = {
      isLoading: '',
      listViewData: data,
      newContact: "",
      name: []
    }

  }

  componentDidMount() {

    var that = this

    firebase.database().ref('/EventData').on('child_added', function (data) {

      var newData = [...that.state.listViewData]
      newData.push(data.val())
      that.setState({ listViewData: newData })
        // console.log(data.val());
    })

  }

  renderItem = ({item}) =>{
    return (
      <TouchableOpacity style={{ flex:1,  margin:5, backgroundColor: '#ffff'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width:'30%',flexDirection: 'column', backgroundColor: '#33adff', alignItems: 'center', justifyContent:'center'}}>
            <Text>{item.Month}</Text>
            <Text style={{fontSize: 60 }}>{item.Date}</Text>
            <Text>{item.Day}</Text>
          </View>
          <View style={{ flexDirection:'column', marginLeft:10}}>
              <Text style={{ fontSize: 18  }}>
                {item.Name}
              </Text>
              <Text style={{ fontSize: 16 }}>
                {item.Category}
              </Text>
              <Text style={{ fontSize: 16 }}>
                By Creator
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{ fontSize: 16 , backgroundColor: 'green', padding:5,marginRight:5, marginLeft:5, width: deviceWidth*0.01 }}>
                  {item.NumberofPeople}
                </Text>
                <Text style={{ fontSize: 16 , backgroundColor: 'red', padding:5, marginLeft:50, width: deviceWidth*0.01 }}>
                  {item.NumberofPeople}
                </Text>
              </View>
          </View>
        </View>
          <View>
            <Text style={{ fontSize: 16 , padding:5,marginRight:5, marginLeft:5}}>
              {item.Description}
            </Text>
            <View style={{flexDirection:'row'}}>
              <Text style={{ fontSize: 16 , padding:5, marginLeft:5, fontWeight: 'bold'}}>
                Place : 
              </Text>
              <Text style={{ fontSize: 16 , padding:5,marginRight:5}}>
                {item.Location}
              </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{ fontSize: 16 , padding:5, marginLeft:5, fontWeight: 'bold'}}>
                Duration : 
              </Text>
              <Text style={{ fontSize: 16 , padding:5,marginRight:5}}>
                {item.Duration}
              </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{ fontSize: 16 , padding:5, marginLeft:5, fontWeight: 'bold'}}>
                Cost : 
              </Text>
              <Text style={{ fontSize: 16 , padding:5,marginRight:5}}>
                {item.Cost}
              </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{ fontSize: 16 , padding:5, marginLeft:5, fontWeight: 'bold'}}>
                Number of People :  
              </Text>
              <Text style={{ fontSize: 16 , padding:5,marginRight:5}}>
                {item.NumberofPeople}
              </Text>
            </View>
          </View>
      </TouchableOpacity>
    )
  }
  renderSeparater = () => {
    return (
      <View style={{ height:1 , width:'100%' , backgroundColor: '#cccccc'}}>

      </View>
    )
  }

  render() {
    return (
      this.state.isLoading
      ?
      <View style={{ flex:1, justifyContent:'center' , alignItems:'center'}}>
        <ActivityIndicator size="large" color="#330066" animating />

      </View>
      :
      <View style={styles.container}>
      <FlatList
        data={this.state.listViewData}
        renderItem={this.renderItem}
        keyExtractor={( item ,index)=> index}
        ItemSeparateComponent={this.renderSeparater}   //Adds Dividers to the Flatlist
      />
      <View >
        <TouchableOpacity
            style={{
           borderWidth:3,
           borderRadius:100,
           borderColor:'#0000',
           alignItems:'center',
           justifyContent:'center',
           width:55,
           position: 'absolute',
           bottom: 5,
           right: 10,
                     
        }}
        onPress={()=>this.props.navigation.navigate('CreateEvent')}>
          <Ionicons name={'ios-add-circle'} size={60} color={'#000000'} />
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cccccc',

  },
});
