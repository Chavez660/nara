import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const Dashboard = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Mason',
      company: 'Semael',
      location: 'Mindanao Cagayan de Oro',
      description: 'We are looking for Muscle Men',
    },
    {
      id: 2,
      title: 'Ocean cleaning',
      company: 'Team Seas',
      location: 'Luzon',
      description: 'We are looking for people to join us to clean the seas',
    },
    {
      id: 3,
      title: 'Baby sitting my baby',
      company: 'Gonzales Family',
      location: 'Visaya',
      description: 'We are looking for people to babysit my child. Negotiate the pay in chat.',
    },
    {
      id: 4,
      title: 'Car Electrician',
      company: 'Allison Corp.',
      location: 'Mindanao, Cagayan de Oro',
      description: 'I am looking for fixing wirings in Jeepneys',
    },
    {
      id: 5,
      title: 'Plant Manager',
      company: 'Regent Corp.',
      location: 'Visayas',
      description: 'We are looking for people to hire in our company!',
    },
    {
      id: 6,
      title: 'Please do my Homework',
      company: 'Pacheco',
      location: 'Mindanao',
      description: 'We can negotiate the price in chat',
    },
    // add more jobs here
  ]);
  const [isHidden, setIsHidden] = useState(false);

  const handleSearch = (text) => {
    setSearchTerm(text);
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleLogout = () => {
    // Replace with your actual logout logic
    // For example: navigate to the logout screen
    navigation.navigate('Logout');
  };

  const NavigationToProfile = () => {
    navigation.navigate('Profile');
  };

  const NavigationToMessages = () => {
    navigation.navigate('Messages');
  };

  const NavigationToStatus = () => {
    navigation.navigate('Status');
  };

  const NavigationToReview = () => {
    navigation.navigate('Review');
  };

  return (
    <View style={styles.dashboardContainer}>
      <View style={styles.sidebar}>
        <Button title="Profile" onPress={NavigationToProfile} />
        <Button title="Messages" onPress={NavigationToMessages} />
        <Button title="Status" onPress={NavigationToStatus} />
        <Button title="Review" onPress={NavigationToReview} />
        <Button title="Logout" onPress={handleLogout} />
      </View>
      <View style={[styles.mainContent, isHidden && styles.hidden]}>
        <View style={styles.jobBoard}>
          <Text style={styles.jobBoardTitle}>Job Board</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search jobs"
            onChangeText={handleSearch}
            value={searchTerm}
          />
          <FlatList
            data={filteredJobs}
            keyExtractor={(job) => job.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.jobItem}>
                <Text style={styles.jobTitle}>{item.title}</Text>
                <Text style={styles.jobCompany}>{item.company}</Text>
                <Text style={styles.jobLocation}>{item.location}</Text>
                <Text style={styles.jobDescription}>{item.description}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = {
  dashboardContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: 120,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  hidden: {
    display: 'none',
  },
  jobBoard: {
    flex: 1,
  },
  jobBoardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    marginBottom: 10,
  },
  jobItem: {
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  jobCompany: {
    fontSize: 14,
  },
  jobLocation: {
    fontSize: 14,
  },
  jobDescription: {
    fontSize: 14,
    marginTop: 5,
  },
};

export default Dashboard;
