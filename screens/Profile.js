import React from 'react'
import styled, { css } from "@emotion/native"
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Firebase from '../config/Firebase'

class Profile extends React.Component {
	handleSignout = () => {
		Firebase.auth().signOut()
		this.props.navigation.navigate('Login')
	}

	render() {
		return (
			<Container>
				<Titlebar>
					<Avatar source={require("../assets/profile.png")} />
					<Title>Welcome back,</Title>
					<Name>{this.props.user.name}</Name>
					<LogOut onPress={this.handleSignout}>Log Out</LogOut>
				</Titlebar>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('CreateCard')} >
                    <Avatar source = {require("../assets/addCardIcon.png")} />
                </TouchableOpacity>
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
	}
})

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Profile)
