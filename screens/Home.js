import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform,  TouchableOpacity } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.titleBar}><Text style={styles.text}>ISS Tracker App </Text></View>


                <TouchableOpacity><Text>ISS Location</Text></TouchableOpacity>


                <TouchableOpacity><Text>Meteors</Text></TouchableOpacity>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "black"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginTop:50,
        marginRight:50,
        borderRadius:30,
        backgroundColor:"white"

    }
})