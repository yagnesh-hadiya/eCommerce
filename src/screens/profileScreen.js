import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import HeaderHome from '../components/headerHome';
import Icon from 'react-native-vector-icons/Ionicons';


const ProfileScreen = () => {
  return (
    <View style={styles.container}>

      <HeaderHome name="Profile" />

      <View style={styles.nameImage}>
        <View>
          <Text style={styles.name}>Andrew R.Whitesides</Text>
          <Text style={styles.email}>andrew@gmail.com</Text>
        </View>
        <Image style={styles.profileImage} source={require('../assets/image/profile.jpeg')} />
      </View>

      <View style={styles.tabWrapper}>
        <View style={styles.Favourite}>
          <Icon name="heart-outline" size={30} color='#5A5A5A' />
          <Text style={styles.favouriteText}>Favourite</Text>
        </View>
        <View style={styles.Favourite}>
          <Icon name="body-outline" size={30} color='#5A5A5A' />
          <Text style={styles.favouriteText}>Shop Owner</Text>
        </View>
      </View>

      <View style={[styles.tabWrapper, styles.orderWrapper]}>
        <Icon name="cash-outline" size={30} color='#8F8F8F' />
        <Text style={styles.favouriteText}>My Orders</Text>
        <Text style={styles.favouriteText}>View All</Text>
      </View>

      <View style={[styles.tabWrapper, styles.orderWrapper]}>
        <Icon name="person-outline" size={30} color='#8F8F8F' />
        <Text style={styles.favouriteText}>Profile settings</Text>
        <Text style={styles.favouriteText}>Edit</Text>
      </View>

      
    </View>
  );
}
export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nameImage: {
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  profileImage: {
    borderRadius: 50,
    height: 70,
    width: 70,
  },
  name: {
    color: '#1E979A',
    paddingVertical: 5,
    fontSize: 22,
    fontFamily: 'Roboto-Bold'
  },
  email: {
    color: '#859BA9',
    fontSize: 15,
    fontFamily: 'Roboto-Regular'
  },
  tabWrapper: {
    // backgroundColor: 'pink',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 8,
  },
  Favourite: {
    alignItems: 'center',
    textAlignVertical: 'center'
  },
  favouriteText: {
    color: '#009DB1',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    alignItems:'center',
  },
  orderWrapper: {
    justifyContent: 'space-around',
  }
})