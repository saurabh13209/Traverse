import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../src/HomeScreen';
import CameraScreen from '../src/CameraScreen';
import SoundScreen from '../src/SoundScreen';
import MapScreen from '../src/MapScreen';
import StreatView from '../src/StreatView';
import LoginScreen from '../src/LoginScreen';

const MainNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Camera: { screen: CameraScreen },
    Sound: { screen: SoundScreen },
    Maps: { screen: MapScreen },
    Streat: { screen: StreatView },
    Login: {screen: LoginScreen}
});

const App = createAppContainer(MainNavigator);

export default App;