import React, { useState, useEffect } from 'react'
import {
  Pressable,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Dimensions
} from 'react-native'

import { categories } from '../data/categories'
import { colors } from '../constants/color'
import { useNavigation } from '@react-navigation/native'

const CategoriesFilter = () => {
  const windowWidth = useWindowDimensions().width
  const windowHeight = useWindowDimensions().height
  const screenWidth = Dimensions.get('window').width
  const screenHeight = Dimensions.get('window').height

  const navigation = useNavigation()
  const [selected, setSelected] = useState(null)
  const [numColumns, setNumColumns] = useState(3)

  useEffect(() => {
    if (windowWidth > windowHeight) {
      setNumColumns(7)
    } else {
      setNumColumns(3)
    }
  }, [windowWidth, windowHeight])

  const renderItem = ({ item }) => (
    <Pressable
      key={item.id}
      style={{
        backgroundColor: item.color,
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        marginVertical: 12,
        marginHorizontal: 4,
        width: screenWidth / numColumns - 16
      }}
      onPress={() => {
        setSelected(item.id)
        navigation.navigate('Meal List', {
          categoryId: item.id,
          categoryName: item.category
        })
      }}
    >
      <Image
        source={item.image}
        style={{
          width: 50,
          alignSelf: 'center',
          marginBottom: 8,
          objectFit: 'contain'
        }}
      />
      <Text
        style={{
          color: colors.COLOR_LIGHT,
          fontSize: 18,
          textAlign: 'center'
        }}
      >
        {item.category}
      </Text>
    </Pressable>
  )

  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        key={`flatlist-${numColumns}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 8 }}
      />
    </View>
  )
}

export default CategoriesFilter

const styles = StyleSheet.create({})
