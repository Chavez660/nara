//App.js
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './scr/Home';
import ForgotPassword from './scr/ForgotPassword';
import Registration from './scr/Registration';
import Profile from './scr/Profile';
import Dashboard from './scr/Dashboard';
import Status from './scr/Status';
import Review from './scr/Review';
import Credentials from './scr/Credentials';
import Messages from './scr/Messages';


const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="ForgotPassword?" component={ForgotPassword} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Dashboard" component={Dashboard} />  
        <Stack.Screen name="Status" component={Status} />   
        <Stack.Screen name="Review" component={Review} />  
        <Stack.Screen name="Credentials" component={Credentials} /> 
        <Stack.Screen name="Messages" component={Messages} /> 
          
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;