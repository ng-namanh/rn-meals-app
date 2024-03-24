import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import CategoriesFilter from '../components/CategoriesList'

const CategoryListScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginHorizontal: 8,
        marginVertical: 0,
        marginBottom: 40
      }}
    >
      <CategoriesFilter />
    </SafeAreaView>
  )
}

export default CategoryListScreen

const styles = StyleSheet.create({})
