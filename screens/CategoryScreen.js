import React from 'react'
import {CATEGORIES} from '../data/dummyData'
import { FlatList, View, Text } from 'react-native'
import CategoryGridTite from '../components/CategoryGridTite'


function CategoryScreen({navigation}) {

  const renderCategoryItem = (item) => {

    const handleOnPress = () => {
      navigation.navigate("MealsOverview")
    }
    return (
      <>
        <CategoryGridTite category={item.title} color={item.color} onPress={handleOnPress}/>  
        

        </>
    )
  
  }
  return (
    <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={({item}) => renderCategoryItem(item)} numColumns={2}></FlatList>
  )
}

export default CategoryScreen