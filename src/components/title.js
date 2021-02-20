import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const title = ({ iconName, titleName, image ,textStyle}) => {
    
    return (
        <View style={styles.textContainer}>
            {iconName ?
                <Icon name={iconName} size={22} color='#009DB1' /> :
                <Image source={image} style={styles.image} />
            }
            <Text style={[styles.headerText, textStyle]}>{titleName}</Text>
        </View>
    );

}
const styles = StyleSheet.create({
    textContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        // backgroundColor:'pink',
        alignItems: 'center'
    },
    headerText: {
        marginLeft: 25,
        color: '#009DB1',
        fontSize: 25,
        fontFamily: 'Roboto-Bold',
        alignItems: 'center',
    },
    
    image: {
        width: 30,
        height: 30,
    }
})
export default title;