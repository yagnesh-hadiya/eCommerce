import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { trackingOrder } from '../data/myOrder';
import StarRating from '../components/starRating';

const TrackingOrderScreen = (props) => {
    const { item } = props.route.params;
    const renderItem = ({ item }) => {
        return (
            <>
                <View style={styles.orderTracking}>
                    <Text style={[{ backgroundColor: item.status === 'true' ? item.active : item.inActive }, styles.circle]}></Text>
                    <Text style={styles.itemName}>{item.name}</Text>
                </View>
                {item.id === '5' ? <></> :
                    <View style={[{ borderColor: item.status === 'true' ? item.active : item.inActive }, styles.lineWidth]}></View>
                }
            </>
        )
    }
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
            <View style={styles.trackingContainer}>
                <FlatList
                    data={trackingOrder}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    numColumns={1}
                    showsVerticalScrollIndicator={false}
                ></FlatList>
            </View>
            <View style={styles.ratingWrapper}>
                <Text style={styles.ratingTitle}>How would you rate this store?</Text>
                <Text style={styles.ratingText}>Click on the stars below to leave comments</Text>
                <StarRating />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
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
        marginHorizontal: 10
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
        padding: 5,
        marginHorizontal: 10
    },
    itemDetail: {
        width: '60%',
        paddingHorizontal: 10,
    },
    orderTracking: {
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    trackingContainer: {
        marginVertical: 30,
        flex: 1,
    },
    ratingWrapper: {
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10,
    },
    circle: {
        padding: 5,
        borderRadius: 20,
        width: 25,
        height: 25,
        marginHorizontal: 9
    },
    itemName: {
        fontFamily: 'Roboto-Bold',
        color: '#1E979A',
        marginLeft: 15
    },
    lineWidth: {
        borderWidth: 1,
        width: 1,
        height: 50,
        marginLeft: 20
    },
    ratingTitle: {
        color: '#1E979A',
        fontFamily: 'Roboto-Bold'
    },
    ratingText: {
        color: '#1E979A',
        fontFamily: 'Roboto-Regular'
    }
})
export default TrackingOrderScreen;