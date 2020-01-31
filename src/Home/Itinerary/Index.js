import React from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, Image, Dimensions, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';


export default class ItineraryIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showList: true,
            places: [],
            maindata: []
        }
    }

    getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    componentDidMount() {
        this.workk();
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
                            style={{
                                flex: 3, height: 100, width: 100, borderBottomLeftRadius: 20,
                                borderTopLeftRadius: 20
                            }}
                            source={{ uri: item.Image }} />
                        <View style={{ flex: 7, flexDirection: 'column', justifyContent: 'center', left: 20 }}>
                            <Text style={{
                                color: "#1f1f1f", fontFamily: 'CeraPro-Medium'
                                , fontSize: 20
                            }}>{item.Title}</Text>
                            <Text style={{ fontFamily: "CeraPro-Medium", fontSize: 16, color: "#1f1f1f" }}>{item.desc}</Text>
                        </View>
                    </View>
                    <ImageBackground
                        source={require("../../../images/join.png")}
                        style={{ marginLeft: 0, height: 50, width: 80 }}
                    >
                        <Text style={{ marginLeft: 20, marginTop: 15, fontFamily: 'CeraPro-Medium', fontSize: 16 }}>
                            37 min
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

                            source={{ uri: item.Image }} />
                        <View style={{ flex: 7, flexDirection: 'column', justifyContent: 'center', left: 20 }}>
                            <Text style={{
                                color: "#1f1f1f", fontFamily: 'CeraPro-Medium'
                                , fontSize: 20
                            }}>{item.Title}</Text>
                            <Text style={{ fontFamily: "CeraPro-Medium", fontSize: 16, color: "#1f1f1f" }}>{item.desc}</Text>
                        </View>
                    </View>
                    <ImageBackground
                        source={require("../../../images/join.png")}
                        style={{ marginLeft: 0, height: 50, width: 80 }}
                    >
                        <Text style={{ marginLeft: 20, marginTop: 15, fontFamily: 'CeraPro-Medium', fontSize: 16 }}>
                            56 min
                        </Text>
                    </ImageBackground>
                </View>);
        }

    }

    workk = () => {
        var interest = ["beach", "church", "fort"]
        axios.get('http://192.168.43.249:5000/getClose')
            .then((response) => {
                for (var i = 0; i < interest.length; i++) {
                    var twmp = 2;
                    while (twmp > 0) {
                        this.setState({
                            places: [
                                ...this.state.places,
                                response.data[interest[i]][this.getRandomInt(6)]
                            ]
                        })
                        twmp = twmp - 1;
                    }
                }

                for (var i = 0; i < this.state.places; i++) {
                    f
                }

            })
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
                        <Text style={{ marginTop: 5, fontFamily: 'CeraPro-Medium', fontSize: 18, color: '#1f1f1f' }}>21 Jan 2020</Text>
                    </View>
                </View>

                <FlatList
                    style={{ marginTop: 60, paddingTop: 20, marginBottom: 70 }}
                    data={[
                        {
                            id: '1',
                            Title: "Miramar Beach",
                            Image: "https://cdn1.goibibo.com/t_tg_fs/goa-miramar-beach-147714498468-orijgp.jpg",
                            desc: "Panjim"
                        }, {
                            id: '2',
                            Title: "Basilica of Bom Jesus",
                            Image: "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1073481062_20190822145857.jpg",
                            desc: "Old Goa"
                        }, {
                            id: '3',
                            Title: "Aguada Fort",
                            Image: "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1065727913_20190822150731.jpg",
                            desc: "Aguada"
                        }, {
                            id: '4',
                            Title: "Colva Beach",
                            Image: "https://i0.wp.com/www.itsgoa.com/wp-content/uploads/2018/04/colva-beach-goa-768x485-e1523259289213.jpg?fit=633%2C400&ssl=1",
                            desc: "Colva"
                        }, {
                            id: '5',
                            Title: "Baga Beach",
                            Image: "https://www.tripsavvy.com/thmb/jVuYPKjTAokiT7A0ir27GkyY7cg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-903398436-5c612e4a46e0fb00017dd31f.jpg",
                            desc: "Baga"
                        }, {
                            id: '6',
                            Title: "Se Cathedral",
                            Image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Se%E2%80%99_Cathedral%2C_Goa.jpg",
                            desc: "Old Goa"
                        }
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