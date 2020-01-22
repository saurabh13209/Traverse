import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Keyboard, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import qs from 'qs';
import HomeStore from '../../../stores/HomeStore'
import { observer } from 'mobx-react';

@observer
export default class ChatBot extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    requestBody = {
        id: "Whats the best time to visit Goa"
    }

    config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }


    request = () => {
        console.log("Kicke")
        axios.post(
            "https://apollo6.glitch.me/",
            qs.stringify(this.requestBody),
            this.config
        ).then((res) => {
            HomeStore.chatBot = [
                ...HomeStore.chatBot,
                {
                    id: HomeStore.chatBot.length,
                    Text: res.data.fulfillmentText,
                    sent: false
                }
            ]
        }).catch((err) => console.log(err))
    }

    isSent = ({ item }) => {
        if (item.sent) {
            return (
                <View style={{
                    padding: 10, backgroundColor: '#f5f5f5',
                    borderRadius: 10, marginTop: 10
                }}>
                    <Text style={{ fontSize: 16, fontFamily: 'CeraPro-Regular', color: 'black' }}>You : {item.Text}</Text>
                </View>);
        } else {
            return (
                <View style={{
                    padding: 10, backgroundColor: '#f5f5f5',
                    borderRadius: 10, marginTop: 10
                }}>
                    <Text style={{ fontSize: 16, fontFamily: 'CeraPro-Regular', color: 'black' }}>Apollo : {item.Text}</Text>
                </View>)
        }
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}>
                <FlatList
                    data={HomeStore.chatBot}
                    renderItem={({ item }) => <this.isSent item={item} />}
                    keyExtractor={item => item.id} />
                <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, marginBottom: 10, marginLeft: 10 }}>
                    <TextInput
                        onChangeText={(res) => {
                            this.setState({
                                text: res
                            })
                        }}
                        value={this.state.text}
                        style={{
                            flex: 8, padding: 10,
                            borderWidth: 1, borderRadius: 20, borderColor: '#1f1f1'
                        }} />
                    <Icon
                        style={{ flex: 1, paddingLeft: 10, top: 10 }}
                        onPress={() => {
                            this.setState({
                                text: ""
                            })
                            HomeStore.chatBot = [
                                ...HomeStore.chatBot,
                                {
                                    id: HomeStore.chatBot.length,
                                    Text: this.state.text,
                                    sent: true
                                }
                            ]
                            this.request();
                        }} name="send" size={30} color="#1e5aff" />

                </View>
            </View>

        );
    }
}