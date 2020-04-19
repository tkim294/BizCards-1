import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Profile from '../screens/Profile'
import EmailSent from '../screens/EmailSentScreen'
import ForgotPassword from '../screens/ForgotPassword'
import CreateCard from '../screens/CreateCardScreen'

const SwitchNavigator = createSwitchNavigator(
	{
		Login: {
			screen: Login
		},
		Signup: {
			screen: Signup
		},
		Profile: {
			screen: Profile
		},
		ForgotPwd: {
			screen: ForgotPassword
		},
		EmailSent: {
			screen: EmailSent
		},
		CreateCard: {
			screen: CreateCard,
		}
	},
	{
		initialRouteName: 'Login'
	}
)

export default createAppContainer(SwitchNavigator)
