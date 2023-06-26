import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const { width } = Dimensions.get('window');

function ProfileScreen(props) {
  const [profilePicture, setProfilePicture] = useState(null);

  const NavigationToDashboard = props => {
    props.navigation.navigate('Dashboard');
  }

  const handleProfilePictureChange = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access media library is required!');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.cancelled) {
        setProfilePicture(result);
      }
    } catch (error) {
      console.log('Error while picking an image:', error);
    }
  };

  const handleSubmit = () => {
    // Handle profile picture submission here
    console.log('Submitted profile picture:', profilePicture);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {profilePicture ? (
          <Image source={{ uri: profilePicture.uri }} style={styles.profilePicture} />
        ) : (
          <TouchableOpacity style={styles.profilePictureContainer} onPress={handleProfilePictureChange}>
            <Text style={styles.profilePictureText}>Upload Picture</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.profileInfo}>
        <View style={styles.textBox}>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileDetails}>Age: 25</Text>
          <Text style={styles.profileDetails}>Email: john.doe@example.com</Text>
          <Text style={styles.profileHobbies}>Hobbies:</Text>
          <Text style={styles.profileHobbiesList}>- Reading</Text>
          <Text style={styles.profileHobbiesList}>- Swimming</Text>
          <Text style={styles.profileHobbiesList}>- Hiking</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.dashboardButton}>
        <Text onPress={() => NavigationToDashboard(props)} style={styles.dashboardButtonText}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(176, 176, 176, 0.8)',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 15,
    margin: 20,
    padding: 20,
  },
  profileContainer: {
    marginBottom: 20,
  },
  profilePictureContainer: {
    position: 'relative',
    width: width * 0.4,
    height: width * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#999',
    borderRadius: (width * 0.4) / 2,
  },
  profilePicture: {
    width: '100%',
    height: '100%',
    borderRadius: (width * 0.4) / 2,
  },
  profilePictureText: {
    fontSize: 16,
    color: '#FFF',
  },
  profileInfo: {},
  textBox: {},
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  profileDetails: {
    fontSize: 16,
    marginBottom: 4,
  },
  profileHobbies: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  profileHobbiesList: {
    fontSize: 16,
    marginLeft: 16,
  },
  dashboardButton: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  dashboardButtonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ProfileScreen;
