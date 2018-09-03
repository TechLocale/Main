import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import { ImagePicker } from 'expo';
import { Dropdown } from 'react-native-material-dropdown';


export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      url: null,
      location : '',
      hashtags : '',
      category : '',
      data : '',
    };
  }
  onChooseImagePress = async () => {
    const { id } = this.state;
    const { location } = this.state;
    const { hashtags } = this.state;
    const { category } = this.state;
    //let result = await ImagePicker.launchCameraAsync();
    let result = await ImagePicker.launchImageLibraryAsync();
    console.log(result);
    if (!result.cancelled) {
      this.setState({
        url: result.uri,
      });
    }
  };

  render() {
    let data = [
      {
        value: 'Activities',
      },
      {
        value: 'Air & Bus',
      },
      {
        value: 'Food ',
      },
      {
        value: 'Health & Fitness',
      },
      {
        value: 'History',
      },
      {
        value: 'Hotels',
      },
      {
        value: 'Must Visit ',
      },
      {
        value: 'Religious Places ',
      },
      {
        value: 'Shopping',
      },
      {
        value: 'Transportation',
      },
    ];
     const { navigation } = this.props;
     const picurl = navigation.getParam('picurl','some-url');
     const name = navigation.getParam('name','some-url');
    
    let { url } = this.state;
    return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.imagecontain}>
            <Image
              style={{ width: 150, height: 250 }}
              source={{ uri: picurl} } 
            />
            
          </View>
        </TouchableOpacity>
        <View>
          <TextInput
            placeholder=" POST DESCRIPTION "
            style={styles.textstyle}
            multiline={true}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholderTextColor="black"
          />
          <Dropdown label="Category" data={data}
          onChangeText = {category =>this.setState.data} />
          <View style = {styles.arrange}>
          <TextInput
            placeholder="Location"
            style={ styles.textstyle_arrange}
            multiline={true}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholderTextColor="black"
            onChangeText={location => this.setState({ location })}
          />
          <TextInput
            placeholder="Hashtags"
            style={ styles.textstyle_arrange}
            multiline={true}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholderTextColor="black"
            onChangeText={hashtags => this.setState({ hashtags })}
          />
          </View>
          
          <TextInput
            placeholder="enter id"
            style={{ width: 300 }}
            onChangeText={id => this.setState({ id })}
          />
          <Text>ghvb </Text>}
          <Button
            bordered
            style ={styles.uploadbutton}
            title="Choose image"
            onPress={this.onChooseImagePress}
          />
        </View>
      </View>
    </ScrollView>  
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingLeft : 10,
  },
  imagecontain: {
    marginTop: 10,
  },
  textstyle: {
    borderColor: 'black',
    width: 300,
    height : 80,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 10,
    paddingHorizontal: 18,
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  arrange:{ 
    flexDirection : 'row' ,
    },
    textstyle_arrange: {
    borderColor: 'black',
    width: 150,
    height : 80,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 10,
    paddingHorizontal: 18,
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  uploadbutton:{
  
  }
});

