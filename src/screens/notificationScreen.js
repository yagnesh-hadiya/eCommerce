import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import NotificationData from '../data/notification';

const NotificationScreen = () => {
    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemWrapper}>
                <View style={{ width: '25%' }}>
                    <Image source={item.image} style={styles.itemImage} />
                </View>
                <View style={styles.itemDetail}>
                    <Text style={[styles.shoppingTextTitle, styles.fontSize]}>{item.message}</Text>
                    <Text style={styles.shoppingTextTitle}>{item.date}</Text>
                </View>
                <Text style={{ color: '#1E979A', width: '15%' }}>{item.time}</Text>
            </View>

        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={NotificationData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={1}
                showsVerticalScrollIndicator={false}
            ></FlatList>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        marginTop: 10,
    },

    itemImage: {
        width: '100%',
        height: 100,
    },
    shoppingTextTitle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 18,
        color: '#1E979A',
        paddingBottom: 3,
    },
    shoppingTextName: {
        color: 'gray',
    },
    fontSize: {
        fontSize: 15,
    },
    itemWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 15,
        padding: 5,
    },
    itemDetail: {
        width: '60%',
        paddingHorizontal: 10
    },

})
export default NotificationScreen;