import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class ContributionIndexScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isContribut: false
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

                    <TouchableOpacity style={{
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
                    <TouchableOpacity style={{
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

                <View style={{ flexDirection: 'column', padding: 20 }}>
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
                                    Contribute
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <this.IsContributRender />
                </View>
            </View>
        );
    }

}