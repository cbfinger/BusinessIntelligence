import React from "react"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    wrapper:{
        height:'100%',
        width: '100%',
        backgroundColor: '#F0EDE4'
    },

    chartWrapper:{
        height:'40%',
        backgroundColor:'black'
    },

    contentWrapper: {
        paddingTop: 15,
        height: '60%',
        flex: 1,
        flexDirection: 'column',
    },

    flatList:{
        width:'100%',
        height:'100%',
        backgroundColor: '#F0EDE4'
    },

    listItem: {
        padding: 10,
        backgroundColor: '#F0EDE4'
    },

    listItemWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-around',
        
    },

    separator:{
        height: 1,
        width: '100%',
        marginTop: 20,
        backgroundColor: '#82807F'
    },

    itemViewLabel:{
        width: '40%',
        color: '#414754',
        fontSize:16,
    },

    itemViewValue:{
        width: '60%',
        color: '#414754',
        fontSize:16,
        textAlign: 'right'
    },

    
})