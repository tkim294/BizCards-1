import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Profile from '../screens/Profile'
import EmailSent from '../screens/EmailSentScreen'
import ForgotPassword from '../screens/ForgotPassword'

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
		Forgot: {
			screen: ForgotPassword
		},
		EmailSent: {
			screen: EmailSent
		},
	},
	{
		initialRouteName: 'Login'
	}
)

export default createAppContainer(SwitchNavigator)
