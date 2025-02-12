
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';


interface LoginViewProps {
    onSignUpPress: () => void;
}


function LoginView({ onSignUpPress }: LoginViewProps) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Please sign in to continue.</Text>
  
        <View style={styles.inputContainer}>
          <Ionicons name="mail" size={20} color="gray" style={styles.icon} />
          <TextInput placeholder="EMAIL" style={styles.input} keyboardType="email-address" />
        </View>
  
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={20} color="gray" style={styles.icon} />
          <TextInput placeholder="PASSWORD" style={styles.input} secureTextEntry />

          <TouchableOpacity onPress={() => console.log("Forgot password pressed")}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
  
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Login pressed")}>
          <Text style={styles.buttonText}>LOGIN</Text>
          <AntDesign name="arrowright" size={24} color="white" />
        </TouchableOpacity>
  
        {/* Clickable sign-up link */}
        <Text style={styles.signUpText}>
          Don’t have an account?{" "}
          <Text style={styles.signUpLink} onPress={onSignUpPress}>
            Sign up
          </Text>
        </Text>
      </View>
    );
  }

export default LoginView;

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
    marginBottom: 5,
    
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
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  signUpText: {
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  signUpLink: {
    color: '#FFA500',
    fontWeight: 'bold',
  },
});
