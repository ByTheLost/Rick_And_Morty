import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

const URL_BASE = 'https://rickandmortyapi.com/api/character/';
const API_KEY = '921c53ed19ee.c07a3c34e20b05d4765f';

function Detail() {

  const [character, setCharacter] = useState({});
  const { id } = useParams()

  useEffect(() => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div>
          <h4>Name | {character?.name}</h4>
          <h4>Status | {character?.status}</h4>
          <h4>Species | {character?.species}</h4>
          <h4>Gender | {character?.gender}</h4>
          <h4>Origin | {character?.origin?.name}</h4>
          <img src={character?.image} alt={character?.name} />
    </div>
  )
}

export default Detail