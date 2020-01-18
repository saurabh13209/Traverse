import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignInScreen from '../src/auth/SignInScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../src/Home/HomeScreen';
import DiscoverScreen from '../src/Home/DiscoverScreen';
import ScanScreen from '../src/Home/ScanScreen';
import NeedSceeen from '../src/Home/NeedScreen';
import ProfileScreen from '../src/Home/ProfileScreen';
import LoginForm from '../src/auth/LoginForm';
import InterestScreen from '../src/auth/InterestScreen';

const LoginNavigator = createStackNavigator({
  index: {
    screen: SignInScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  form: {
    screen: LoginForm,
    navigationOptions: {
      headerShown: false
    }
  },
  Interest:{
    screen: InterestScreen,
    navigationOptions: {
      headerShown: false
    }
  }
})

const HomeNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Inbox"
    })
  },
  Discover: { screen: DiscoverScreen },
  Scan: { screen: ScanScreen },
  Needs: { screen: NeedSceeen },
  Profile: { screen: ProfileScreen }
}, {
  initialRouteName: "Home"
});


export default createAppContainer(createSwitchNavigator({
  LoginScreen: LoginNavigator,
  HomeNavi: HomeNavigator
}));
