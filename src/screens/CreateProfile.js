import React from "react";
import { StyleSheet, Text, Image, TextInput, TouchableOpacity, View } from "react-native";
import { Card, CheckBox } from 'react-native-elements';

export default class CreateCardScreen extends React.Component {

    state = {
        firstName: '',
        lastName:'',
        email: '',
        mobile: '',
        instagram:'',
        twitter:'',
        gmail:'',
        vsco:'',
        yahoo:'',
        github:'',
        other:''
      };

    render() {

        

        return (
            <View style={styles.container}>
                <View style={styles.primaryContainer}>
                    <Card
                        title='Enter Personal Information'
                        containerStyle={styles.primaryCard} >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                            <Image source={require('../../assets/defaultProPic.png')}
                                style={{ top: 30, left: 0, width: 100, height: 100, resizeMode: 'contain' }}>
                            </Image>
                            <View style={{ flexDirection: 'column' }} >
                                <TextInput containerStyle={{ width: '100%', alignSelf: 'flex-end' }} 
                                            placeholder = 'First Name'
                                            value={this.state.firstName}
                                            onChangeText={firstName => this.setState({ firstName })}
                                            />
                                <TextInput containerStyle={{ width: '100%', alignSelf: 'flex-end' }} 
                                            placeholder = 'Email'
                                            value={this.state.email}
                                            onChangeText={email => this.setState({ email })} />
                                <TextInput containerStyle={{ width: '100%', alignSelf: 'flex-end' }} 
                                            placeholder = 'Phone Number'
                                            value={this.state.mobile}
                                            onChangeText={mobile => this.setState({ mobile })} />
                            </View>
                        </View>

                    </Card>
                </View>

                <View style={styles.divider}>
                    <Text style={{color: '#FFF', textAlign: 'center'}}>Connect to Social Media Accounts</Text>
                </View>

                <View style={styles.mediaContainer} >
                    <Card
                        containerStyle={styles.primaryCard} >
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }} >
                        <TextInput containerStyle={{ width: '100%', alignSelf: 'flex-end' }} 
                                            placeholder = 'Instragram Handle'
                                            value={this.state.instagram}
                                            onChangeText={instagram => this.setState({ instagram })} />
                        <TextInput containerStyle={{ width: '100%', alignSelf: 'flex-end' }} 
                                            placeholder = 'Twitter Handle'
                                            value={this.state.twitter}
                                            onChangeText={twitter => this.setState({ twitter })} />
                        <TextInput containerStyle={{ width: '100%', alignSelf: 'flex-end' }} 
                                            placeholder = 'GMail'
                                            value={this.state.gmail}
                                            onChangeText={gmail => this.setState({ gmail })} />
                        <TextInput containerStyle={{ width: '100%', alignSelf: 'flex-end' }} 
                                            placeholder = 'Vsco Handle'
                                            value={this.state.vsco}
                                            onChangeText={vsco => this.setState({ vsco })} />
                        <TextInput containerStyle={{ width: '100%', alignSelf: 'flex-end' }} 
                                            placeholder = 'Yahoo'
                                            value={this.state.yahoo}
                                            onChangeText={yahoo => this.setState({ yahoo })} />
                        <TextInput containerStyle={{ width: '100%', alignSelf: 'flex-end' }} 
                                            placeholder = 'Github Username'
                                            value={this.state.github}
                                            onChangeText={github => this.setState({ github })} />
                        <TextInput containerStyle={{ width: '100%', alignSelf: 'flex-end' }} 
                                            placeholder = 'Other'
                                            value={this.state.other}
                                            onChangeText={other => this.setState({ other })} />
                        </View>

                    </Card>
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
    primaryContainer: {
        position: 'absolute',
        top: '0%',
        width: '90%',
        height: '15%',
        marginBottom: 0
    },
    divider: {
        position: 'relative',
        marginTop: 0,
        color: '#FFF',
        padding: 0,
        width: '75%'
    },
    primaryCard: {
        borderColor: "#FFF",
        backgroundColor: "#FFF",
        borderRadius: 4,
        padding: 10,
        margin: 0
    },
    mediaContainer: {
        position: 'relative',
        width: '90%',
        height: '15%',
        marginBottom: 0
    },


});
