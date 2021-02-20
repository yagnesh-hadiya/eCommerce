import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import BrandItem from '../components/brandItem';
import HeaderHome from '../components/headerHome';
import Search from '../components/search';

const BrandScreen = (props) => {
  return (
    <View style={styles.container}>
      <HeaderHome {...props} name="Brand" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Search />
        <BrandItem {...props} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default BrandScreen;
