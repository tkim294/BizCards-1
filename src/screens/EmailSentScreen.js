import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EmailSentScreen = props => {
    const userEmail = props.navigation.getParam('userEmail');
    return (
        <View style={styles.textContainer}>
            <Ionicons name="md-checkmark-circle-outline" size={60} color='white' />
            <Text style={styles.text}>Password Reset Email Sent</Text>
            <View>
                <Text style={styles.emailSentText}> An Email has been sent to your email, </Text>
                <View style={styles.emailContainer}><Text style={styles.emailSentText}>{userEmail}</Text></View>
            </View>
            <View style={styles.buttonContainer} >
                <TouchableOpacity style={styles.button} onPress={() => {
                    props.navigation.popToTop();
                }}>
                    <Text style={styles.buttonText} >DONE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 25,
        color: 'white',
        margin: 10,
    },
    emailSentText: {
        color: 'white',
        fontSize: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emailContainer: {
        alignItems: 'center',
    },
    buttonContainer: {
        width: 100,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    button: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 20,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
    }
});

export default EmailSentScreen;