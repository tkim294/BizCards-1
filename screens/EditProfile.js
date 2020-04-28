import React from "react";
import styled, { css } from "@emotion/native";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StyleSheet, Text, Image, TextInput, TouchableOpacity, View, FlatList } from "react-native";
import { Card, CheckBox } from 'react-native-elements';
import * as firebaseApp from "firebase"
import Profile from "./Profile";


class CreateCardScreen extends React.Component {

    constructor(props) {
        super(props);
        this.userInfo = firebaseApp.database().ref("/users/" + this.props.user.uid)

        this.state = {
            profile: [
                { FullName: "" },
                { Email: "", checked: true },
                { Mobile: "", checked: false },
                { Bio: "", checked: false }
            ],
            socialMedias: [
                { Facebook: ""},
                { Twitter: ""},
                { LinkedIn: ""},
                { GitHub: ""}
            ],
            timeStamp: ""

        }
    }
    componentDidMount() {
        this.listenForUser(this.userInfo)
    }

    async listenForUser(userInfo) {
        tempState = []
        var loadprofile = []
        var loadsocialMedias = []
        var time = ""
        await userInfo.on("value", dataSnapshot => {
            dataSnapshot.forEach(child => {
                if (child.key == 'profile') {
                    var proArray = child.val()
                    proArray.forEach((item) => {
                        loadprofile.push(item)
                    })
                }
                else if (child.key == 'medias') {
                    var mediaArray = child.val()
                    mediaArray.forEach((item) => {
                        loadsocialMedias.push(item)
                    })
                } else {
                    time = child.val()
                }
            })
            console.log("nestedPro", loadprofile)
            this.setState({
                profile: loadprofile,
                socialMedias: loadsocialMedias,
                timeStamp: time
            })
            console.log(this.state)

            console.log("IP", this.state.profile[0].FullName)
            console.log("nestedMed", loadsocialMedias)

        })

        console.log("profile", loadprofile)
        console.log("medias", loadsocialMedias)

        console.log("state", this.state)

    }

    handleClick = this.handleClick.bind(this);
    listenForUser = this.listenForUser.bind(this);
    handleProfileClick = this.handleProfileClick.bind(this);

    handleClick(name) {
        console.log(name)
        const data = this.state.data;
        const index = data.findIndex(x => x.name === name);
        data[index].checked = !data[index].checked;
        this.setState(data);
    }

    handleProfileClick(field){
        temp = this.state.profile
        if(field == this.state.profile[1]){
            temp[1].checked = !field.checked
        }
        if(field == this.state.profile[2]){
            temp[2].checked = !field.checked
        }
        this.setState({
            profile: temp
        })

        console.log(this.state)

    }
    handleCancel = () => {
        console.log("Hit")
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.container}>
                <Titlebar>
                    <Avatar source={require("../assets/profile.png")} />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                        <Title>Cancel Edit</Title>
                    </TouchableOpacity>
                </Titlebar>
                <View style={styles.primaryContainer}>
                    <Card
                        title='Edit Primary Information'
                        titleStyle={{ color: '#FFF' }}
                        containerStyle={styles.primaryCard} >
                        <View style={{ flexDirection: 'row' }} >
                            <Image source={require("../assets/defaultProfPic.png")}
                                style={{ top: 5, left: 0, width: 100, height: 100, resizeMode: 'contain', borderRadius: 15 }}>
                            </Image>
                            <View style={{ flexDirection: 'column' }} >
                                <View style={{ flexDirection: 'row' }} >
                                    <Text style={{color: '#FFF', textAlignVertical: 'center'}}>Full Name: </Text>
                                    <TextInput containerStyle={{ width: '100%', alignSelf: 'flex-end' }} value={this.props.user.name} onChangeText={fullName => this.setState({ fullName })} />
                                </View>
                                <View style={{ flexDirection: 'row' }} >
                                    <Text style={{color: '#FFF', textAlignVertical: 'center'}}>Email: </Text>
                                    <TextInput containerStyle={{ width: '100%', alignSelf: 'flex-end' }} value={this.props.user.email} onChangeText={Email => this.setState({ Email })} />
                                </View>
                                <View style={{ flexDirection: 'row' }} >
                                    <Text style={{color: '#FFF', textAlignVertical: 'center'}}>Mobile: </Text>
                                    <TextInput containerStyle={{ width: '100%', alignSelf: 'flex-end' }} value={this.state.Mobile} onChangeText={Mobile => this.setState({ Mobile })} />
                                </View>
                                <View style={{ flexDirection: 'row' }} >
                                    <Text style={{color: '#FFF', textAlignVertical: 'center'}}>Bio: </Text>
                                    <TextInput containerStyle={{ width: '100%', alignSelf: 'flex-end' }} value={this.state.Bio} onChangeText={Bio => this.setState({ Bio })} />
                                </View>
                            </View>
                        </View>

