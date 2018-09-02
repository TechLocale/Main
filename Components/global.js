import React, {StyleSheet} from 'react-native';
import { Dimensions, StatusBar } from 'react-native';
var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;


var global = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#fff'
      },
      TInput: {
        width: deviceWidth*0.8,
        height: deviceHeight*0.1,
        padding: 10,
        marginBottom: 10,
      },
});

export default global;