import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default CheckOut = () => {
    return (
        <View style={styles.container}>
            <View style={styles.shoppingWrapper}>
                <View >
                    <Icon name="cart-outline" size={30} color="#009DB0" />
                </View>
                <View style={styles.textWrapper}>
                    <Text style={styles.shopText}>Payment Mode</Text>
                    <Text style={styles.content}>Select Your prefered payment mode</Text>
                </View>
            </View>

            <View style={styles.visaWrapper}>
                <View style={styles.visabackWrapper}>
                    <View style={styles.TextContainer}>
                        <Text style={{ color: 'purple', fontSize: 20, fontFamily: 'Roboto-Bold' }}>VISA</Text>
                        <View style={styles.cardWrapper}>
                            <Text style={styles.text}>CARD NUMBER</Text>
                            <Text style={styles.text}>8154 3265 0045 1582</Text>
                        </View>

                        <View style={styles.expdate}>
                            <Text style={styles.text}>EXPIRY DATE</Text>
                            <Text style={styles.text}>CVV</Text>
                        </View>

                        <View style={[styles.expdate, { marginTop: 10 }]}>
                            <Text style={styles.text}>07/21</Text>
                            <Text style={styles.text}>007</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity>
                    <View style={styles.paymentWrapper}>
                        <View style={styles.paymentBack}>
                            <FontAwesome name="paypal" size={30} color="blue" />
                            <Text style={styles.paypal}>PAYPAL</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.paymentWrapper}>
                        <View style={styles.paymentBack}>
                            <FontAwesome name="apple" size={30} color="#000" />
                            <Text style={styles.paypal}>APPLE</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.btnWrapper}>
                <View style={styles.checkoutStyle}>
                    <View style={styles.check}>
                        <Text style={styles.checkText}>Confirm Payment</Text>
                        <Text style={styles.textprice}>$55.36</Text>
                    </View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    shoppingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: 'green',
        fontFamily: 'Roboto-Bold',
        fontSize: 15
    },
    textWrapper: {
        marginLeft: 25,
        paddingBottom: 20
    },
    shopText: {
        fontFamily: 'Rubik-Bold',
        fontSize: 20,
        color: '#009db0',

    },
    paypal: {
        fontFamily: 'Roboto-Bold',
        fontSize: 15,
        color: 'black',
        marginLeft: 20
    },
    content: {
        fontFamily: 'Rubik-Regular',
        fontSize: 15,
        marginTop: 5
    },
    visaWrapper: {
        padding: 20
    },
    visabackWrapper: {
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor: 'black',
        shadowOpacity: 0.05,
        shadowRadius: 20,
        elevation: 5
    },
    TextContainer: {
        padding: 20
    },
    cardWrapper: {
        marginVertical: 20,
    },
    expdate: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    checkText: {
        paddig: 20,
        alignItems: 'center',

    },
    paymentWrapper: {
        padding: 10,
        marginTop: 20
    },
    paymentBack: {
        backgroundColor: '#fff',
        padding: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 20

    },

    btnWrapper: {
        flex: 1
    },
    checkoutStyle: {
        backgroundColor: '#009db0',
        borderRadius: 20
    },
    check: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30
    },
    checkText: {
        fontFamily: 'Roboto-Medium',
        fontSize: 18,
        color: 'white'

    },
    textprice: {
        fontFamily: 'Roboto-Medium',
        fontSize: 18,
        color: 'white'

    }
});