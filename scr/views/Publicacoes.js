import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { ApiGET } from '../../api/ApiGET';
import { AnuncioCard } from '../components/AnuncioCard';
import AsyncStorage from '@react-native-community/async-storage';

export default function Publicacoes() {

  // useEffect(() => {
  //   let userData = getDadosUsuario();

  //   console.log('================ USUÁRIO LOGADO ================');
  //   // console.log(JSON.parse(userData));

  // }, [])

  const [userRegistro, setUserRegistro] = useState(null);

  async function getObterPublicacoesProximas() {
    const userRegistro = await AsyncStorage.getItem('userRegistro')
      .then(() => {
        console.log('============= REGISTRO ==============');
        console.log(userRegistro);
      });
  }

  getObterPublicacoesProximas();

  jsonAnuncios = ApiGET({ endPoint: 'publicacoes/proximas?idEndereco=0&alcanceKM=1006' });

  console.log('============= $$$ PUBLICAÇÕES $$$ ===============');
  console.log(jsonAnuncios)

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
