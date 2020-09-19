import React, { Component } from 'react';
import { useEffect, useState } from 'react';

function PublicacoesApi() {
  // const dados = await fetch('https://petmagnet-api.herokuapp.coFm/API/publicacoes/proximas')
  //   .then(response => response.json());

  // console.log('=======================================');
  // console.log(dados); 
  // console.log('7======================================');   


  const dados = [
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
              "descricao": "Rações para cães",
              "preco": 26.50,
              "imagem": "<<<IMAGEM>>>"
            },
            {
              "idProduto": 4,
              "descricao": "Isca para Peixes",
              "preco": 5.99,
              "imagem": "<<<IMAGEM>>>"
            }
          ]
        }
      ],
      "links": []
    }
  ];

  // console.log('=======================================');
  // console.log(dados);
  // console.log('7======================================');

  return (dados);
}

export { PublicacoesApi };


