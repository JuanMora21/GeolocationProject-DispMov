import React from 'react';
import { SafeAreaView } from 'react-native';
import { Maps } from './src/screen/Maps';
import Navigation from './Navigation/Navigation';
import { HomeScreen } from './src/screen/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export const App = () => {
  //const
  const Stack = createStackNavigator();

  return (
    <SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
