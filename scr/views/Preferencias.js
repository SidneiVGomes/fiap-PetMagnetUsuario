import React, { useState } from 'react';
import { Text, View, TextInput, Alert } from 'react-native';
import { Button } from 'react-native-elements';

export default function Preferencias() {

  const [userEmail, setEmail] = useState('Informe seu eMail');
  const [userCep, setCEP] = useState('Informe o CEP');

  return (
    <View >
      {/* <Card style={{  }}> */}
      <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', margin: 20, height: 500, backgroundColor: '#F3F2F0' }}>
        <View style={{ height: 90, marginTop: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Quer ver apenas os anúncios de estabelecimentos perto de você?</Text>
        </View>

        <View style={{ width: '90%' }}>
          <Text style={{ fontSize: 18, textAlign: 'center', marginBottom: 40 }}>
            Informe seu eMail e CEP para ajudarmos você com isso.
          </Text>

          <Text style={{ fontSize: 15, textAlign: 'center' }}>
            eMail
          </Text>

          <TextInput
            style={{ height: 40, backgroundColor:"#FFF", borderColor: 'gray', borderWidth: 1, textAlign:'center', fontSize: 20 }}
            onChangeText={userEmail => setEmail(userEmail)}
            keyboardType='email-address'
          />

          <Text style={{ fontSize: 15, textAlign: 'center', marginTop: 20 }}>
            CEP
          </Text>

          <TextInput
            style={{ height: 40, backgroundColor:"#FFF", borderColor: 'gray', borderWidth: 1, textAlign:'center', fontSize: 20 }}
            onChangeText={userCep => setEmail(userCep)}
            keyboardType='number-pad'
          />
        </View>

        <View style={{marginTop : 30, width: '90%'}}>
          <Button
            onPress={() => { Alert.alert('Dados Gravados com Sucesso!') }}
            title="Gravar"
            color="#841584"
            accessibilityLabel="Gravar eu email e alcance dos anuncios"
          />
        </View>
      </View>
      {/* </Card> */}
    </View>
  );
}

