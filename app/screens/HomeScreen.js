import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleSend = async () => {
        try {
            const res = await axios.post('https://edenhub.io/api/chat', {
                message: message,
            });

            setResponse(res.data.response); // Adjust based on your API shape
            setMessage('');
        } catch (error) {
            console.error('Chat error:', error.message);
            setResponse('Error: Unable to connect to AI server.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome to EdenHub!</Text>
            <Text style={styles.subheading}>Chat with your AI below.</Text>

            <TextInput
                style={styles.input}
                placeholder="Type your message..."
                value={message}
                onChangeText={setMessage}
            />
            <Button title="Send" onPress={handleSend} />

            <ScrollView style={styles.responseBox}>
                <Text>{response}</Text>
            </ScrollView>

            <Button
                title="Log Out"
                color="red"
                onPress={() => navigation.replace('Login')}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 60,
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subheading: {
        fontSize: 16,
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    responseBox: {
        marginTop: 20,
        backgroundColor: '#f4f4f4',
        padding: 10,
        borderRadius: 5,
        flex: 1,
    },
});
