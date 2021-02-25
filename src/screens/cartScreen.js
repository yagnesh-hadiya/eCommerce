import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CartData from '../data/Cart';

const CartScreen = () => {

    const [count, setCount] = useState(0);
    const add = () => { setCount(count + 1) }
    const minus = () => { count < 1 ? 0 : setCount(count - 1) }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemWrapper}>
                <View style={{ width: '25%' }}>
                    <Image source={item.image} style={styles.itemImage} />
                </View>
                <View style={styles.itemDetail}>
                    <Text style={[styles.shoppingTextTitle, styles.fontSize]}>{item.itemName}</Text>
                    <Text style={styles.shoppingTextTitle}>${item.price}</Text>
                </View>
                <View style={{ width: '10%', alignItems: 'center' }}>
                    <TouchableWithoutFeedback onPress={() => minus()}>
                        <Icon name="remove-circle-outline" size={30} color='#1E979A' />
                    </TouchableWithoutFeedback>
                    <Text style={styles.footerText}>{count}</Text>
                    <TouchableWithoutFeedback onPress={() => add()}>
                        <Icon name="add-circle-outline" size={30} color='#1E979A' />
                    </TouchableWithoutFeedback>
                </View>
            </View>

        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.shoppingWrapper}>
                <View>
                    <Image style={styles.image} source={require('../assets/icon/trolley.png')} />
                </View>
                <View >
                    <Text style={styles.shoppingTextTitle}>Shopping Cart</Text>
                    <Text style={styles.shoppingTextName}>Verify Your Quantity and click checkout</Text>
                </View>
            </View>
            <FlatList
                data={CartData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={1}
                showsVerticalScrollIndicator={false}
            ></FlatList>
            <View style={styles.footer}>
                <View style={styles.subTotal}>
                    <Text>SubTotal</Text>
                    <Text>$50.23</Text>
                </View>
                <View style={styles.subTotal}>
                    <Text>TAX (20%)</Text>
                    <Text>$16.13</Text>
                </View>
                <View style={styles.subTotal}>
                    <Text>checkout</Text>
                    <Text>$55.96</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
    },
    shoppingWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        alignItems: 'center'
    },
    image: {
        width: 35,
        height: 35,
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
        width: '65%',
        paddingHorizontal: 10
    },
    subTotal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical:5,
    }
})
export default CartScreen;