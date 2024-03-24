import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons' // Import FontAwesome icons
import HomeScreen from '../screens/HomeScreen'
import MealStack from './MealStack'
import FavoritesScreen from '../screens/FavoritesScreen'

const Drawer = createDrawerNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: true }}>
        <Drawer.Screen
          name='Home'
          component={HomeScreen}
          options={{
            headerShown: false,
            drawerStyle: {
              backgroundColor: '#f5f5f5'
            },
            drawerActiveTintColor: '#FE724C',
            drawerInactiveTintColor: '#616161',
            drawerIcon: ({ focused, size }) => (
              <FontAwesome
                name={focused ? 'home' : 'home'}
                size={24}
                color={focused ? '#FE724C' : '#616161'}
              />
            )
          }}
        />
        <Drawer.Screen
          name='Categories'
          component={MealStack}
          options={{
            drawerActiveTintColor: '#FE724C',
            drawerIcon: ({ focused, size }) => (
              <FontAwesome
                name={focused ? 'cutlery' : 'cutlery'}
                size={24}
                color={focused ? '#FE724C' : '#616161'}
              />
            )
          }}
        />
        <Drawer.Screen
          name='Favorites'
          component={FavoritesScreen}
          options={{
            drawerActiveTintColor: '#FE724C',
            drawerIcon: ({ focused, size }) => (
              <FontAwesome
                name={focused ? 'heart' : 'heart'}
                size={24}
                color={focused ? '#FE724C' : '#616161'}
              />
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})
