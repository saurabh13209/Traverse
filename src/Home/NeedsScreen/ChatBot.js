import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Keyboard, FlatList } from 'react-native';


@observer
export default class ChatBot extends React.Component {

    constructor(props) {
        super(props);
        chatStore.chatData = []


        this.state = {
            keyboardOffset: 0,
            listSize: 50,
            id: "",
            text: "",
        }
        this._keyboardDidShow = this._keyboardDidShow.bind(this)
        this._keyboardDidHide = this._keyboardDidHide.bind(this)
    }


    // _retrieveData = async (val) => {
    //     try {
    //         const value = await AsyncStorage.getItem(val);
    //         if (value !== null) {
    //             return value
    //         }
    //     } catch (error) {
    //     }
    // };


    _keyboardDidShow(event) {
        this.setState({
            listSize: -150,
            keyboardOffset: event.endCoordinates.height
        })
    }

    _keyboardDidHide() {
        this.setState({
            listSize: 50,
            keyboardOffset: 0,
        })
    }

    componentDidMount() {
        this._retrieveData(Key.id).then((val) => {
            this.setState({
                id: val
            })
        })

        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this._keyboardDidShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this._keyboardDidHide,
        );
    }

    componentWillMount() {
        firebase.database().ref("Chats/" + this.props.navigation.state.params.id + "/Conv/")
            .orderByChild("time")
            .startAt(1572360000000)
            .limitToLast(20)
            .on('value', ((snap) => {
                if (snap.val()) {
                    chatStore.chatData = [];
                    const arr = Object.keys(snap.val());
                    for (var i = 0; i < arr.length; i++) {
                        chatStore.chatData = [
                            ...chatStore.chatData,
                            Object(snap.val()[arr[i]])
                        ]
                    }
                }

            }))
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    setUi(item) {
        if (item.from == this.state.id) {
            return (
                <SendMessage data={item} />
            );
        } else {
            return (
                <RecMessage data={item} />
            );
        }
    }


    checkNoti = (i, j) => {
        if (getInfo(chatStore.OrgsList[i]["member"][j])["pos"] === "head") {
            firebase.database().ref("Head/" + (chatStore.OrgsList[i]["member"][j]).toUpperCase() + "/online/")
                .once("value", (snap) => {
                    if (snap.val() == false) {
                        sendNotification({
                            ref: "Head/" + (chatStore.OrgsList[i]["member"][j]).toUpperCase() + "/expo",
                            title: this.state.id,
                            body: this.state.text,
                            data: {},
                        });
                    }
                }).then(() => {
                    if (j < chatStore.OrgsList[i]["member"].length) {
                        this.checkNoti(i, j + 1);
                    }
                })
        } else {
            firebase.database().ref("member/" + getInfo(chatStore.OrgsList[i]["member"][j])["domain"] + "/" + (chatStore.OrgsList[i]["member"][j]).toUpperCase() + "/online/").once("value", (snap) => {
                if (snap.val() == false) {
                    sendNotification({
                        ref: "member/" + getInfo(chatStore.OrgsList[i]["member"][j])["domain"] + "/" + (chatStore.OrgsList[i]["member"][j]).toUpperCase() + "/expo",
                        title: this.state.id,
                        body: this.state.text,
                        data: {},
                    }).then(() => {
                        this.props.navigation.navigate('Login');
                    });
                }
            })
        }
    }


    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column' }} behavior="padding" enabled>
                <View style={{ backgroundColor: '#111', paddingBottom: this.state.keyboardOffset + this.state.listSize, flex: 1 }}>
                    <FlatList
                        ref="flatList"
                        onContentSizeChange={() => this.refs.flatList.scrollToEnd()}
                        data={chatStore.chatData}
                        renderItem={({ item }) => this.setUi(item)}
                        keyExtractor={item => item.time}
                    />
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    position: 'absolute',
                    width: '100%',
                    elevation: 5,
                    flex: 1,
                    flexDirection: 'row',
                    bottom: this.state.keyboardOffset, elevation: 5
                }}>
                    <TextInput
                        ref={input => { this.textInput = input }}
                        multiline={true}
                        placeholder="Text"
                        onChangeText={(te) => {
                            this.setState({
                                text: te
                            })
                        }}
                        style={{
                            marginTop: 10,
                            flex: 10,
                            marginLeft: 10,
                            marginRight: 10,
                            fontSize: 20,
                            marginBottom: 10,
                            borderBottomColor: "#454545", borderBottomWidth: 1
                        }} />

                    <Ionicons
                        onPress={() => {
                            firebase.database().ref("Chats/" + this.props.navigation.state.params.id + "/Conv/")
                                .push({
                                    from: this.state.id,
                                    text: this.state.text,
                                    time: Math.floor(Date.now())
                                }, (() => {
                                    this.textInput.clear()
                                    for (var i = 0; i < chatStore.OrgsList.length; i++) {
                                        if (chatStore.OrgsList[i]["id"] == this.props.navigation.state.params.id) {
                                            break;
                                        }
                                    }

                                    this.checkNoti(i, 0)


                                }))

                        }}
                        style={{ flex: 1, marginLeft: 10 }}
                        type="ionicon"
                        color={'#2089dc'}
                        size={28}
                        name={Platform.OS === "ios" ? "ios-send" : "ios-send"}
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}