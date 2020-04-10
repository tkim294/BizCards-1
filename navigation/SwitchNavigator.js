import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Profile from '../screens/Profile'
<<<<<<< HEAD
import EmailSent from '../screens/EmailSentScreen'
import ForgotPassword from '../screens/ForgotPassword'
=======
>>>>>>> bc60b15aec15fc6c5a23b95ec53b4d456a28a0f5

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
<<<<<<< HEAD
		},
		Forgot: {
			screen: ForgotPassword
		},
		EmailSent: {
			screen: EmailSent
		},
=======
		}
>>>>>>> bc60b15aec15fc6c5a23b95ec53b4d456a28a0f5
	},
	{
		initialRouteName: 'Login'
	}
)

export default createAppContainer(SwitchNavigator)
