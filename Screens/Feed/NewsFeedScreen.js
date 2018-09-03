import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, FlatList, ScrollView } from 'react-native';
import {Permissions,ImagePicker,Camera} from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import{SearchBar, ListItem} from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import {deviceWidth, deviceHeigth} from '../../Components/global';

import global from '../../Components/global';


class NewsFeedScreen extends React.Component {

  static navigationOptions = {
    headerTitle: 'NewsFeed',
    headerRight: (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{padding:5, margin:5}}>
          <Text>Delhi</Text>
          <Ionicons name={'md-locate'} size={30} color={'#000000'} />
        </TouchableOpacity>
      </View>
    ),
    
  }

  constructor(props) {
    super(props);

    this.state = { 
      id: '', url: null,
      dataSource: [],
      isLoading:true 
    };
  }

  ongo(){

  }
  renderItem = ({item, i}) =>{
    return (
      <View style={{ flex:1, marginBottom:5, backgroundColor:'#f2f2f2'}}>
        <View>
          <ListItem
          key={i}
          roundAvatar
          avatar={{uri:item.image}}
          />
          <Image style={{ width:'100%', height:400}}
              source={{uri: item.image}}/>
            <TouchableOpacity>
              <View style={{margin:15}}>
                <Text style={{fontWeight:'bold', fontSize: 18}}>
                  Title to Attract Viewers
                </Text>
                <View style={{flexDirection: 'row'}}>
                <Text style={{ fontSize: 18}}>
                  Anandi Chole Bhature ,Kalkaji 
                </Text>
              </View>
              <View style={{flex:1,flexDirection:'row'}}>
                <Ionicons name={'ios-star'} size={30} color={'#fff4d'} />
                <Ionicons name={'ios-star'} size={30} color={'#fff4d'} />
                <Ionicons name={'ios-star'} size={30} color={'#fff4d'} />
                <Ionicons name={'ios-star'} size={30} color={'#fff4d'} />
                <Ionicons name={'ios-star'} size={30} color={'#fff4d'} />
              </View>
                <Text>
                  {item.author}
                </Text>
                <Text style={{marginBottom: 10}}>
                  The idea with React Native Elements is more about component structure than actual design.
                  The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <View style={{flex:1,flexDirection:'row', justifyContent: 'space-evenly'}}>
                  <Text>
                    4 Planned
                  </Text>
                  <TouchableOpacity>
                    <Text style={{padding: 10}}>
                      View Comments
                    </Text>
                  </TouchableOpacity>
                  <View style={{flexDirection: 'row'}}>
                  <Text style={{paddingRight:4}}>
                    200
                  </Text>
                  <View >
                  <Ionicons name={'ios-heart'} size={18} color={'#fff4d'} />
                  </View>
                  </View>
                </View>
                
              </View>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
  renderSeparater = () => {
    return (
      <View style={{ height:3 , width:'100%' , backgroundColor: '#000000'}}>

      </View>
    )
  }
  componentDidMount () {
    const url= 'https://www.jasonbase.com/things/akzb.json'
    fetch(url)
     .then((response) => response.json())
     .then((responseJson) => {
          this.setState({
            dataSource: responseJson.book_array,
            isLoading: false
          })
     })
     .catch((error) => {
         console.log(error)
     })
  }
  _openPhotoGallery = async () => {
    const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    
    if (status !== "granted") {
      const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (result.status !== "granted") {
        alert("you need to authorized the app");
        return;
      }
    }
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      console.log(result);
          this.setState({
            url: result.uri,
          });
        this.props.navigation.navigate('CreatePost', {
              picurl: result.uri,
              name : 'aaroon' ,
            });  
    }
  };
  _openCamera = async () => {
    const { status } = await Permissions.getAsync(Permissions.CAMERA);
    const { status1 } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== "granted") {
      const result = await Permissions.askAsync(Permissions.CAMERA);
      if (result.status !== "granted") {
        alert("you need to authorized the app");
        return;
      }
    }
    let result = await ImagePicker.launchCameraAsync();
    if (!result.cancelled) {
      console.log(result);
      this.setState({
            url: result.uri,
          });
           this.props.navigation.navigate('CreatePost', {
              picurl: result.uri,
            });
    }
  
  };

  render() {
    return (
      this.state.isLoading
      ?
      <View style={{ flex:1, justifyContent:'center' , alignItems:'center'}}>
        <ActivityIndicator size="large" color="#330066" animating />

      </View>
      :
      <View style={global.container}>
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
          <ScrollView horizontal={true} contentContainerStyle={{padding: 5}} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity 
              style={{
                backgroundColor:'#1a8cff' , 
                padding: 10, width: deviceWidth*0.4, 
                borderRadius:10, margin:5, 
                alignItems:'center', 
                justifyContent:'center'}}>
              <Text style={{fontSize:20}}>
                Travel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{
                backgroundColor:'#1a8cff' , 
                padding: 10, width: deviceWidth*0.4, 
                borderRadius:10, margin:5, 
                alignItems:'center', 
                justifyContent:'center'}}>
              <Text style={{fontSize:20}}>
                Music
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{
                backgroundColor:'#1a8cff' , 
                padding: 10, width: deviceWidth*0.4, 
                borderRadius:10, margin:5, 
                alignItems:'center', 
                justifyContent:'center'}}>
              <Text style={{fontSize:20}}>
                Photography
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{
                backgroundColor:'#1a8cff' , 
                padding: 10, width: deviceWidth*0.4, 
                borderRadius:10, margin:5, 
                alignItems:'center', 
                justifyContent:'center'}}>
              <Text style={{fontSize:20}}>
                Science
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{
                backgroundColor:'#1a8cff' , 
                padding: 10, width: deviceWidth*0.4, 
                borderRadius:10, margin:5, 
                alignItems:'center', 
                justifyContent:'center'}}>
              <Text style={{fontSize:20}}>
                Art
              </Text>
            </TouchableOpacity>
          </ScrollView>
          <FlatList
            data={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor={( item ,index)=> index}
            ItemSeparateComponent={this.renderSeparater}   //Adds Dividers to the Flatlist
          />
        </View>
         <ActionButton buttonColor="rgba(231,76,60,1)" >
            <ActionButton.Item buttonColor="#9b59b6" title="Open Gallery" onPress={this._openPhotoGallery}>
              <Icon name="md-image" style={styles.actionButtonIcon}/>
           </ActionButton.Item>
            <ActionButton.Item buttonColor="#3498db" title="Open Camera" onPress={this._openCamera}>
              <Icon name="md-camera" style={styles.actionButtonIcon}/>
            </ActionButton.Item>
          </ActionButton>  
      </View>
    );
  }
}

export default NewsFeedScreen;

const styles = StyleSheet.create({
 
  welcome:{
    fontSize: 20,
    textAlign:'center',
    margin:10
  },
  actionButtonIcon:{
    fontSize:20,
    height:22,
    color:'white'
  }
});