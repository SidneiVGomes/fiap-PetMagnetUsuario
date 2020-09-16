import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import {appStyles} from '../assets/css/AppStyle';

export default function Publicacoes() {
  return (
    <View style={appStyles.container}>
      <Text>LISTA DE ANÚNCIOS PUBLICADOS</Text>
      <StatusBar style="auto" />
    </View>
  );
}

