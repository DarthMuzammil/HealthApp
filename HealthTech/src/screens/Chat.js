import React, { Component, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text
    , StatusBar,
    LogBox
} from 'react-native';

import AwesomeChat from 'react-native-awesome-chat';

export class ChatInterface extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {
                    body: "Hello", id: 1,
                    timestamp: 1581418856, type: "sent", image_uri: ""
                },
                {
                    body: "Hi", id: 2,
                    timestamp: 1581418856, type: "received", image_uri: ""
                },
            ],
        }
    }
    try = () => {
        fetch('https://chatbotmed.herokuapp.com/', {
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
    sendMessage = async (message) => {
        fetch('https://chatbotmed.herokuapp.com/', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson["response"])
                /*this.state.messages.push(  {body: responseJson["response"], id: 9,
                timestamp: 1581418856, type: "sent", image_uri: ""})*/

            });
            console.log(this.state.messages)
        return true;
    }

    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <View style={{ height: '100%' }}>
                        <AwesomeChat
                            onSendMessage={this.sendMessage}
                            messages={[
                                {
                                    body: "Hello", id: 1,
                                    timestamp: 1581418856, type: "sent", image_uri: ""
                                },]}
                        />
                    </View>
                </SafeAreaView>
            </>
        );
    }
};

function Chat(navigation) {
    return (<ChatInterface />)
}
export default Chat;