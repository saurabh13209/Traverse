import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class InterestScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={{
                    fontSize: 30, alignSelf: 'center', marginTop: 20,
                    fontFamily: 'CeraPro-Regualar', marginBottom: 10
                }}>Hi Saurabh,</Text>
                <Text
                    style={{ textAlign: 'center', alignSelf: 'center', fontSize: 20, marginLeft: 20, marginRight: 20 }}
                >please let us know what you like most about travelling</Text>
                <View>

                    <View style={{
                        flexDirection: 'row', marginBottom: 5,
                        justifyContent: 'space-around'
                    }}>
                        <TouchableOpacity
                            style={{ flex: 1, padding: 10, }}
                        >
                            <Image style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 20, height: 100, width: '105%', resizeMode: "stretch" }} source={require('../../images/beach.jpeg')} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Kickme</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ flex: 1, padding: 10, }}
                        >
                            <Image style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 20, height: 100, width: '105%', resizeMode: "stretch" }} source={require('../../images/beach.jpeg')} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Kickme</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ flex: 1, padding: 10, }}
                        >
                            <Image style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 20, height: 100, width: '105%', resizeMode: "stretch" }} source={require('../../images/beach.jpeg')} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Kickme</Text>
                        </TouchableOpacity>




                    </View>


                    <View style={{
                        flexDirection: 'row', marginBottom: 5,
                        justifyContent: 'space-around'
                    }}>
                        <TouchableOpacity
                            style={{ flex: 1, padding: 10, }}
                        >
                            <Image style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 20, height: 100, width: '105%', resizeMode: "stretch" }} source={require('../../images/beach.jpeg')} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Kickme</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ flex: 1, padding: 10, }}
                        >
                            <Image style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 20, height: 100, width: '105%', resizeMode: "stretch" }} source={require('../../images/beach.jpeg')} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Kickme</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ flex: 1, padding: 10, }}
                        >
                            <Image style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 20, height: 100, width: '105%', resizeMode: "stretch" }} source={require('../../images/beach.jpeg')} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Kickme</Text>
                        </TouchableOpacity>




                    </View>


                    <View style={{
                        flexDirection: 'row', marginBottom: 5,
                        justifyContent: 'space-around'
                    }}>
                        <TouchableOpacity
                            style={{ flex: 1, padding: 10, }}
                        >
                            <Image style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 20, height: 100, width: '105%', resizeMode: "stretch" }} source={require('../../images/beach.jpeg')} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Kickme</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ flex: 1, padding: 10, }}
                        >
                            <Image style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 20, height: 100, width: '105%', resizeMode: "stretch" }} source={require('../../images/beach.jpeg')} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Kickme</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ flex: 1, padding: 10, }}
                        >
                            <Image style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 20, height: 100, width: '105%', resizeMode: "stretch" }} source={require('../../images/beach.jpeg')} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Kickme</Text>
                        </TouchableOpacity>




                    </View>




                    <TouchableOpacity
                        style={{
                            marginLeft: 20,
                            marginRight: 20,
                            padding: 10,
                            alignItems: 'center',
                            borderColor: '#1f1f1f',
                            borderWidth: 1,
                            borderRadius: 5
                        }}
                        onPress={() => {
                            this.props.navigation.navigate("HomeNavi");
                        }}
                    >
                        <Text>
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
