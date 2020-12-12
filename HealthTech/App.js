import React from 'react';
import {LogBox} from 'react-native'
import Chat from './src/screens/Chat'
import Mainnavigator from './src/nav/Mainnavigator'
function App(){
  //LogBox.ignoreLogs("Animated")
  LogBox.ignoreAllLogs()
  return (<Mainnavigator />);
}
export default App;