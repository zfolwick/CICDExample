import { React, Component } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native"

export default class Greetings extends Component {
    constructor(props) {
        super(props);
        this.state = {name: ''}
    }

    render() {
        return (
            <View style={styles.container}>
              <TextInput style={{height:30, borderColor: 'gray', borderWidth: 1}}
              placeholder="write your name"
              onChangeText={(name) => this.setState({name})} />
              <Text style={{marginTop: 10}}>Welcome to CI/CD example for react native, {this.state.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginHorizontal: 16,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