                    </Card>
                    <Card
                        title='Edit Social Media Information'
                        titleStyle={{ color: '#FFF' }}
                        containerStyle={styles.primaryCard} >
                            <View style={{ flexDirection: 'column' }} >
                                <View style={{ flexDirection: 'row' }} >
                                    <Text style={{color: '#FFF', textAlignVertical: 'center'}}>Facebook url: </Text>
                                    <TextInput containerStyle={{ width: '100%', alignSelf: 'flex-end' }} value={this.state.Facebook} onChangeText={Facebook => this.setState({ Facebook })} />
                                </View>
                                <View style={{ flexDirection: 'row' }} >
                                    <Text style={{color: '#FFF', textAlignVertical: 'center'}}>Twitter url: </Text>
                                    <TextInput containerStyle={{ width: '100%', alignSelf: 'flex-end' }} value={this.state.Twitter} onChangeText={Twitter => this.setState({ Twitter })} />
                                </View>
                                <View style={{ flexDirection: 'row' }} >
                                    <Text style={{color: '#FFF', textAlignVertical: 'center'}}>LinkedIn url: </Text>
                                    <TextInput containerStyle={{ width: '100%', alignSelf: 'flex-end' }} value={this.state.LinkedIn} onChangeText={LinkedIn => this.setState({ LinkedIn })} />
                                </View>
                                <View style={{ flexDirection: 'row' }} >
                                    <Text style={{color: '#FFF', textAlignVertical: 'center'}}>GitHub url: </Text>
                                    <TextInput containerStyle={{ width: '100%', alignSelf: 'flex-end' }} value={this.state.GitHub} onChangeText={GitHub => this.setState({ GitHub })} />
                                </View>
                            </View>
                    </Card>
                </View>
                <TouchableOpacity style={styles.saveBtn} onPress={() => this.props.navigation.navigate('Profile')}>
                    <Text style={styles.saveText}>Save Profile</Text>
                </TouchableOpacity>
            </View>
            
        );
    }
}

const Titlebar = styled.View`
	width: 100%;
	margin-top: 50px;
    padding-left: 80px;
    margin-bottom: 25px;
`

const Avatar = styled.Image`
	width: 44px;
	height: 44px;
	margin-left: 20px;
	position: absolute;
	top: 0;
	left: 0;
`
const Title = styled.Text`
	font-size: 20px;
	font-weight: 500;
	color: #b8bece;
`

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        position: 'absolute',
        top: 0,
        height: 25,
        width: '100%',
        borderBottomColor: "#FFF"
    },
    primaryContainer: {
        position: 'relative',
        width: '90%',
        marginBottom: 10,
        padding: 0,
        backgroundColor: "#FFF",
    },
    divider: {
        position: 'relative',
        marginTop: 0,
        marginBottom: 10,
        padding: 0,
        width: '75%',
        top: 0
    },
    primaryCard: {
        borderColor: "#FFF",
        backgroundColor: "#032c8e",
        borderRadius: 8,
        padding: 10,
        margin: 0,
    },
    mediaContainer: {
        position: 'relative',
        width: '90%',
        height: '45%',
        marginBottom: 0,
    },
    saveBtn: {
        width: "80%",
        backgroundColor: "#032c8e",
        borderRadius: 25,
        height: 50,
        alignSelf: 'center',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    saveText: {
        color: "white"
    }
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({}, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateCardScreen)
