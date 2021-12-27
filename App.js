import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Styles from './common-styles';
import ColumnItems from './column-items';
import CLayouts from './common-layous';

export default function App() {
    return ( 
        <View style = { Styles.container } >
            <Text style = { Styles.TextTainer }>React Native</Text>
            <Text > Supernova </Text>
            <CLayouts/>
            <StatusBar style = "auto" />
        </View>
    );
}
/*
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
});*/