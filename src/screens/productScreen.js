import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '../components/slider';
import { productImages } from '../data/data';
import Product from '../components/product';
import Review from '../components/review';
import ButtonTab from '../common/buttonTab';
import Detail from '../components/detail';


export default ProductScreen = (props) => {
    const { item } = props.route.params;

    const [count, setCount] = useState(0);
    const add = () => { setCount(count + 1) }
    const minus = () => { count < 1 ? 0 : setCount(count - 1) }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={styles.sliderContainer}>
                    <Slider imageData={productImages} />
                </View>

                <ButtonTab {...props} name1="Product" name2="Details" name3="Review" file1={<Product test={item} />} file2={<Detail />} file3={<Review />} />

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