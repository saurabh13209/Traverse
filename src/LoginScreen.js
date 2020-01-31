import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import firebase from 'react-native-firebase';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "isLoggedIn": false,
            "otp": null
        }
        this.response = null;
    }


    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, flexDirection: 'column' }}>
                <Text>
                    {this.state.isLoggedIn}
                </Text>

                <TouchableOpacity
                    onPress={() => {
                    }}
                >
                    <Text>
                        Sign In
                    </Text>
                </TouchableOpacity>

                <TextInput
                    onChangeText={(val) => {
                        this.setState({
                            "otp": val
                        })
                    }}
                    style={{ borderBottomColor: "#333", width: '100%', borderWidth: 1, fontSize: 20 }}
                />

                <TouchableOpacity
                    onPress={() => {
                        this.response.confirm(this.state.otp).then((usr) => {
                            console.log(usr);
                        }).catch((err) => {
                            console.log(err);
                        })
                    }}
                >
                    <Text style={{ fontSize: 20, marginTop: 20 }}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}