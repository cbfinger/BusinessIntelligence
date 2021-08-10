/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Businesses from './screens/Businesses';
import BusinessDetail from './screens/BusinessDetail';

const MainNavigator = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator >
        <MainNavigator.Screen name="Home" 
          component={Businesses} 
          options={{title: 'Companies',
                    headerStyle: {
                      backgroundColor: '#435861',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    }
          }} />
        <MainNavigator.Screen name="Details" 
          component={BusinessDetail}
          options={{title: 'Overview',
                    headerStyle: {
                      backgroundColor: '#D58469',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    }
          }} />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
