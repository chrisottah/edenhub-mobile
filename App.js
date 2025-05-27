import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './app/screens/LoginScreen';
import SignupScreen from './app/screens/SignupScreen';
import HomeScreen from './app/screens/HomeScreen';  // Import the HomeScreen

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Optional: Hide header on login
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }} // Optional: Hide header on signup
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: true, title: 'Welcome' }} // Show header on home
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
