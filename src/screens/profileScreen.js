import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import HeaderHome from '../components/headerHome';
import Icon from 'react-native-vector-icons/Ionicons';


const ProfileScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.container}>

        <HeaderHome name="Profile" {...props} />

        <View style={styles.nameImage}>
          <View>
            <Text style={styles.name}>Andrew R.Whitesides</Text>
            <Text style={styles.email}>andrew@gmail.com</Text>
          </View>
          <Image style={styles.profileImage} source={require('../assets/image/profile.jpeg')} />
        </View>

        <View style={styles.tabWrapper}>
          <TouchableWithoutFeedback onPress={() => props.navigation.navigate('FavouriteScreen')}>
            <View style={styles.Favourite}>
              <Icon name="heart-outline" size={30} color='#5A5A5A' />
              <Text style={styles.favouriteText}>Favourite</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.Favourite}>
            <Icon name="body-outline" size={30} color='#5A5A5A' />
            <Text style={styles.favouriteText}>Shop Owner</Text>
          </View>
        </View>

        <View style={[styles.tabWrapper, styles.orderWrapper]}>
          <Icon name="cash-outline" size={30} color='#8F8F8F' />
          <Text style={[styles.favouriteText, styles.textBold]}>My Orders</Text>
          <TouchableWithoutFeedback onPress={() => props.navigation.navigate('OrderScreen')}>
            <Text style={styles.favouriteText}>View All</Text>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.profileSetting}>
          <View style={styles.settingWrapper}>
            <Icon name="person-outline" size={30} color='#8F8F8F' />
            <Text style={[styles.favouriteText, styles.textBold]}>Profile settings</Text>
            <Text style={styles.favouriteText}>Edit</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 22 }}>
            <Text style={styles.favouriteText}>Full Name</Text>
            <Text style={[styles.favouriteText, styles.email]}>Andrew R. Whitesides</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 22 }}>
            <Text style={styles.favouriteText}>Email</Text>
            <Text style={[styles.favouriteText, styles.email]}>andrew@gmail.com</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 22 }}>
            <Text style={styles.favouriteText}>Gender</Text>
            <Text style={[styles.favouriteText, styles.email]}>Male</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 22 }}>
            <Text style={styles.favouriteText}>Birth Date</Text>
            <Text style={[styles.favouriteText, styles.email]}>1990-05-12</Text>
          </View>
        </View>

        <View style={styles.profileSetting}>
          <View style={styles.settingWrapper}>
            <Icon name="settings-sharp" size={30} color='#8F8F8F' />
            <Text style={[styles.favouriteText, styles.textBold]}>Account settings</Text>
            <Text style={styles.favouriteText}>Edit</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 20, marginTop: 22 }}>
            <Icon name="map-outline" size={25} color='#859BA9' />
            <Text style={[styles.favouriteText, styles.marginLeft]}>Shipping Address</Text>
            {/* <Text style={[styles.favouriteText, styles.email]}>Andrew R. Whitesides</Text> */}
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 22 }}>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="language-outline" size={25} color='#859BA9' />
              <Text style={[styles.favouriteText, styles.marginLeft]}>Languages</Text>
            </View>
            <View >
              <Text style={[styles.favouriteText, styles.email]}>English</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 20, marginTop: 22 }}>
            <Icon name="help-circle-outline" size={25} color='#859BA9' />
            <Text style={[styles.favouriteText, styles.marginLeft]}>Help & Supports</Text>
            {/* <Text style={[styles.favouriteText, styles.email]}>Male</Text> */}
          </View>

        </View>
      </View>
    </ScrollView>
  );
}
export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10
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
  profileSetting: {
    // marginBottom: 10,
    marginHorizontal: 10,
    paddingVertical: 18,
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
    alignItems: 'center',
  },
  textBold: {
    fontFamily: 'Roboto-Bold',
  },
  orderWrapper: {
    justifyContent: 'space-around',
  },
  settingWrapper: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginLeft: {
    marginLeft: 20
  }
})