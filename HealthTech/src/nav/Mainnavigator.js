/* SplashScreenNav - blkbit inc. */

/* NPM Imports */
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Homepage from '../screens/Homepage'
import Chat from '../screens/Chat'

const Stack = createStackNavigator();

/* Main Code */
function Mainnavigator() {
  /* SplashScreenNav Generator */

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homepage" >
        <Stack.Screen
          name="Homepage"
          component={Homepage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* Exports */
export default Mainnavigator;
