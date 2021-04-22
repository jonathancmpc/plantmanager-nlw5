import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { PlantSelect } from '../pages/PlantSelect';

import colors from '../styles/colors';
import { MyPlants } from '../pages/MyPlants';

const Apptab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <Apptab.Navigator 
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.heading,
        labelPosition: 'beside-icon',
        style: {
          height: 60
        },
      }}
    >
      {/* Rotas */}
      <Apptab.Screen
        name="Nova PLanta"
        component={PlantSelect}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons 
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ))
        }}
      />

      <Apptab.Screen
        name="Minha PLantas"
        component={MyPlants}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons 
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ))
        }}
      />

    </Apptab.Navigator>
  )
}

export default AuthRoutes;