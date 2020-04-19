import React from "react";
import styled, { css } from "@emotion/native";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StyleSheet, Text, Image, TextInput, TouchableOpacity, View, FlatList } from "react-native";
import { Card, CheckBox } from 'react-native-elements';


class CreateCardScreen extends React.Component {

    componentDidMount = () => {
		try{
            
		}catch(e){
			alert(e);
		}
	}

    constructor(props) {
        super(props);
        this.state = {
            email: "test@test.com",
            firstName: "John",
            lastName: "Doe",
            mobile: "1-234-567-8910",
            data: [
                { name: 'Instagram', checked: true },
                { name: 'Twitter', checked: false },
                { name: 'GMail', checked: true },
                { name: 'Vsco', checked: true },
                { name: 'Yahoo', checked: false },
                { name: 'Github', checked: true },
                { name: 'Otherthings', checked: true},
                { name: 'one otherthing', checked: false},
                { name: 'just one more', checked: true},
            ]
        }
    }

    handleClick = this.handleClick.bind(this);

    handleClick(name) {
        const data = this.state.data;
        const index = data.findIndex(x => x.name === name);
        data[index].checked = !data[index].checked;
        this.setState(data);
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
					    <Title>Cancel Card</Title>
                    </TouchableOpacity>
				</Titlebar>
                <View style={styles.primaryContainer}>
                    <Card
                        title='Primary Information'
                        titleStyle={{color:'#FFF'}}
                        containerStyle={styles.primaryCard} >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                            <Image source={require("../assets/defaultProfPic.png")}
                                style={{ top: 30, left: 0, width: 100, height: 100, resizeMode: 'contain', borderRadius: 15 }}>
                            </Image>
                            <View style={{ flexDirection: 'column' }} >
                                <CheckBox containerStyle={{ width: '100%', alignSelf: 'flex-end' }} right iconRight title={this.state.firstName + " " + this.state.lastName} checked={true} />
                                <CheckBox containerStyle={{ width: '100%', alignSelf: 'flex-end' }} right iconRight title={this.state.email} onPress={() => this.handleClick()} checked={true} />
                                <CheckBox containerStyle={{ width: '100%', alignSelf: 'flex-end' }} right iconRight title={this.state.mobile} checked={true} />
                            </View>
                        </View>

                    </Card>
                </View>

                <View style={styles.divider}>
                    <Text style={{ color: '#032c8e', textAlign: 'center' }}>Chose which social media profiles you'd like to attach to this card!</Text>
                </View>

                <View style={styles.mediaContainer} >
                    <Card
                        containerStyle={styles.primaryCard} >
                        {/* <View style={{ flexDirection: 'column', justifyContent: 'space-between' }} >
                            {this.state.data.map((item) => <CheckBox right iconRight title={item.name} key={item.name} onPress={() => this.handleClick(item.name)} checked={item.checked} />)}
                        </View> */}

                        <FlatList data={this.state.data} keyExtractor={item => item.name} renderItem={({item }) =>  <CheckBox right iconRight title={item.name} key={item.name} onPress={() => this.handleClick(item.name)} checked={item.checked} />}/>

                    </Card>

                    <TouchableOpacity style={styles.saveBtn} onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.saveText}>Save Card</Text>
                    </TouchableOpacity>
                </View>
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
    header:{
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
	return bindActionCreators({  }, dispatch)
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
