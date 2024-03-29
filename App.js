import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style = 'light'/>

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="MealsCategories" component={CategoryScreen} />
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
      </Stack.Navigator>
  
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
