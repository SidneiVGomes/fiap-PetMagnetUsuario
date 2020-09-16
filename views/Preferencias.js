import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import {appStyles} from '../assets/css/AppStyle';

export default function Preferencias() {
  return (
    <View style={appStyles.container}>
      <Text>BOTÃO PARA SAIR</Text>
      <Text>BOTÃO PARA CADASTRAR DISTÂNCIA</Text>
      <StatusBar style="auto" />
    </View>
  );
}

