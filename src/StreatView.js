import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default class StreatView extends React.Component {
    render() {
        return (
          <View style={{flex:1}}>
               <WebView style={{flex:1}} source={{ uri: 'https://goo.gl/maps/Qd3z4qzngN6Fqdb3A' }} />
          </View>
        );
    }
}