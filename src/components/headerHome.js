import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default headerHome = (props) => {
    return (
        <View style={styles.headercontainer}>
            <View style={styles.leftMenu}>
                <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                    <Image style={styles.menuIcon} source={require('../assets/icon/menuLeft.png')} />
                </TouchableOpacity>
                <Text style={styles.headerText}>{props.name}</Text>
            </View>
            <View style={styles.leftMenu}>
                <Image style={styles.image} source={require('../assets/icon/trolley.png')} />
                <Image style={styles.image1} source={require('../assets/icon/chat.png')} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
  
    headercontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginVertical: 10
    },
    leftMenu: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        marginLeft: 20,
        color: '#757575',
        fontSize: 25,
        alignContent: 'center',
        fontFamily: 'Roboto-Bold'
    },
    menuIcon: {
        height: 25,
        width: 30,
    },
    image: {
        height: 35,
        width: 35,
    },
    image1: {
        height: 30,
        width: 35,
        marginLeft: 25,
    },

})
