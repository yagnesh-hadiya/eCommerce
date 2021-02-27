import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Title from '../components/title';

const drawerContent = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require('../assets/image/profile.jpeg')} style={styles.image} />
        <Text style={styles.name}>Andrew R. Whitesides</Text>
        <Text style={styles.email}>andrew@gmail.com</Text>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.navigate('Home')}>
          <Title
            iconName={'home-outline'}
            titleName={'Home'}
            textStyle={styles.title} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.navigate('NotificationScreen')}>
          <Title
            iconName={'notifications-outline'}
            titleName={'Notification'}
            textStyle={styles.title} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.navigate('OrderScreen')}>
          <Title
            iconName={'documents-outline'}
            titleName={'My Orders'}
            textStyle={styles.title} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.navigate('FavouriteScreen')}>
          <Title
            iconName={'star-outline'}
            titleName={'wish List'}
            textStyle={styles.title} />
        </TouchableOpacity>
      </View>

      <Text style={styles.menuTitle}>Applications and Preferences</Text>
      <View style={styles.menu}>
        <Title iconName={'alert-circle-outline'} titleName={'Help & Support'} textStyle={styles.title} />
        <Title iconName={'language-outline'} titleName={'Languages'} textStyle={styles.title} />
        <Title iconName={'settings-outline'} titleName={'Setting'} textStyle={styles.title} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
  },
  profileContainer: {
    backgroundColor: '#E3E9EC',
    height: 160,
    paddingLeft: 20,
    paddingTop: 15,

  },
  image: {
    borderRadius: 50,
    height: 70,
    width: 70,
  },
  name: {
    color: '#1E979A',
    paddingVertical: 5,
    fontSize: 19,
    fontFamily: 'Roboto-Bold'
  },
  email: {
    color: '#859BA9',
    fontSize: 15,
    fontFamily: 'Roboto-Regular'
  },
  menu: {
    paddingLeft: 10,
    // backgroundColor: 'gray',
  },
  menuTitle: {
    color: '#009DB1',
    marginHorizontal: 20,
    fontSize: 16,
    borderTopWidth: 1,
    borderColor: '#859BA9',
    paddingVertical: 15,
    marginTop: 15
  },
  title:
  {
    fontSize: 20,
    fontFamily: 'Roboto-Regular'
  }
})
export default drawerContent;
