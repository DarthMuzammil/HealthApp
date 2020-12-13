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
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View style={{ height: '100%' }}>
                    <Text>Click here to go to bot</Text>
                    <TouchableOpacity style={styles.randombutton} onPress={() => { navigation.navigate('Chat') }}></TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    );
}

export default Homepage;