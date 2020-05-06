import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import AboutPage from '../drawers/AboutPage'

const Stack = createStackNavigator()

const AboutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='AboutScreen' component={AboutPage} />
    </Stack.Navigator>
  )
}

export default AboutStack

const styles = StyleSheet.create({})
