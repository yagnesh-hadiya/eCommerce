import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { flashSaleData } from '../data/data';
import Icon from 'react-native-vector-icons/Ionicons';

const FavouriteScreen = (props) => {
    const renderCategoryItem = ({ item }) => {
        return (
            <View >
                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('ProductScreen', { item: item })}>
                    <Image source={item.image} style={styles.itemImage} key={item.id} />

                    <View style={styles.infoContainer}>
                        {item.name ? (
                            <Text numberOfLines={1} style={styles.infoName}>
                                {item.name}
                            </Text>
                        ) :
                            <Text>not found</Text>}
                        <View style={styles.infoSales}>
                            <View>
                                <Text style={styles.sale}>{item.sales} Sales</Text>
                            </View>
                            <View style={styles.ratingContainer}>
                                <Icon name="star" color="gold" size={15} style={styles.ratingIcon} />
                                <Text style={styles.rating}>{item.rating} </Text>
                            </View>
                        </View>
                        {item.soldPercentage ?
                            <View >
                                <Text style={{ color: '#009DB1' }}>{item.soldPercentage} Available</Text>
                            </View> : <></>
                        }
                    </View>
                </TouchableOpacity>
            </View >
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <FlatList
                    data={flashSaleData}
                    renderItem={renderCategoryItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
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
    itemImage: {
        width: 150,
        marginHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
    infoContainer: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 15,
        width: 140,
        borderRadius: 10,
        marginTop: -50
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
export default FavouriteScreen;