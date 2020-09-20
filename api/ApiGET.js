import { useEffect, useState } from 'react';
import Api from './Api';

function ApiGET({endPoint}) {

  const [dados, setDados] = useState([]);
  
  useEffect(() => {
    console.log('====================== USE EFFECT ==========================')
    console.log(endPoint);
    // getPublicacoes();
    getPublicacoesFromAPI(endPoint);
  }, [])

  // const getPublicacoes = async() => {
  //   const response = await Api.get('publicacoes/proximas');
  //   console.log(response.data);
  // }

  function getPublicacoesFromAPI(endPoint){
    
    console.log(endPoint);
    
    // Api.get('publicacoes/proximas')
    Api.get(endPoint)
      .then(function(response){
        console.log(response.data);
        setDados(response.data);
      })
      .catch(function(error){
        console.log(error);
      });
  }

  return (dados);
}

export { ApiGET };