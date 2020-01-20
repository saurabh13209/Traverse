import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

var radio_props = [
    { label: 'repeated information', value: 1 },
    { label: 'bad grammar', value: 1 },
    { label: 'wrong information', value: 1 },
    { label: 'inappropriate info', value: 1 }
];

export default class ContributionIndexScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isContribut: true,
            checkBok1: [{ label: 'param1', value: 0 }],
            checkBok2: [{ label: 'param2', value: 0 }],
            checkBok3: [{ label: 'param3', value: 0 }],
            checkBok4: [{ label: 'param4', value: 0 }],
        }
    }


    IsContributRender = () => {
        if (this.state.isContribut) {
            return (
                <View style={{ marginTop: 40 }}>
                    <Text style={{ fontFamily: 'CeraPro-Medium', color: '#1f1f1f' }}>
                        Contribution Towards
                    </Text>

                    <View style={{
                        flexDirection: 'row',
                        marginTop: 20,
                        borderRadius: 20, borderColor: '#cccccc', borderWidth: 1
                    }}>
                        <Image
                            style={{ flex: 3, height: 100, width: 100, borderBottomLeftRadius: 20, borderTopLeftRadius: 20 }}
                            source={require("../../../images/beach.jpeg")} />
                        <View style={{ flex: 7, flexDirection: 'column', justifyContent: 'center', left: 20 }}>
                            <Text style={{
                                color: "#1f1f1f", fontFamily: 'CeraPro-Medium'
                                , fontSize: 20
                            }}>Miramar Beach</Text>
                            <Text style={{ fontFamily: "CeraPro-Medium", fontSize: 16, color: "#1f1f1f" }}>Panji</Text>
                        </View>
                    </View>

                    <Text style={{ fontFamily: 'CeraPro-Medium', marginTop: 30, color: '#1f1f1f' }}>
                        Options
                    </Text>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("Update");
                        }}
                        style={{
                            flexDirection: 'row',
                            paddingLeft: 15,
                            paddingTop: 20,
                            paddingBottom: 20,
                            borderColor: '#ccc', borderWidth: 1, borderRadius: 10, marginTop: 20
                        }}>
                        <Icon style={{}} name="flag" size={20} color="#1E5AFF" />

                        <Text style={{ marginLeft: 20, fontFamily: 'CeraPro-Medium', color: '#1f1f1f' }}>
                            Request to update current details
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("NewInfo");
                        }}

                        style={{
                            flexDirection: 'row',
                            paddingLeft: 15,
                            paddingTop: 20,
                            paddingBottom: 20,
                            borderColor: '#ccc', borderWidth: 1, borderRadius: 10, marginTop: 20
                        }}>
                        <Icon style={{}} name="info" size={20} color="#1E5AFF" />

                        <Text style={{ marginLeft: 20, fontFamily: 'CeraPro-Medium', color: '#1f1f1f' }}>
                            New info section to be added
                        </Text>
                    </TouchableOpacity>

                </View>
            );
        } else {
            return (
                <View style={{ marginTop: 40 }}>
                    <Text style={{ fontFamily: 'CeraPro-Medium', color: '#1f1f1f' }}>
                        Contribution Towards
                </Text>

                    <View style={{
                        flexDirection: 'row',
                        marginTop: 20,
                        borderRadius: 20, borderColor: '#cccccc', borderWidth: 1
                    }}>
                        <Image
                            style={{ flex: 3, height: 100, width: 100, borderBottomLeftRadius: 20, borderTopLeftRadius: 20 }}
                            source={require("../../../images/beach.jpeg")} />
                        <View style={{ flex: 7, flexDirection: 'column', justifyContent: 'center', left: 20 }}>
                            <Text style={{
                                color: "#1f1f1f", fontFamily: 'CeraPro-Medium'
                                , fontSize: 20
                            }}>Miramar Beach</Text>
                            <Text style={{ fontFamily: "CeraPro-Medium", fontSize: 16, color: "#1f1f1f" }}>Panji</Text>
                        </View>
                    </View>

                    <Text style={{ fontFamily: 'CeraPro-Medium', marginTop: 30, color: '#1f1f1f' }}>
                        Whats wrong ?
                    </Text>

                    <RadioForm
                        style={{ marginTop: 20 }}
                        radio_props={radio_props}
                        initial={0}
                        onPress={(value) => { this.setState({ value: value }) }}
                        labelStyle={{ fontSize: 16, color: '#1f1f1f', fontFamily: 'CeraPro-Medium', }}
                        animation={false}
                    />

                    <Text style={{ fontFamily: 'CeraPro-Medium', marginTop: 30, color: '#1f1f1f' }}>
                        Comments
                    </Text>

                    <TextInput
                        multiline={true}
                        padding={10}
                        style={{ marginTop: 20, borderColor: '#ccc', borderWidth: 1, borderRadius: 20 }}
                    />

                    <TouchableOpacity
                        onPress={() => {
                            this.setState({
                                isContribut: !this.state.isContribut
                            })
                        }}
                        style={{
                            width: 130,
                            marginLeft: 230,
                            marginTop: 10,
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
            );
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

                <ScrollView style={{ flexDirection: 'column', padding: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    isContribut: !this.state.isContribut
                                })
                            }}
                            style={{
                                padding: 10,
                                paddingLeft: 20, paddingRight: 20,
                                backgroundColor: this.state.isContribut == true ? '#ff8c20' : "#e5e5e5",
                                borderRadius: 15
                            }}
                        >
                            <View>
                                <Text style={{
                                    fontFamily: "CeraPro-Medium",
                                    fontSize: 16,
                                    color: this.state.isContribut == true ? "#fff" : "#000",
                                }}>
                                    Contribute
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    isContribut: !this.state.isContribut
                                })
                            }}
                            style={{
                                marginLeft: 10,
                                padding: 10,
                                paddingLeft: 20, paddingRight: 20,
                                backgroundColor: this.state.isContribut == false ? '#ff8c20' : "#e5e5e5",
                                borderRadius: 15
                            }}
                        >
                            <View>
                                <Text style={{
                                    fontFamily: "CeraPro-Medium",
                                    fontSize: 16,
                                    color: this.state.isContribut == false ? "#fff" : "#000",
                                }}>
                                    Report an Issue
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <this.IsContributRender />
                </ScrollView>
            </View>
        );
    }

}