import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import Review from '../components/review';
import ButtonTab from '../common/buttonTab';
import Detail from '../components/detail';
import Icon from 'react-native-vector-icons/Ionicons';

const BrandItemScreen = (props) => {
    const item = props.route.params;
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={styles.imageContainer}>
                    <TouchableWithoutFeedback onPress={()=>props.navigation.goBack()}>
                        <Icon name="chevron-back-outline" size={30} color='#fff' />
                    </TouchableWithoutFeedback>
                    <Image source={item.item.logo} style={styles.image} />

                </View>

                <ButtonTab  name1="Home" name2="Products" name3="Review" file2={<Detail />} file1={<Detail />} file3={<Review />} />

            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        backgroundColor: 'rgb(85,220,225)',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    image: {
        tintColor: '#fff',
        // alignSelf: 'center',


    }
})
export default BrandItemScreen;