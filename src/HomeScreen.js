import React, { Component } from 'react';
import { Alert, View, Text, TouchableOpacity, } from 'react-native';
import firebase from 'react-native-firebase';
import DeviceInfo from 'react-native-device-info';
import { observer } from 'mobx-react';
import HomeStore from '../stores/HomeStore'
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

@observer
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.camera = null;
  }

  componentDidMount() {
    this.fetchToken();
    GoogleSignin.configure({
      webClientId: '715001967796-in981pie4ebed0j6gqbbr6ao1fsqv19e.apps.googleusercontent.com',
      offlineAccess: false
    });
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  fetchToken = async () => {
    const fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
      DeviceInfo.getAndroidId().then((device) => {
        //TODO: if data not to be updated, check user and use update
        //TODO: handle with care
        firebase.database().ref("/Users/").once("value", (val) => {
          console.log(val);
          firebase.database().ref("/Users/" + device).set({
            "fcm": fcmToken
          })
        })
      })
      const enabled = await firebase.messaging().hasPermission();
      if (enabled) {
        console.log("Granted");
      } else {
        try {
          await firebase.messaging().requestPermission();
        } catch (error) {
        }
      }
    } else {

    }

  }

  createNotification = async () => {
    this.removeNotificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification) => {
    });
    this.removeNotificationListener = firebase.notifications().onNotification((notification) => {
      this.notificationOpen();
    });
  }

  notificationOpen = async () => {
    const x = await firebase.notifications().getInitialNotification();
    console.log(x);
    if (x.notification._data.name != undefined) {
      Alert.alert(x.notification._data.name)
      firebase.notifications().cancelAllNotifications();
    }
  }

  render() {
    return (
      <View style={{ flex: 10, justifyContent: "center", alignItems: 'center' }} >
        <TouchableOpacity
          onPress={() => {
            this.signIn();
          }}
        >
          <Text>
            Sign In
          </Text>
        </TouchableOpacity>
        <Text>
          {HomeStore.refresh}
        </Text>
        <TouchableOpacity
          onPress={() => {
            HomeStore.refresh = "Text Changed"
            this.props.navigation.navigate("Camera");
          }}
        >
          <Text>
            Camera
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Sound");
          }}
        >
          <Text>
            Sound
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Maps");
          }}
        >
          <Text>
            Maps
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Streat");
          }}
        >
          <Text>
            360 Model
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Login");
          }}
        >
          <Text>
            Login Screen
          </Text>
        </TouchableOpacity>
      </View >
    );
  }


}
