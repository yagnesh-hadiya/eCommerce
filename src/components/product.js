import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colorData, sizeData } from '../data/data';

const Product = (props) => {
    const {test}=props;
    // console.log(test.item)
    const [stateColor, setStateColor] = useState('1');

    const renderColorData = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => { setStateColor(item.id) }} >
                <Text  style={stateColor === item.id ? { ...styles.circleActiveColor, backgroundColor: item.color } : { ...styles.circleColor, backgroundColor: item.color }}></Text>
            </TouchableOpacity>
        )
    }
    const [state, setState] = useState('1');

    const renderSizeData = ({ item }) => {
        return (
            <>
                <TouchableOpacity onPress={() => { setState(item.id) }} >
                    <Text style={state === item.id ? styles.btnActive : styles.sizeBox}>{item.name}</Text>
                </TouchableOpacity>
            </>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.productContainer}>
                <View style={styles.productInfo}>
                    <Text style={styles.ProductName}>{test.name}</Text>
                    <View style={styles.rating}>
                        <Text style={styles.ratingText}>{test.rating}</Text>
                        <Icon name="star" size={15} color='#fff' />
                    </View>
                </View>
                <View style={styles.productInfo}>
                    <View style={styles.priceConatiner}>
                        <Text style={styles.price}>${test.price}</Text>
                        <Text style={styles.oldPrice}>${test.mrp}</Text>
                    </View>
                    <Text style={styles.sales}>{test.sales} Sales</Text>
                </View>
            </View>
            <View style={styles.colorContainer}>
                <View style={styles.colorTitle}>
                    <Text style={styles.selectColor}>Select Color</Text>
                    <Text style={styles.sales}>Clear all</Text>
                </View>
                <FlatList
                    data={colorData}
                    keyExtractor={item => item.id}
                    renderItem={renderColorData}
                    horizontal={true}
                />
            </View>
            <View style={styles.colorContainer}>
                <View style={styles.colorTitle}>
                    <Text style={styles.selectColor}>Select Size</Text>
                    <Text style={styles.sales}>Clear all</Text>
                </View>
                <FlatList
                    data={sizeData}
                    keyExtractor={item => item.id}
                    renderItem={renderSizeData}
                    horizontal={true}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({

    container: {
    },
    productContainer: {
        // backgroundColor: '#FEFEFE',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    productInfo: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 3,

    },
    ProductName: {
        color: '#009DB1',
        fontSize: 24,
        fontFamily: 'Roboto-Bold',
    },
    priceConatiner: {
        flexDirection: 'row'
    },
    price: {
        color: '#089BB6',
        fontSize: 22,
        fontFamily: 'Roboto-Bold',
    },
    oldPrice: {
        textDecorationLine: 'line-through',
        marginLeft: 5,
        fontSize: 22,
        fontFamily: 'Roboto-Regular',
        color: '#BAC6C6',
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#19A5BA',
        padding: 5,
        borderRadius: 20,
        justifyContent: 'space-between',
        width: 50,
    },
    ratingText: {
        color: '#fff',
        fontFamily: 'Roboto-Bold',
        fontSize: 15
    },
    sales: {
        color: '#089BB6',
        fontFamily: 'Roboto-Regular',
    },
    colorContainer: {
        backgroundColor: '#FEFEFE',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginBottom: 10
    },
    colorTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    selectColor: {
        color: '#009DB1',
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
    },
    circleColor: {
        borderRadius: 50,
        height: 45,
        width: 45,
        marginRight: 7
    },
    circleActiveColor: {
        borderRadius: 50,
        height: 45,
        width: 45,
        marginRight: 7,
        borderColor: '#009DB1',
        borderWidth: 3,
    },
    sizeBox: {
        borderRadius: 10,
        color: '#009DB1',
        borderColor: '#009DB1',
        height: 43,
        width: 50,
        marginRight: 7,
        borderWidth: 1,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    btnActive: {
        borderRadius: 10,
        color: '#009DB1',
        borderColor: '#009DB1',
        height: 43,
        width: 50,
        marginRight: 7,
        borderWidth: 3,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
})
export default Product;