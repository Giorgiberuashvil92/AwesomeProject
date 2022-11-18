import { StyleSheet, Text, View } from 'react-native';
import AuthScreen from './screens/auth';
import style from '../app/style';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/login';
import SuccesScreen from './screens/success';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Auth" component={AuthScreen} options={{headerShown: false}}
/>
  <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}
  />
    <Stack.Screen name="Success" component={SuccesScreen} options={{headerShown: false}}
  />
  </Stack.Navigator>
  </NavigationContainer>  

  );
}