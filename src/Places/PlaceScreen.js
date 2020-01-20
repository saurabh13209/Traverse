import React from 'react';
import {
    View, Text, TouchableOpacity, findNodeHandle, Image, StyleSheet, ScrollView,
    ImageBackground, Dimensions, FlatList
} from 'react-native';
var Carousel = require('react-native-carousel');
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PlaceScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: ["https://www.thegoavilla.com/static/img/articles/goa-agonda-beach.jpg", "https://pix10.agoda.net/hotelImages/502/502774/502774_13090614420014896340.jpg"],
            imageIndex: 0,
            viewRef: null
        }
    }

    imageLoaded() {
        this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
    }

    componentDidMount() {
        // this._panel.show();
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

    render() {
        return (
            <View style={{ flex: 10, flexDirection: 'column' }}>
                <ScrollView style={{ flexGrow: 2, flex: 1 }} nestedScrollEnabled={true} >
                    <ImageBackground
                        style={{ width: '100%', height: 250 }}
                        source={{ uri: this.state.image[this.state.imageIndex % this.state.image.length] }}
                    >
                        <View style={{ flex: 1, justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <Icon
                                onPress={() => {
                                    if (this.state.imageIndex > 0) {
                                        this.setState({
                                            imageIndex: this.state.imageIndex - 1
                                        })
                                    } else {
                                        this.setState({
                                            imageIndex: this.state.image.length - 1
                                        })
                                    }
                                }} name="arrow-left" size={20} color="#fff" />
                            <Icon
                                onPress={() => {
                                    console.log("Kickme");
                                    this.setState({
                                        imageIndex: this.state.imageIndex + 1
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
                                Miramara Beach
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
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea tak eum. Stet clt ea rebum. Stet clita magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea tak eum. Stet clt ea rebum. Stet clita
                    </Text>

                    <Text style={{ marginBottom: 10, marginTop: 15, marginLeft: 16, fontFamily: 'CeraPro-Bold', fontSize: 16 }}>
                        Best time to visit
                    </Text>

                    <View style={{
                        flex: 1, flexDirection: 'column', margin: 16, marginTop: 0, padding: 10,
                        borderColor: '#707070', borderRadius: 10, borderWidth: 1
                    }}>
                        <Text style={{ fontFamily: 'CeraPro-Bold', color: "#1f1f1f", fontSize: 14 }}>Summer (June - July)</Text>
                        <Text style={{ color: '#9a9a9a', fontFamily: "CeraPro-Medium" }}>based on 30+ reviews</Text>
                    </View>

                    <Text style={{ marginBottom: 10, marginLeft: 16, marginTop: 15, fontFamily: 'CeraPro-Bold', fontSize: 16 }}>
                        Best time to visit
                    </Text>

                    <View style={{
                        flex: 1, flexDirection: 'column', margin: 16, marginBottom: 0, marginTop: 0, padding: 10,
                        borderColor: '#707070', borderRadius: 10, borderWidth: 1
                    }}>
                        <Text style={{ fontFamily: 'CeraPro-Bold', color: "#1f1f1f", fontSize: 14 }}>Summer (June - July)</Text>
                        <Text style={{ color: '#9a9a9a', fontFamily: "CeraPro-Medium" }}>based on 30+ reviews</Text>
                    </View>

                    <View style={{ margin: 16, marginTop: 25, justifyContent: 'space-between', flex: 1, flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'CeraPro-Bold' }}>Things to do</Text>
                        <Text style={{ fontFamily: 'CeraPro-Bold', fontSize: 13 }}>view all</Text>
                    </View>

                    <FlatList
                        data={[
                            {
                                id: '1',
                                image: "https://www.thegoavilla.com/static/img/articles/goa-agonda-beach.jpg",
                                title: 'First Item',
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
                            <TouchableOpacity style={{ marginRight: 20 }}>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        source={{ uri: item.image }}
                                        style={{ height: 130, width: 165, borderRadius: 10 }}
                                    />
                                    <Text style={{ fontFamily: 'CeraPro-Medium', marginTop: 5 }}>{item.title}</Text>
                                    <Text style={{ fontFamily: 'CeraPro-Regular', color: '#1f1f1f', fontSize: 10 }}>{item.place}</Text>
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
                        data={[
                            {
                                id: '1',
                                image: "https://www.thegoavilla.com/static/img/articles/goa-agonda-beach.jpg",
                                title: 'First Item',
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
                            <TouchableOpacity style={{ marginRight: 20 }}>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Image
                                        source={{ uri: item.image }}
                                        style={{ height: 130, width: 165, borderRadius: 10 }}
                                    />
                                    <Text style={{ fontFamily: 'CeraPro-Medium', marginTop: 5 }}>{item.title}</Text>
                                    <Text style={{ fontFamily: 'CeraPro-Regular', color: '#1f1f1f', fontSize: 10 }}>{item.place}</Text>
                                </View>
                            </TouchableOpacity>
                        }
                        keyExtractor={item => item.id}
                    />



                    <View style={{ margin: 16, marginTop: 20, justifyContent: 'space-between', flex: 1, flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'CeraPro-Bold' }}>Reviews</Text>
                        <Text style={{ fontFamily: 'CeraPro-Bold', fontSize: 13 }}>view all</Text>
                    </View>

                    <FlatList
                        data={[
                            {
                                ReviewId: "1",
                                UserImage: "https://www.thegoavilla.com/static/img/articles/goa-agonda-beach.jpg",
                                Star: '3',
                                Reviews: "Rishabh was found out to be a very tasteful developer and his contribution proved to be very valuable to the company. I would wholeheartedly recommend Rishabh for anyone who is looking for a creative coder.",
                                Image: ["https://www.thegoavilla.com/static/img/articles/goa-agonda-beach.jpg", "https://www.thegoavilla.com/static/img/articles/goa-agonda-beach.jpg", "https://www.thegoavilla.com/static/img/articles/goa-agonda-beach.jpg"],
                                date: "19/11/1999"
                            },
                            {
                                ReviewId: "2",
                                UserImage: "https://www.thegoavilla.com/static/img/articles/goa-agonda-beach.jpg",
                                Star: '3',
                                Reviews: "Rishabh was found out to be a very tasteful developer and his contribution proved to be very valuable to the company. I would wholeheartedly recommend Rishabh for anyone who is looking for a creative coder.",
                                Image: ["https://www.thegoavilla.com/static/img/articles/goa-agonda-beach.jpg", "https://www.thegoavilla.com/static/img/articles/goa-agonda-beach.jpg", "https://www.thegoavilla.com/static/img/articles/goa-agonda-beach.jpg"],
                                date: "19/11/1999"
                            },
                            {
                                ReviewId: "3",
                                UserImage: "https://www.thegoavilla.com/static/img/articles/goa-agonda-beach.jpg",
                                Star: '3',
                                Reviews: "Rishabh was found out to be a very tasteful developer and his contribution proved to be very valuable to the company. I would wholeheartedly recommend Rishabh for anyone who is looking for a creative coder.",
                                Image: ["https://www.thegoavilla.com/static/img/articles/goa-agonda-beach.jpg", "https://www.thegoavilla.com/static/img/articles/goa-agonda-beach.jpg", "https://www.thegoavilla.com/static/img/articles/goa-agonda-beach.jpg"],
                                date: "19/11/1999"
                            }
                        ]}
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
                                            27
                                        </Text>
                                        <Icon style={{ marginRight: 10 }} name="star" size={10} color="#000" />
                                    </View>
                                </View>
                                <View style={{ flex: 4, flexDirection: 'column' }}>
                                    <Text style={{ color: '#121212', fontSize: 14, fontFamily: 'CeraPro-Regular', marginRight: 16 }}>
                                        {item.Reviews}
                                    </Text>

                                    <Text style={{ color: '#9a9d9c', fontFamily: 'CeraPro-Regular', fontSize: 14, marginBottom: 10 }}>{item.date}</Text>

                                </View>
                            </View>
                        }
                        keyExtractor={item => item.id}
                    />

                    <TouchableOpacity>
                        <Text style={{ borderColor: '#1f1f1f', borderWidth: 1, margin: 16, paddingTop: 10, paddingBottom: 10, borderRadius: 10, fontFamily: 'CeraPro-Medium', fontSize: 14, textAlign: 'center' }}>
                            view 4 more ratings
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
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
                            Write a review...
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
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon
                            style={{ alignSelf: 'center', }}
                            onPress={() => {
                                if (this.state.imageIndex > 0) {
                                    this.setState({
                                        imageIndex: this.state.imageIndex - 1
                                    })
                                } else {
                                    this.setState({
                                        imageIndex: this.state.image.length - 1
                                    })
                                }
                            }} name="star" size={20} color="#000" />

                        <Text style={{ fontSize: 10, marginTop: 5 }}>Add a review</Text>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon
                            style={{ alignSelf: 'center', }}
                            onPress={() => {
                                if (this.state.imageIndex > 0) {
                                    this.setState({
                                        imageIndex: this.state.imageIndex - 1
                                    })
                                } else {
                                    this.setState({
                                        imageIndex: this.state.image.length - 1
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