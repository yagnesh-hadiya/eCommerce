import React from 'react';
import { View, Text, StyleSheet, TextInput,Image } from 'react-native';

export default Search = () => {
    return (
        <View style={styles.searchContainer}>
            <View style={styles.leftMenu}>
                <Image style={styles.searchIcon} source={require('../assets/icon/search.png')} />
                <TextInput placeholder="Search" style={styles.searchText} />
            </View>
            <View style={styles.leftMenu}>
                <Image style={styles.menuIcon} source={require('../assets/icon/setting.png')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 40,
        marginVertical: 10,
        paddingHorizontal: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        // shadowColor: 'black',
        borderWidth: 1,
        borderColor: 'rgb(225,225,255)',
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2

    },
    searchIcon: {
        height: 30,
        width: 30,
    },
    searchText: {
        fontSize: 22,
        color: '#A2D8DF',
        fontFamily: 'Roboto-Regular',
        paddingLeft: 20,
    },
    menuIcon: {
        height: 25,
        width: 30,
    },
    leftMenu: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})