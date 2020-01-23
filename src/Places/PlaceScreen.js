import React from 'react';
import {
    View, Text, TouchableOpacity, findNodeHandle, Image, StyleSheet, ScrollView,
    ImageBackground, Dimensions, FlatList
} from 'react-native';
var Carousel = require('react-native-carousel');
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase';

export default class PlaceScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ImageIndex: 0,
            viewRef: null,
            mapMain: [["aguada-fort", "Place15"], ["anjuna-beach", "Place2"], ["baga-beach", "Place5"], ["basilica-of-bom jesus", "Place7"], ["bogmalo-beach", "Place33"], ["cabo-de-gama-fort", "Place27"], ["chapora-fort", "Place35"], ["colva-beach", "Place31"], ["corjuem-fort", "Place28"], ["mangueshi-temple", "Place8"], ["our-lady- of-rosary-church", "Place18"], ["'our-lady-of-the-immaculate- conception-church", "Place17"], ["reis-magos-fort", "Place13"], ["se-cathedral", "Place16"], ["shantadurga-temple", "Place10"], ["sinquerim-beach", "Place30"], ["st-augustine-church", "Place20"], ["st-francis-of-assisi-church", "Place6"], ["vagator-beach", "Place32"]],

            PlaceId: "Place7",
            Image: [],
            Name: "",
            SrtDesc: "",
            Months: [],
            Hotels: [],
            Price: "",
            ThingsToDo: [],
            Hotels: [],
            Reviews: []
        }
    }

    imageLoaded() {
        this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
    }

    componentWillMount() {
        this.setState({
            placeName: this.props.navigation.getParam("placeMain"),
        }, () => {
            if (this.state.placeName == undefined) {
                firebase.database()
                    .ref("Places/Place7")
                    .once('value', (snap) => {
                        this.setState({
                            Name: snap.val()["Name"],
                            SrtDesc: snap.val()["SrtDesc"],
                            Months: snap.val()["Months"],
                            Price: snap.val()["BestPrice"],
                            ThingsToDo: snap.val()["ThingsToDo"],
                            Image: snap.val()["Image"],
                            Hotels: snap.val()["Hotels"],
                            Reviews: snap.val()["Reviews"]
                        }, () => {
                            console.log(this.state.Hotels);
                        })
                    });
            } else {
                for (var i = 0; i < this.state.mapMain.length; i++) {
                    if (this.state.mapMain[i][0] === this.props.navigation.getParam("placeMain")) {
                        this.setState({
                            PlaceId: this.state.mapMain[i][0]
                        })
                        firebase.database()
                            .ref("Places/" + this.state.mapMain[i][1])
                            .once('value', (snap) => {
                                this.setState({
                                    Name: snap.val()["Name"],
                                    SrtDesc: snap.val()["SrtDesc"],
                                    Months: snap.val()["Months"],
                                    Price: snap.val()["BestPrice"],
                                    ThingsToDo: snap.val()["ThingsToDo"],
                                    Image: snap.val()["Image"],
                                    Hotels: snap.val()["Hotels"],
                                    Reviews: snap.val()["Reviews"]
                                }, () => {
                                    console.log(this.state.Hotels);
                                })
                            });
                    }
                }

            }
        })



        //TODO: ON
        //TODO: Comment Remove 
        console.log(this.props.navigation.getParam("placeMain"));

        // firebase.database()
        //     .ref("Places/" + )
        //     .once('value', (snap) => {  
        //         this.setState({
        //             Name: snap.val()["Name"],
        //             SrtDesc: snap.val()["SrtDesc"],
        //             Months: snap.val()["Months"],
        //             Price: snap.val()["BestPrice"],
        //             ThingsToDo: snap.val()["ThingsToDo"],
        //             Image: snap.val()["Image"],
        //             Hotels: snap.val()["Hotels"],
        //             Reviews: snap.val()["Reviews"]
        //         }, () => {
        //             console.log(this.state.Hotels);
        //         })
        //     });


    }

    Cour = () => {
        return (
            <Carousel
                hideIndicators={false}
                animate={true} // Enable carousel autoplay
                delay={3000} // Set Animation delay between slides
                indicatorColor="#FFFFFF" // Active indicator color
                indicatorSize={40} // Indicator bullet size
                indicatorSpace={20} // space between each indicator
                inactiveIndicatorColor="#E5e5e5" // Inactive indicator color
                indicatorAtBottom={false} // Set to false to show the indicators at the top
                indicatorOffset={200} // 
                loop={true}
                width={100}>
                <Image style={{ height: 250 }} source={require('../../images/beach.jpeg')} />
                <Image style={{ height: 250 }} source={require('../../images/beach.jpeg')} />
            </Carousel>
        );
    }

    ReviewsAllData = () => {
        if (this.state.Reviews == undefined) {
            return (
                <Text style={{ fontFamily: 'CeraPro-Medium', textAlign: 'center', marginBottom: 10 }}>No reviews yet, Be the first to add one!</Text>
            );
        } else {
            return (
                <FlatList
                    data={this.state.Reviews}
                    style={{ paddingLeft: 16 }}
                    renderItem={({ item }) =>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1, flexDirection: 'column', top: 0, alignItems: 'center' }}>
                                <Image source={{ uri: item.UserImage }} style={{
                                    height: 40, width: 40,
                                    borderRadius: 50
                                }} />
                                <View style={{
                                    paddingBottom: 5, marginBottom: 10, marginTop: 10,
                                    borderColor: '#000', borderRadius: 10, borderWidth: 1,
                                    justifyContent: 'center', alignItems: 'center', flexDirection: 'row'
                                }}>
                                    <Text style={{ fontSize: 10, paddingLeft: 10, paddingRight: 5, paddingTop: 5 }}>
                                        {item.Stars}
                                    </Text>
                                    <Icon style={{ marginRight: 10 }} name="star" size={10} color="#000" />
                                </View>
                            </View>
                            <View style={{ flex: 4, flexDirection: 'column' }}>
                                <Text style={{ color: '#121212', fontSize: 14, fontFamily: 'CeraPro-Regular', marginRight: 16 }}>
                                    {item.ReviewText}
                                </Text>

                                <Text style={{
                                    color: '#9a9d9c', fontFamily: 'CeraPro-Regular', fontSize: 14,
                                    marginBottom: 10
                                }}>{item.Date}</Text>

                            </View>
                        </View>
                    }
                    keyExtractor={item => item.ReviewId}
                />
            );
        }
    }

    render() {
        return (
            <View style={{ flex: 10, flexDirection: 'column' }}>
                <ScrollView style={{ flexGrow: 2, flex: 1 }} nestedScrollEnabled={true} >
                    <ImageBackground
                        style={{ width: '100%', height: 250 }}
                        source={{ uri: this.state.Image[this.state.ImageIndex % this.state.Image.length] }}
                    >
                        <View style={{ flex: 1, justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <Icon
                                onPress={() => {
                                    if (this.state.ImageIndex > 0) {
                                        this.setState({
                                            ImageIndex: this.state.ImageIndex - 1
                                        })
                                    } else {
                                        this.setState({
                                            ImageIndex: this.state.Image.length - 1
                                        })
                                    }
                                }} name="arrow-left" size={20} color="#fff" />
                            <Icon
                                onPress={() => {
                                    console.log("Kickme");
                                    this.setState({
                                        ImageIndex: this.state.ImageIndex + 1
                                    })
                                }} name="arrow-right" size={20} color="#fff" />

                            <TouchableOpacity
                                onPress={() => {

                                }}
                                style={{
                                    backgroundColor: 'white', borderRadius: 10, position: 'absolute', bottom: 20,
                                    right: 20, height: 40, width: 60, justifyContent: 'center', alignItems: 'center'
                                }}>
                                <Image
                                    style={{ height: 37, width: 37, }}
                                    tintColor={"black"}
                                    source={require("../../images/three.png")}
                                    color="#fff" />

                            </TouchableOpacity>

                        </View>
                    </ImageBackground>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{
                                fontFamily: 'CeraPro-Bold',
                                fontSize: 22,
                                marginTop: 10,
                                marginLeft: 16
                            }}>
                                {this.state.Name}
                            </Text>
                            <Text style={{ marginLeft: 16, fontFamily: 'CeraPro-Medium' }}>
                                Panaji
                    </Text>
                        </View>
                        <View style={{
                            marginTop: 10, marginBottom: 10, marginRight: 20, borderColor: '#000', borderRadius: 10, borderWidth: 1,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Text style={{ paddingLeft: 10, paddingRight: 10 }}>
                                27° C
                            </Text>
                        </View>
                    </View>
                    <Text style={{ margin: 16, marginTop: 10, color: '#9a9a9a', fontFamily: 'CeraPro-Medium' }}>
                        {this.state.SrtDesc}
                    </Text>

                    <Text style={{ marginBottom: 10, marginTop: 15, marginLeft: 16, fontFamily: 'CeraPro-Bold', fontSize: 16 }}>
                        Best time to visit
                    </Text>

                    <View style={{
                        flex: 1, flexDirection: 'column', margin: 16, marginTop: 0, padding: 10,
                        borderColor: '#707070', borderRadius: 10, borderWidth: 1
                    }}>
                        <Text style={{ fontFamily: 'CeraPro-Bold', color: "#1f1f1f", fontSize: 14 }}>Summer ({this.state.Months[0]} - {this.state.Months[1]})</Text>
                        <Text style={{ color: '#9a9a9a', fontFamily: "CeraPro-Medium" }}>based on 30+ reviews</Text>
                    </View>

                    <Text style={{ marginBottom: 10, marginLeft: 16, marginTop: 15, fontFamily: 'CeraPro-Bold', fontSize: 16 }}>
                        Best Price
                    </Text>

                    <View style={{
                        flex: 1, flexDirection: 'column', margin: 16, marginBottom: 0, marginTop: 0, padding: 10,
                        borderColor: '#707070', borderRadius: 10, borderWidth: 1
                    }}>
                        <Text style={{ fontFamily: 'CeraPro-Bold', color: "#1f1f1f", fontSize: 14 }}>{this.state.Price}</Text>
                        <Text style={{ color: '#9a9a9a', fontFamily: "CeraPro-Medium" }}>based on 30+ reviews</Text>
                    </View>

                    <View style={{ margin: 16, marginTop: 25, justifyContent: 'space-between', flex: 1, flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'CeraPro-Bold' }}>Things to do</Text>
                        <Text style={{ fontFamily: 'CeraPro-Bold', fontSize: 13 }}>view all</Text>
                    </View>

                    <FlatList
                        data={this.state.ThingsToDo}
                        style={{ paddingLeft: 16 }}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={{ marginRight: 20 }}>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        source={{ uri: item.Image }}
                                        style={{ height: 130, width: 165, borderRadius: 10 }}
                                    />
                                    <Text style={{ fontFamily: 'CeraPro-Medium', marginTop: 5 }}>{item.Name}</Text>
                                    <Text style={{ fontFamily: 'CeraPro-Regular', color: '#1f1f1f', fontSize: 10 }}>{item.Location}</Text>
                                </View>
                            </TouchableOpacity>
                        }
                        keyExtractor={item => item.id}
                    />






                    <View style={{ margin: 16, marginTop: 25, justifyContent: 'space-between', flex: 1, flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'CeraPro-Bold' }}>Hotels nearby</Text>
                        <Text style={{ fontFamily: 'CeraPro-Bold', fontSize: 13 }}>view all</Text>
                    </View>

                    <FlatList
                        data={this.state.Hotels}
                        style={{ paddingLeft: 16 }}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={{ marginRight: 20 }}>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        source={{ uri: item.Image }}
                                        style={{ height: 130, width: 165, borderRadius: 10 }}
                                    />
                                    <Text style={{ fontFamily: 'CeraPro-Medium', marginTop: 5 }}>{item.Name}</Text>
                                    <Text style={{ fontFamily: 'CeraPro-Regular', color: '#1f1f1f', fontSize: 10 }}>{item.Location}</Text>
                                </View>
                            </TouchableOpacity>
                        }
                        keyExtractor={item => item.id}
                    />



                    <View style={{ margin: 16, marginTop: 20, justifyContent: 'space-between', flex: 1, flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'CeraPro-Bold' }}>Reviews</Text>
                        <Text style={{ fontFamily: 'CeraPro-Bold', fontSize: 13 }}>view all</Text>
                    </View>

                    <this.ReviewsAllData />

                    {/* <TouchableOpacity>
                        <Text style={{ borderColor: '#1f1f1f', borderWidth: 1, margin: 16, paddingTop: 10, paddingBottom: 10, borderRadius: 10, fontFamily: 'CeraPro-Medium', fontSize: 14, textAlign: 'center' }}>
                            view 4 more ratings
                            </Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("Review", { PlaceId: this.state.PlaceId });
                        }}
                    >
                        <Text style={{ borderColor: '#1f1f1f', borderWidth: 1, margin: 16, marginTop: 0, paddingTop: 10, paddingBottom: 10, borderRadius: 10, fontFamily: 'CeraPro-Medium', fontSize: 14, textAlign: 'center' }}>
                            Write a review...
                            </Text>
                    </TouchableOpacity>



                    <View style={{ margin: 16, marginBottom: 10, marginTop: 25, justifyContent: 'space-between', flex: 1, flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'CeraPro-Bold' }}>FAQs</Text>
                    </View>

                    <FlatList
                        data={[
                            {
                                FAQid: "1",
                                Question: "Is this okay to visit this any time of the year?",
                                Answer: "Yes, this place has pleasant weather and can be visited any time of the year.",
                            },
                            {
                                FAQid: "2",
                                Question: "Is this okay to visit this any time of the year?",
                                Answer: "Yes, this place has pleasant weather and can be visited any time of the year.",
                            },
                            {
                                FAQid: "3",
                                Question: "Is this okay to visit this any time of the year?",
                                Answer: "Yes, this place has pleasant weather and can be visited any time of the year.",
                            }
                        ]}
                        style={{ paddingLeft: 16 }}
                        renderItem={({ item }) =>
                            <View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Text style={{ color: '#1f1f1f', fontFamily: 'CeraPro-Bold' }}>{item.FAQid}. </Text>
                                    <Text style={{ color: '#1f1f1f', fontFamily: 'CeraPro-Bold' }}>{item.Question}</Text>
                                </View>
                                <Text style={{ color: '#9a9a9a', fontFamily: 'CeraPro-Regular', marginBottom: 10, marginTop: 5 }}>{item.Answer}</Text>
                            </View>
                        }
                        keyExtractor={item => item.FAQid}
                    />


                    <TouchableOpacity>
                        <Text style={{ borderColor: '#1f1f1f', borderWidth: 1, margin: 16, marginTop: 0, paddingTop: 10, paddingBottom: 10, borderRadius: 10, fontFamily: 'CeraPro-Medium', fontSize: 14, textAlign: 'center' }}>
                            10 more
                            </Text>
                    </TouchableOpacity>


                    <View style={{ height: 100 }} />
                </ScrollView>


                <View
                    ref={img => {
                        this.backgroundImage = img;
                    }}
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-arround',
                        position: 'absolute',
                        bottom: 16,
                        borderRadius: 15,
                        flex: 1, height: 70,
                        width: Dimensions.get('window').width - 80,
                        justifyContent: 'center', alignSelf: 'center',
                        backgroundColor: '#fff', elevation: 5
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("Review", { PlaceId: this.state.PlaceId });
                        }}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon
                            style={{ alignSelf: 'center', }}
                            name="star" size={20} color="#000" />

                        <Text style={{ fontSize: 10, marginTop: 5 }}>Add a review</Text>
                    </TouchableOpacity>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon
                            style={{ alignSelf: 'center', }}
                            onPress={() => {
                                if (this.state.ImageIndex > 0) {
                                    this.setState({
                                        imageIndex: this.state.ImageIndex - 1
                                    })
                                } else {
                                    this.setState({
                                        imageIndex: this.state.Image.length - 1
                                    })
                                }
                            }} name="map-marker" size={20} color="#000" />

                        <Text style={{ fontSize: 10, marginTop: 5 }}>Direction</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("ContributionIndex");
                        }}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon
                            style={{ alignSelf: 'center', }}
                            name="plus" size={20} color="#000" />
                        <Text style={{ fontSize: 10, marginTop: 5 }}>Contribute</Text>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}
var styles = StyleSheet.create({
    container: {
        width: 375,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
});