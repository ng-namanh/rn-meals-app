import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealListScreen from '../screens/MealListScreen'
import CategoryListScreen from '../screens/CategoryListScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'

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

export default MealStack
