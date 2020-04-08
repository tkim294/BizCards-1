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
      navigationOptions: {
        headerStyle:{
          backgroundColor: '#003f5c',
        },
        headerBackTitle: 'Cancel',
        headerBackTitleStyle:{color: '#fb5b5a'},
        headerTintColor: '#fb5b5a',
        headerTitle: () => null
      }

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