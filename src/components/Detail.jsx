import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character/';
const API_KEY = '373a712eb6cf.c55d560296bcfb1b20a3';

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