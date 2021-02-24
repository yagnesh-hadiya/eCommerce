import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';


const ButtonTab = ({file1, file2, file3, name1, name2, name3}) => {

    const [productType, setProductType] = useState(0);

    const viewItem = () => {
        if (productType === 0) {
            return file1
        } else if (productType === 1) {
            return file2
        } else if (productType === 2) {
            return file3
        }
    }
    return (
        <>
            <View style={styles.buttonContainer}>
                <TouchableWithoutFeedback activeOpacity={0.8} onPress={() => setProductType(0)}>
                    <Text style={[styles.buttonText, { backgroundColor: productType === 0 ? '#009DB1' : '#fff', color: productType === 0 ? '#fff' : '#009DB1' }]}>{name1}</Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback activeOpacity={0.8} onPress={() => setProductType(1)} >
                    <Text style={[styles.buttonText, { backgroundColor: productType === 1 ? '#009DB1' : '#fff', color: productType === 1 ? '#fff' : '#009DB1' }]}>{name2}</Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback activeOpacity={0.8} onPress={() => setProductType(2)} >
                    <Text style={[styles.buttonText, { backgroundColor: productType === 2 ? '#009DB1' : '#fff', color: productType === 2 ? '#fff' : '#009DB1' }]}>{name3}</Text>
                </TouchableWithoutFeedback>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    {viewItem()}
                </View>
            </ScrollView>
        </>
    );
}
const styles = StyleSheet.create({
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
    },

})
export default ButtonTab;