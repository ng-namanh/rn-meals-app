import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <StatusBar />
      <Image
        source={require('../assets/images/welcome.png')}
        style={{ marginTop: 0 }}
      />

      <Text style={{ color: '#f96163', fontSize: 22, fontWeight: 'bold' }}>
        40K+ Premium Recipes
      </Text>

      <Text
        style={{
          fontSize: 42,
          fontWeight: 'bold',
          color: '#3c444c',
          marginTop: 16,
          marginBottom: 16
        }}
      >
        Cook Like A Chef
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('RecipeList')}
        style={{
          backgroundColor: '#f96163',
          borderRadius: 18,
          paddingVertical: 18,
          width: '80%',
          alignItems: 'center'
        }}
      >
        <Text style={{ fontSize: 18, color: '#fff', fontWeight: '700' }}>
          Let's Go
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})
