import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { RNCamera } from 'react-native-camera';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import { withNavigationFocus } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';



class ScanScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cameraType: RNCamera.Constants.Type.back,
            isLoading: false
        }
    }

    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.1, base64: false, pauseAfterCapture: true };
            const data = await this.camera.takePictureAsync(options);
            // console.log(data.uri);
            // this.sendData(data.uri);
            setTimeout(() => {
                this.setState({
                    isLoading: false
                }, () => {
                    this._panel.show();
                    this.camera.resumePreview();
                })
            }, 2000)
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

    isLoadingView() {
        if (this.state.isLoading) {
            return <ActivityIndicator size="large" />
        } else {
            return null;
        }
    }

    renderCamera() {
        const isFocused = this.props.navigation.isFocused();
        if (isFocused) {
            return (
                <RNCamera
                    ratio="4:3"
                    onMountError={(err) => {
                        console.log(err);
                    }}
                    ref={ref => {
                        this.camera = ref;
                    }}
                    color="white"
                    backgroundColor="white"
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1,
                        height: '100%'
                    }}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    captureAudio={false}
                    type={this.state.cameraType}
                >
                    {this.isLoadingView()}
                </RNCamera>
            );
        } else {
            return (<View style={{
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 10,
                height: '100%'
            }} />);
        }
    }

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style={{ flex: 10, width: 100, flexDirection: 'column' }} >
                    <View style={{
                        flexDirection: 'row',
                        flex: 10,
                        backgroundColor: 'white',
                    }}>
                        {this.renderCamera()}
                    </View>
                    <View style={{
                        flex: 2,
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon
                                onPress={() => {
                                    this.setState({
                                        cameraType: this.state.cameraType == RNCamera.Constants.Type.front ? RNCamera.Constants.Type.back : RNCamera.Constants.Type.front
                                    })
                                }}
                                style={{ position: 'absolute', left: 180 }} name="repeat" size={45} color="#000" />
                            <Icon
                                onPress={() => {
                                    this.setState({
                                        isLoading: true
                                    }, () => {
                                        this.takePicture();
                                    })
                                }}
                                name="camera"
                                size={45}
                                color="#000" />
                            <Icon onPress={() => {
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
                            }} style={{ position: 'absolute', left: -180 }} name="photo" size={45} color="#000" />
                        </View>
                    </View>
                </View >
                <SlidingUpPanel
                    ref={c => this._panel = c}>
                    <View style={{
                        flex: 1,
                        backgroundColor: '#fff',
                    }}>
                        <Image style={{ height: 400, resizeMode: "stretch" }} source={require('../../images/beach.jpeg')} />
                        <Text
                            style={{ marginLeft: 20, marginTop: 20, fontFamily: 'CeraPro-Bold', fontSize: 30 }}
                        >Name Place</Text>
                        <Text style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </Text>
                        <Text
                            style={{ marginLeft: 20, marginTop: 30, fontFamily: 'CeraPro-Bold', fontSize: 30 }}
                        >About</Text>
                        <Text style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </Text>

                    </View>
                </SlidingUpPanel>

            </View>
        );
    }
}

export default withNavigationFocus(ScanScreen);
