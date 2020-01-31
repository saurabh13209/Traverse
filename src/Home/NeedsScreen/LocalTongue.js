import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, ScrollView, TextInput, ImageBackground, FlatList, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Tts from 'react-native-tts';
import LocalizedStrings from 'react-native-localization';

import { observer } from 'mobx-react';

var Sound = require('react-native-sound');
Sound.setCategory('Playback');
let sounds = new LocalizedStrings({
    en: {
        bus: "Where is the bus stop?",
        chennai: "I come from Chennai",
        day: "What is the charge per day?",
        english: "Can you speak English?",
        goa: "I love Goa.",
        goes: "Which bus goes to Madagao?",
        hungry: "I am hungry",
        you: "I love you",
        thirsty: "I feel thirsty",
        taxi: "Can you get me a taxi?",
        sick: "I feel sick",
        room: "I want a room for a day",
        name: "My name is Vikas",
        spicy: "I do not want it spicy",

    },
    ru: {
        bus: "Где автобусная остановка?",
        chennai: "Я родом из Ченнаи.",
        day: "Сколько будет стоить за день?",
        english: "Вы говорите по-английски?",
        goa: "Я люблю Гоа",
        goes: "Какой автобус идет в Мадагао?",
        hungry: "Я голоден.",
        you: "Я люблю тебя.",
        thirsty: "я хочу пить",
        taxi: "Ты можешь взять мне такси?",
        sick: "Я болею.",
        room: "Меня зовут викас",
        name: "Меня зовут викас",
        spicy: "Я не хочу, чтобы это острое",
    },
    es: {
        bus: "¿Dónde esta la parada de autobus?",
        chennai: "Yo vengo de Chennai.",
        day: "¿Cuál es el precio por día?",
        english: "¿Puedes hablar ingles?",
        goa: "Amo a goa",
        goes: "¿Qué autobús va a Madagao?",
        hungry: "Estoy hambriento.",
        you: "Te quiero.",
        thirsty: "Tengo sed",
        taxi: "Você pode me pegar um táxi?",
        sick: "Me siento enfermo",
        room: "¿Tiene una habitación o casa que podría dar en alquiler?",
        name: "Mi nombre es Vikas",
        spicy: "No lo quiero picante",
    },

    pt: {
        bus: "Onde é o ponto de ônibus?",
        chennai: "Eu venho de Chennai.",
        day: "Qual é o custo por dia?",
        english: "Você pode falar em Inglês?",
        goa: "Eu amo goa",
        goes: "Qual ônibus vai para Madagao?",
        hungry: "Eu estou com fome.",
        you: "Eu te amo.",
        thirsty: "Estou com sede",
        taxi: "Você pode me pegar um táxi?",
        sick: "Estou doente",
        room: "Você tem um quarto ou casa que você poderia dar de aluguel?",
        name: "Meu nome é Vikas",
        spicy: "Eu não quero picant",
    },

    de: {
        bus: "Wo ist die Bushaltestelle?",
        chennai: "Ich komme aus Chennai.",
        day: "Was ist die Gebühr pro Tag?",
        english: "Sprechen Sie Englisch?",
        goa: "Ich liebe Goa",
        goes: "Welcher Bus fährt nach Madagao?",
        hungry: "Ich habe Hunger.",
        you: "Ich liebe dich",
        thirsty: "Ich habe Durst",
        taxi: "Können Sie mir ein Taxi bringen?",
        sick: "Mir ist schlecht",
        room: "Ich möchte ein Zimmer für einen Tag",
        name: "Ich heiße Vikas",
        spicy: "Ich will es nicht scharf",
    },

    hi: {
        bus: "बस स्टॉप कहा है?",
        chennai: "मैं चेन्नई से आता हूं।",
        day: "प्रतिदिन कितना किराया है?",
        english: "क्या आप अंग्रेजी बोल सकते हैं?",
        goa: "मुझे गोवा से प्यार है।",
        goes: "कौन सी बस मैदागाओ जाती है?",
        hungry: "मैं भूखा हूँ।",
        you: "मैं तुमसे प्यार करता हूँ।",
        thirsty: "मैं प्यास लग रही है",
        taxi: "क्या आप मुझे टैक्सी दिलवा सकते हैं?",
        sick: "में बिमार हूँ।",
        room: "मुझे एक दिन के लिए एक कमरा चाहिए।",
        name: "मेरा नाम विकास हे।",
        spicy: "मुझे यह मसालेदार नहीं चाहिए।",
    }
});


