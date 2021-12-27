import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
export default function CommonLayouts() {
return (
<View style={styles.container}>
    <View style={styles.item1}>
        <Text style={styles.text}>Slider</Text>
    </View>
</View>
)
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'column', 
    flexWrap: 'wrap'
    },
    item1: {
    height: 200,
    width: '100%',
    backgroundColor: 'blue',
    justifyContent: 'center', 
    text: { color: '#ffffff', fontSize: 20 }
    },
    })