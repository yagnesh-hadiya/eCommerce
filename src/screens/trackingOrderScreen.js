import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TrackingOrderScreen = (props) => {
    const { item } = props.route.params;
    return (
        <View style={styles.container}>
            <Text style={[styles.shoppingTextTitle, styles.orderid]}>Order Id : {item.orderid}</Text>
            <View style={styles.itemWrapper}>
                <View style={{ width: '20%' }}>
                    <Image source={item.image} style={styles.itemImage} />
                </View>
                <View style={styles.itemDetail}>
                    <Text style={[styles.shoppingTextTitle, styles.fontBold]}>{item.name}</Text>
                    <Text style={styles.shoppingTextTitle}>{item.status}</Text>
                    <Text style={styles.shoppingTextTitle}>{item.date}</Text>
                </View>
                <View style={styles.rightInfo}>
                    <Text style={[styles.shoppingTextTitle, styles.fontBold]}>$ {item.price}</Text>
                    <Text style={[styles.qty, styles.shoppingTextTitle]}>X {item.qty}</Text>
                    <Text style={styles.shoppingTextTitle}>{item.time}</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        marginTop: 10,
    },
    itemImage: {
        width: '100%',
        height: 100,
    },
    shoppingTextTitle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 15,
        color: '#1E979A',
        marginBottom: 5,
    },
    fontBold: {
        fontSize: 18,
        fontFamily: 'Roboto-Bold',
    },
    orderid: {
        fontFamily: 'Roboto-Bold',
    },
    rightInfo: {
        width: '20%',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    qty: {
        borderColor: '#1E979A',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 5,
        paddingVertical: 3
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
        paddingHorizontal: 10,
    },
})
export default TrackingOrderScreen;