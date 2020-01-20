import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, ImageBackground, Dimensions } from 'react-native';
var Carousel = require('react-native-carousel');
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigationFocus } from "react-navigation";
import SlidingUpPanel from 'rn-sliding-up-panel';


export default class PlaceScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: ["https://www.thegoavilla.com/static/img/articles/goa-agonda-beach.jpg", "https://pix10.agoda.net/hotelImages/502/502774/502774_13090614420014896340.jpg"],
            imageIndex: 0
        }
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
                <ScrollView style={{ flexGrow: 2, flex: 1 }} >
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
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea tak eum. Stet clt ea rebum. Stet clita
                    </Text>




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
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea tak eum. Stet clt ea rebum. Stet clita
                    </Text>



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
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea tak eum. Stet clt ea rebum. Stet clita
                    </Text>
                </ScrollView>

                <View style={{
                    position: 'absolute',
                    bottom:16,
                    opacity:0.1,
                    borderRadius:15,
                    flex: 1, height: 70,
                    width: Dimensions.get('window').width - 80,
                     justifyContent: 'center', alignSelf:'center',
                    backgroundColor: 'black'
                }}>
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