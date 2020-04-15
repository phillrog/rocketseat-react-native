import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { StyleSheet, View, Text } from 'react-native';

import Product from './pages/main';
import Detail from './pages/detail';
import Icon from '@material-ui/core/Icon';

const Stack = createStackNavigator()

function Routes() {
  return (
    <NavigationContainer options={{backgroundColor: "green"}}>
      <Stack.Navigator initialRouteName='Product'
        screenOptions={{
          gestureEnabled: true,
          title: "JSHunt",
          headerTitleAlign: "center",          
        }}>
        <Stack.Screen 
          name='Product' 
          component={Product} 
          options={{
            headerStyle: ({ backgroundColor: "#DA552F"}),
            headerTintColor: "#FFF",
            headerTitle: () => (
              <View style={styles.container}>
                <View>
                  <Text style={styles.headerTitle}>JSHunt</Text>
                </View>
              </View>
            )            
          }}
        />
        <Stack.Screen name='Detail' component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    color: "#FFF",
    letterSpacing: 1,
  },
  icon: {
    marginLeft: 10
  }
});

export default Routes;