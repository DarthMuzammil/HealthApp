import React, { Component, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text
    , StatusBar,
    StyleSheet,
    TouchableOpacity
} from 'react-native';


const styles = StyleSheet.create({
    randombutton: {
        //edit these values 
        backgroundColor: 'red',
        width: 50,
        height: 50
    }
});
function Homepage({ navigation }) {
    function cal() {
        fetch('http://127.0.0.1:5000', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
        .then((responseJson) => {
  console.log(responseJson)
  
        });
    }
    cal()
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View style={{ height: '100%' }}>
                    <Text>Click here to go to bot</Text>
                    <TouchableOpacity style={styles.randombutton} onPress={() => { cal() }}></TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    );
}

export default Homepage;