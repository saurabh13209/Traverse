import React from 'react';
import {View, Text} from 'react-native';

export default class ProfileScreen extends React.Component{
    render(){
        return(
            <View style={{justifyContent:'center',alignItems:'center', flex:1}}>
                <Text>
                    Profile Sceeen
                </Text>
            </View>
        );
    }
}