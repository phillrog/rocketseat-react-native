import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Product from './pages/main';
import Detail from './pages/detail';

const Stack = createStackNavigator()

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Product'
        screenOptions={{
          gestureEnabled: true
        }}>
        <Stack.Screen name='Product' component={Product} options={{ title: 'Produto' }} />
        <Stack.Screen name='Detail' component={Detail} options={{ title: 'Detalhes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;