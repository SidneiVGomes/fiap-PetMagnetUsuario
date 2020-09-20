import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFeather from 'react-native-vector-icons/Feather';

function AnuncioCard(props) {
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

      console.log('============== CARTAO ANUNCIO CARD ===============');
      console.log(props);
   

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
         <View style={{ paddingBottom: 10, paddingTop: 1, backgroundColor: '#C5C5C5' }}>
            <FlatList
               data={anuncios}
               renderItem={(anuncio) => {
                  return (
                     <View >
                        <CartaoAnuncioHeader estabelecimento={props.publicacao.estabelecimento} />
                        <CartaoAnuncioTitulo anuncios={anuncio.item} />
                        <CartaoAnuncioProdutos produtos={anuncio.item.produtos} />
                        <CartaoAnuncioDescricao anuncios={anuncio.item} />
                        <CartaoAnuncioMidiasSociais />
                     </View>
                  )
               }}>
            </FlatList>
         </View>
      )
   }

   // CARD - HEADER
   function CartaoAnuncioHeader(props) {

      let end = props.estabelecimento.endereco;
      let compl_end = props.estabelecimento.complEndereco;

      if (compl_end != '') {
         compl_end = ' / ' + compl_end;
      }

      let end_completo_1 = end.logradouro + ', ' + end.numero + compl_end;
      let end_completo_2 = end.bairro + ' - ' + end.cidade + ' - ' + end.uf;
      let horario = '';

      // console.log('=======================================');
      // console.log(props);
      // console.log('7======================================');

      return (
         <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFE', borderBottomColor: '#E1E0DF', borderBottomWidth: 1 }}>
            <View style={{ width: 78, alignItems: 'center', justifyContent: 'center' }}>
               <Text>IMG</Text>
            </View>
            <View style={{ width: '100%', height: 70, justifyContent: 'center' }}>
               <Text style={{ fontSize: 14 }}>{end_completo_1}</Text>
               <Text style={{ fontSize: 14 }}>{end_completo_2}</Text>
               {/* <Text style={{ fontSize: 14 }}>{horario}</Text> */}
            </View>
         </View>
      )
   }

   // CARD - TÍTULO
   function CartaoAnuncioTitulo(props) {

      // console.log('=======================================');
      // console.log(props); 
      // console.log('11======================================');   

      return (
         <View style={{ width: '100%', height: 40, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#3949AB' }}>{props.anuncios.titulo}</Text>
         </View>
      )
   }

   // CARD - PRODUTOS
   function CartaoAnuncioProdutos(props) {

      var produtos = props.produtos.map(function (item) {
         return {
            idProduto: item.idProduto,
            descricao: item.descricao,
            preco: item.preco,
            imagem: item.imagem
         };
      });

      // console.log('=======================================');
      // console.log(props);
      // console.log('1======================================');

      return (
         <View style={{ height: 220, backgroundColor: '#FFFFFE', alignItems: 'center', justifyContent: 'space-around', paddingBottom: 5, borderBottomColor: '#E1E0DF', borderBottomWidth: 1 }}>
            <FlatList
               horizontal
               data={produtos}
               keyExtractor={(item) => item.idProduto.toString()}
               renderItem={(produto) => {
                  return (
                     <View style={{ flexDirection: 'column', width: 127, height: '100%', backgroundColor: '#FFFFFE', marginHorizontal: 1 }}>
                        <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
                           <Text style={{ height: 20 }}>I M A G E M</Text>
                        </View>
                        <View style={{ flexGrow: 0, alignItems: 'center', height: 20 }}>
                           <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#3949AB' }}>{produto.item.preco}</Text>
                        </View>
                     </View>
                  )
               }}>
            </FlatList>
         </View>
      )
   }

   // CARD - DESCRIÇÃO
   function CartaoAnuncioDescricao(props) {

      // console.log('=======================================');
      // console.log(props); 
      // console.log('11======================================');   

      return (
         <View style={{ width: '100%', height: 62, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E6F5FF', borderBottomColor: '#E1E0DF', borderBottomWidth: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{props.anuncios.descricao}</Text>
         </View>
      )
   }

   // CARD - MÍDIAS SOCIAIS
   function CartaoAnuncioMidiasSociais(props) {

      // console.log('=======================================');
      // console.log(props); 
      // console.log('11======================================');   

      return (
         <View style={{ flexDirection: 'row', width: '100%', height: 60, backgroundColor: '#F3F2F0', borderBottomColor: '#DBDBDB', borderBottomWidth: 1 }}>
            <View style={{ width: 70, height: '100%', alignItems: 'center', justifyContent: 'center' }}>
               <Icon name="whatsapp" size={22} color="green" />
            </View>
            <View style={{ width: 50, height: '100%', alignItems: 'center', justifyContent: 'center' }}>
               <Icon name="shopping-cart" size={22} color="#E98E1E" />
            </View>
         </View>
      )
   }

   return(
      <CartaoAnuncio publicacao={props.publicacao} />
   )
}

export {AnuncioCard};