import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import HeaderHome from '../components/headerHome';
import Search from '../components/search';
import { CategoryData } from '../data/Category';

const categoryScreen = (props) => {
  const renderCategoryItem = ({ item }) => {
    return (
      <View style={Styles.itemContainer}>
        {item.id % 2 === 1 ?
          <>
            <View style={Styles.imageWrapper}>
              <Image source={item.logo} style={Styles.image} />
              <Text style={Styles.imageText}>{item.CategoryName}</Text>
            </View>
            <View style={Styles.itemListWrapper}>
              <View style={Styles.itembox}>
                {item.SubCategory.map((Subitem, index) => {
                  return (
                    <Text style={Styles.itemText}>{Subitem.label}</Text>
                  )
                })}
              </View>
            </View>
          </>
          :
          <>
            <View style={[Styles.itemListWrapper, Styles.borderRadiusItem]}>
              <View style={Styles.itembox}>
                {item.SubCategory.map((Subitem, index) => {
                  return (
                    <Text style={Styles.itemText}>{Subitem.label}</Text>
                  )
                })}
              </View>
            </View>
            <View style={[Styles.imageWrapper, Styles.borderRadiusImage]}>
              <Image source={item.logo} style={Styles.image} />
              <Text style={Styles.imageText}>{item.CategoryName}</Text>
            </View>
          </>
        }
      </View>
    )
  }
  return (
    <View style={Styles.container}>
      <HeaderHome name='Categories' {...props}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Search />
        <FlatList
          data={CategoryData}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          numColumns={1}
        >
        </FlatList>
      </ScrollView>
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  imageWrapper: {
    backgroundColor: '#56B9CB',
    width: '37%',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 30,
    height: 140,
  },
  image: {
    height: 45,
    width: 45,
    tintColor: '#fff'
  },
  imageText: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Roboto-Regular',
    paddingTop: 5
  },
  itemListWrapper: {
    width: '63%',
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
  },
  borderRadiusImage: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 10,
  },
  borderRadiusItem: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  itembox: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 5
  },
  itemText: {
    color: '#56B9CB',
    fontSize: 16,
    padding: 5,
    margin: 5,
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#A2D8DF',
    backgroundColor: '#FAFAFA'
  },
})
export default categoryScreen;
