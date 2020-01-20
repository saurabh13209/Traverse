import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ImageBackground, FlatList } from 'react-native';

export default class UpdateScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea tak eum. Stet clt ea rebum. Stet clita magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea tak eum. Stet clt ea rebum. Stet clita"
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
                <View style={{ margin: 20 }}>
                    <Text style={{ fontFamily: 'CeraPro-Bold', fontSize: 22, color: '#1f1f1f' }}>Miramar Beach</Text>
                    <Text style={{ fontFamily: 'CreaPro-Bold', fontSize: 16, color: '#1f1f1f' }}>Panji</Text>
                    <TextInput
                        value={this.state.mainText}
                        onChangeText={(val) => {
                            this.setState({
                                mainText: val
                            })
                        }}
                        multiline={true}
                        style={{ borderBottomColor: '#ccc', borderBottomWidth: 2, color: '#9a9a9a', fontFamily: "CeraPro-Medium", fontSize: 14 }} />
                    <Text style={{ fontFamily: 'CeraPro-Bold', fontSize: 16, marginTop: 20 }}>FAQs</Text>

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
                        style={{ marginTop: 10 }}
                        renderItem={({ item }) =>
                            <View style={{ marginBottom: 20 }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Text style={{ color: '#1f1f1f', fontFamily: 'CeraPro-Bold' }}>{item.FAQid}. </Text>
                                    <Text style={{ color: '#1f1f1f', fontFamily: 'CeraPro-Bold' }}>{item.Question}</Text>
                                </View>
                                <TextInput
                                    multiline={true}
                                    value={item.Answer}
                                    style={{
                                        color: '#9a9a9a', borderBottomWidth: 1, borderBottomColor: '#ccc',
                                        fontFamily: 'CeraPro-Regular',
                                    }} />
                            </View>
                        }
                        keyExtractor={item => item.FAQid}
                    />
                </View>
            </View>
        );
    }
}