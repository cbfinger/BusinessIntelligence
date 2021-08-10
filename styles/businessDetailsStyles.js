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
        height: '60%',
        flex: 1,
        flexDirection: 'column',
        
    },

    separator:{
        height: 1,
        width: '100%',
        backgroundColor: '#82807F'
    },

    itemView:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        padding: 15
    },

    itemViewLabel:{
        color: '#414754',
        fontSize:16,
    }

})