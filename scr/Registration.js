//Registration.js
import React, { useState, useEffect} from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Feedback from "../components/RegistrationVerify/Feedback";
import Verify from "../components/RegistrationVerify/Verify";

const NavigationToProfile = props => {
  props.navigation.navigate('Profile');
}


const Registration = props => {
  const [data, setData] = useState({
    name1: '',
    name2: '',
    email: '',
    password1: '',
    password2: '',
})

const [btnDisabled, setBtnDisabled] = useState(false)
const [returnCode, setreturnCode] = useState()

useEffect(() => {
    setreturnCode(Verify(data))
    if (returnCode === 1) { // Code snippet to check if valid ang credentials
        setBtnDisabled(false)
    }
    else {
        setBtnDisabled(true)
    }
}, [data, returnCode])

    return (
        <View style={styles.container}>
            <View>
              <TextInput 
                style = {styles.inputView}
                placeholder="FirstName"
                placeholderTextColor="#FFFFFF"
                value={data.name1}
                onChangeText={text => {
                    setData({
                        ...data,
                        name1: text
                    })
                }}
             />
            </View>
            <View>
              <TextInput
                style = {styles.inputView}
                placeholder="LastName"
                placeholderTextColor="#FFFFFF"
                value={data.name2}
                onChangeText={text => {
                    setData({
                        ...data,
                        name2: text
                    })
                }}
             />
            </View>
            <View>
              <TextInput
                style = {styles.inputView}
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
            <View>
              <TextInput
                style = {styles.inputView}
                placeholder="Password"
                placeholderTextColor="#FFFFFF"
                secureTextEntry={true}
                value={data.password1}
                onChangeText={text => {
                    setData({
                        ...data,
                        password1: text
                    })
                }}
             />
            </View> 
            <View>
              <TextInput
                style = {styles.inputView}
                placeholder="Confirm Password"
                placeholderTextColor="#FFFFFF"
                secureTextEntry={true}
                value={data.password2}
                onChangeText={text => {
                    setData({
                        ...data,
                        password2: text
                    })
                }}
             />
            </View>          
            <Button  
            color="#0000FF" 
            title='Go to Profile' 
            disabled={btnDisabled}
            onPress={()=> {
              props.navigation.navigate('Profile')
              console.log("Registration Successful" + data)
              Alert.alert('Registration Successful')
              global.firstName = data.name1
              global.lastName = data.name2
              global.email = data.email
              global.password = data.password1
              global.logged_in = true
              setData({
                        name1: '',
                        name2: '',
                        username: '',
                        email: '',
                        password1: '',
                        password2: '',
                    })
            }
           }
           ></Button> 
            
            <Feedback returnCode={returnCode} />
        </View>
        );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
      },
    
      inputView: {
        backgroundColor: "#0000FF",
        borderRadius: 10,
        width: 170,
        height: 40,
        marginBottom: 10,
        textAlign: "center",
      },
     
      TextInput: {
        height: 50,
        color: 'white',
        flex: 1,
        padding: 10,
        marginLeft: 10,
      },
     
      forgot_button: {
        height: 30,
        marginBottom: 5,
      },
     
      loginBtn: {
        width: "80%",
        borderRadius: 50,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FFFFFF",
      },
    })

export default Registration;