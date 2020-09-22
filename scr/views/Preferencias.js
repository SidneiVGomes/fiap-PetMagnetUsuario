import React, { useState } from 'react';
import { Text, View, TextInput, Alert, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import Api from '../../api/Api';

export default function Preferencias() {

  const [userEmail, setEmail] = useState(null);
  const [userCep, setCEP] = useState(null);
  const [userAlcance, setAlcance] = useState(0);
  
  function enviarForm() {

    const registrarUserAPI = async () => {
      let response = await Api.post('usuarios/registrar?eMail=' + userEmail + '&CEP=' + userCep + '&alcanceKM=' + userAlcance);

      let jsonUsuario = await response.data;

      if (json == 'error') {
        console.log(error);
      } else {
        await AsyncStorage.setItem('userRegistro', JSON.stringify(jsonUsuario));
      }
    }

    registrarUserAPI();
  }

  return (
    <KeyboardAvoidingView>
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
            style={{ height: 40, backgroundColor: "#FFF", borderColor: 'gray', borderWidth: 1, textAlign: 'center', fontSize: 20 }}
            onChangeText={userEmail => setEmail(userEmail)}
            keyboardType='email-address'
          />

          <Text style={{ fontSize: 15, textAlign: 'center', marginTop: 20 }}>
            CEP
          </Text>

          <TextInput
            style={{ height: 40, backgroundColor: "#FFF", borderColor: 'gray', borderWidth: 1, textAlign: 'center', fontSize: 20 }}
            onChangeText={userCep => setCEP(userCep)}
            keyboardType='number-pad'
            placeholder="99999-999"
          />

          <Text style={{ fontSize: 15, textAlign: 'center', marginTop: 20 }}>
            Você deseja ver anúncios de Estabelecimentos que estão até quanto de distância?
          </Text>

          <TextInput
            style={{ height: 40, backgroundColor: "#FFF", borderColor: 'gray', borderWidth: 1, textAlign: 'center', fontSize: 20 }}
            onChangeText={userAlcance => setAlcance(userAlcance)}
            keyboardType='number-pad'
            placeholder="KM"
          />

        </View>

        <View style={{ marginTop: 30, width: '90%' }}>
          <Button
            onPress={() => { enviarForm() }}
            title="Gravar"
            color="#841584"
            accessibilityLabel="Gravar eu email e alcance dos anuncios"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

