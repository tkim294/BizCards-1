import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import CreateCardScreen from './src/screens/CreateCardScreen';
import ForgotPassword from './src/screens/ForgotPassword';
import CreateProfileScreen from './src/screens/CreateProfile'
import EmailSentScreen from './src/screens/EmailSentScreen';


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
    EmailSent: {
      screen: EmailSentScreen,
      navigationOptions:{
        headerShown: false,
      },
    },
    CreateProfile: {
      screen: CreateProfileScreen,
    }
  }
);

export default createAppContainer(navigator);