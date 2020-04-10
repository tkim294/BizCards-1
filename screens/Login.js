import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button, Image } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, login, getUser } from '../actions/user'
import Firebase from '../config/Firebase'

class Login extends React.Component {
	componentDidMount = () => {
		Firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.props.getUser(user.uid)
				if (this.props.user != null) {
					this.props.navigation.navigate('Profile')
				}
			}
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<Image
					style={styles.tinyLogo}
					source={require('../assets/logo1M.png')}
				/>

				<TextInput
					style={styles.inputBox}
					value={this.props.user.email}
					onChangeText={email => this.props.updateEmail(email)}
					placeholder='Email'
					placeholderTextColor="#8BB8CE"
					autoCapitalize='none'
				/>
				<TextInput
					style={styles.inputBox}
					value={this.props.user.password}
					onChangeText={password => this.props.updatePassword(password)}
					placeholder='Password'
					placeholderTextColor="#8BB8CE"
					secureTextEntry={true}
				/>
				<TouchableOpacity style={styles.button} onPress={() => this.props.login()}>
					<Text style={styles.buttonText}>Login</Text>
				</TouchableOpacity>
				<Button
					title="Don't have an account yet? Sign up"
					onPress={() => this.props.navigation.navigate('Signup')}
				/>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('Forgot')}>
					<Text style={styles.forgotText}>Forgot Password?</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		alignItems: 'center',
		justifyContent: 'center',
	},
	tinyLogo: {
		marginBottom: 40
	},
	inputBox: {
		width: "80%",
		fontWeight: 'bold',
		backgroundColor: "#EFEFEF",
		color: "#032c8e",
		borderRadius: 25,
		height: 50,
		marginBottom: 20,
		justifyContent: "center",
		padding: 20
	},
	inputText: {
		height: 50,
		color: "black"
	},
	forgot: {
		color: "white",
		fontSize: 11
	},
	button: {
		width: "80%",
		backgroundColor: "#032c8e",
		borderRadius: 25,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 10,
		marginBottom: 10
	},
	buttonText: {
		color: "white"
	},
	forgotText: {
		fontSize: 15,
		color: 'blue',
		margin: 5,
	}
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ updateEmail, updatePassword, login, getUser }, dispatch)
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)
