import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { ApiGET } from '../../api/ApiGET';
import { AnuncioCard } from '../components/AnuncioCard';
import AsyncStorage from '@react-native-community/async-storage';

export default function Publicacoes() {

  const [userId, setUserId] = useState(0);
  const [userAlcanceKM, setUserAlcanceKM] = useState(0);

  async function getObterPublicacoesProximas() {

    const userRegistro = await AsyncStorage.getItem('userData')
      .then((userRegistro) => {

        let jsonUsuario = JSON.parse(userRegistro);

        setUserId(jsonUsuario.idUsuario);
        setUserAlcanceKM(jsonUsuario.distanciaAnuncio);
      });
  }

  getObterPublicacoesProximas();

  jsonAnuncios = ApiGET({ endPoint: 'publicacoes/proximas?idUsuario=' + userId + '&alcanceKM=' + userAlcanceKM });

  console.log('============= $$$ PUBLICAÇÕES $$$ ===============');
  console.log('publicacoes/proximas?idUsuario=' + userId + '&alcanceKM=' + userAlcanceKM);
  // console.log(jsonAnuncios)


  return (
    <View >
      <FlatList
        data={jsonAnuncios}
        keyExtractor={(item) => item.idPublicacao.toString()}
        renderItem={(publicacao) => <AnuncioCard publicacao={publicacao.item} />} >
      </FlatList>
    </View>
  );
}
