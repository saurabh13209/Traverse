import React from 'react';
import {
    View, Text, PermissionsAndroid, TextInput, FlatList, ImageBackground,
    Dimensions, Image, TouchableOpacity, ScrollView, Modal
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import BackgroundTimer from 'react-native-background-timer';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Location Api',
                    message:
                        'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                this.requestCameraPermission2();
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    }

    requestCameraPermission2 = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
                {
                    title: 'Location Api',
                    message:
                        'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {

            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    }



    getPostition = async () => {
        Geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
            },
            (error) => {
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }

    componentDidMount() {
        if (PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)) {
            if (PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)) {
                // BackgroundTimer.runBackgroundTimer(() => {
                //     this.getPostition();
                // }, 3000)
            } else {
                this.requestCameraPermission2();
            }
        } else {
            this.requestCameraPermission();
        }
    }

    ImageMain = ({ item }) => {
        if (item != "https://staticmapmaker.com/img/mapbox.png") {
            return (
                <Image
                    source={{ uri: item }}
                    style={{ height: 130, width: 135, borderRadius: 10 }}
                />
            )
        } else {
            console.log(item);
            return (<ImageBackground
                source={{ uri: item, justifyContent: 'center' }}
                style={{ height: 130, width: 135, borderRadius: 10 }}
            >
                <Icon
                    style={{ alignSelf: 'center', marginTop: 50, }}
                    onPress={() => {

                    }} name="map-marker" size={40} color="#1e5aff" />
            </ImageBackground>);
        }

    }

    render() {
        console.disableYellowBox = true;
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>


                
                <View
                    style={{
                        flex: 1, width: Dimensions.get('window').width, height: 60,
                        backgroundColor: '#fff', flexDirection: 'column', justifyContent: 'center',
                        position: 'absolute', top: 0, left: 0
                    }}>
                    <View style={{
                        borderColor: '#ccc', marginTop: 10, marginLeft: 20, marginRight: 20,
                        borderRadius: 5, borderWidth: 1, flexDirection: 'row'
                    }}>
                        <Icon name="flag"
                            size={20} color="#1E5AFF"
                            style={{ marginRight: 10, marginLeft: 10, marginTop: 10, marginBottom: 10 }} />
                        <TextInput
                            placeholder="Search for places & activites"
                            style={{
                                marginRight: 20, fontSize: 18, flexDirection: 'row', fontFamily: 'CeraPro-Medium'
                            }}>
                        </TextInput>

                        <Icon name="microphone"
                            size={20} color="#1E5AFF"
                            style={{ marginRight: 10, marginLeft: 10, marginTop: 10, marginBottom: 10 }} />
                        <Icon name="file-sound-o"
                            size={20} color="#1E5AFF"
                            style={{ marginRight: 10, marginLeft: 10, marginTop: 10, marginBottom: 10 }} />
                    </View>
                </View>
                <ScrollView style={{ top: 70 }}>
                    <Text style={{ fontFamily: 'CeraPro-Bold', fontSize: 22, marginTop: 10, marginLeft: 20, marginRight: 20 }}>Hi Shwet,</Text>
                    <Text style={{ fontFamily: 'CeraPro-Medium', fontSize: 18, marginLeft: 20, marginRight: 20 }}>Enjoy exploring Goa!</Text>
                    <Image source={require("../../images/beach.jpeg")} style={{ height: 200, marginTop: 20 }} />

                    <View style={{ margin: 16, marginTop: 20, justifyContent: 'space-between', flex: 1, flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'CeraPro-Bold', fontSize: 16 }}>Itinerary generator</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={() => {

                            }}
                            style={{
                                height: 50, width: 200, marginLeft: 20, justifyContent: 'center',
                                borderColor: '#ccc', borderWidth: 1, borderTopRightRadius: 20, borderTopLeftRadius: 20
                            }}>

                            <Text style={{ alignSelf: 'center', color: '#514d4d', fontFamily: 'CeraPro-Medium' }}>
                                Select date
                            </Text>

                        </TouchableOpacity>

                        <TextInput
                            placeholderTextColor="#1f1f1f"
                            keyboardType="number-pad"
                            placeholder="Budget"
                            style={{ textAlign: 'center', width: 150, marginLeft: 20, borderColor: '#ccc', borderWidth: 1, borderRadius: 20 }} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>

                        <TouchableOpacity style={{
                            height: 50, width: 200, marginLeft: 20, justifyContent: 'center',
                            borderColor: '#ccc', borderWidth: 1, borderTopWidth: 0, borderBottomRightRadius: 20, borderBottomLeftRadius: 20
                        }}>
                            <Text
                                style={{ alignSelf: 'center', color: '#514d4d', fontFamily: 'CeraPro-Medium' }}>
                                Select date
                            </Text>

                        </TouchableOpacity>


                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate("Itinerary");
                            }}
                            style={{
                                width: 150,
                                marginTop: 5,
                                marginLeft: 20,
                                padding: 10,
                                paddingLeft: 20, paddingRight: 20,
                                backgroundColor: '#ff8c20',
                                borderRadius: 20
                            }}
                        >
                            <View>
                                <Text style={{
                                    fontFamily: "CeraPro-Medium",
                                    fontSize: 16,
                                    color: "#fff",
                                    alignSelf: 'center'
                                }}>
                                    Generate
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={{ margin: 16, marginTop: 25, justifyContent: 'space-between', flex: 1, flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'CeraPro-Bold' }}>Things to do</Text>
                        <Text style={{ fontFamily: 'CeraPro-Bold', fontSize: 13 }}>view all</Text>
                    </View>

                    <FlatList
                        data={[
                            {
                                id: '1',
                                image: "https://staticmapmaker.com/img/mapbox.png",
                                title: 'Point your location',
                                place: "Place"
                            },
                            {
                                id: '2',
                                image: "https://www.thegoavilla.com/static/img/articles/goa-agonda-beach.jpg",
                                title: 'First Item',
                                place: "Place"
                            },
                            {
                                id: '3',
                                image: "https://www.thegoavilla.com/static/img/articles/goa-agonda-beach.jpg",
                                title: 'First Item',
                                place: "Place"
                            }
                        ]}
                        style={{ paddingLeft: 16 }}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate("PlaceInner");
                                }}
                                style={{ marginRight: 10 }}>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <this.ImageMain item={item.image} />
                                    <Text style={{ fontFamily: 'CeraPro-Medium', marginTop: 5 }}>{item.title}</Text>
                                    <Text style={{ fontFamily: 'CeraPro-Regular', color: '#1f1f1f', fontSize: 10 }}>{item.place}</Text>
                                </View>
                            </TouchableOpacity>
                        }
                        keyExtractor={item => item.id}
                    />


                    <View style={{ margin: 16, marginTop: 25, justifyContent: 'space-between', flex: 1, flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'CeraPro-Bold' }}>Recomended for you</Text>
                        <Text style={{ fontFamily: 'CeraPro-Bold', fontSize: 13 }}>view all</Text>
                    </View>

                    <FlatList
                        data={[
                            {
                                id: '1',
                                image: "https://www.thegoavilla.com/static/img/articles/goa-agonda-beach.jpg",
                                title: 'Point your location',
                                place: "Place"
                            },
                            {
                                id: '2',
                                image: "https://www.thegoavilla.com/static/img/articles/goa-agonda-beach.jpg",
                                title: 'First Item',
                                place: "Place"
                            },
                            {
                                id: '3',
                                image: "https://www.thegoavilla.com/static/img/articles/goa-agonda-beach.jpg",
                                title: 'First Item',
                                place: "Place"
                            }
                        ]}
                        style={{ paddingLeft: 16 }}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={{ marginRight: 10 }}>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        source={{ uri: item.image }}
                                        style={{ height: 130, width: 135, borderRadius: 10 }}
                                    />
                                    <Text style={{ fontFamily: 'CeraPro-Medium', marginTop: 5 }}>{item.title}</Text>
                                    <Text style={{ fontFamily: 'CeraPro-Regular', color: '#1f1f1f', fontSize: 10 }}>{item.place}</Text>
                                </View>
                            </TouchableOpacity>
                        }
                        keyExtractor={item => item.id}
                    />


                    <View style={{ margin: 16, marginTop: 25, justifyContent: 'space-between', flex: 1, flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'CeraPro-Bold' }}>Featured Experiences</Text>
                        <Text style={{ fontFamily: 'CeraPro-Bold', fontSize: 13 }}>view all</Text>
                    </View>

                    <FlatList
                        data={[
                            {
                                id: '1',
                                image: "https://www.thegoavilla.com/static/img/articles/goa-agonda-beach.jpg",
                                title: 'Point your location',
                                place: "Place"
                            },
                            {
                                id: '2',
                                image: "https://www.thegoavilla.com/static/img/articles/goa-agonda-beach.jpg",
                                title: 'First Item',
                                place: "Place"
                            },
                            {
                                id: '3',
                                image: "https://www.thegoavilla.com/static/img/articles/goa-agonda-beach.jpg",
                                title: 'First Item',
                                place: "Place"
                            }
                        ]}
                        style={{ paddingLeft: 16 }}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={{ marginRight: 10 }}>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        source={{ uri: item.image }}
                                        style={{ height: 130, width: 135, borderRadius: 10 }}
                                    />
                                    <Text style={{ fontFamily: 'CeraPro-Medium', marginTop: 5 }}>{item.title}</Text>
                                    <Text style={{ fontFamily: 'CeraPro-Regular', color: '#1f1f1f', fontSize: 10 }}>{item.place}</Text>
                                </View>
                            </TouchableOpacity>
                        }
                        keyExtractor={item => item.id}
                    />

                    <View style={{ height: 100 }} />
                </ScrollView>
            </View>
        );
    }
}