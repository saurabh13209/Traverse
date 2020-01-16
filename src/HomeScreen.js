import React, { Component } from 'react';
import { Alert, View, Text, TouchableOpacity, } from 'react-native';
import firebase from 'react-native-firebase';
import DeviceInfo from 'react-native-device-info';
import { observer } from 'mobx-react';
import HomeStore from '../stores/HomeStore'

@observer
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.camera = null;
  }

  componentDidMount() {
    this.fetchToken();

  }


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
