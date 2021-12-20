import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return ( 
        <View style = { styles.container } >
        <Text style = { styles.textbold }>Supernova</Text>
        <Text > Supernova </Text>
        <StatusBar style = "auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#339999',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textbold:{
        fomtSize: 20,
        fontWeight: 'bild',
        color:'#fff',
    },
});