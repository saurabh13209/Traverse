import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <TouchableOpacity
                    onPress={() => {
                        axios.get("http://192.168.43.249:3000/").then(() => {

                        })
                    }}
                >
                    <Text>
                        Kickme
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}