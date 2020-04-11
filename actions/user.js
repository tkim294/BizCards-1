import Firebase, { db } from '../config/Firebase.js'

// define types

export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const UPDATE_CONFIRM_PASSWORD = 'UPDATE_CONFIRM_PASSWORD'
export const UPDATE_NAME = 'UPDATE_NAME'
export const LOGIN = 'LOGIN'
export const SIGNUP = 'SIGNUP'

// actions

export const updateEmail = email => {
	return {
		type: UPDATE_EMAIL,
		payload: email
	}
}

export const updatePassword = password => {
	return {
		type: UPDATE_PASSWORD,
		payload: password
	}
}

export const updateConfirmPassword = cfrmPassword => {
	return {
		type: UPDATE_CONFIRM_PASSWORD,
		payload: cfrmPassword
	}
}

export const updateName = name => {
	return {
		type: UPDATE_NAME,
		payload: name
	}
}

export const login = () => {
	return async (dispatch, getState) => {
		try {
			const { email, password } = getState().user
			if(email === undefined){
					throw "Email is Required!"
			}
			if(password === undefined){
					throw "Password is Required!"
			}
			const response = await Firebase.auth().signInWithEmailAndPassword(email, password)

			dispatch(getUser(response.user.uid))
		} catch (e) {
			alert(e)
		}
	}
}

export const getUser = uid => {
	return async (dispatch, getState) => {
		try {
			const user = await db
				.collection('users')
				.doc(uid)
				.get()

			dispatch({ type: LOGIN, payload: user.data() })
		} catch (e) {
			alert(e)
		}
	}
}

export const signup = () => {
	return async (dispatch, getState) => {
		try {
			const { email, password, cfrmPassword, name } = getState().user
			if(name === undefined){
					throw "Name is Required!"
			}
			if(email === undefined){
					throw "Email is Required!"
			}
			if(password === undefined){
					throw "Password is Required!"
			}
			if(cfrmPassword === undefined){
					throw "Confirm Password is Required!"
			}
			if(cfrmPassword !== password){
					throw "Passwords do not match!"
			}
			const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
			if (response.user.uid) {

				const user = {
					uid: response.user.uid,
					name: name,
					email: email
				}

				db.collection('users')
					.doc(response.user.uid)
					.set(user)

				dispatch({ type: SIGNUP, payload: user, payload: name })
				return true;
			}
		} catch (e) {
			alert(e)
			return false;
		}
	}
}
