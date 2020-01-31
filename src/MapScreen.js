import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createOpenLink } from 'react-native-open-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class MapScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <TouchableOpacity
                    onPress={
                        createOpenLink({
                            end: "Dominos",
                            navigate_mode: "navigate"
                        })
                    }
                >
                    <Text>
                        Open Maps
                    </Text>
                </TouchableOpacity>

                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={{flex:1}}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                </MapView>

            </View>
        );
    }
}