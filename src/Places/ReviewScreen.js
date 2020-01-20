import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ImageBackground, FlatList, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ReviewScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stars: 0,
            month: 1,

        }
    }

    monthVisit = () => {
        if (this.state.month == 1) {
            return (
                <View style={{ height: 50, width: 160, borderColor: '#1e5aff', borderWidth: 1, borderRadius: 20 }}>
                    <Picker
                        selectedValue={this.state.language}
                        style={{ height: 50, width: 160 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ language: itemValue })
                        }>
                        <Picker.Item label="Select month" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
            );
        } else {
            return (
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ height: 50, width: 160, borderColor: '#1e5aff', borderWidth: 1, borderRadius: 20 }}>
                        <Picker
                            selectedValue={this.state.language}
                            style={{ height: 50, width: 160 }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ language: itemValue })
                            }>
                            <Picker.Item label="Select month" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </View>
                    <View style={{ height: 50, width: 160, borderColor: '#1e5aff', borderWidth: 1, borderRadius: 20 }}>
                        <Picker
                            selectedValue={this.state.language}
                            style={{ height: 50, width: 160 }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ language: itemValue })
                            }>
                            <Picker.Item label="Select month" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </View>
                </View>
            );

        }
    }


    render() {
        return (
            <View>
                <ImageBackground
                    style={{ width: '100%', height: 135, elevation: 5 }}
                    source={require("../../images/contribute_bg.png")}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <TouchableOpacity
                            style={{ height: 24, width: 50 }}
                            onPress={() => {
                                this.props.navigation.pop();
                            }}
                        >
                            <Image
                                source={require("../../images/left_icon.png")}
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
                <Text style={{ marginBottom: 10, marginTop: 15, marginLeft: 16, fontFamily: 'CeraPro-Bold', fontSize: 16 }}>
                    Rating
                    </Text>

                <View style={{ paddingLeft: 20, flexDirection: 'row' }}>
                    <Icon
                        onPress={() => {
                            this.setState({
                                stars: 1
                            })
                        }}
                        style={{ marginRight: 20 }}
                        name={this.state.stars % 5 >= 1 ? "star" : "star-o"}
                        size={30} color="#1e5aff" />
                    <Icon
                        onPress={() => {
                            this.setState({
                                stars: 3
                            })
                        }}
                        style={{ marginRight: 20 }}
                        name={this.state.stars % 5 >= 2 ? "star" : "star-o"}
                        size={30} color="#1e5aff" />
                    <Icon
                        onPress={() => {
                            this.setState({
                                stars: 4
                            })
                        }}
                        style={{ marginRight: 20 }}
                        name={this.state.stars % 5 >= 3 ? "star" : "star-o"} size={30} color="#1e5aff" />
                    <Icon
                        onPress={() => {
                            this.setState({
                                stars: 5
                            })
                        }}
                        style={{ marginRight: 20 }}
                        name={this.state.stars % 5 >= 4 ? "star" : "star-o"} size={30} color="#1e5aff" />
                    <Icon
                        onPress={() => {
                            this.setState({
                                stars: 5
                            })
                        }}
                        style={{ marginRight: 20 }}
                        name={this.state.stars % 5 >= 5 ? "star" : "star-o"} size={30} color="#1e5aff" />
                </View>

                <Text style={{ marginBottom: 10, marginTop: 25, marginLeft: 16, fontFamily: 'CeraPro-Bold', fontSize: 16 }}>
                    Comment
                </Text>

                <TextInput
                    style={{ borderColor: '#ccc', borderWidth: 1, borderRadius: 20, marginLeft: 20, marginRight: 20 }}
                    multiline={true}
                    numberOfLines={5}
                />

                <Text style={{ marginBottom: 10, marginTop: 25, marginLeft: 16, fontFamily: 'CeraPro-Bold', fontSize: 16 }}>
                    Best time to visit
                </Text>

                <View
                    style={{
                        flexDirection: 'row',
                        padding: 10, marginLeft: 20, marginRight: 20, borderColor: '#ccc',
                        borderWidth: 1, borderRadius: 20
                    }}>

                    <this.monthVisit />

                    <Icon
                        onPress={() => {
                            this.setState({
                                month: 2
                            })
                        }}
                        style={{ marginRight: 20, alignSelf: 'center', marginLeft: 10 }}
                        name="plus" size={25} color="#1e5aff" />

                </View>



                <Text style={{ marginBottom: 10, marginTop: 25, marginLeft: 16, fontFamily: 'CeraPro-Bold', fontSize: 16 }}>
                    Best time to visit
                </Text>
                <View style={{ height: 50, width: 360, marginLeft: 20, borderColor: '#1e5aff', borderWidth: 1, borderRadius: 20 }}>
                    <Picker
                        selectedValue={this.state.language}
                        style={{ height: 50, width: 360 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ language: itemValue })
                        }>
                        <Picker.Item label="select a Amount" value="0" />
                        <Picker.Item label="₹1000 to ₹5000" value="₹1000 to ₹5000" />
                        <Picker.Item label="₹5000 to ₹10000" value="₹5000 to ₹10000" />
                        <Picker.Item label="₹10000 to ₹15000" value="₹10000 to ₹15000" />
                        <Picker.Item label="₹15000 to ₹20000" value="₹15000 to ₹20000" />
                    </Picker>
                </View>

                <Text style={{ marginBottom: 10, marginTop: 25, marginLeft: 16, fontFamily: 'CeraPro-Bold', fontSize: 16 }}>
                    Add Photos (optional)
                </Text>

                <View style={{
                    borderColor: '#1e5aff', borderWidth: 1, 
                    paddingTop: 5, paddingBottom: 5,
                    borderRadius: 5, marginLeft: 20, marginRight: 20
                }}>
                    <Icon
                        onPress={() => {
                            this.setState({
                                month: 2
                            })
                        }}
                        style={{ marginRight: 20, alignSelf: 'center', marginLeft: 10 }}
                        name="plus" size={25} color="#1e5aff" />
                </View>

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