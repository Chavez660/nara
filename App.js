//App.js
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './scr/Home';
//import ForgotPassword from './src/ForgotPassword';
import Registration from './scr/Registration';
import Profile from './scr/Profile';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Profile" component={Profile} />      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;