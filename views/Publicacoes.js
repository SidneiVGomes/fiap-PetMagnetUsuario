import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, FlatList, StyleSheet, List, ListItem } from 'react-native';
import { appStyles } from '../assets/css/AppStyle';
import { ActivityIndicator } from 'react-native';

export default function Publicacoes() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://petmagnet-api.herokuapp.com/API/publicacoes/proximas')
      .then(response => response.json())
      .then(data => setData(data))
      .catch((error) => setLoading(false));

    console.log(data);
    console.log(isLoading);
    console.log('================================================================');
  }, []);


  return (
    <View style={appStyles.container}>
      <Text>LISTA DE ANÚNCIOS PUBLICADOS</Text>
      <StatusBar style="auto" />
    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
