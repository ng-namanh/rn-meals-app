import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import React from 'react'
import MealsList from '../components/MealList'
import { meals } from '../data/meals'
import { categories } from '../data/categories'
import { useLayoutEffect } from 'react'

const MealListScreen = ({ route, navigation }) => {
  const categoryName = route.params?.categoryName ?? 'Default Title'
  const catId = route.params.categoryId
  const displayedMeals = meals.filter((mealItem) => {
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
      <Text style={{ fontSize: 20 }}>
        Category:
        <Text style={{ fontWeight: 'bold', color: '#f96163' }}>
          {' '}
          {categoryName}
        </Text>
      </Text>
      <MealsList displayedMeals={displayedMeals} />
    </SafeAreaView>
  )
}

export default MealListScreen

const styles = StyleSheet.create({})
