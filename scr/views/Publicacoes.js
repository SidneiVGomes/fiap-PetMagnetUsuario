import React from 'react';
import { View, FlatList } from 'react-native';
import { ApiGET } from '../../api/ApiGET';
import {AnuncioCard} from '../components/AnuncioCard';

export default function Publicacoes() {
  const jsonAnuncios = ApiGET({endPoint: 'publicacoes/proximas'});

  console.log('============= $$$ PUBLICAÇÕES $$$ ===============');
  
  return (
    <View >
      <FlatList
        data = {jsonAnuncios}
        keyExtractor = {(item) => item.idPublicacao.toString()}
        renderItem = {(publicacao) => <AnuncioCard publicacao={publicacao.item} />} >
      </FlatList>
    </View>
  );
}
