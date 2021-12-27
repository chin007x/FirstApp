//common-styles.js ต้องเป็นไฟล์ JavaScript
import { StyleSheet } from 'react-native-web';

const commonStyles = StyleSheet.create({
container: { 
    padding: 20 
},
    TextTainer: {
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
    },
    TextPlain: {
        fontSize: 16 
    }
})
export default commonStyles

