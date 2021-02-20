import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '../components/slider';
import { productImages } from '../data/data';
import Product from '../components/product';
import Detail from '../components/detail';
import Review from '../components/review';

export default ProductScreen = () => {
    const [productType, setProductType] = useState(0);

    const viewItem = () => {
        if (productType === 0) {
            return <Product />
        } else if (productType === 1) {
            return <Detail />
        } else if (productType === 2) {
            return <Review />
        }
    }

    const [count, setCount] = useState(0);
    const add = () => { setCount(count + 1) }
    const minus = () => { count < 1 ? 0 : setCount(count - 1) }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1,paddingHorizontal:10 }}>
                <View style={styles.sliderContainer}>
                    <Slider imageData={productImages} />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableWithoutFeedback activeOpacity={0.8} onPress={() => setProductType(0)}>
                        <Text style={[styles.buttonText, { backgroundColor: productType === 0 ? '#009DB1' : '#fff', color: productType === 0 ? '#fff' : '#009DB1' }]}>Product</Text>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback activeOpacity={0.8} onPress={() => setProductType(1)} >
                        <Text style={[styles.buttonText, { backgroundColor: productType === 1 ? '#009DB1' : '#fff', color: productType === 1 ? '#fff' : '#009DB1' }]}>Details</Text>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback activeOpacity={0.8} onPress={() => setProductType(2)} >
                        <Text style={[styles.buttonText, { backgroundColor: productType === 2 ? '#009DB1' : '#fff', color: productType === 2 ? '#fff' : '#009DB1' }]}>Review</Text>
                    </TouchableWithoutFeedback>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        {viewItem()}
                    </View>
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <View style={styles.footerLeft}>
                    <Icon name="heart-outline" size={30} color='#fff' />
                </View>
                <View style={styles.footerRight}>
                    <Text style={styles.footerText}>
                        Add to cart
                    </Text>
                    <View style={styles.iconContainer} >
                        <TouchableWithoutFeedback onPress={() => minus()}>
                            <Icon name="remove-circle-outline" size={30} color='white' />
                        </TouchableWithoutFeedback>
                        <Text style={styles.footerText}>{count}</Text>
                        <TouchableWithoutFeedback onPress={() => add()}>
                            <Icon name="add-circle-outline" size={30} color='white' />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginHorizontal:10
    },
    sliderContainer: {
        backgroundColor: '#fff',
    },
    buttonContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    buttonText: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#009DB1',
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 15,
        fontFamily: 'Roboto-Bold',
        color: '#fff',
        // backgroundColor:'#009DB1'
    },
    footer: {
        flexDirection: 'row',
        backgroundColor: '#FEFEFE',
        padding: 10,
        justifyContent: 'space-between'
    },
    footerLeft: {
        backgroundColor: '#009DB1',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 20
    },
    footerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#009DB1',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 20,
        justifyContent: 'space-between',
    },
    footerText: {
        fontSize: 15,
        color: '#fff',
        fontFamily: 'Roboto-Medium',
    },
    iconContainer: {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
})