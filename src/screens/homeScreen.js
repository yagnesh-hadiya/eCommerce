import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import HeaderHome from '../components/headerHome';
import Slider from '../components/slider';
import FlashSale from '../components/flashSale';
import Search from '../components/search';
import { promoImages } from '../data/data';


const homeScreen = (props) => {
  return (
    <View style={styles.container}>
      <HeaderHome {...props} name="Home" />
      <Search />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Slider imageData={promoImages} />
        <FlashSale {...props} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default homeScreen;
