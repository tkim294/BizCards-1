import React from "react";
import { StyleSheet, Text, Image, TextInput, TouchableOpacity, View } from "react-native";
import { Card, CheckBox } from 'react-native-elements';


export default class CreateCardScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "test@test.com",
            firstName: "John",
            lastName: "Doe",
            mobile: "1-234-567-8910",
            data: [
                {name: 'Instagram', checked: true},
                {name: 'Twitter', checked: false},
                {name: 'GMail', checked: true},
                {name: 'Vsco', checked: true},
                {name: 'Yahoo', checked: false},
                {name: 'Github', checked: true},
                {name: 'Otherthings', checked: true},
                {name: 'one otherthing', checked: false},
                {name: 'just one more', checked: true},
        ]}
    }

    handleClick = this.handleClick.bind(this);

    handleClick(name){
        const data = this.state.data;
        const index = data.findIndex(x => x.name === name);
        data[index].checked = !data[index].checked;
        this.setState(data);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.primaryContainer}>
                    <Card
                        title='Primary Information'
                        containerStyle={styles.primaryCard} >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                            <Image source={require('../../assets/defaultProPic.png')}
                                style={{ top: 30, left: 0, width: 100, height: 100, resizeMode: 'contain' }}>
                            </Image>
                            <View style={{ flexDirection: 'column' }} >
                                <CheckBox containerStyle={{ width: '100%', alignSelf: 'flex-end' }} right iconRight title={this.state.firstName + " " + this.state.lastName} checked={true} />
                                <CheckBox containerStyle={{ width: '100%', alignSelf: 'flex-end' }} right iconRight title={this.state.email} checked={true} />
                                <CheckBox containerStyle={{ width: '100%', alignSelf: 'flex-end' }} right iconRight title={this.state.mobile} checked={true} />
                            </View>
                        </View>

                    </Card>
                </View>

                <View style={styles.divider}>
                    <Text style={{color: '#FFF', textAlign: 'center'}}>Chose which social media profiles you'd like to attach to this card!</Text>
                </View>

                <View style={styles.mediaContainer} >
                    <Card
                        containerStyle={styles.primaryCard} >
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }} >
                            {this.state.data.map((item) => <CheckBox right iconRight title={item.name} key={item.name} onPress={() => this.handleClick(item.name)} checked={item.checked} />)}
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
