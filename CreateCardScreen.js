import React from "react";
import {StyleSheet, Text, Image, TextInput, TouchableOpacity, View} from "react-native";
import { Card} from 'react-native-elements';


const CreateCardScreen = (props) => {

    return (
        <View >
            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputText:{
        height:50,
        color:"white"
    },
    primaryContainer:{
        position: 'absolute',
        top: '5%',
        width: '100%',
    },
    primaryCard:{
        borderColor: "#000",


    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },

});

export default CreateCardScreen;
