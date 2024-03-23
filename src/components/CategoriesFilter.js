import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { categories, colors } from '../Constant'
import { useNavigation } from '@react-navigation/native'

const CategoriesFilter = () => {
  const navigation = useNavigation()
  const [selected, setSelected] = useState(null)

  console.log(categories)

  return (
    <View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        {categories.map((category) => {
          return (
            <Pressable
              key={category.id}
              style={{
                backgroundColor:
                  category.id === selected
                    ? colors.COLOR_PRIMARY
                    : colors.COLOR_LIGHT,
                marginRight: 36,
                borderRadius: 8,
                paddingHorizontal: 16,
                paddingVertical: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
                marginVertical: 16
              }}
              onPress={() => {
                setSelected(category.id)
                navigation.navigate('Meal List', {
                  categoryId: category.id,
                  categoryName: category.category
                })
              }}
            >
              <Text
                style={{
                  color:
                    category.id === selected
                      ? colors.COLOR_LIGHT
                      : colors.COLOR_DARK,
                  fontSize: 18
                }}
              >
                {category.category}
              </Text>
            </Pressable>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default CategoriesFilter

const styles = StyleSheet.create({})
