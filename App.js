import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { Dashboard, Place } from './screens'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './navigation/tabs'

const Stack = createStackNavigator()

const App = () => {
	return (
		<NavigationContainer options={{ headerShown: false }}>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName={'Dashboard'}>
				<Stack.Screen
					name='Dashboard'
					component={Tabs}
					screenOptions={{ headerShown: false }}
				/>

				<Stack.Screen
					screenOptions={{ headerShown: false }}
					name='Place'
					component={Place}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App