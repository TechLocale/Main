import React,{Component} from 'react';
import { View} from 'react-native';
import List from '../../../Components/List';

class Accomodation extends React.Component{
    static navigationOptions = {
        header: null
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <View>
                <List />
            </View>
        );  
    }
}

export default Accomodation;