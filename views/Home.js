import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import {appStyles} from '../assets/css/AppStyle';

export default function Home() {
  return (
    <View style={appStyles.container}>
      <Text>HOME</Text>
      <StatusBar style="auto" />
    </View>
  );
}

