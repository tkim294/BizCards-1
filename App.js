import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import CreateCardScreen from './src/screens/CreateCardScreen';
import ForgotPassword from './src/screens/ForgotPassword'


const navigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerShown: false,
      }
    },
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          headerShown: false
        }
      }, 
    CreateCard:{
      screen: CreateCardScreen,

    },
    Forgot: {
      screen: ForgotPassword,
      navigationOptions:{
        headerShown: false
      }
    },
  }
);

export default createAppContainer(navigator);