import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import DrawerContent from '../screens/drawerContent';
import HomeScreen from '../screens/homeScreen';
import CategoryScreen from '../screens/categoryScreen';
import BrandScreen from '../screens/brandScreen';
import ProfileScreen from '../screens/profileScreen';
import ProductScreen from '../screens/productScreen';
import BrandItemScreen from '../screens/brandItemScreen';
import CartScreen from '../screens/cartScreen';
import FavouriteScreen from '../screens/favouriteScreen';
import NotificationScreen from '../screens/notificationScreen';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="BottomTab" component={Bottom}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen name="BrandItemScreen" component={BrandItemScreen}
        options={{
          headerShown: false
        }} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="FavouriteScreen" component={FavouriteScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />

    </Stack.Navigator>
  );
}

const Bottom = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home'
          } else if (route.name === 'Category') {
            iconName = 'apps-outline'
          } else if (route.name === 'Brand') {
            iconName = 'pricetags'
          } else if (route.name === 'Profile') {
            iconName = 'person'
          }
          return <Icon name={iconName} size={size} color={color} />
        },
        tabBarLabel: navigation.isFocused() ? route.name : '',
      })}
      tabBarOptions={{
        activeTintColor: '#009DB1',
        inactiveTintColor: '#A2D8DF',
        keyboardHidesTabBar: true,
        style: { height: 55, paddingTop: 12 }
      }}
    >
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Category" component={CategoryScreen} />
      <BottomTab.Screen name="Brand" component={BrandScreen} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
}

const navigation = () => {
  return (
    <NavigationContainer >
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
        <Drawer.Screen name="Home" component={HomeStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default navigation;
