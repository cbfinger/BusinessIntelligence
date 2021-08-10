import React from "react"
import { StyleSheet } from "react-native"

export default StyleSheet.create({

    title: {
        backgroundColor: '#D58469'
    },

    flatList: {
        paddingTop: 10,
        overflow: 'hidden',
        backgroundColor: '#BBC0B6'
    },

    listItem: {
        marginLeft: 10,
        marginBottom: 10,
        marginRight: -10,
        borderRadius: 10,
        backgroundColor: '#F0EDE4'
    },

    listItemContent :{
        marginLeft: 10,
        backgroundColor: '#F0EDE4'
    },

    listItemTitle:{
        fontSize:20,
        color: '#414754'
    },

    listItemSubtileWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-around'
    },

    listItemSubtitle:{
        height: '100%',
        width: '50%',
        marginTop: 8,
        fontSize: 12,
        color: '#82807F',
    },

    revItemNegative:{
        marginRight: 15,
        height: '100%',
        width: '50%',
        fontSize:18,
        color: '#d35358',
        textAlign: 'right',
    },

    revItemPositive:{
        marginRight: 15,
        height: '100%',
        width: '50%',
        fontSize:18,
        color: '#235a47',
        textAlign: 'right',
    }





})