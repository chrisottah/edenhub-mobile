import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleMockLogin = () => {
        if (email.trim() === '' || password.trim() === '') {
            Alert.alert('Missing Info', 'Please enter both email and password.');
            return;
        }

        // Simulate successful login
        Alert.alert('Login Successful (Mock)', `Welcome, ${email}!`);
        navigation.replace('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login (Mock Mode)</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={setPassword}
                value={password}
            />
            <Button title="Login" onPress={handleMockLogin} />

            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.linkText}>Don't have an account? Sign up</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    heading: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 15,
        padding: 10,
        borderRadius: 5,
    },
    linkText: {
        color: 'blue',
        marginTop: 15,
        textAlign: 'center',
    },
});
