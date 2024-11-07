import { Button, StyleSheet } from "react-native";
import { primaryColor, secondColor } from '../includs/variables'

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
        justifyContent: 'space-between'
    },
    cardDirectionColoum:{
        flexDirection: 'coloum',
    },
    cardDirectionRow:{
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: primaryColor
    },
    subtitle: {
        marginTop:10,
        fontSize: 18,
        color: secondColor
    },
    subtitleNoMargin: {
        fontSize: 18,
        color: 'black'
    },
    description: {
        fontSize: 18,
        color: 'black',
        // maxHeight: 36,
    },
    descriptionBold: {
        fontSize: 18,
        color: 'black',
        fontWeight:'bold'
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
    },
    borrowedFlag:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'top',
        // paddingTop: 10,
        color:primaryColor
    },
    buttonContainer:{
        padding:20
    },
    imageContainer: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageSmall: {
        marginHorizontal:20,
        width: 70,
        height: 100,
        resizeMode: 'cover',
      },
      imageLarge: {
        width: 200,
        height: 280 ,
        resizeMode: 'cover',
        marginVertical:10,
      }
});