import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView
} from 'react-native'
import React from 'react'

import { FontAwesome } from '@expo/vector-icons'

const MealDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params

  // console.log(item)
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
            borderRadius: 8,
            gap: 8
          }}
          onPress={() => {
            navigation.navigate('Category List')
          }}
        >
          <FontAwesome name={'arrow-left'} size={20} color='black' />
          <Text>Back to Category List</Text>
        </Pressable>
        <FontAwesome name={'heart-o'} size={28} color='pink' />
      </SafeAreaView>
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
        <View
          style={{
            height: 300,
            width: 300,
            position: 'absolute',
            top: -150,
            border: '1px solid red',
            borderRadius: 150,
            overflow: 'hidden'
          }}
        >
          <Image
            source={item.image}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
              objectFit: 'cover'
            }}
          />
        </View>

        {/* Recipe Name */}
        <Text style={{ marginTop: 150, fontSize: 28, fontWeight: 'bold' }}>
          {item.name}
        </Text>

        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Recipe Description */}
            <Text style={{ fontSize: 20, marginVertical: 16 }}>
              {item.description}
            </Text>

            {/* Recipe Extra Details */}

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <View
                style={{
                  backgroundColor: 'rgba(255, 0, 0, 0.38)',
                  paddingVertical: 26,
                  borderRadius: 8,
                  alignItems: 'center',
                  width: 100
                }}
              >
                <Text style={{ fontSize: 40 }}>⏰</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.time}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'rgba(135, 206, 235, 0.8)',
                  paddingVertical: 26,
                  borderRadius: 8,
                  alignItems: 'center',
                  width: 100
                }}
              >
                <Text style={{ fontSize: 40 }}>🥣</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.difficulty}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'rgba(255, 165, 0, 0.48)',
                  paddingVertical: 26,
                  borderRadius: 8,
                  alignItems: 'center',
                  width: 100
                }}
              >
                <Text style={{ fontSize: 40 }}>🔥</Text>
                <Text style={{ fontSize: 20, fontWeight: 400 }}>
                  {item.calories}
                </Text>
              </View>
            </View>

            {/* Recipe Ingredients  */}

            <View style={{ alignSelf: 'flex-start', marginVertical: 22 }}>
              <Text
                style={{ fontSize: 22, fontWeight: '600', marginBottom: 6 }}
              >
                Ingredients:
              </Text>

              {item.ingredients.map((ingredient, index) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 4
                    }}
                    key={index}
                  >
                    <View
                      style={{
                        backgroundColor: 'red',
                        height: 10,
                        width: 10,
                        borderRadius: 5
                      }}
                    ></View>
                    <Text style={{ fontSize: 18, marginLeft: 6 }}>
                      {ingredient}
                    </Text>
                  </View>
                )
              })}
            </View>

            {/* Recipe Steps */}

            <View style={{ alignSelf: 'flex-start', marginVertical: 22 }}>
              <Text
                style={{ fontSize: 22, fontWeight: '600', marginBottom: 6 }}
              >
                Steps:
              </Text>

              {item.steps.map((step, index) => {
                return (
                  <Text
                    key={index}
                    style={{ fontSize: 18, marginLeft: 6, marginVertical: 6 }}
                  >{`${index + 1} ) ${step}`}</Text>
                )
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default MealDetailsScreen

const styles = StyleSheet.create({})