import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import { appStyles } from '../assets/css/AppStyle';
import { Card, Button, Icon } from 'react-native-elements';

export default function Preferencias() {
  return (
    <View >
      <Card style={{ padding: 15, margin: 5 }}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </Card>
      <Card style={{ padding: 10, margin: 10 }}>
        <Button
          onPress={() => { }}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </Card>
      <Card style={{ padding: 10, margin: 10, height: 150 }}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </Card>
    </View>
  );
}

