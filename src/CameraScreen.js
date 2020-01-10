import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';

export default class CameraScreen extends React.Component {
    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.1, base64: false };
            const data = await this.camera.takePictureAsync(options);
            // console.log(data.uri);
            this.sendData(data.uri);
        }
    }

    sendData = (link) => {
        const form = new FormData();
        form.append('file', {
            uri: link,
            type: 'image/jpg',
            name: 'image.jpg',
        });

        axios({
            url: "http://10.160.28.113:5000/upload",
            data: form,
            method: 'post',
            headers: { 'X-Custom-Header': 'foobar' }
        }).then((res) => {
            this.setState({
                result: res.data
            })
        })
    }


    render() {
        return (
            <View style={{ flex: 10, flexDirection: 'column' }} >
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={{
                        flex: 8,
                        height: '100%'
                    }}
                >
                </RNCamera>

                <View style={{ flex: 2, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => {
                            this.takePicture();
                        }}>
                        <Text style={{ color: 'white' }}>
                            Capture Image
                         </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            const options = {
                                title: 'Select Avatar',
                                customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
                                storageOptions: {
                                    skipBackup: true,
                                    path: 'images',
                                },
                            };

                            ImagePicker.launchImageLibrary({}, (response) => {
                                console.log('Response = ', response);

                                if (response.didCancel) {
                                    console.log('User cancelled image picker');
                                } else if (response.error) {
                                    console.log('ImagePicker Error: ', response.error);
                                } else if (response.customButton) {
                                    console.log('User tapped custom button: ', response.customButton);
                                } else {
                                    console.log(response.uri);
                                    this.sendData(response.uri);
                                }
                            });
                        }}>
                        <Text style={{ color: 'white' }}>
                            Gallery
                         </Text>
                    </TouchableOpacity>
                </View>
            </View >

        )
    }
}