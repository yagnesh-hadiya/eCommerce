import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { BrandData } from '../data/Brand';
import Icon from 'react-native-vector-icons/Ionicons';

export default BrandItem = (props) => {
    // console.log(props)
    const renderCategoryItem = ({ item }) => {
        return (
            <View >
                <TouchableOpacity key={item.id}  activeOpacity={0.8} onPress={() => props.navigation.navigate('ProductScreen')}>
                    <Image source={item.logo} style={styles.itemImage} backgroundColor={item.color} />
                    <View style={styles.infoContainer}>
                        <Text numberOfLines={1} style={styles.infoName}>
                            {item.brand}
                        </Text>
                        <View style={styles.infoSales}>
                            <View>
                                <Text style={styles.sale}>{item.product} Products</Text>
                            </View>
                            <View style={styles.ratingContainer}>
                                <Icon name="star" color="gold" size={15} style={styles.ratingIcon} />
                                <Text style={styles.rating}>{item.rating} </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View >
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <FlatList
                    data={BrandData}
                    renderItem={renderCategoryItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fAFAFA',
        marginHorizontal: 10,

    },
    itemContainer: {
        // backgroundColor:'red'
        // marginVertical: 10,  
        
    },
    itemImage: {
        // width: 150,
        marginHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10,
        tintColor:'#fff',
        // paddingTop:50,
    },
    infoContainer: {
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginHorizontal: 15,
        width: 140,
        borderRadius: 10,
        marginTop: -60

    },
    infoName: {
        fontFamily: 'Roboto-Bold',
        color: '#009DB1'
    },
    infoSales: {
        flexDirection: 'row',
        paddingVertical: 5,
        justifyContent: 'space-between'
    },
    sale: {
        color: '#009DB1'
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingIcon: {
        paddingRight: 5,
    },
    rating: {
        color: '#009DB1',
        fontFamily: 'Roboto-Bold'
    },

})