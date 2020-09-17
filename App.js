import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AreaPrincipal from './views/AreaPrincipal';
import Home from './views/Home';
import Publicacoes from './views/Publicacoes';
import Preferencias from './views/Preferencias';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Área Principal"
          component={AreaPrincipal}
          options={{
            title: 'PetMagnet',
            headerStyle: {
              backgroundColor: '#FCC37C',
            },
            headerTintColor: '#594A46',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:23
            },
            headerTitleAlign:'center'
          }}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Publicações" component={Publicacoes} />
        <Stack.Screen name="Preferências" component={Preferencias} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
