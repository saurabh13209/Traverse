import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ImageBackground, FlatList } from 'react-native';

export default class NewInfoScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DescText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea tak eum. Stet clt ea rebum. Stet clita magna aliquyam erat, sed diam voluptua. ",
            TagText: "About the hidden temple"
        }
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <ImageBackground
                    style={{ width: '100%', height: 135, elevation: 5 }}
                    source={require("../../../images/contribute_bg.png")}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <TouchableOpacity
                            style={{ height: 24, width: 50 }}
                            onPress={() => {
                                this.props.navigation.pop();
                            }}
                        >
                            <Image
                                source={require("../../../images/left_icon.png")}
                                style={{ height: 20, width: 10, marginLeft: 20, marginTop: 16 }} />
                        </TouchableOpacity>

                        <Text style={{
                            fontFamily: 'CeraPro-Bold', marginTop: 30, marginLeft: 20,
                            fontSize: 22, color: 'white'
                        }}>
                            Contribute knowledge
                        </Text>

                        <Text style={{ marginLeft: 20, marginTop: 5, fontFamily: 'CeraPro-Medium', fontSize: 16, color: "white" }}>
                            Help us improve & make knowledge {"\n"}accessible to everyone.
                    </Text>
                    </View>
                </ImageBackground>
                <View style={{ margin: 20, flex: 1 }}>
                    <Text style={{ fontFamily: 'CeraPro-Bold', fontSize: 22, color: '#1f1f1f' }}>Miramar Beach</Text>
                    <Text style={{ fontFamily: 'CreaPro-Bold', fontSize: 16, color: '#1f1f1f' }}>Panji</Text>

                    <Text style={{ fontFamily: 'CreaPro-Bold', fontSize: 14, color: '#9a9a9a', marginTop: 20 }}>Section Name</Text>
                    <TextInput
                        value={this.state.TagText}
                        onChangeText={(val) => {
                            this.setState({
                                TagText: val
                            })
                        }}
                        multiline={true}
                        style={{
                            borderBottomColor: '#ccc', borderBottomWidth: 2, color: '#1f1f1f',
                            fontFamily: "CeraPro-Medium", fontSize: 14
                        }} />



                    <Text style={{ fontFamily: 'CreaPro-Bold', fontSize: 14, color: '#9a9a9a', marginTop: 40 }}>Description</Text>
                    <TextInput
                        value={this.state.DescText}
                        onChangeText={(val) => {
                            this.setState({
                                DescText: val
                            })
                        }}
                        multiline={true}
                        style={{
                            borderBottomColor: '#ccc', borderBottomWidth: 2, color: '#1f1f1f',
                            fontFamily: "CeraPro-Medium", fontSize: 14
                        }} />

                    <TouchableOpacity
                        onPress={() => {
                            this.setState({
                                isContribut: !this.state.isContribut
                            })
                        }}
                        style={{
                            width: 130,
                            marginLeft: 230,
                            marginTop: 20,
                            padding: 10,
                            paddingLeft: 20, paddingRight: 20,
                            backgroundColor: '#ff8c20',
                            borderRadius: 15
                        }}
                    >
                        <View>
                            <Text style={{
                                fontFamily: "CeraPro-Medium",
                                fontSize: 16,
                                color: "#fff",
                                alignSelf: 'center'
                            }}>
                                Report
                                </Text>
                        </View>
                    </TouchableOpacity>


                </View>
            </View>
        );
    }
}