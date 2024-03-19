import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SearchFilter from '../components/SearchFilter'
import CategoriesFilter from '../components/CategoriesFilter'
import RecipeCard from '../components/RecipeCard'

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16, marginVertical: 16 }}>
      <Header headerText={'Hi, Nam Anh '} headerIcon={'bell-o'} />
      <SearchFilter icon='search' placeholder={''} />

      <View style={{ marginTop: 22 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Categories</Text>
        <CategoriesFilter />
      </View>

      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Recipes</Text>
        <RecipeCard />
      </View>
    </SafeAreaView>
  )
}

export default RecipeListScreen

const styles = StyleSheet.create({})
