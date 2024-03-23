import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
import MealsList from '../components/MealList'
import { categories, recipeList } from '../Constant'
import { useLayoutEffect } from 'react'

const MealListScreen = ({ route, navigation }) => {
  const categoryName = route.params?.categoryName ?? 'Default Title'
  const catId = route.params.categoryId
  const displayedMeals = recipeList.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0
  })

  useLayoutEffect(() => {
    const categoryTitle = categories.find(
      (category) => category.id === catId
    ).title

    navigation.setOptions({
      title: categoryTitle
    })
  }, [catId, navigation])

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16, marginVertical: 16 }}>
      <Text>{categoryName}</Text>
      <MealsList displayedMeals={displayedMeals} />
    </SafeAreaView>
  )
}

export default MealListScreen

const styles = StyleSheet.create({})
