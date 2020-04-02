import React from "react";
import {StyleSheet, Text, Image, TextInput, TouchableOpacity, View} from "react-native";
import { Card } from 'react-native-elements';



export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateCard')} >
                    <Text > Create New Card </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateProfile')} >
                    <Text > Create Profile </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

