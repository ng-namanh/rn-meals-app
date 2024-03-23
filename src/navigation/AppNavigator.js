import { createDrawerNavigator } from '@react-navigation/drawer'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/WelcomeScreen'
import MealListScreen from '../screens/MealListScreen'
import CategoryListScreen from '../screens/CategoryListScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()

const MealStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Category List' component={CategoryListScreen} />
      <Stack.Screen name='Meal List' component={MealListScreen} />
      <Stack.Screen name='Meal Details' component={MealDetailsScreen} />
    </Stack.Navigator>
  )
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: true }}>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Pick Your Meals' component={MealStack} />
        <Drawer.Screen name='Favorites' component={FavoritesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})
