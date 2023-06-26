import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert
} from "react-native";
import Feedback from "../components/RegistrationVerify/Feedback";
import Verify from "../components/RegistrationVerify/Verify";
import axios from "axios";

const NavigationToProfile = (props) => {
  props.navigation.navigate("Profile");
};

const Registration = (props) => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  const [btnDisabled, setBtnDisabled] = useState(false);
  const [returnCode, setReturnCode] = useState();

  const [success, setSuccess] = useState("");

  const submit = () => {
    console.log(data);
    axios
      .post("http://192.168.1.13:8000/api/v1/accounts/users/", data, {})
      .then((response) => {
        console.log(response.data);
        setSuccess(
          "Successfully Registered!\nPlease check your email for activation."
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setReturnCode(Verify(data));
    if (returnCode === 1) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [data, returnCode]);

  return (
    <View style={styles.container}>
    <View>
        <TextInput
          style={styles.inputView}
          placeholder="Username"
          placeholderTextColor="#FFFFFF"
          value={data.username}
          onChangeText={(username) => {
            setData({
              ...data,
              "username": username
            });
          }}
        />
      </View>
      <View>
        <TextInput
          style={styles.inputView}
          placeholder="FirstName"
          placeholderTextColor="#FFFFFF"
          value={data.first_name}
          onChangeText={(first_name) => {
            setData({
              ...data,
              "first_name": first_name
            });
          }}
        />
      </View>
      <View>
        <TextInput
          style={styles.inputView}
          placeholder="LastName"
          placeholderTextColor="#FFFFFF"
          value={data.last_name}
          onChangeText={(last_name) => {
            setData({
              ...data,
              "last_name": last_name
            });
          }}
        />
      </View>

      <View>
        <TextInput
          style={styles.inputView}
          placeholder="Email"
          placeholderTextColor="#FFFFFF"
          value={data.email}
          onChangeText={(email) => {
            setData({
              ...data,
              "email": email
            });
          }}
        />
      </View>
      <View>
        <TextInput
          style={styles.inputView}
          placeholder="Password"
          placeholderTextColor="#FFFFFF"
          secureTextEntry={true}
          value={data.password}
          onChangeText={(password) => {
            setData({
              ...data,
              "password": password
            });
          }}
        />
      </View>
  
      <Button
        color="#A57A5A"
        title="Go to Login"
        disabled={btnDisabled}
        onPress={submit}
      />

      <Feedback returnCode={returnCode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center",
  },

  inputView: {
    backgroundColor: "#A57A5A",
    borderRadius: 10,
    width: 170,
    height: 40,
    marginBottom: 10,
    textAlign: "center",
  },

  TextInput: {
    height: 50,
    color: "white",
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
});

export default Registration;