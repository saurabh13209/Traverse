import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignInScreen from '../src/auth/SignInScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';


import HomeScreen from '../src/Home/HomeScreen';
import DiscoverScreen from '../src/Home/DiscoverScreen';
import ScanScreen from '../src/Home/ScanScreen';
import NeedSceeen from '../src/Home/NeedScreen';
import ProfileScreen from '../src/Home/ProfileScreen';
import LoginForm from '../src/auth/LoginForm';
import InterestScreen from '../src/auth/InterestScreen';
import PlaceScreen from '../src/Places/PlaceScreen';
import ContributionIndexScreen from '../src/Places/Contribute/ContributionIndex'

const PlaceNavigator = createStackNavigator({
  HomeInner: {
    screen: HomeScreen,
  },
  PlaceInner: {
    screen: PlaceScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  ContributionIndex: {
    screen: ContributionIndexScreen,
    navigationOptions: {
      headerShown: false
    }
  }
}, {
  initialRouteName: "HomeInner"
})

PlaceNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  let routerName = navigation.state.routes[navigation.state.index].routeName;
  if (routerName == "PlaceInner" || routerName == "ContributionIndex") {
    tabBarVisible = false
  }
  return {
    tabBarVisible
  }
}

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
  Interest: {
    screen: InterestScreen,
    navigationOptions: {
      headerShown: false
    }
  }
})

const HomeNavigator = createBottomTabNavigator({
  Home: {
    screen: PlaceNavigator,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" color={tintColor} size={25} />
      ),
    })
  },
  Discover: {
    screen: DiscoverScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Discover',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="search" color={tintColor} size={25} />
      ),
    })
  },
  Scan: {
    screen: ScanScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Scan',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="camera" color={tintColor} size={25} />
      ),
    })
  },
  Needs: {
    screen: NeedSceeen,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Needs',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" color={tintColor} size={25} />
      ),
    })
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user" color={tintColor} size={25} />
      ),
    })
  }
}, {
  initialRouteName: "Home"
});


export default createAppContainer(createSwitchNavigator({
  LoginScreen: LoginNavigator,
  HomeNavi: HomeNavigator
}));
