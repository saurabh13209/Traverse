import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class ContributionIndexScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <ImageBackground
                    style={{ width: '100%', height: 135, elevation: 5 }}
                    source={require("../../../images/contribute_bg.png")}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <TouchableOpacity
                            style={{ height: 24, width: 24 }}
                            onPress={() => {
                                this.props.navigation.pop();
                            }}
                        >
                            <Image
                                source={require("../../../images/left_icon.png")}
                                style={{ height: 20, width: 10, marginLeft: 16, marginTop: 16 }} />
                        </TouchableOpacity>

                        <Text style={{
                            fontFamily: 'CeraPro-Bold', marginTop: 30, marginLeft: 16,
                            fontSize: 22, color: 'white'
                        }}>
                            Contribute knowledge
                            </Text>

                        <Text style={{ marginLeft: 16, marginTop:5,  fontFamily: 'CeraPro-Medium', fontSize: 16, color: "white" }}>
                            Help us improve & make knowledge {"\n"}accessible to everyone.
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}