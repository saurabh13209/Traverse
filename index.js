import { AppRegistry } from 'react-native';
import App from './Navigator/LoginNavigator';
// import App from './src/HomeScreen';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
