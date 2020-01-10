import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Tts from 'react-native-tts';
import LocalizedStrings from 'react-native-localization';

var Sound = require('react-native-sound');
Sound.setCategory('Playback');


let strings = new LocalizedStrings({
    "en-US": {
        how: "How do you want your egg today?",
        boiledEgg: "Boiled egg",
        softBoiledEgg: "Soft-boiled egg",
        choice: "How to choose the egg"
    },
    en: {
        how: "How do you want your egg today?",
        boiledEgg: "Boiled egg",
        softBoiledEgg: "Soft-boiled egg",
        choice: "How to choose the egg"
    },
    it: {
        how: "Come vuoi il tuo uovo oggi?",
        boiledEgg: "Uovo sodo",
        softBoiledEgg: "Uovo alla coque",
        choice: "Come scegliere l'uovo"
    }
});

export default class SoundScreen extends React.Component {


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
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>

                <Text style={{ fontSize: 20, marginBottom: 10 }}>
                    {strings.how}
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        this.playSound('bus.mp3');
                    }}>
                    <Text>
                        Play Recorder Sound
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        Tts.setDucking(true);
                        Tts.setDefaultPitch(1.2);
                        Tts.setDefaultRate(0.6);
                        Tts.getInitStatus().then(() => {
                            Tts.speak('Hello, world!');
                        });
                    }}
                >
                    <Text>
                        Text to Speech
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}