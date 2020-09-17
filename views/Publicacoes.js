import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, FlatList, StyleSheet, List, ListItem } from 'react-native';
import { appStyles } from '../assets/css/AppStyle';
import { ActivityIndicator } from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default function Publicacoes() {
  const [isLoading, setLoading] = useState(true);
  const [lstAnuncios, setData] = useState([]);

  useEffect(() => {
    fetch('https://petmagnet-api.herokuapp.com/API/publicacoes/proximas')
      .then(response => response.json())
      .then(lstAnuncios => setData(lstAnuncios))
      .catch((error) => setLoading(false));
  }, []);



  const jsonAnuncios = [
    {
      "idPublicacao": 1,
      "dtPublicacao": "2020-09-14T11:59:24.165+00:00",
      "dtEncerramento": "2020-10-14T11:59:24.165+00:00",
      "estabelecimento": {
        "cnpj": "46781973000106",
        "nome": "PetShop do Bairro LTDA",
        "complEndereco": "",
        "endereco": {
          "logradouro": "Rua Abaetetuba",
          "numero": "123",
          "bairro": "Jardim Califórnia",
          "cidade": "Barueri",
          "pais": "BR",
          "cep": "06409-100",
          "latitude": "-23,4935611",
          "longitude": "-46,8959407",
          "uf": "SP"
        },
        "idEstabelecimento": 1
      },
      "anuncios": [
        {
          "idAnuncio": 1,
          "idEstabelecimento": 1,
          "idColaborador": 1,
          "titulo": "Título do anuncio",
          "descricao": "descricao do anuncio",
          "produtos": [
            {
              "idProduto": 1,
              "descricao": "descricao do produto",
              "preco": 99,
              "imagem": "imagem anuncio"
            }
          ]
        }
      ],
      "links": []
    },
    {
      "idPublicacao": 6,
      "dtPublicacao": "2020-09-14T21:43:48.880+00:00",
      "dtEncerramento": "2020-09-20T21:43:48.880+00:00",
      "estabelecimento": {
        "cnpj": "46781973000106",
        "nome": "PetShop do Bairro LTDA",
        "complEndereco": "",
        "endereco": {
          "logradouro": "Rua Abaetetuba",
          "numero": "123",
          "bairro": "Jardim Califórnia",
          "cidade": "Barueri",
          "pais": "BR",
          "cep": "06409-100",
          "latitude": "-23,4935611",
          "longitude": "-46,8959407",
          "uf": "SP"
        },
        "idEstabelecimento": 1
      },
      "anuncios": [
        {
          "idAnuncio": 2,
          "idEstabelecimento": 1,
          "idColaborador": 1,
          "titulo": "Toda a Loja com 30% OFF",
          "descricao": "Vem conferir antes que acabe!!!",
          "produtos": [
            {
              "idProduto": 2,
              "descricao": "Petiscos",
              "preco": 15.99,
              "imagem": "<<<IMAGEM>>>"
            },
            {
              "idProduto": 3,
              "descricao": "Petiscos",
              "preco": 15.99,
              "imagem": "<<<IMAGEM>>>"
            },
            {
              "idProduto": 4,
              "descricao": "Petiscos",
              "preco": 15.99,
              "imagem": "<<<IMAGEM>>>"
            }
          ]
        }
      ],
      "links": []
    }
  ]

  // CARD - HEADER
  function CartaoAnuncioHeader(props) {

    // console.log('=======================================');
    // console.log(props); 
    // console.log('7======================================');   

    return (
      <View style={{ width: '100%', height: 50, backgroundColor: 'powderblue' }}>
        <Text>{props.estabelecimento.nome}</Text>
      </View>
    )
  }

  // CARD - TÍTULO
  function CartaoAnuncioTitulo(props) {

    // console.log('=======================================');
    // console.log(props); 
    // console.log('11======================================');   

    return (
      <View style={{ width: '100%', height: 20, backgroundColor: 'red' }}>
        <Text>{props.anuncios.titulo}</Text>
      </View>
    )
  }

  // CARD - PRODUTOS
  function CartaoAnuncioProdutos(props) {

    var produtos = props.produtos.map(function (item) {
      return {
        id: item.idProduto,
        descricao: item.descricao,
        valor: item.valor,
        imagem: item.imagem
      };
    });

    // console.log('=======================================');
    // console.log(props);
    // console.log('1======================================');

    return (
      <View style={
        {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: 150,
          backgroundColor: 'skyblue',
          
        }}>
        <FlatList
          horizontal
          data={produtos}
          renderItem={(produto) => {
            return (
              <View style={{ marginLeft: 6, width: 123, height: '100%', backgroundColor: 'blue' }}>
                <Text>{produto.item.descricao}</Text>
              </View>
            )
          }}>
        </FlatList>
      </View>
    )
  }

  // CARD
  //
  // Esta função recebe um objeto Publicação, que tem a seguinte estrutura:
  // Publicação
  // -- Estabelecimento
  // -- Anuncios
  // ---- Anuncio
  // ------Produtos
  // --------Produto
  function CartaoAnuncio(props) {

    // Obtém todos os Anúncios atribuídos à Publicação recebida.
    var anuncios = props.publicacao.anuncios.map(function (item) {
      return {
        id: item.idAnuncio,
        titulo: item.titulo,
        descricao: item.descricao,
        produtos: item.produtos
      };
    });

    return (
      <View style={{Flex: 1, paddingBottom: 10, paddingTop: 1}}>
        <FlatList
          data={anuncios}
          renderItem={(anuncio) => {
            return (
              <View >
                <CartaoAnuncioHeader estabelecimento={props.publicacao.estabelecimento} />
                <CartaoAnuncioTitulo anuncios={anuncio.item} />
                <CartaoAnuncioProdutos produtos={anuncio.item.produtos} />
              </View>
            )
          }}>
        </FlatList>
      </View>
    )
  }

  return (
    <View >
      <FlatList
        data={jsonAnuncios}
        renderItem={(publicacao) => <CartaoAnuncio publicacao={publicacao.item} />} >
      </FlatList>
    </View>
  );
}
