import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  useWindowDimensions
} from 'react-native'
import { colors } from '../constants/color'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import useFavoristList from '../store/favorite'

const MealsList = ({ displayedMeals }) => {
  const navigation = useNavigation()
  const favoriteList = useFavoristList((state) => state.favoriteMeals)
  const windowWidth = useWindowDimensions().width

  function checkIfFavorited(id) {
    return favoriteList.some((meal) => meal.id === id)
  }

  const numColumns = windowWidth > 600 ? 3 : 2

  const flatListKey = `flatlist-${numColumns}`

  return (
    <View style={{ marginTop: 20, marginBottom: 20 }}>
      <FlatList
        key={flatListKey}
        data={displayedMeals}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate('Meal Details', {
                item: item,
                name: item.name
              })
            }
            style={{
              backgroundColor: colors.COLOR_LIGHT,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 7,
              borderRadius: 16,
              marginVertical: 16,
              alignItems: 'center',
              paddingHorizontal: 8,
              paddingVertical: 26,
              width: windowWidth / numColumns - 20
            }}
          >
            {checkIfFavorited(item.id) && (
              <View
                style={{
                  position: 'absolute',
                  alignSelf: 'flex-end',
                  top: 10,
                  right: 10
                }}
              >
                <FontAwesome name={'heart'} size={20} color='red' />
              </View>
            )}

            <Image
              source={item.image}
              style={{
                width: '100%',
                height: 150,
                marginTop: 10,
                marginBottom: 10,
                resizeMode: 'center',
                borderRadius: 12
              }}
            />

            <Text>{item.name}</Text>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Text>{item.time}</Text>
              <Text> | </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginRight: 4 }}>{item.rating}</Text>
                <FontAwesome
                  name='star'
                  size={16}
                  color={colors.COLOR_PRIMARY}
                />
              </View>
            </View>
          </Pressable>
        )}
        numColumns={numColumns}
        columnWrapperStyle={{
          justifyContent: 'space-between'
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default MealsList

const styles = StyleSheet.create({})
