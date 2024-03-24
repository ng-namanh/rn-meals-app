import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  useWindowDimensions
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import useFavoristList from '../store/favorite'
import MealDetailsContent from '../components/MealDetailsContent'

const MealDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params
  const favoriteMeals = useFavoristList((state) => state.favoriteMeals)
  const addFavoriteMeal = useFavoristList((state) => state.addFavoriteMeal)
  const removeFavoriteMeal = useFavoristList(
    (state) => state.removeFavoriteMeal
  )
  const [isFavorited, setIsFavorited] = useState(false)
  const { width, height } = useWindowDimensions()
  const isLandscape = width > height

  useEffect(() => {
    const isInFavorites = favoriteMeals.some((meal) => meal.id === item.id)
    setIsFavorited(isInFavorites)
  }, [favoriteMeals, item.id])

  const toggleFavorite = () => {
    if (isFavorited) {
      removeFavoriteMeal(item.id)
    } else {
      addFavoriteMeal(item)
    }
    setIsFavorited(!isFavorited)
  }

  const routeName =
    route.name === 'Meal Details' ? 'Category List' : 'Meal List'

  return (
    <View style={{ backgroundColor: item.color, flex: 1 }}>
      <SafeAreaView
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 16,
          marginVertical: 16
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
        <Pressable onPress={toggleFavorite}>
          <FontAwesome
            name={isFavorited ? 'heart' : 'heart-o'}
            size={28}
            color='red'
          />
        </Pressable>
      </SafeAreaView>
      {isLandscape ? (
        <ScrollView
          contentContainerStyle={{
            backgroundColor: '#fff',
            flex: 1,
            marginTop: 30,
            borderTopLeftRadius: 56,
            borderTopRightRadius: 56,
            alignItems: 'center',
            paddingHorizontal: 16
          }}
          showsVerticalScrollIndicator={false}
        >
          <MealDetailsContent item={item} />
        </ScrollView>
      ) : (
        <View
          style={{
            backgroundColor: '#fff',
            flex: 1,
            marginTop: 160,
            borderTopLeftRadius: 56,
            borderTopRightRadius: 56,
            alignItems: 'center',
            paddingHorizontal: 16
          }}
        >
          <MealDetailsContent item={item} />
        </View>
      )}
    </View>
  )
}

export default MealDetailsScreen

const styles = StyleSheet.create({})
