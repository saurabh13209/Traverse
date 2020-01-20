import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class PlaceScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Image
                    style={{ height: 250 }}
                    source={{ uri: "https://www.thegoavilla.com/static/img/articles/goa-agonda-beach.jpg" }} />
            </View>
        );
    }
}