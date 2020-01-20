import React from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, Image, Dimensions, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ItineraryIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showList: true
        }
    }


    getFirstItem = ({ item }) => {
        if (item.id == 1) {
            return (
                <View>
                    <Text style={{ fontFamily: 'CeraPro-Bold', marginBottom: 10 }}>Departure</Text>
                    <View style={{
                        flexDirection: 'row',
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
                    <ImageBackground
                        source={require("../../../images/join.png")}
                        style={{ marginLeft: 0, height: 50, width: 80 }}
                    >
                        <Text style={{ marginLeft: 20, marginTop: 15, fontFamily: 'CeraPro-Medium', fontSize: 16 }}>
                            25 min
                        </Text>
                    </ImageBackground>
                </View>
            );
        } else {
            return (
                <View>
                    <View style={{
                        flexDirection: 'row',
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
                    <ImageBackground
                        source={require("../../../images/join.png")}
                        style={{ marginLeft: 0, height: 50, width: 80 }}
                    >
                        <Text style={{ marginLeft: 20, marginTop: 15, fontFamily: 'CeraPro-Medium', fontSize: 16 }}>
                            25 min
                        </Text>
                    </ImageBackground>
                </View>);
        }

    }

    render() {
        return (
            <View style={{
                flex: 1, flexDirection: 'column', backgroundColor: 'white',
                paddingLeft: 20, paddingRight: 20
            }}>
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        flex: 1, height: 70,
                        width: Dimensions.get('window').width,
                        justifyContent: 'center', alignSelf: 'center',
                        backgroundColor: '#1e5aff', elevation: 5
                    }}>
                    <Text style={{ alignSelf: 'center', color: 'white', fontFamily: 'CeraPro-Medium', fontSize: 18 }}>Save Itinerary</Text>
                </TouchableOpacity>

                <Text style={{ marginTop: 20, marginBottom: 10, fontFamily: 'CeraPro-Medium', fontSize: 15 }}>Name your itinerary</Text>
                <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 10, flexDirection: 'row' }}>
                    <TextInput
                        style={{ paddingLeft: 10, width: '100%', flex: 9 }} fontFamily={"CeraPro-Medium"}
                        placeholder={"Give your trip name"} />
                    <Icon
                        style={{ alignSelf: 'center', flex: 1 }}
                        name="edit" size={20} color="#ccc" />
                </View>

                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={{ fontFamily: 'CeraPro-Medium', fontSize: 14, color: '#cacaca' }}>From</Text>
                        <Text style={{ marginTop: 5, fontFamily: 'CeraPro-Medium', fontSize: 18, color: '#1f1f1f' }}>20 Jan 2020</Text>
                    </View>

                    <Icon
                        style={{ position: 'absolute', top: 15, left: Dimensions.get('window').width / 2 - 30, flex: 1, }}
                        name="arrow-right" size={20} color="#000" />

                    <View style={{ flex: 1, flexDirection: 'column', marginLeft: 100 }}>
                        <Text style={{ fontFamily: 'CeraPro-Medium', fontSize: 14, color: '#cacaca' }}>From</Text>
                        <Text style={{ marginTop: 5, fontFamily: 'CeraPro-Medium', fontSize: 18, color: '#1f1f1f' }}>20 Jan 2020</Text>
                    </View>
                </View>

                <FlatList
                    style={{ marginTop: 60, paddingTop: 20, marginBottom: 70 }}
                    data={[
                        {
                            id: '1',
                            title: "Kickme"
                        }, {
                            id: '2',
                            title: "Kickme"
                        }, {
                            id: '3',
                            title: "Kickme"
                        }, {
                            id: '2',
                            title: "Kickme"
                        }, {
                            id: '4',
                            title: "Kickme"
                        }, {
                            id: '2',
                            title: "Kickme"
                        }, {
                            id: '5',
                            title: "Kickme"
                        }, {
                            id: '2',
                            title: "Kickme"
                        }, {
                            id: '6',
                            title: "Kickme"
                        }, {
                            id: '2',
                            title: "Kickme"
                        },
                    ]}
                    renderItem={({ item }) =>
                        <this.getFirstItem item={item} />

                    }
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}