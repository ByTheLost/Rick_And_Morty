import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.';
import axios from 'axios';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail';
import NotFound from './components/NotFound';

// Antigua
// const URL_BASE = 'https://rickandmortyapi.com/api/character/';
// const API_KEY = '373a712eb6cf.c55d560296bcfb1b20a3';

// Actual
const URL_BASE = 'https://be-a-rym.up.railway.app/api/character/';
const API_KEY = '373a712eb6cf.c55d560296bcfb1b20a3';

function App() {

   const [characters, setCharacters] = useState([]);
   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };
   // character.id !== Number(id)
   // console.log(character.id, Number(id))
   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== id);
      setCharacters(charactersFiltered);
   };

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/detail/:id' element={<Detail />}/>
            <Route path='*' element={<NotFound />}/>
         </Routes>
      </div>
   );
}

export default App;
