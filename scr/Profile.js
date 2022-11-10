import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';

const NavigationToHome = props => {
}
const Profile = props => {

  return (
    <View style={styles.container}>
            <Text>Dashboard{"\n"}</Text>
            <Text>Welcome {global.firstName + " " + global.lastName}{"\n"}</Text>
            <Text>User Email: {global.email}</Text>
            <Button
                title="Log out"
                color="#23395d"
                onPress={() => {
                    global.logged_in = false
                    props.navigation.navigate('Home');
                }}
            />
    </View>
   )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
})


export default Profile;