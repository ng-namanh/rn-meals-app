import React from 'react'
import { Pressable, Text, SafeAreaView, View } from 'react-native'
import MealList from '../components/MealList'
import useFavoristList from '../store/favorite'
import { FontAwesome } from '@expo/vector-icons'

const FavoritesScreen = ({ navigation }) => {
  const favoriteMeals = useFavoristList((state) => state.favoriteMeals)

  return (
    <View style={{ flex: 1, marginHorizontal: 16, marginVertical: 16 }}>
      <SafeAreaView
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Pressable
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            padding: 8,
            borderRadius: 12,
            gap: 8
          }}
          onPress={() => {
            navigation.goBack()
          }}
        >
          <FontAwesome name={'arrow-left'} size={20} color='black' />
        </Pressable>
      </SafeAreaView>
      {favoriteMeals.length === 0 ? (
        <Text style={{ textAlign: 'center' }}>
          No favorite meals found. Start adding some!
        </Text>
      ) : (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 20 }}>Your Favorite Meals</Text>
          <MealList displayedMeals={favoriteMeals} />
        </View>
      )}
    </View>
  )
}

export default FavoritesScreen
