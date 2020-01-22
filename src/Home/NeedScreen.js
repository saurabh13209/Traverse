import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class NeedSceeen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate("Local");
                    }}
                >
                    <Text>
                        Local Tongue
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate("Local");
                    }}
                >
                    <Text>
                        Help Bot
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate("Chat");
                    }}
                >
                    <Text style={{fontSize:30 , marginTop:20 , fontFamily:'CeraPro-Bold' , }}>
                        Chat Bot
                    </Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}