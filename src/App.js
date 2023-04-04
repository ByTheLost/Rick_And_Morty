import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';

function App() {

   const [characters, setCharacters] = useState([]);
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id));
      setCharacters(charactersFiltered);
   };

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
