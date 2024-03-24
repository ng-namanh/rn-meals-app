import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Pressable,
  ImageBackground
} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { FontAwesome } from '@expo/vector-icons'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}
    >
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={StyleSheet.absoluteFillObject}
        resizeMode='cover'
      ></ImageBackground>
      <StatusBar />

      <View>
        <Text
          style={{
            padding: 16,
            color: 'black',
            fontSize: 48,
            fontWeight: 'bold',
            alignSelf: 'flex-start'
          }}
        >
          Welcome to <Text style={{ color: '#FE724C' }}>FoodHub</Text>
        </Text>

        <Text
          style={{
            color: '#30384F',
            fontSize: 22,
            paddingLeft: 16
          }}
        >
          Pick your favorite meals and explore new recipes
        </Text>
      </View>

      <Pressable
        onPress={() => navigation.navigate('Categories')}
        style={{
          backgroundColor: '#FE724C',
          alignSelf: 'flex-end',
          flexDirection: 'row',
          gap: 12,
          alignContent: 'end',
          justifyContent: 'center',
          borderTopLeftRadius: 30,
          borderBottomLeftRadius: 30,
          paddingVertical: 10,
          width: '30%',
          alignItems: 'center'
        }}
      >
        <Text style={{ fontSize: 18, color: '#fff', fontWeight: '700' }}>
          Next
        </Text>
        <FontAwesome name='arrow-right' size={24} color='#fff' />
      </Pressable>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  shadowLayer: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.1
  }
})
