import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class SignInScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate("form");
                    }}
                >
                    <Text style={{ fontSize: 20 }}>
                        Sign In
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate("form");
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