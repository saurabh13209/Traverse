import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            Name:"",
            Email:"",
        }
    }

    render() {
        return (
            <View style={{flex:1, justifyContent:"center", alignItems:'center'}}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate("Interest");
                    }}
                >
                    <Text>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}