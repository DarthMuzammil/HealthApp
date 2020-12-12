import React, { Component, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text
  ,StatusBar,
  LogBox
} from 'react-native';

import AwesomeChat from 'react-native-awesome-chat';

export class ChatInterface extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          messages : [
              {body : "Hello", id : 1,
              timestamp : 1581418856, type : "sent", image_uri : ""},
              {body : "Hi", id : 2, 
              timestamp : 1581418856, type : "received", image_uri : ""}
          ],
      }
  }
  
  sendMessage = async (message) => {
    console.log(message)
    return true;
  }

  render(){
      return (
      <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
          <View style={{height : '100%'}}>
              <AwesomeChat 
                  onSendMessage={this.sendMessage} 
                  messages={this.state.messages}
              />
          </View>
          </SafeAreaView>
      </>
      );
  }
};

function Chat(navigation){
    return(<ChatInterface />)
}
export default Chat;