import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class SignInScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 , backgroundColor:'white'}}>

                <Text style={{
                    marginBottom: 10, fontFamily: 'CeraPro-Medium',
                    fontSize: 40, color: 'black'
                }}>Team Apollo</Text>
                <Image source={require('../../images/team.jpg')} style={{ height: 200, marginBottom: 40, width: '80%' }} />

                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate("form");
                    }}
                >
                    <Text style={{ fontSize: 20, color: '#ff4545', fontFamily: 'CeraPro-Medium', fontSize: 30 }}>
                        Sign In
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate("Chat");
                    }}
                >

                    <Text style={{ fontSize: 20, marginTop: 20, fontFamily: 'CeraPro-Medium', fontSize: 30 }}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}