import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Profile from '../screens/Profile'
import EmailSent from '../screens/EmailSentScreen'
import ForgotPassword from '../screens/ForgotPassword'
import CreateCard from '../screens/CreateCardScreen'
import EditProfile from '../screens/EditProfile'
import Settings from '../screens/Settings'

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
		},
		EditProfile: {
			screen: EditProfile
		},
		Settings: {
			screen: Settings
		}
	},
	{
		initialRouteName: 'Login'
	}
)

export default createAppContainer(SwitchNavigator)