export default class LocalTongue extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lan: ""
        }
    }

    playSound = (link) => {
        var whoosh = new Sound(link, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }

            console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());

            whoosh.play((success) => {
                if (success) {
                    console.log('successfully finished playing');
                } else {
                    console.log('playback failed due to audio decoding errors');
                }
            });
        });
    }

    render() {
        return (
            <View>
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
                            Local Tongue
                        </Text>

                        <Text style={{ marginLeft: 20, marginTop: 5, fontFamily: 'CeraPro-Medium', fontSize: 16, color: "white" }}>
                            Help us improve & make knowledge {"\n"}accessible to everyone.
                    </Text>
                    </View>
                </ImageBackground>

                <View style={{ height: 50, marginTop: 20, margin: 10, width: Dimensions.get('window').width - 20, borderColor: '#1e5aff', borderWidth: 1, borderRadius: 20 }}>
                    <Picker
                        selectedValue={this.state.lan}
                        style={{ height: 50, width: Dimensions.get('window').width - 20 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({
                                lan: itemValue
                            })
                        }>
                        <Picker.Item label="English" value="en" />
                        <Picker.Item label="Russian" value="ru" />
                        <Picker.Item label="Portugese" value="pt" />
                        <Picker.Item label="Spanish" value="es" />
                        <Picker.Item label="German" value="de" />
                        <Picker.Item label="French" value="fr" />
                        <Picker.Item label="Hindi" value="hi" />
                    </Picker>
                </View>


                <ScrollView style={{flexGrow:2}}>

                    <TouchableOpacity style={{
                        borderColor: '#1e5aff',
                        marginTop: 20,
                        borderWidth: 1, borderRadius: 20, padding: 10,
                        marginLeft: 10, marginRight: 10
                    }}
                        onPress={() => {
                            this.playSound("bus.mp3");
                        }}
                    >
                        <Text>
                            {sounds.bus}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        borderColor: '#1e5aff',
                        marginTop: 10,
                        borderWidth: 1, borderRadius: 20, padding: 10,
                        marginLeft: 10, marginRight: 10
                    }}
                        onPress={() => {
                            this.playSound("chennai.mp3");
                        }}
                    >
                        <Text>
                            {sounds.chennai}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        borderColor: '#1e5aff',
                        marginTop: 10,
                        borderWidth: 1, borderRadius: 20, padding: 10,
                        marginLeft: 10, marginRight: 10
                    }}
                        onPress={() => {
                            this.playSound("day.mp3");
                        }}
                    >
                        <Text>
                            {sounds.day}
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{
                        borderColor: '#1e5aff',
                        marginTop: 10,
                        borderWidth: 1, borderRadius: 20, padding: 10,
                        marginLeft: 10, marginRight: 10
                    }}
                        onPress={() => {
                            this.playSound("english.mp3");
                        }}
                    >
                        <Text>
                            {sounds.english}
                        </Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={{
                        borderColor: '#1e5aff',
                        marginTop: 10,
                        borderWidth: 1, borderRadius: 20, padding: 10,
                        marginLeft: 10, marginRight: 10
                    }}
                        onPress={() => {
                            this.playSound("goa.mp3");
                        }}
                    >
                        <Text>
                            {sounds.goa}
                        </Text>
                    </TouchableOpacity>




                    <TouchableOpacity style={{
                        borderColor: '#1e5aff',
                        marginTop: 10,
                        borderWidth: 1, borderRadius: 20, padding: 10,
                        marginLeft: 10, marginRight: 10
                    }}
                        onPress={() => {
                            this.playSound("goes.mp3");
                        }}
                    >
                        <Text>
                            {sounds.goes}
                        </Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={{
                        borderColor: '#1e5aff',
                        marginTop: 10,
                        borderWidth: 1, borderRadius: 20, padding: 10,
                        marginLeft: 10, marginRight: 10
                    }}
                        onPress={() => {
                            this.playSound("hungry.mp3");
                        }}
                    >
                        <Text>
                            {sounds.hungry}
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{
                        borderColor: '#1e5aff',
                        marginTop: 10,
                        borderWidth: 1, borderRadius: 20, padding: 10,
                        marginLeft: 10, marginRight: 10
                    }}
                        onPress={() => {
                            this.playSound("you.mp3");
                        }}
                    >
                        <Text>
                            {sounds.you}
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{
                        borderColor: '#1e5aff',
                        marginTop: 10,
                        borderWidth: 1, borderRadius: 20, padding: 10,
                        marginLeft: 10, marginRight: 10
                    }}
                        onPress={() => {
                            this.playSound("thirsty.mp3");
                        }}
                    >
                        <Text>
                            {sounds.thirsty}
                        </Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={{
                        borderColor: '#1e5aff',
                        marginTop: 10,
                        borderWidth: 1, borderRadius: 20, padding: 10,
                        marginLeft: 10, marginRight: 10
                    }}
                        onPress={() => {
                            this.playSound("taxi.mp3");
                        }}
                    >
                        <Text>
                            {sounds.taxi}
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{
                        borderColor: '#1e5aff',
                        marginTop: 10,
                        borderWidth: 1, borderRadius: 20, padding: 10,
                        marginLeft: 10, marginRight: 10
                    }}
                        onPress={() => {
                            this.playSound("sick.mp3");
                        }}
                    >
                        <Text>
                            {sounds.sick}
                        </Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={{
                        borderColor: '#1e5aff',
                        marginTop: 10,
                        borderWidth: 1, borderRadius: 20, padding: 10,
                        marginLeft: 10, marginRight: 10
                    }}
                        onPress={() => {
                            this.playSound("room.mp3");
                        }}
                    >
                        <Text>
                            {sounds.room}
                        </Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={{
                        borderColor: '#1e5aff',
                        marginTop: 10,
                        borderWidth: 1, borderRadius: 20, padding: 10,
                        marginLeft: 10, marginRight: 10
                    }}
                        onPress={() => {
                            this.playSound("name.mp3");
                        }}
                    >
                        <Text>
                            {sounds.name}
                        </Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={{
                        borderColor: '#1e5aff',
                        marginTop: 10,
                        borderWidth: 1, borderRadius: 20, padding: 10,
                        marginLeft: 10, marginRight: 10
                    }}
                        onPress={() => {
                            this.playSound("spicy.mp3");
                        }}
                    >
                        <Text>
                            {sounds.spicy}
                        </Text>
                    </TouchableOpacity>



                </ScrollView>





            </View>
        );
    }
}