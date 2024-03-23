import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import CategoriesFilter from '../components/CategoriesFilter'
import MealsList from '../components/MealList'

const CategoryListScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginHorizontal: 16,
        marginVertical: 16,
        marginBottom: 40
      }}
    >
      <View style={{ marginTop: 22, marginBottom: 24 }}>
        <CategoriesFilter />
      </View>
    </SafeAreaView>
  )
}

export default CategoryListScreen

const styles = StyleSheet.create({})
