import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ListView,
  Dimensions
} from 'react-native';
import { Card } from 'react-native-elements';
import firebase from '../../../../API/firebase';
import { Ionicons } from '@expo/vector-icons';
var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

var data  = []

class AirBus extends Component {
  static navigationOptions = {
    header: null
}


  constructor(props) {
    super(props);
    
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

    this.state = {
      loading: false,
      listViewData: data
    }
  }

  componentDidMount(){
    var that = this

    firebase.database().ref('/AirBusData').on('child_added', function (data) {

      var newData = [...that.state.listViewData]
      newData.push(data.val())
      that.setState({ listViewData: newData })
        // console.log(data.val());
    })
  }

  renderSeparater = () => {
    return (
      <View style={{ height:1 , width:'100%' , backgroundColor: 'black'}}>

      </View>
    )
  }

  renderItem = ({item}) =>{
    const{loading}= this.state;
    if(!loading){
      return (
        <TouchableOpacity
        onPress={(loding) => this.setState({loading: true})}
        >
          <Card>
            <View style={styles.container}>
              <Text style={styles.paragraph}>
                {item.Category}
              </Text>
              <Image style={{width:'100%', height: deviceHeight*0.5}} source={{uri : item.ImageURL}}/>
            </View> 
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'steelblue'}}>
              <Text style={{fontWeight: 'bold', fontSize: 20}} >{item.Name}</Text>
            </View>  
            <View>
              <View>
                <Text style={styles.paragraph}> 
                  {item.Location}
                </Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>  
                <Ionicons name='ios-call' size={30} /><Text>{item.Contact}</Text>
              </View>
              <View>
                <Text>
                  {item.Description}
                </Text>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      )
    }
    else{
      return (
        <TouchableOpacity
        onPress={(loding) => this.setState({loading: true})}
        >
          <Card>
            <View style={styles.container}>
              <Text style={styles.paragraph}>
                {item.Category}
              </Text>
              <Image style={{width:'100%', height: deviceHeight*0.5}} source={{uri : item.ImageURL}}/>
            </View> 
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'steelblue'}}>
              <Text style={{fontWeight: 'bold', fontSize: 20}} >{item.Name}</Text>
            </View>  
            <View>
              <View>
                <Text style={styles.paragraph}> 
                  {item.Location}
                </Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>  
                <Ionicons name='ios-call' size={30} /><Text>{item.Contact}</Text>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      )
    }
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
        ItemSeparateComponent={this.renderSeparater}  
      />

      </View>
    );
  }
}

export default  AirBus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  }
 
});