import React, { Component } from 'react';
import Axios from 'axios';
import {
  StyleSheet,
  Alert,
  Button,
  Text,
  Image,
  View,
  ListView,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

const dummy = [
    {id: 1, name: 'John Doe', email: 'johndoe@blabla.com', town: 'Philadelpia', picture:'http://placehold.it/250/250'},
    {id: 1, name: 'James Morison', email: 'morison.john@blabla.com', town: 'Missisiphi', picture:'http://placehold.it/250/250'},
    {id: 1, name: 'Malika Bells', email: 'malikabells@blabla.com', town: 'New York', picture:'http://placehold.it/250/250'},
    {id: 1, name: 'Jonathan Gregs', email: 'jonnagregs@blabla.com', town: 'Texas', picture:'http://placehold.it/250/250'},
]

export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: {}
        };

        this.renderRow = this.renderRow.bind(this);
        this.onSeeDetail = this.onSeeDetail.bind(this);
    }

    getData() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});        
        const uri = 'http://192.168.1.14:3000/users';
        Axios.get(uri)
            .then((response)=>{
                const data = response.data;
                this.setState({
                    dataSource: ds.cloneWithRows(data)
                });
            })
            .catch((error)=>{
                console.log(error);
                this.setState({
                    dataSource: ds.cloneWithRows(dummy)
                });
            });
    }
    
    componentWillMount(){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({dataSource:ds.cloneWithRows(dummy)});
        this.getData();
    }

    onSeeDetail(user) {
        this.props.navigation.navigate('Detail', user);
    }

    renderRow(user) {
        const name = user.name;
        const town = user.town;
        const pict = {uri: user.picture};
        return (
            <TouchableHighlight onPress={() => this.onSeeDetail(user)}>
                <View style={styles.rowContainer}>
                    <Image source={pict} style={styles.userPicture}/>
                    <View style={styles.rowDetailContainer}>
                        <Text style={styles.userName}>{name}</Text>
                        <Text style={styles.userTown}>{town}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
                <Button
                    title='UPDATE'
                    onPress={()=>this.getData()}
                    color='lightblue'
                    style={{width:'100%'}}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 35,
    },
    heading: {
        marginBottom: 20,
        fontSize : 24,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#e4e4e4',
        borderRadius: 5,
        backgroundColor: '#ccc',
    },
    rowDetailContainer: {
        flexDirection: 'column',
        width: '100%',
        flex: 1,
    },
    userName: {
        fontSize: 19,
        paddingLeft: 20,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    userTown: {
        paddingLeft: 20,
    },
    userPicture: {
        width: 100,
        height: 100,
    }
});