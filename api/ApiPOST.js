import { useEffect, useState } from 'react';
import Api from './Api';

function ApiPOST({endPoint}) {

  const [dados, setDados] = useState([]);
  
  useEffect(() => {
    console.log('====================== USE EFFECT ApiPOST ==========================')
    console.log(endPoint);

    postToAPI(endPoint);
  }, [])

  function postToAPI(endPoint){
    console.log(endPoint);
    
    Api.post(endPoint)
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

export { ApiPOST };