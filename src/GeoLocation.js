import Geolocation from 'react-native-geolocation-service';
import { Component } from 'react-native';

export default class GeoLocation extends Component {
    componentDidMount() {
        checkPermission("android.permission.ACCESS_FINE_LOCATION").then((result) => {
            console.log("Already Granted!");
            console.log(result);
        }, (result) => {
            console.log("Not Granted!");
            console.log(result);
        });
    }