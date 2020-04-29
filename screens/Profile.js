import React from 'react'
import styled, { css } from "@emotion/native"
import { QRCode } from 'react-native-custom-qr-codes-expo';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { FloatingAction } from "react-native-floating-action";
import firebase from 'firebase'
require('firebase/auth')

class Profile extends React.Component {
	handleSignout = () => {
		firebase.auth().signOut()
		this.props.navigation.navigate('Login')
	}

	render() {
		const userUid = this.props.navigation.getParam('userUid'); //added

		const actions = [
			{
				text: "Add Card",
				icon: require("../assets/addCardIcon.png"),
				name: "card_Add",
				color: '#032c8e',
				buttonSize: 50,
				size: 45,
				position: 2
			},
			{
				text: "Modify Card",
				icon: require("../assets/editCardIcon.png"),
				name: "card_Modify",
				color: '#032c8e',
				buttonSize: 50,
				size: 45,
				position: 1
			}
		];
		return (
			<Container>
				<Titlebar>
					<Avatar source={require("../assets/profile.png")} />
					<Title>Welcome back,</Title>
					<Name>{this.props.user.name}</Name>

				</Titlebar>
				<View style={styles.qrcodeContainer}>
					<QRCode codeStyle='square' content='http://bizcards.tools/'/>
				</View>
				<TouchableOpacity
					onPress={() => this.props.navigation.navigate('Settings')}
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						width: 70,
						position: 'absolute',
						top: 40,
						right: 10,
						height: 70,
					}}
				>
					<AddIcon source={require("../assets/gear.png")} />
				</TouchableOpacity>
				<FloatingAction
					actions={actions}
					color="#032c8e"
					onPressItem={name => {
						if (name === "card_Add")
							this.props.navigation.navigate('CreateCard')
						if (name === "card_Modify")
							this.props.navigation.navigate('EditProfile')
					}}
				/>
			</Container>
		)
	}
}

const Container = styled.View`
	flex: 1;
	background-color: white;
`

const Titlebar = styled.View`
	width: 100%;
	margin-top: 50px;
	padding-left: 80px;
`

const Avatar = styled.Image`
	width: 44px;
	height: 44px;
	margin-left: 20px;
	position: absolute;
	top: 0;
	left: 0;
`

const AddIcon = styled.Image`
	width: 30px;
	height: 30px;
`

const LogOut = styled.Text`
	font-size: 15px;
	font-weight: 500;
	width: 60px;
	height: 60px;
	margin-top: 20px;
	margin-right: 20px;
	position: absolute;
	color: #032c8e,
	top: 0;
	right: 0;
`

const Title = styled.Text`
	font-size: 20px;
	font-weight: 500;
	color: #b8bece;
`

const Name = styled.Text`
	font-size: 20px;
	color: #333333;
	font-weight: bold;
`

const styles = StyleSheet.create({
	LogOut: {
		color: "black",
		right: 0
	}, 
	qrcodeContainer: {
		justifyContent: 'center',
		// alignItems: 'center',
		width: '50%',
		height: '50%',
		margin: 50
	}
})

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Profile)
