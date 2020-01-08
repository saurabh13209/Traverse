import React from 'react';
import { Alert, View, Text, TouchableOpacity, } from 'react-native';
import firebase from 'react-native-firebase';
import DeviceInfo from 'react-native-device-info';

export default class App extends React.Component {

  componentDidMount() {
    this.fetchToken();

  }


  fetchToken = async () => {
    const fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
      console.log(fcmToken);
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => {
          DeviceInfo.getAndroidId().then((val)=>{
            console.log(val)
          })
        }}>
          <Text>
            Kickme
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
