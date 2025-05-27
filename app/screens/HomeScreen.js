import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome to EdenHub!</Text>
            <Text style={styles.subheading}>This will be your AI chat interface.</Text>

            <Button
                title="Log Out"
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subheading: {
        fontSize: 16,
        marginBottom: 40,
    },
});
