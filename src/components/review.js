import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { ReviewData } from '../data/reviews';
import Icon from 'react-native-vector-icons/Ionicons';
import Title from '../components/title';

export default product = () => {
    const renderReviewItem = ({ item }) => {
        return (
            <>
                <View style={styles.profileContainer}>
                    <Image source={item.profile} style={styles.image} />
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>{item.name}</Text>
                        <View style={styles.calendar}>
                            <Icon name="calendar-outline" size={30} color='#A2D8DF' />
                            <Text style={styles.calendarText}>{item.date}</Text>
                        </View>
                    </View>
                    <View style={styles.rating}>
                        <Text style={styles.ratingText}>{item.rating}</Text>
                        <Icon name="star" size={20} color='#fff' />
                    </View>
                </View>
                <Text style={styles.desc}>
                    In this industry a customer relies upon & trusts, the supplier in the quality of the goods being supplied. We empathize and respect the trust by ensuring to deliver desired products to build a long term win-win relation.
            </Text>
            </>
        )
    }
    return (
        <View style={styles.container}>
            <Title iconName="receipt-outline" titleName="Product Reviews" textStyle={styles.title} />
            <FlatList
                data={ReviewData}
                renderItem={renderReviewItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        // marginVertical:10
    },
    title: {
        fontSize: 22
    },
    profileContainer: {
        // backgroundColor: 'pink',
        flexDirection: 'row',
        paddingVertical: 10,
        marginTop:20,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    image: {
        borderRadius: 50,
        height: 75,
        width: 75,
    },
    nameContainer: {
        // paddingVertical: 5,
        // paddingHorizontal: 10
    },
    name: {
        color: '#1E979A',
        fontSize: 22,
        fontFamily: 'Roboto-Bold',
        marginBottom: 5

    },
    calendar: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    calendarText: {
        color: '#A2D8DF',
        marginLeft: 5,
        fontSize: 16
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#19A5BA',
        padding: 10,
        borderRadius: 20,
        justifyContent: 'space-between',
        width: 75,
    },
    ratingText: {
        color: '#fff',
        fontFamily: 'Roboto-Bold',
        fontSize: 18
    },
    desc: {
        // backgroundColor: '#fafafa',
        color: '#009DB1',
        padding: 10,
        fontSize: 15,
        textAlign: 'justify',
        fontFamily: 'roboto-Medium',
        borderBottomWidth:2,
        borderColor:'#ECECEC',
        paddingBottom:20
    },

})
