import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const sendHandler = () => {
    Keyboard.dismiss();
    // Additional function to validate email and sent password reset to the user
}


class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Forgot Password?</Text>
                <View>
                    <View style={styles.iconContainer}>
                        <View><Ionicons name="md-mail" size={30} /></View>
                        <View>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Enter email"
                                onChangeText={text => this.setState({ email: text })}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.sendButton}
                            title='Submit'
                            color="#2E8B57"
                            onPress={sendHandler}
                            color='black'
                        >
                        <Text>SEND</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
    text: {
        fontWeight:"bold",
        height: 50,
        color: "white",
        fontSize: 30,
        marginLeft: 30,
        alignItems: 'center',
        marginBottom: 15,
    },
    buttonContainer: {
        width: 100,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    textInput: {
        fontSize: 15,
        marginLeft: 10,
        width: 200,
        borderColor: "white",
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        padding: 2,
        textAlign: 'left',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendButton:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:20,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop: 10,
    },
})
export default ForgotPassword;