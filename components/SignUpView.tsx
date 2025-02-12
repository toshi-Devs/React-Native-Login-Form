import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';


interface SignUpViewProps {
    onSignInPress: () => void;
}

function SignUpView({ onSignInPress }: SignUpViewProps) {
    return (
      <View style={styles.container}>

        <AntDesign name="arrowleft" size={24} color="Gray" style={styles.ArrowIcon} onPress={onSignInPress} />
        
        <Text style={styles.title}>Create Account</Text>
  
        <View style={styles.inputContainer}>
          <AntDesign name="user" size={20} color="gray" style={styles.icon} />
          <TextInput placeholder="Full Name" style={styles.input} />
        </View>
  
        <View style={styles.inputContainer}>
          <Ionicons name="mail" size={20} color="gray" style={styles.icon} />
          <TextInput placeholder="EMAIL" style={styles.input} keyboardType="email-address" />
        </View>
  
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={20} color="gray" style={styles.icon} />
          <TextInput placeholder="PASSWORD" style={styles.input} secureTextEntry />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={20} color="gray" style={styles.icon} />
          <TextInput placeholder="CONFIRM PASSWORD" style={styles.input} secureTextEntry />
        </View>
  
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Sign Up pressed")}>
          <Text style={styles.buttonText}>SIGN UP</Text>
          <AntDesign name="arrowright" size={24} color="white" />
        </TouchableOpacity>
  
        {/* Clickable sign-in link */}
        <Text style={styles.signInText}>
          Already have an account?{" "}
          <Text style={styles.signInLink} onPress={onSignInPress}>
            Sign In
          </Text>
        </Text>
      </View>
    );
  }

export default SignUpView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 15,
    
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    marginRight: 10,
  },
  ArrowIcon: {
    marginBottom: 20,
    flex: 0.2,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginRight: '5%',
    color: 'gray',
    fontWeight: 'bold',
  },
  button: {
        backgroundColor: 'orange',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 30,
        paddingVertical: 15,
        alignSelf: 'flex-end',
        marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  signInText: {
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  signInLink: {
    color: '#FFA500',
    fontWeight: 'bold',
  },
});
