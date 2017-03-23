import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
} from 'react-native';

export default class FormUser extends Component {
    constructor(props) {
        super(props);
        this.state= {
            name: this.props.name,
            email: this.props.email,
            town: this.props.town,
            picture: this.props.picture,
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount(){
        if(this.props.navigation.state.params.update) {
            const {name, email, town, picture} = this.props.navigation.state.params;
            this.setState({name, email, town, picture});
        }
    }

    onSubmit(){
        Alert.alert('Submitted!');
    }

    render() {
        const name = this.state.name ? this.state.name : '';
        const email = this.state.email ? this.state.email : '';
        const town = this.state.town ? this.state.town : '';
        const picture = this.state.picture ? this.state.picture : '';
        return (
            <View style={styles.container}>
                <Text style={styles.header}>User Form</Text>
                <View style={styles.formContainer}>
                    <TextInput ref='nameInput' style={styles.textInput} placeholder="Your name" value={name} onChangeText={(name)=>this.setState({name})} returnKeyType='next' onSubmitEditing={()=>this.refs.emailInput.focus()}/>
                    <TextInput ref='emailInput' style={styles.textInput} placeholder="Your email" value={email} keyboardType='email-address' onChangeText={(email)=>this.setState({email})} returnKeyType='next' onSubmitEditing={()=>this.refs.townInput.focus()}/>
                    <TextInput ref='townInput' style={styles.textInput} placeholder="Your town" value={town} onChangeText={(town)=>this.setState({town})} returnKeyType='next' onSubmitEditing={()=>this.refs.pictureInput.focus()}/>
                    <TextInput ref='pictureInput' style={styles.textInput} placeholder="Picture Url" value={picture} onChangeText={(picture)=>this.setState({picture})} returnKeyType='done'/>
                    <TouchableHighlight onPress={this.onSubmit}>
                        <Text style={styles.submitButton}>Submit</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    formContainer: {
        marginTop: 20,
        paddingLeft: 40,
        paddingRight: 40,
    },
    textInput : {
        width: '100%',
        marginBottom: 10,
    },

    submitButton: {
        marginBottom: 10,
        width: '100%',
        padding: 10,
        backgroundColor: 'lightgreen',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
});