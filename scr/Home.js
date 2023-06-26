//Home.js
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  FlatList
} from "react-native";
import LoginFeedback from "../components/LoginVerify/LoginFeedback";
import LoginVerify from "../components/LoginVerify/LoginVerify";

const NavigationToForgotPassword = props => {
  props.navigation.navigate('ForgotPassword?');
}
const NavigationToRegistration = props => {
  props.navigation.navigate('Registration');
}
const NavigationToProfile = props => {
  props.navigation.navigate('Profile');
}
const NavigationToDashboard = props => {
  props.navigation.navigate('Dashboard');
}
const NavigationTReview = props => {
  props.navigation.navigate('Review');
}

const Home = props => {

    const [data, setData] = useState({   
        email: '',
        password1: '',
    })

    const [btnDisabled, setBtnDisabled] = useState(false)
    const [returnCode, setReturnCode] = useState()

    useEffect(() => {
        setReturnCode(LoginVerify(data))
        if (returnCode === 1) { // Code snippet to check if valid ang credentials
            setBtnDisabled(false)
        }
        else {
            setBtnDisabled(true)
        }
    }, [data, returnCode])

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/background-pic.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.innerContainer}>
        <Image
          style={styles.Logo}
          source={require("../assets/logo.png")}
        />

        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#FFFFFF"
            value={data.email}
            onChangeText={text => {
              setData({
                ...data,
                email: text
              })
            }}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#FFFFFF"
            secureTextEntry={true}
            value={data.password}
            onChangeText={text => {
              setData({
                ...data,
                password1: text
              })
            }}
          />
        </View>

        <Button disabled={btnDisabled} color="#A57A5A" title='Login' onPress={() => NavigationToDashboard(props)} />
        <LoginFeedback returnCode={returnCode} />

        <Button title='Forgot Password?' color="#A57A5A" onPress={() => NavigationToForgotPassword(props)} />
        <Button title='Register?' color="#A57A5A" onPress={() => NavigationToRegistration(props)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    resizeMode: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    alignItems: "center",
    justifyContent: "center",
  },
  Logo: {
    resizeMode: "contain",
    height: 300,
    width: 300,
  },
  inputView: {
    backgroundColor: "#A57A5A",
    borderRadius: 30,
    width: "60%",
    height: 45,
    marginBottom: 20,
    alignItems: "center", 
},

  },

)
export default Home;
