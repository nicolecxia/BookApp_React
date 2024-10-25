import { Button, StyleSheet } from "react-native";
import { primaryColor, secondColor } from './variables'

export default StyleSheet.create({
    cardTitle:{
        marginTop:10,
        marginHorizontal:10,
        fontSize: 18,
        fontWeight: 'bold',
        color: secondColor
    },
    card: {
        backgroundColor: '#fff',
        marginTop: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: primaryColor
    },
    subtitle: {
        marginTop:20,
        fontSize: 18,
        color: secondColor
    },
    subtitleNoMargin: {
        fontSize: 18,
        color: secondColor
    },
    description: {
        fontSize: 14,
        color: secondColor,
        maxHeight: 36,
    },
    switch: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    switchText: {
        fontSize: 12,
        opacity: 0.5,
        marginLeft: 5
    },
    textContainer: {
        marginRight: 20,
        flex: 1
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10
    }
});